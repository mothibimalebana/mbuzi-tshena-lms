from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from fastapi import Response
from app.database import get_db
from app.models import User, UserRole
from app.schemas import (
    Token, UserLogin, AdminLogin, UserRegister, UserOut, Message
)
from app.auth import (
    authenticate_user,
    create_access_token,
    get_password_hash,
    get_user_by_email,
    get_user_by_id_number,
    get_current_user,
)
from app.config import settings

router = APIRouter(prefix="/api/auth", tags=["Authentication"])


@router.post("/register", response_model=UserOut, status_code=status.HTTP_201_CREATED)
def register(user_in: UserRegister, db: Session = Depends(get_db)):
    if get_user_by_email(db, user_in.email):
        raise HTTPException(status_code=400, detail="Email already registered")
    if get_user_by_id_number(db, user_in.id_number):
        raise HTTPException(status_code=400, detail="ID number already registered")

    user = User(
        email=user_in.email.lower(),
        hashed_password=get_password_hash(user_in.password),
        full_name=user_in.full_name,
        id_number=user_in.id_number,
        phone_number=user_in.phone_number,
        role=UserRole.BORROWER,
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


@router.post("/login", response_model=Token)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    """
    OAuth2 compatible login. Use username field for email OR ID number.
    Also accepts JSON body via /login/json.
    """
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email/ID or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token(
        data={"sub": user.email, "role": user.role.value},
        expires_delta=timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES),
    )
    return Token(access_token=access_token, user=UserOut.model_validate(user))



@router.post("/login/json", response_model=Token)
def login_json(
    credentials: UserLogin,
    response: Response,
    db: Session = Depends(get_db),
):
    user = authenticate_user(db, credentials.identifier, credentials.password)

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email/ID or password",
        )

    if user.role.value is "admin":
        raise HTTPException(
            status_code = status.HTTP_401_UNAUTHORIZED,
            detail ="Incorrect Email/ID or Password."
        )

    access_token = create_access_token(
        data={
            "sub": user.email,
            "role": user.role.value,
        },
        expires_delta=timedelta(
            minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES
        ),
    )

    response.set_cookie(
        key="access_token",
        value=access_token,
        httponly=True,
        secure=True,          # False only during local HTTP development
        samesite="none",      # "lax" if frontend/backend share the same site
        max_age=settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60,
        expires=settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60,
        path="/",
    )

    return Token(
        access_token=access_token,
        user=UserOut.model_validate(user),
    )


@router.post("/admin/login", response_model=Token)
def admin_login(credentials: AdminLogin, response: Response, db: Session = Depends(get_db)):
    user = authenticate_user(db, credentials.email, credentials.password)
    if not user or user.role != UserRole.ADMIN:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect Email or Password.",
        )
    access_token = create_access_token(
        data={"sub": user.email, "role": user.role.value},
        expires_delta=timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES),
    )

    response.set_cookie(
        key="access_token",
        value=access_token,
        httponly=True,
        secure=True,          # False only during local HTTP development
        samesite="none",      # "lax" if frontend/backend share the same site
        max_age=settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60,
        expires=settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60,
        path="/",
    )

    return Token(access_token=access_token, user=UserOut.model_validate(user))


@router.get("/me", response_model=UserOut)
def me(current_user: User = Depends(get_current_user)):
    return current_user





@router.post("/logout", status_code=status.HTTP_200_OK)
def logout(response: Response):
    response.delete_cookie(
        key="access_token",
        path="/",
        httponly=True,
        secure=True,      # False for local HTTP development
        samesite="none",  # "lax" if not cross-site
    )

    return {
        "message": "Logged out successfully"
    }