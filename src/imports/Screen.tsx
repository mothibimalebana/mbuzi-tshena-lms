import clsx from "clsx";
import svgPaths from "./svg-69azdd1mpv";
import imgDivCard from "figma:asset/47a2661e5b7ea7dda2b075b5e1be361cc27058b3.png";
import imgDivCard1 from "figma:asset/e9b8a17b8071d25ec8879d2894f560c5508f5304.png";
import imgDivCard2 from "figma:asset/66a4aafca0820a68a19890f1b6ebc51bfe4c4207.png";
import imgDivCard3 from "figma:asset/baebe680d52097293a7701d88c366aeff199be79.png";
import imgDivCard4 from "figma:asset/da4b47991ec8ec087741129a7bcbd3c2311a0721.png";
import imgDivCard5 from "figma:asset/9be9dfb281e818551ba9ce8cb3d3be30b0896d50.png";
import imgImageNbdCoblImageshadow from "figma:asset/d5bf8c638d6056cfa0843383ea9e273126d2e2bb.png";
import imgImageNbdCoblImageshadow1 from "figma:asset/810aad276f9ddd27eeef9ff525c054d9d50fcd98.png";
import imgFigureCdqElement4 from "figma:asset/829e312d5cf9c7818732dfb42985d66c55dcc297.png";

function Wrapper10({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" } as React.CSSProperties} className="absolute flex h-[82px] items-center justify-center left-[254.75px] top-[39px] w-[80px]">
      <div className="-rotate-90 flex-none">{children}</div>
    </div>
  );
}
type Wrapper9Props = {
  additionalClassNames?: string;
};

function Wrapper9({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper9Props>) {
  return (
    <div style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties} className={clsx("absolute flex items-center justify-center top-[20px]", additionalClassNames)}>
      <div className="flex-none rotate-90">{children}</div>
    </div>
  );
}

function DivCardBody({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[355px] relative rounded-bl-[6px] rounded-br-[6px] shrink-0 w-[383px]">
      <div aria-hidden="true" className="absolute border-[#e5edec] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[6px] rounded-br-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function DivCardHeader({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[95px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-[383px]">
      <div aria-hidden="true" className="absolute border-[#e5edec] border-l border-r border-solid border-t inset-0 pointer-events-none rounded-tl-[6px] rounded-tr-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type DivRowProps = {
  additionalClassNames?: string;
};

function DivRow({ children, additionalClassNames = "" }: React.PropsWithChildren<DivRowProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">{children}</div>
    </div>
  );
}

function Wrapper8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[1.98%_0.04%_0.06%_2.01%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.0204 47.0204">
        {children}
      </svg>
    </div>
  );
}

function Wrapper7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className="flex flex-col justify-center relative shrink-0">
      <p className="leading-[28px]">{children}</p>
    </div>
  );
}
type Wrapper6Props = {
  additionalClassNames?: string;
};

function Wrapper6({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper6Props>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("-translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] text-[#494f50] text-[14px] whitespace-nowrap", additionalClassNames)}>
      <p className="leading-[22px]">{children}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, children, additionalClassNames = "" }: React.PropsWithChildren<Text1Props>) {
  return (
    <div className={clsx("content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] relative size-full whitespace-nowrap", additionalClassNames)}>
      <Wrapper5>{text}</Wrapper5>
      <div className="flex flex-col justify-center relative shrink-0 text-[#94999c] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p>{children}</p>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text, children }: React.PropsWithChildren<TextProps>) {
  return (
    <DivNbdArticlePostCardInfo>
      <Wrapper5>{text}</Wrapper5>
      <div className="flex flex-col justify-center relative shrink-0 text-[#94999c] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p>{children}</p>
      </div>
    </DivNbdArticlePostCardInfo>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className="flex flex-col justify-center relative shrink-0 text-[#494f50] text-[14px]">
      <p className="leading-[22px]">{children}</p>
    </div>
  );
}

function DivNbdArticlePostCardInfo({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[42px] left-[32px] top-[236px] w-[326px]">
      <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] pb-[6820px] relative size-full whitespace-nowrap">{children}</div>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className="flex flex-col justify-center relative shrink-0">
      <p className="leading-[20px]">{children}</p>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("-translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] text-[12px] top-[9.5px] whitespace-nowrap", additionalClassNames)}>
      <p className="leading-[20px]">{children}</p>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("-translate-y-1/2 absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] text-[18px] whitespace-nowrap", additionalClassNames)}>
      <p className="leading-[26px]">{children}</p>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[55px] opacity-87 relative shrink-0 w-[303.25px]">
      <div aria-hidden="true" className="absolute border-[#a3a3a3] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type DivCard1Props = {
  additionalClassNames?: string;
};

function DivCard1({ children, additionalClassNames = "" }: React.PropsWithChildren<DivCard1Props>) {
  return (
    <div className={clsx("bg-white relative rounded-[6px] shrink-0 w-[383px]", additionalClassNames)}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3270px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function DivCard({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[450px] relative rounded-[6px] shrink-0 w-[383px]">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3960px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type DivColMdTextProps = {
  text: string;
};

function DivColMdText({ text }: DivColMdTextProps) {
  return (
    <Wrapper additionalClassNames="h-[86px] w-[303.75px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[#17252e] text-[17.3px] top-[72.5px] whitespace-nowrap">
        <p className="leading-[26px]">{text}</p>
      </div>
    </Wrapper>
  );
}

function CardsFeatureBenefit() {
  return (
    <div className="absolute contents inset-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 80">
        <g id="Feature/benefit-card-desktop">
          <path clipRule="evenodd" d={svgPaths.p2be13bf0} fill="var(--fill-0, #F9FBFB)" fillRule="evenodd" id="Path-5" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tooltip-icon:-on/off">
          <path d={svgPaths.pe971d60} fill="var(--fill-0, #17252E)" id="colour" />
        </g>
      </svg>
    </div>
  );
}

function DivCol() {
  return (
    <div className="h-[55px] opacity-87 relative shrink-0 w-[303.25px]">
      <div aria-hidden="true" className="absolute border-[#a3a3a3] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}
type DivColText1Props = {
  text: string;
};

function DivColText1({ text }: DivColText1Props) {
  return (
    <Wrapper1>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#494f50] text-[16px] top-[27px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">{text}</p>
      </div>
    </Wrapper1>
  );
}
type DivColTextProps = {
  text: string;
};

function DivColText({ text }: DivColTextProps) {
  return (
    <Wrapper1>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[#494f50] text-[15.9px] top-[26.5px] whitespace-nowrap">
        <p className="leading-[24px]">{text}</p>
      </div>
    </Wrapper1>
  );
}

function Helper() {
  return <Wrapper2 additionalClassNames="left-0 text-[#008533] top-[13px]">{`Read `}</Wrapper2>;
}

function Thin0026TimeWatchClock() {
  return (
    <div className="absolute inset-[7.14%]">
      <div className="absolute inset-[-1.07%_-1.05%_-0.33%_-1.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2519 12.1681">
          <g id="thin-0026_time_watch_clock">
            <g id="Rectangle-path" />
            <g id="Group">
              <path d={svgPaths.p36b6a000} id="Shape" stroke="var(--stroke-0, #8C9596)" />
              <path d={svgPaths.p2e3d1c72} id="Oval" stroke="var(--stroke-0, #8C9596)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function RightArrowGreen() {
  return (
    <div className="absolute inset-[7.1%_4.44%_7.1%_4.51%]">
      <div className="absolute inset-[-4.36%_-5.13%_-4.36%_-3.58%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.7654 13.0579">
          <g id="right-arrow-green">
            <path d={svgPaths.p27d1b880} id="Rectangle-7" stroke="var(--stroke-0, #008533)" strokeWidth="1.5" />
            <path d="M20.7153 6.52897H0.75" id="Line-2" stroke="var(--stroke-0, #008533)" strokeLinecap="square" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Screen() {
  return (
    <div className="relative size-full" data-name="Screen">
      <div className="absolute bg-white h-[7872px] left-0 top-0 w-[1425px]" data-name="Body [page]">
        <div className="absolute bg-[#17252e] h-[106px] left-0 top-[794px] w-[1425px]" data-name="Div [alert]">
          <div className="absolute content-stretch flex gap-[270px] h-[68px] items-start left-[18px] top-[19px] w-[1104px]" data-name="Div [row]">
            <Wrapper additionalClassNames="h-[68px] w-[926px]">
              <div className="absolute h-[56px] leading-[0] left-[63px] not-italic top-0 w-[848px] whitespace-nowrap" data-name="Div [cmp-text]">
                <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-[123.83px] text-[19.5px] text-white top-[41.5px]">
                  <p className="leading-[28px]">.</p>
                </div>
                <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center left-[65.66px] text-[#008533] text-[14.3px] top-[43px]">
                  <p className="decoration-solid leading-[24px] underline">settings</p>
                </div>
                <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-0 text-[19.5px] text-white top-[41.5px]">
                  <p className="leading-[28px]">{`cookie `}</p>
                </div>
                <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-0 text-[19.5px] text-white top-[13.5px]">
                  <p className="leading-[28px]">{`We use cookies to improve your experience. This is how you can manage your `}</p>
                </div>
              </div>
              <div className="absolute h-[23.3px] left-[15px] overflow-clip top-[16.35px] w-[24px]" data-name="Image [cookie-img]">
                <div className="absolute contents inset-[0.26%_3.84%_4.01%_2.94%]" data-name="Page-2">
                  <div className="absolute contents inset-[0.26%_3.84%_4.01%_2.94%]" data-name="Change-banner---Go-back---Desktop---01-A">
                    <div className="absolute inset-[0.26%_3.84%_4.01%_2.94%]" data-name="cookies">
                      <div className="absolute inset-[0_-2.23%_-2.24%_-2.23%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3718 22.8046">
                          <g id="cookies">
                            <path clipRule="evenodd" d={svgPaths.p60ace80} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-1" stroke="var(--stroke-0, #17252E)" />
                            <path clipRule="evenodd" d={svgPaths.p3cc01970} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-4" />
                            <path clipRule="evenodd" d={svgPaths.pf37baf0} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-6" />
                            <path clipRule="evenodd" d={svgPaths.p24360f00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-8" />
                            <path clipRule="evenodd" d={svgPaths.p1b167cf0} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-10" />
                            <path clipRule="evenodd" d={svgPaths.p685a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-12" />
                            <path clipRule="evenodd" d={svgPaths.p16a5c680} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-14" />
                            <path clipRule="evenodd" d={svgPaths.paba8c00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-17" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Wrapper>
            <div className="bg-[#008533] h-[40px] relative rounded-[6px] shrink-0 w-[178px]" data-name="Button [btn]">
              <div aria-hidden="true" className="absolute border border-[#008533] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[77.27px] not-italic text-[14.1px] text-white top-[22px] whitespace-nowrap">
                  <p className="leading-[26px]">Ok</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[7289px] items-start left-0 top-0 w-[1425px]" data-name="Div [root]">
          <div className="bg-white h-[128px] relative shrink-0 w-[1425px]" data-name="Nav [stickyheader]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
              <Wrapper additionalClassNames="bg-[#f2f9f5] h-[64px] w-[1425px]">
                <div className="absolute bg-[#f2f9f5] h-[64px] left-0 top-0 w-[1425px]" data-name="Div [navwrapper]">
                  <div className="absolute bg-[#006341] left-[1361px] shadow-[0px_0px_0px_0px_white,0px_0px_0px_0px_white] size-[64px] top-0" data-name="Span [menublock]">
                    <div className="absolute bg-white h-[2px] left-[24px] top-[28px] w-[30px]" data-name="Span [hamburger]">
                      <div className="absolute bg-white h-[2px] left-[9px] top-[10px] w-[21px]" data-name="Div" />
                      <div className="absolute bg-white h-[2px] left-[-9px] top-[-10px] w-[39px]" data-name="Div" />
                    </div>
                  </div>
                  <div className="absolute h-[24px] left-[1166px] top-[20px] w-[155.01px]" data-name="List [navbar-nav]">
                    <div className="content-stretch flex gap-[20px] items-start pr-[1092.219px] relative size-full">
                      <Wrapper additionalClassNames="h-[24px] w-[81.22px]">
                        <div className="absolute h-[24px] left-[56.22px] overflow-clip top-0 w-[25px]" data-name="Image">
                          <div className="absolute contents inset-[8.33%_6%_6.18%_8%]" data-name="Nav-rework">
                            <div className="absolute contents inset-[8.33%_6%_6.18%_8%]" data-name="COZA-Personal---Nav-Rework---01">
                              <div className="absolute contents inset-[8.33%_6%_6.18%_8%]" data-name="Search">
                                <div className="absolute inset-[8.33%_6%_6.18%_8%]" data-name="search">
                                  <div className="absolute inset-[-3.66%_-2.47%_-2.58%_-3.49%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.7803 21.7971">
                                      <g id="search">
                                        <path d={svgPaths.p22abc600} id="Oval" stroke="var(--stroke-0, #004D36)" strokeWidth="1.5" />
                                        <path d={svgPaths.p3be72480} id="Shape" stroke="var(--stroke-0, #004D36)" strokeWidth="1.5" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[#17252e] text-[13.6px] top-[10.5px] whitespace-nowrap">
                          <p className="leading-[22px]">Search</p>
                        </div>
                      </Wrapper>
                      <Wrapper additionalClassNames="h-[24px] w-[73.79px]">
                        <div className="absolute left-[49.78px] overflow-clip size-[24px] top-0" data-name="Image">
                          <div className="absolute contents inset-[8.33%_20.41%_8.33%_20.83%]" data-name="Nav-rework">
                            <div className="absolute contents inset-[8.33%_20.41%_8.33%_20.83%]" data-name="COZA-Personal---Nav-Rework---01">
                              <div className="absolute contents inset-[8.33%_20.41%_8.33%_20.83%]" data-name="Sign-in">
                                <div className="absolute inset-[8.33%_20.41%_8.33%_20.83%]" data-name="lock">
                                  <div className="absolute inset-[-3.75%_-5.32%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6018 21.5">
                                      <g id="lock">
                                        <path clipRule="evenodd" d={svgPaths.p279e5080} fillRule="evenodd" id="Shape" stroke="var(--stroke-0, #004D36)" strokeWidth="1.5" />
                                        <path d={svgPaths.p23c64100} id="Shape_2" stroke="var(--stroke-0, #004D36)" strokeWidth="1.5" />
                                        <path d="M7.79954 14.4747V16.5218" id="Shape_3" stroke="var(--stroke-0, #004D36)" strokeWidth="1.5" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[#17252e] text-[13.6px] top-[10.5px] whitespace-nowrap">
                          <p className="leading-[22px]">Log in</p>
                        </div>
                      </Wrapper>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex font-['Inter:Bold',sans-serif] font-bold gap-[22px] h-[34px] items-start leading-[0] left-0 not-italic pb-[6.5px] pl-[160px] pt-[5.5px] text-[13.7px] top-[15px] w-[328px] whitespace-nowrap" data-name="List [navbar-nav]">
                    <div className="flex flex-col justify-center relative shrink-0 text-[#008533]">
                      <p className="leading-[22px]">Personal</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0 text-[#17252e]">
                      <p className="leading-[22px]">Private</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0 text-[#17252e]">
                      <p className="leading-[22px]">Wealth</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0 text-[#17252e]">
                      <p className="leading-[22px]">Business</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0 text-[#17252e]">
                      <p className="leading-[22px]">Corporate</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0 text-[#17252e]">
                      <p className="leading-[22px]">Group</p>
                    </div>
                  </div>
                  <div className="absolute left-[91px] overflow-clip size-[38px] top-[13px]" data-name="Image">
                    <div className="absolute contents inset-[1.92%_2.84%_2.85%_1.7%]" data-name="Mobile">
                      <div className="absolute contents inset-[1.92%_2.84%_2.85%_1.7%]" data-name="Main-Navigation---Mobile---01">
                        <div className="absolute contents inset-[1.92%_2.84%_2.85%_1.7%]" data-name="Nedbank-logo/80px">
                          <div className="absolute inset-[1.92%_2.84%_2.85%_1.7%]" data-name="Group">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.2722 36.1896">
                              <g id="Group">
                                <path clipRule="evenodd" d={svgPaths.p26012200} fill="var(--fill-0, #006341)" fillRule="evenodd" id="Path-2" />
                                <g id="Nedbank-logo-new-Copy-10">
                                  <path clipRule="evenodd" d={svgPaths.p707fb80} fill="var(--fill-0, white)" fillRule="evenodd" id="Combined-Shape" />
                                  <path clipRule="evenodd" d={svgPaths.p3e75d800} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-14" />
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Wrapper>
              <div className="bg-white h-[64px] relative shadow-[0px_6px_8px_0px_rgba(23,37,46,0.05)] shrink-0 w-[1425px]" data-name="Div [navbarSupportedContent]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                  <div className="absolute content-stretch flex gap-[24px] h-[64px] items-start left-[160px] pr-[54.141px] top-0 w-[614.73px]" data-name="List [navbar-nav]">
                    <Wrapper additionalClassNames="h-[64px] w-[54.79px]">
                      <div className="absolute border-[#17252e] border-l-4 border-r-4 border-solid border-t-4 h-[4px] left-[46.78px] opacity-40 top-[30px] w-[8px]" data-name="Div" />
                      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[#17252e] text-[15.1px] top-[31.5px] whitespace-nowrap">
                        <p className="leading-[24px]">{`Bank `}</p>
                      </div>
                    </Wrapper>
                    <Wrapper additionalClassNames="h-[64px] w-[118.47px]">
                      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[#17252e] text-[15.1px] top-[31.5px] whitespace-nowrap">
                        <p className="leading-[24px]">{`Save & Invest `}</p>
                      </div>
                      <div className="absolute border-[#17252e] border-l-4 border-r-4 border-solid border-t-4 h-[4px] left-[94.47px] opacity-40 top-[30px] w-[8px]" data-name="Div" />
                    </Wrapper>
                    <Wrapper additionalClassNames="h-[64px] w-[71.43px]">
                      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[#17252e] text-[15.1px] top-[31.5px] whitespace-nowrap">
                        <p className="leading-[24px]">{`Borrow `}</p>
                      </div>
                      <div className="absolute border-[#17252e] border-l-4 border-r-4 border-solid border-t-4 h-[4px] left-[31.42px] opacity-40 top-[30px] w-[8px]" data-name="Div" />
                      <div className="absolute bg-[#008533] h-[4px] left-0 top-[60px] w-[71.43px]" data-name="Span [nbd-nav-highlight]" />
                    </Wrapper>
                    <Wrapper additionalClassNames="h-[64px] w-[63.21px]">
                      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[#17252e] text-[15.1px] top-[31.5px] whitespace-nowrap">
                        <p className="leading-[24px]">{`Insure `}</p>
                      </div>
                      <div className="absolute border-[#17252e] border-l-4 border-r-4 border-solid border-t-4 h-[4px] left-[7.2px] opacity-40 top-[30px] w-[8px]" data-name="Div" />
                    </Wrapper>
                    <Wrapper additionalClassNames="h-[64px] w-[49.4px]">
                      <div className="absolute border-[#17252e] border-l-4 border-r-4 border-solid border-t-4 h-[4px] left-[-22.61px] opacity-40 top-[30px] w-[8px]" data-name="Div" />
                      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[#17252e] text-[15.1px] top-[31.5px] whitespace-nowrap">
                        <p className="leading-[24px]">{`Plan `}</p>
                      </div>
                    </Wrapper>
                    <Wrapper additionalClassNames="h-[64px] w-[151.57px]">
                      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[#17252e] text-[15.1px] top-[31.5px] whitespace-nowrap">
                        <p className="leading-[24px]">{`Nedbank Connect `}</p>
                      </div>
                      <div className="absolute border-[#17252e] border-l-4 border-r-4 border-solid border-t-4 h-[4px] left-[63.56px] opacity-40 top-[30px] w-[8px]" data-name="Div" />
                    </Wrapper>
                    <Wrapper additionalClassNames="h-[64px] w-[105.86px]">
                      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[#17252e] text-[15.1px] top-[31.5px] whitespace-nowrap">
                        <p className="leading-[24px]">{`Help Centre `}</p>
                      </div>
                      <div className="absolute border-[#17252e] border-l-4 border-r-4 border-solid border-t-4 h-[4px] left-[1.86px] opacity-40 top-[30px] w-[8px]" data-name="Div" />
                    </Wrapper>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Wrapper additionalClassNames="h-[7161px] w-[1425px]">
            <div className="absolute h-[911px] left-0 overflow-clip top-[6250px] w-[1425px]" data-name="Div [nbd-related-posts-wrapper]">
              <div className="absolute bg-[#fafafa] h-[831px] left-[-7.5px] top-0 w-[1440px]" data-name="Div [nbd-bg-grassgreen]">
                <div className="absolute h-[711px] left-[106px] top-0 w-[1228px]" data-name="Div [ng-container]">
                  <div className="content-stretch flex flex-col items-start pb-[5783px] relative size-full">
                    <Wrapper additionalClassNames="h-[176px] w-[1228px]">
                      <div className="absolute h-[26px] left-[1136.45px] top-[91px] w-[91.55px]" data-name="Link [nbd-see-all-articles]">
                        <div className="absolute h-[14px] left-[68.55px] top-[6px] w-[23px]" data-name="Em [tertiary-btn-icon]">
                          <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Images">
                            <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Image">
                              <div className="absolute contents inset-[7.1%_4.44%_7.1%_4.51%]" data-name="Page-1">
                                <RightArrowGreen />
                              </div>
                            </div>
                          </div>
                        </div>
                        <Wrapper2 additionalClassNames="left-0 text-[#008533] top-[13px]">{`See all `}</Wrapper2>
                      </div>
                      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[#212529] text-[0px] top-[99.5px] whitespace-nowrap">
                        <p>
                          <span className="leading-[40px] text-[30.9px]">{`Learn more `}</span>
                          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[40px] not-italic text-[#212529] text-[30.6px]">about bank loans</span>
                        </p>
                      </div>
                    </Wrapper>
                    <div className="h-[535px] relative shrink-0 w-[1228px]" data-name="Div [swiper-container]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[60px] items-start pb-[6519px] relative size-full">
                        <div className="h-[500px] relative shrink-0 w-[3573px]" data-name="Div [swiper-wrapper-ab22372b57461b7e2]">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[37px] items-start relative size-full">
                            <div className="h-[500px] relative shrink-0 w-[595.5px]" data-name="Div [card]">
                              <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
                                <div className="absolute bg-clip-padding bg-white border-0 border-[transparent] border-solid inset-0" />
                                <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgDivCard} />
                              </div>
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <div className="absolute bg-white h-[400px] left-[24px] top-[50px] w-[390px]" data-name="Div [nbd-article-post-card-body]">
                                  <div className="absolute h-[27px] left-[17px] top-[341px] w-[356px]" data-name="Div [nbd-article-post-card-Link]">
                                    <div className="absolute h-[20px] left-[283.73px] top-[5px] w-[56.27px]" data-name="Span">
                                      <Wrapper3 additionalClassNames="left-[19px] text-[#94999c]">3 mins</Wrapper3>
                                      <div className="absolute left-0 size-[14px] top-px" data-name="I [nbd-icon-watch-clock]">
                                        <div className="absolute left-0 overflow-clip size-[14px] top-0" data-name="Background Images">
                                          <div className="absolute left-0 overflow-clip size-[14px] top-0" data-name="Background Image">
                                            <div className="absolute contents inset-[7.14%]" data-name="Article-page">
                                              <div className="absolute contents inset-[7.14%]" data-name="Article-header---Title-on-image-(white-text)">
                                                <Thin0026TimeWatchClock />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute h-[26px] left-[15px] top-0 w-[75.29px]" data-name="Link [stretched-link]">
                                      <div className="absolute h-[14px] left-[52.28px] top-[5px] w-[23px]" data-name="Em [tertiary-btn-icon]">
                                        <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Images">
                                          <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Image">
                                            <div className="absolute contents inset-[7.1%_4.44%_7.1%_4.51%]" data-name="Page-1">
                                              <RightArrowGreen />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <Helper />
                                    </div>
                                  </div>
                                  <Text text="By Staff writer">
                                    <span className="leading-[20px]">{`Published 06 Nov 2025 in `}</span>
                                    <span className="capitalize leading-[20px] text-[#94999c]">loans</span>
                                  </Text>
                                  <div className="absolute h-[84px] left-[32px] top-[128px] w-[326px]" data-name="Paragraph [line-clamp]">
                                    <div className="overflow-clip rounded-[inherit] size-full">
                                      <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] pb-[6704px] pr-[10px] relative size-full text-[#494f50] text-[20px] whitespace-nowrap">
                                        <Wrapper7>{`Digital when you want it, human `}</Wrapper7>
                                        <Wrapper7>{`when you need it: apply for a loan `}</Wrapper7>
                                        <Wrapper7>the way you prefer.</Wrapper7>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute h-[64px] left-[32px] top-[40px] w-[326px]" data-name="H4">
                                    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold items-start leading-[0] not-italic pb-[6612px] pr-[0.813px] relative size-full text-[#17252e] text-[23.4px] whitespace-nowrap">
                                      <div className="flex flex-col justify-center relative shrink-0">
                                        <p className="leading-[32px]">{`Applying for a personal loan: `}</p>
                                      </div>
                                      <div className="flex flex-col justify-center relative shrink-0">
                                        <p className="leading-[32px]">Online or in-branch?</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-[500px] relative shrink-0 w-[595.5px]" data-name="Div [card]">
                              <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
                                <div className="absolute bg-clip-padding bg-white border-0 border-[transparent] border-solid inset-0" />
                                <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgDivCard1} />
                              </div>
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <div className="absolute bg-white h-[400px] left-[24px] top-[50px] w-[390px]" data-name="Div [nbd-article-post-card-body]">
                                  <div className="absolute h-[27px] left-[17px] top-[341px] w-[356px]" data-name="Div [nbd-article-post-card-Link]">
                                    <div className="absolute h-[20px] left-[283.73px] top-[5px] w-[56.27px]" data-name="Span">
                                      <Wrapper3 additionalClassNames="left-[19px] text-[#94999c]">4 mins</Wrapper3>
                                      <div className="absolute left-0 size-[14px] top-px" data-name="I [nbd-icon-watch-clock]">
                                        <div className="absolute left-0 overflow-clip size-[14px] top-0" data-name="Background Images">
                                          <div className="absolute left-0 overflow-clip size-[14px] top-0" data-name="Background Image">
                                            <div className="absolute contents inset-[7.14%]" data-name="Article-page">
                                              <div className="absolute contents inset-[7.14%]" data-name="Article-header---Title-on-image-(white-text)">
                                                <Thin0026TimeWatchClock />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute h-[26px] left-[15px] top-0 w-[75.29px]" data-name="Link [stretched-link]">
                                      <div className="absolute h-[14px] left-[52.28px] top-[5px] w-[23px]" data-name="Em [tertiary-btn-icon]">
                                        <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Images">
                                          <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Image">
                                            <div className="absolute contents inset-[7.1%_4.44%_7.1%_4.51%]" data-name="Page-1">
                                              <RightArrowGreen />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <Helper />
                                    </div>
                                  </div>
                                  <div className="absolute h-[42px] left-[32px] top-[208px] w-[326px]" data-name="Div [nbd-article-post-card-info]">
                                    <Text1 text="By Staff writer" additionalClassNames="pb-[6792px]">
                                      <span className="leading-[20px]">{`Published 30 Oct 2025 in `}</span>
                                      <span className="capitalize leading-[20px] text-[#94999c]">loans</span>
                                    </Text1>
                                  </div>
                                  <div className="absolute h-[56px] left-[32px] top-[128px] w-[326px]" data-name="Paragraph [line-clamp]">
                                    <div className="overflow-clip rounded-[inherit] size-full">
                                      <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] pb-[6704px] pr-[11.188px] relative size-full text-[#494f50] text-[20px] whitespace-nowrap">
                                        <Wrapper7>{`A personal loan can support your `}</Wrapper7>
                                        <Wrapper7>life goals, if managed responsibly.</Wrapper7>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute h-[64px] left-[32px] top-[40px] w-[326px]" data-name="H4">
                                    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold items-start leading-[0] not-italic pb-[6612px] pr-[51.813px] relative size-full text-[#17252e] text-[23.4px] whitespace-nowrap">
                                      <div className="flex flex-col justify-center relative shrink-0">
                                        <p className="leading-[32px]">{`Can a personal loan be a `}</p>
                                      </div>
                                      <div className="flex flex-col justify-center relative shrink-0">
                                        <p className="leading-[32px]">better money choice?</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-[500px] relative shrink-0 w-[595.5px]" data-name="Div [card]">
                              <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
                                <div className="absolute bg-clip-padding bg-white border-0 border-[transparent] border-solid inset-0" />
                                <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgDivCard2} />
                              </div>
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <div className="absolute bg-white h-[400px] left-[24px] top-[50px] w-[390px]" data-name="Div [nbd-article-post-card-body]">
                                  <div className="absolute h-[27px] left-[17px] top-[341px] w-[356px]" data-name="Div [nbd-article-post-card-Link]">
                                    <div className="absolute h-[20px] left-[283.73px] top-[5px] w-[56.27px]" data-name="Span">
                                      <Wrapper3 additionalClassNames="left-[19px] text-[#94999c]">4 mins</Wrapper3>
                                      <div className="absolute left-0 size-[14px] top-px" data-name="I [nbd-icon-watch-clock]">
                                        <div className="absolute left-0 overflow-clip size-[14px] top-0" data-name="Background Images">
                                          <div className="absolute left-0 overflow-clip size-[14px] top-0" data-name="Background Image">
                                            <div className="absolute contents inset-[7.14%]" data-name="Article-page">
                                              <div className="absolute contents inset-[7.14%]" data-name="Article-header---Title-on-image-(white-text)">
                                                <Thin0026TimeWatchClock />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute h-[26px] left-[15px] top-0 w-[75.29px]" data-name="Link [stretched-link]">
                                      <div className="absolute h-[14px] left-[52.28px] top-[5px] w-[23px]" data-name="Em [tertiary-btn-icon]">
                                        <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Images">
                                          <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Image">
                                            <div className="absolute contents inset-[7.1%_4.44%_7.1%_4.51%]" data-name="Page-1">
                                              <RightArrowGreen />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <Helper />
                                    </div>
                                  </div>
                                  <Text text="By Staff writer">
                                    <span className="leading-[20px]">{`Published 29 Aug 2024 in `}</span>
                                    <span className="capitalize leading-[20px] text-[#94999c]">loans</span>
                                  </Text>
                                  <div className="absolute h-[84px] left-[32px] top-[128px] w-[326px]" data-name="Paragraph [line-clamp]">
                                    <div className="overflow-clip rounded-[inherit] size-full">
                                      <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] pb-[6704px] pr-[20.422px] relative size-full text-[#494f50] text-[20px] whitespace-nowrap">
                                        <Wrapper7>{`Borrow responsibly, get a R200 a `}</Wrapper7>
                                        <Wrapper7>{`month cash back, plus digital `}</Wrapper7>
                                        <Wrapper7>banking benefits.</Wrapper7>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute h-[64px] left-[32px] top-[40px] w-[326px]" data-name="H4">
                                    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold items-start leading-[0] not-italic pb-[6612px] pr-[39.672px] relative size-full text-[#17252e] text-[23.4px] whitespace-nowrap">
                                      <div className="flex flex-col justify-center relative shrink-0">
                                        <p className="leading-[32px]">{`Why Nedbank is the best `}</p>
                                      </div>
                                      <div className="flex flex-col justify-center relative shrink-0">
                                        <p className="leading-[32px]">bank for a personal loan</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-[500px] relative shrink-0 w-[595.5px]" data-name="Div [card]">
                              <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
                                <div className="absolute bg-clip-padding bg-white border-0 border-[transparent] border-solid inset-0" />
                                <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgDivCard3} />
                              </div>
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <div className="absolute bg-white h-[400px] left-[24px] top-[50px] w-[390px]" data-name="Div [nbd-article-post-card-body]">
                                  <div className="absolute h-[27px] left-[17px] top-[341px] w-[356px]" data-name="Div [nbd-article-post-card-Link]">
                                    <div className="absolute h-[20px] left-[283.73px] top-[5px] w-[56.27px]" data-name="Span">
                                      <Wrapper3 additionalClassNames="left-[19px] text-[#94999c]">3 mins</Wrapper3>
                                      <div className="absolute left-0 size-[14px] top-px" data-name="I [nbd-icon-watch-clock]">
                                        <div className="absolute left-0 overflow-clip size-[14px] top-0" data-name="Background Images">
                                          <div className="absolute left-0 overflow-clip size-[14px] top-0" data-name="Background Image">
                                            <div className="absolute contents inset-[7.14%]" data-name="Article-page">
                                              <div className="absolute contents inset-[7.14%]" data-name="Article-header---Title-on-image-(white-text)">
                                                <Thin0026TimeWatchClock />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute h-[26px] left-[15px] top-0 w-[75.29px]" data-name="Link [stretched-link]">
                                      <div className="absolute h-[14px] left-[52.28px] top-[5px] w-[23px]" data-name="Em [tertiary-btn-icon]">
                                        <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Images">
                                          <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Image">
                                            <div className="absolute contents inset-[7.1%_4.44%_7.1%_4.51%]" data-name="Page-1">
                                              <RightArrowGreen />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <Helper />
                                    </div>
                                  </div>
                                  <Text text="By Staff writer">
                                    <span className="leading-[20px]">{`Published 25 Jul 2024 in `}</span>
                                    <span className="capitalize leading-[20px] text-[#94999c]">loans</span>
                                  </Text>
                                  <div className="absolute h-[84px] left-[32px] top-[128px] w-[326px]" data-name="Paragraph [line-clamp]">
                                    <div className="overflow-clip rounded-[inherit] size-full">
                                      <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] pb-[6704px] pr-[19.203px] relative size-full text-[#494f50] text-[20px] whitespace-nowrap">
                                        <Wrapper7>{`Here’s how we take your `}</Wrapper7>
                                        <Wrapper7>{`measurements to get the perfect `}</Wrapper7>
                                        <Wrapper7>fit.</Wrapper7>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute h-[64px] left-[32px] top-[40px] w-[326px]" data-name="H4">
                                    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold items-start leading-[0] not-italic pb-[6612px] pr-[11px] relative size-full text-[#17252e] text-[23.4px] whitespace-nowrap">
                                      <div className="flex flex-col justify-center relative shrink-0">
                                        <p className="leading-[32px]">{`How a loan is tailor-made to `}</p>
                                      </div>
                                      <div className="flex flex-col justify-center relative shrink-0">
                                        <p className="leading-[32px]">your specific needs</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-[500px] relative shrink-0 w-[595.5px]" data-name="Div [card]">
                              <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
                                <div className="absolute bg-clip-padding bg-white border-0 border-[transparent] border-solid inset-0" />
                                <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgDivCard4} />
                              </div>
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <div className="absolute bg-white h-[400px] left-[24px] top-[50px] w-[390px]" data-name="Div [nbd-article-post-card-body]">
                                  <div className="absolute h-[27px] left-[17px] top-[341px] w-[356px]" data-name="Div [nbd-article-post-card-Link]">
                                    <div className="absolute h-[20px] left-[283.73px] top-[5px] w-[56.27px]" data-name="Span">
                                      <Wrapper3 additionalClassNames="left-[19px] text-[#94999c]">3 mins</Wrapper3>
                                      <div className="absolute left-0 size-[14px] top-px" data-name="I [nbd-icon-watch-clock]">
                                        <div className="absolute left-0 overflow-clip size-[14px] top-0" data-name="Background Images">
                                          <div className="absolute left-0 overflow-clip size-[14px] top-0" data-name="Background Image">
                                            <div className="absolute contents inset-[7.14%]" data-name="Article-page">
                                              <div className="absolute contents inset-[7.14%]" data-name="Article-header---Title-on-image-(white-text)">
                                                <Thin0026TimeWatchClock />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute h-[26px] left-[15px] top-0 w-[75.29px]" data-name="Link [stretched-link]">
                                      <div className="absolute h-[14px] left-[52.28px] top-[5px] w-[23px]" data-name="Em [tertiary-btn-icon]">
                                        <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Images">
                                          <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Image">
                                            <div className="absolute contents inset-[7.1%_4.44%_7.1%_4.51%]" data-name="Page-1">
                                              <RightArrowGreen />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <Helper />
                                    </div>
                                  </div>
                                  <div className="absolute h-[42px] left-[32px] top-[268px] w-[326px]" data-name="Div [nbd-article-post-card-info]">
                                    <Text1 text="By Staff writer" additionalClassNames="pb-[6852px]">
                                      <span className="leading-[20px]">{`Published 09 Feb 2024 in `}</span>
                                      <span className="capitalize leading-[20px] text-[#94999c]">community</span>
                                    </Text1>
                                  </div>
                                  <div className="absolute h-[84px] left-[32px] top-[160px] w-[326px]" data-name="Paragraph [line-clamp]">
                                    <div className="overflow-clip rounded-[inherit] size-full">
                                      <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] pb-[6736px] pr-[5.266px] relative size-full text-[#494f50] text-[20px] whitespace-nowrap">
                                        <Wrapper7>{`If you take a personal loan, getting `}</Wrapper7>
                                        <Wrapper7>{`R200 cashback every month `}</Wrapper7>
                                        <Wrapper7>makes sense.</Wrapper7>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute h-[96px] left-[32px] top-[40px] w-[326px]" data-name="H4">
                                    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold items-start leading-[0] not-italic pb-[6612px] pr-[28.953px] relative size-full text-[#17252e] text-[23.4px] whitespace-nowrap">
                                      <div className="flex flex-col justify-center relative shrink-0">
                                        <p className="leading-[32px]">{`A personal loan that gives `}</p>
                                      </div>
                                      <div className="flex flex-col justify-center relative shrink-0">
                                        <p className="leading-[32px]">{`you R200 cashback every `}</p>
                                      </div>
                                      <div className="flex flex-col justify-center relative shrink-0">
                                        <p className="leading-[32px]">month? Score!</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-[500px] relative shrink-0 w-[595.5px]" data-name="Div [card]">
                              <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
                                <div className="absolute bg-clip-padding bg-white border-0 border-[transparent] border-solid inset-0" />
                                <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgDivCard5} />
                              </div>
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <div className="absolute bg-white h-[400px] left-[24px] top-[50px] w-[390px]" data-name="Div [nbd-article-post-card-body]">
                                  <div className="absolute h-[27px] left-[17px] top-[341px] w-[356px]" data-name="Div [nbd-article-post-card-Link]">
                                    <div className="absolute h-[20px] left-[283.73px] top-[5px] w-[56.27px]" data-name="Span">
                                      <Wrapper3 additionalClassNames="left-[19px] text-[#94999c]">3 mins</Wrapper3>
                                      <div className="absolute left-0 size-[14px] top-px" data-name="I [nbd-icon-watch-clock]">
                                        <div className="absolute left-0 overflow-clip size-[14px] top-0" data-name="Background Images">
                                          <div className="absolute left-0 overflow-clip size-[14px] top-0" data-name="Background Image">
                                            <div className="absolute contents inset-[7.14%]" data-name="Article-page">
                                              <div className="absolute contents inset-[7.14%]" data-name="Article-header---Title-on-image-(white-text)">
                                                <Thin0026TimeWatchClock />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute h-[26px] left-[15px] top-0 w-[75.29px]" data-name="Link [stretched-link]">
                                      <div className="absolute h-[14px] left-[52.28px] top-[5px] w-[23px]" data-name="Em [tertiary-btn-icon]">
                                        <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Images">
                                          <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Image">
                                            <div className="absolute contents inset-[7.1%_4.44%_7.1%_4.51%]" data-name="Page-1">
                                              <RightArrowGreen />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <Helper />
                                    </div>
                                  </div>
                                  <Text text="By Staff writer">
                                    <span className="leading-[20px]">{`Published 17 Feb 2023 in `}</span>
                                    <span className="capitalize leading-[20px] text-[#94999c]">loans</span>
                                  </Text>
                                  <div className="absolute h-[84px] left-[32px] top-[128px] w-[326px]" data-name="Paragraph [line-clamp]">
                                    <div className="overflow-clip rounded-[inherit] size-full">
                                      <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] pb-[6704px] pr-[47.703px] relative size-full text-[#494f50] text-[20px] whitespace-nowrap">
                                        <Wrapper7>{`Change the way you see debt. `}</Wrapper7>
                                        <Wrapper7>{`Managed properly, a loan can `}</Wrapper7>
                                        <Wrapper7>make your life better.</Wrapper7>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute h-[64px] left-[32px] top-[40px] w-[326px]" data-name="H4">
                                    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold items-start leading-[0] not-italic pb-[6612px] pr-[26px] relative size-full text-[#17252e] text-[23.4px] whitespace-nowrap">
                                      <div className="flex flex-col justify-center relative shrink-0">
                                        <p className="leading-[32px]">{`Real difference: how loans `}</p>
                                      </div>
                                      <div className="flex flex-col justify-center relative shrink-0">
                                        <p className="leading-[32px]">change lives</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Wrapper additionalClassNames="h-[35px] w-[1228px]">
                          <div className="absolute h-[35px] left-[1188px] top-0 w-[40px]" data-name="Span [nbd-arrow-next-right]">
                            <div className="absolute h-[35px] left-0 overflow-clip top-0 w-[40px]" data-name="Background Images">
                              <div className="absolute left-0 overflow-clip size-[48px] top-0" data-name="Background Image">
                                <div className="absolute contents inset-[1.98%_0.04%_0.06%_2.01%]" data-name="Page-1">
                                  <div className="absolute contents inset-[1.98%_0.04%_0.06%_2.01%]" data-name="How-To-page---Desktop---01">
                                    <div className="absolute contents inset-[1.98%_0.04%_0.06%_2.01%]" data-name="Group-4">
                                      <div className="absolute contents inset-[1.98%_0.04%_0.06%_2.01%]" data-name="Articles-big">
                                        <div className="absolute contents inset-[1.98%_0.04%_0.06%_2.01%]" data-name="Pagenation">
                                          <Wrapper8>
                                            <g id="thin-0160_arrow_next_right">
                                              <g id="Rectangle-path" />
                                              <g id="Group">
                                                <path d={svgPaths.p7997200} id="Shape" stroke="var(--stroke-0, #009639)" strokeWidth="1.5" />
                                                <path d="M12.1663 23.5423H34.6617" id="Shape_2" stroke="var(--stroke-0, #009639)" strokeWidth="1.5" />
                                              </g>
                                            </g>
                                          </Wrapper8>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute h-[35px] left-[1148px] top-0 w-[40px]" data-name="Span [nbd-arrow-back-left]">
                            <div className="absolute h-[35px] left-0 overflow-clip top-0 w-[40px]" data-name="Background Images">
                              <div className="absolute left-0 overflow-clip size-[48px] top-0" data-name="Background Image">
                                <div className="absolute contents inset-[1.98%_0.04%_0.06%_2.01%]" data-name="Page-1">
                                  <div className="absolute contents inset-[1.98%_0.04%_0.06%_2.01%]" data-name="How-To-page---Desktop---01">
                                    <div className="absolute contents inset-[1.98%_0.04%_0.06%_2.01%]" data-name="Group-4">
                                      <div className="absolute contents inset-[1.98%_0.04%_0.06%_2.01%]" data-name="Articles-big">
                                        <div className="absolute contents inset-[1.98%_0.04%_0.06%_2.01%]" data-name="Pagenation">
                                          <Wrapper8>
                                            <g id="thin-0159_arrow_back_left">
                                              <g id="Rectangle-path" />
                                              <g id="Group">
                                                <path d={svgPaths.p387b0d80} id="Shape" stroke="var(--stroke-0, #BBBBBB)" strokeWidth="1.5" />
                                                <path d="M34.8599 23.5423H12.3648" id="Shape_2" stroke="var(--stroke-0, #BBBBBB)" strokeWidth="1.5" />
                                              </g>
                                            </g>
                                          </Wrapper8>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute h-[35px] left-[560px] top-[14px] w-[58px]" data-name="Div [swiper-pagination]">
                            <div className="content-stretch flex gap-[10px] items-start pb-[22px] pl-[5px] pr-[650.5px] pt-[5px] relative size-full">
                              <div className="bg-[#008533] h-[8px] rounded-[35px] shrink-0 w-[26px]" data-name="Span [swiper-pagination-bullet]" />
                              <div className="bg-black opacity-20 rounded-[8px] shrink-0 size-[8px]" data-name="Span [swiper-pagination-bullet]" />
                              <div className="bg-black opacity-20 rounded-[8px] shrink-0 size-[8px]" data-name="Span [swiper-pagination-bullet]" />
                              <div className="bg-black opacity-20 rounded-[8px] shrink-0 size-[8px]" data-name="Span [swiper-pagination-bullet]" />
                              <div className="bg-black opacity-20 rounded-[8px] shrink-0 size-[8px]" data-name="Span [swiper-pagination-bullet]" />
                            </div>
                          </div>
                        </Wrapper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] leading-[0] left-[106px] text-[#212529] text-[16px] top-[6210px] w-[1213px] whitespace-nowrap" data-name="Paragraph">
              <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 top-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p>
                  <span className="leading-[24px]">{`See our loan `}</span>
                  <span className="[text-decoration-skip-ink:none] decoration-solid font-['Open_Sans:Bold',sans-serif] font-bold leading-[24px] text-[#008533] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
                    terms and conditions
                  </span>
                  <span className="leading-[24px]">{` and the latest`}</span>
                </p>
              </div>
              <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[366.39px] top-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p>
                  <span className="leading-[24px]">{`pricing guide `}</span>
                  <span className="[text-decoration-skip-ink:none] decoration-solid font-['Open_Sans:Bold',sans-serif] font-bold leading-[24px] text-[#008533] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
                    here
                  </span>
                  <span className="leading-[24px]">.</span>
                </p>
              </div>
            </div>
            <div className="absolute bg-[#fafafa] h-[490px] left-0 top-[5640px] w-[1425px]" data-name="Div [nbd-legal-content]">
              <div className="absolute h-[430px] left-0 top-[30px] w-[1425px]" data-name="Div [ng-container-legaltable]">
                <div className="-translate-y-1/2 absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[106px] text-[#494f50] text-[16px] top-[418px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p>
                    <span className="leading-[24px]">Physical address</span>
                    <span className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] text-[#494f50]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      135 Rivonia Road, Sandown, Sandton, 2196, South Africa
                    </span>
                  </p>
                </div>
                <div className="absolute h-[220px] left-[106px] top-[138px] w-[1213px]" data-name="Div [nbd-legal-content-table]">
                  <div className="content-stretch flex flex-col items-start pb-[5881px] relative size-full">
                    <DivRow additionalClassNames="h-[55px] w-[1213px]">
                      <DivColText text="Loan amount" />
                      <DivColText1 text="R50,000 borrowed over 84 months" />
                      <DivColText text="Monthly instalment amount" />
                      <DivColText1 text="R1,923.47" />
                    </DivRow>
                    <DivRow additionalClassNames="h-[55px] w-[1213px]">
                      <DivColText text="Monthly service fee" />
                      <DivColText1 text="R69" />
                      <DivColText text="Total amount payable" />
                      <DivColText1 text="R115,408.20" />
                    </DivRow>
                    <DivRow additionalClassNames="h-[55px] w-[1213px]">
                      <DivColText text="Annual maximum interest rate" />
                      <DivColText1 text="29.25%" />
                      <DivColText text="Maximum annual percentage rate" />
                      <DivColText1 text="34.05%" />
                    </DivRow>
                    <DivRow additionalClassNames="h-[55px] w-[1213px]">
                      <DivColText text="Initiation fee" />
                      <DivColText1 text="R1,207.50" />
                      <DivCol />
                      <DivCol />
                    </DivRow>
                  </div>
                </div>
                <div className="-translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[106px] text-[#494f50] text-[16px] top-[74px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[24px]">This is a representative example of what you can expect to pay.</p>
                </div>
                <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[106px] not-italic text-[#17252e] text-[15.9px] top-[11.5px] whitespace-nowrap">
                  <p className="leading-[24px]">How much could a personal loan cost?</p>
                </div>
              </div>
            </div>
            <div className="absolute h-[466px] left-[91px] top-[5094px] w-[1243px]" data-name="Div [row]">
              <div className="absolute bg-white content-stretch flex gap-[28px] h-[254px] items-start left-[10.25px] pl-[32px] pr-px py-[62px] rounded-[12px] top-[212px] w-[481px]" data-name="Div [card]">
                <div aria-hidden="true" className="absolute border border-[#e5edec] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_25px_20px_0px_rgba(0,0,0,0.1)]" />
                <div className="relative shrink-0 size-[32px]" data-name="Image [icon-calculator]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                    <div className="absolute inset-[1.19%_0.9%_-0.29%_0]" data-name="home-improvement-full-2">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.711 31.711">
                        <g id="home-improvement-full-2">
                          <g id="Group">
                            <path clipRule="evenodd" d={svgPaths.pf967200} fillRule="evenodd" id="Shape" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                            <path clipRule="evenodd" d={svgPaths.p23a9e740} fillRule="evenodd" id="Rectangle-path" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                            <path clipRule="evenodd" d={svgPaths.p3aadf500} fillRule="evenodd" id="Rectangle-path_2" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                            <path clipRule="evenodd" d={svgPaths.p3cf50c0} fillRule="evenodd" id="Shape_2" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                            <path d="M17.7417 21.7078H19.1057" id="Shape_3" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                            <path d="M17.7417 17.769H19.1057" id="Shape_4" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                            <path d="M22.9933 21.7078H24.3061" id="Shape_5" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                            <path d="M22.9933 25.6465H24.3061" id="Shape_6" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                            <path d="M22.9933 17.769H24.3061" id="Shape_7" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                            <path d={svgPaths.p2b9fc900} id="Shape_8" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                            <path d={svgPaths.p2c96a600} id="Shape_9" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                            <g id="Rectangle-path_3" />
                          </g>
                          <path clipRule="evenodd" d={svgPaths.pf967200} fillRule="evenodd" id="Shape_10" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                          <path clipRule="evenodd" d={svgPaths.p23a9e740} fillRule="evenodd" id="Rectangle-path_4" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                          <path clipRule="evenodd" d={svgPaths.p3aadf500} fillRule="evenodd" id="Rectangle-path_5" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                          <path clipRule="evenodd" d={svgPaths.p3cf50c0} fillRule="evenodd" id="Shape_11" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                          <path d="M17.7417 21.7078H19.1057" id="Shape_12" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                          <path d="M17.7417 17.769H19.1057" id="Shape_13" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                          <path d="M22.9933 21.7078H24.3061" id="Shape_14" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                          <path d="M22.9933 25.6465H24.3061" id="Shape_15" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                          <path d="M22.9933 17.769H24.3061" id="Shape_16" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                          <path d={svgPaths.p2b9fc900} id="Shape_17" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                          <path d={svgPaths.p2c96a600} id="Shape_18" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                          <g id="Rectangle-path_6" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <Wrapper additionalClassNames="h-[132px] w-[449px]">
                  <div className="absolute h-[26px] left-0 top-[96px] w-[449px]" data-name="Link [nbd-btn-tertiary]">
                    <div className="absolute h-[13px] left-[85.28px] top-[7px] w-[24px]" data-name="Span [icon-arrow]">
                      <div className="absolute h-[13px] left-0 overflow-clip top-0 w-[24px]" data-name="Background Images">
                        <div className="absolute h-[13px] left-0 overflow-clip top-0 w-[24px]" data-name="Background Image">
                          <div className="absolute contents inset-[0.5%_4.44%_0.5%_4.51%]" data-name="Dev-uploads-MVP1">
                            <div className="absolute contents inset-[0.5%_4.44%_0.5%_4.51%]" data-name="Card-UI">
                              <div className="absolute contents inset-[0.5%_4.44%_0.5%_4.51%]" data-name="Cards---Intro">
                                <div className="absolute contents inset-[0.5%_4.44%_0.5%_4.51%]" data-name="Intro-card-desktop">
                                  <div className="absolute contents inset-[0.5%_4.44%_0.5%_4.51%]" data-name="cta">
                                    <div className="absolute inset-[0.5%_4.44%_0.5%_4.51%]" data-name="arrow">
                                      <div className="absolute inset-[-2.75%_-3.24%_-2.75%_-2.29%]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.0584 13.5765">
                                          <g id="arrow">
                                            <path d={svgPaths.p2c705100} id="Rectangle-7" stroke="var(--stroke-0, #009639)" />
                                            <path d="M21.3333 6.78823H0.5" id="Line-2" stroke="var(--stroke-0, #009639)" strokeLinecap="square" />
                                          </g>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Wrapper2 additionalClassNames="left-0 text-[#008533] top-[13px]">See offer</Wrapper2>
                  </div>
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#17252e] text-[16px] top-[60px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[24px]">Save time. Get a loan at any of our partner stores.</p>
                  </div>
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[#17252e] text-[23.4px] top-[15.5px] whitespace-nowrap">
                    <p className="leading-[32px]">Get a home improvement loan</p>
                  </div>
                </Wrapper>
              </div>
              <div className="absolute h-[96px] leading-[0] left-[271.5px] not-italic text-[#212529] text-[38.6px] top-[24px] w-[700px] whitespace-nowrap" data-name="H2">
                <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center left-[47.73px] top-[23.5px]">
                  <p className="leading-[48px]">{`Upgrade your home `}</p>
                </div>
                <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[97px] left-[40.41px] top-[-1px] w-[619px]" data-name="Span">
                  <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 top-[72.5px]">
                    <p className="leading-[48px]">cash loan that you can get instore</p>
                  </div>
                  <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[391.64px] top-[24.5px]">
                    <p className="leading-[48px]">{`with a quick `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[#17252e] h-[310px] left-0 top-[4724px] w-[1425px]" data-name="Div [nbd-rta-comp]">
              <div className="absolute h-[136px] left-[106px] top-[80px] w-[1213px]" data-name="Div [col-12]">
                <div className="absolute bg-white h-[56px] left-[411.5px] rounded-[6px] top-[80px] w-[390px]" data-name="Link [rtaCTA]">
                  <Wrapper2 additionalClassNames="left-[147.98px] text-[#17252e] top-[29px]">Get started</Wrapper2>
                </div>
                <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[487.44px] not-italic text-[0px] text-white top-[19.5px] whitespace-nowrap">
                  <p>
                    <span className="leading-[40px] text-[30.9px]">{`Ready `}</span>
                    <span className="font-['Inter:Regular',sans-serif] font-normal leading-[40px] not-italic text-[30.6px] text-white">to apply?</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute h-[530px] left-0 overflow-clip top-[4130px] w-[1425px]" data-name="Div [illustrationcardwrapper]">
              <div className="absolute content-stretch flex gap-[32px] h-[450px] items-start left-[91px] pl-[15px] top-0 w-[1149px]" data-name="Div [row]">
                <DivCard>
                  <DivCardHeader>
                    <div className="absolute left-[167.5px] overflow-clip size-[48px] top-[33px]" data-name="Image [card-icon]">
                      <div className="absolute contents inset-[5.08%]" data-name="Icons/Visual-Icons/Compose-Write-Pencil">
                        <div className="absolute contents inset-[5.08%]" data-name="thin-0003_write_pencil_new_edit">
                          <div className="absolute inset-[5.08%]" data-name="Group">
                            <div className="absolute inset-[-1.74%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.625 44.625">
                                <g id="Group">
                                  <path d="M22.3125 32.625H7.3125" id="Shape" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                  <path d="M22.3125 27H7.3125" id="Shape_2" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                  <path d="M22.3125 21.375H7.3125" id="Shape_3" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                  <path d="M12.9375 15.75H7.3125" id="Shape_4" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                  <path d={svgPaths.p23019d40} id="Shape_5" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                  <path d="M37.29 40.3618H40.9483" id="Shape_6" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                  <path clipRule="evenodd" d={svgPaths.p181a3c00} fillRule="evenodd" id="Shape_7" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                  <path d={svgPaths.p1b940400} id="Shape_8" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                  <path clipRule="evenodd" d={svgPaths.p2aa419c0} fillRule="evenodd" id="Shape_9" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DivCardHeader>
                  <DivCardBody>
                    <div className="absolute h-[50px] left-[33px] rounded-[6px] top-[272px] w-[317px]" data-name="Link [btn]">
                      <div className="absolute h-[14px] left-[150.92px] top-[24px] w-[23px]" data-name="Em [tertiary-btn-icon]">
                        <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Images">
                          <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Image">
                            <div className="absolute contents inset-[7.1%_4.44%_7.1%_4.51%]" data-name="Page-1">
                              <RightArrowGreen />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Wrapper2 additionalClassNames="left-px text-[#008533] top-[30px]">{`About Debicheck `}</Wrapper2>
                    </div>
                    <div className="absolute h-[120px] left-[33px] top-[80px] w-[317px]" data-name="Div [description]">
                      <div className="content-stretch flex flex-col items-start pb-[4409px] relative size-full">
                        <div className="h-[120px] relative shrink-0 w-[317px]" data-name="Paragraph">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] pb-[4409px] pr-[3.516px] relative size-full text-[#494f50] text-[16px] whitespace-nowrap">
                            <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                              <p className="leading-[24px]">{`To help keep track of payments made `}</p>
                            </div>
                            <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                              <p className="leading-[24px]">{`from your account, we’ll ask you to `}</p>
                            </div>
                            <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                              <p className="leading-[24px]">{`approve your debit order just once before `}</p>
                            </div>
                            <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                              <p className="leading-[24px]">{`we set it up. Stay in control of your money `}</p>
                            </div>
                            <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                              <p className="leading-[24px]">with Debicheck.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[33px] not-italic text-[#17252e] text-[23.4px] top-[39.5px] whitespace-nowrap">
                      <p className="leading-[32px]">Secure your debit orders</p>
                    </div>
                  </DivCardBody>
                </DivCard>
                <DivCard>
                  <DivCardHeader>
                    <div className="absolute left-[167.5px] overflow-clip size-[48px] top-[33px]" data-name="Image [card-icon]">
                      <div className="absolute contents inset-[12.5%_11.34%_11.68%_12.5%]" data-name="income">
                        <div className="absolute contents inset-[12.5%_11.34%_11.68%_12.5%]" data-name="Group-2">
                          <div className="absolute inset-[12.5%_11.34%_11.68%_12.5%]" data-name="Group">
                            <div className="absolute inset-[-2.06%_-2.05%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.0566 37.8938">
                                <g id="Group">
                                  <path d={svgPaths.p39485a80} id="Shape" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                                  <path d={svgPaths.p3a0bea00} id="Oval" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                                  <path d={svgPaths.p129ce780} id="Shape_2" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                                  <path d={svgPaths.pda78000} id="Shape_3" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                                  <path clipRule="evenodd" d={svgPaths.p1d4c8e00} fillRule="evenodd" id="Rectangle-path" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                                  <path d={svgPaths.p2e56b3c8} id="Shape_4" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                                  <path d="M24.6546 13.1569V14.0924" id="Shape_5" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                                  <path d="M24.6546 20.9407V21.8762" id="Shape_6" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                                  <path d={svgPaths.p140f6f40} id="Shape_7" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                                  <path d="M20.1108 3.41528V4.21736" id="Shape_8" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                                  <path d="M20.1108 10.0884V10.8905" id="Shape_9" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-[12.5%_33.98%_60.85%_39.35%]" data-name="Shape">
                          <div className="absolute inset-[-5.86%_-5.86%_-5.85%_-5.86%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3038 14.2894">
                              <path d={svgPaths.p1ca51700} id="Shape" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[34.15%_24.27%_39.18%_49.05%]" data-name="Oval">
                          <div className="absolute inset-[-5.86%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3038 14.3038">
                              <path d={svgPaths.p2b811280} id="Oval" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[67.95%_31.36%_17.6%_25.9%]" data-name="Shape">
                          <div className="absolute inset-[-10.81%_-3.66%_-10.81%_-0.59%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3882 8.43605">
                              <path d={svgPaths.p3f618800} id="Shape" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[69.54%_11.34%_12.44%_25.9%]" data-name="Shape">
                          <div className="absolute inset-[-8.67%_-2.49%_-8.67%_-0.62%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.0631 10.1468">
                              <path d={svgPaths.p3f27a200} id="Shape" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[64.99%_74.17%_11.68%_12.5%]" data-name="Rectangle-path">
                          <div className="absolute inset-[-6.7%_-11.72%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.9 12.7">
                              <path clipRule="evenodd" d={svgPaths.p10f74b80} fillRule="evenodd" id="Rectangle-path" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[40.3%_33.62%_45.44%_57.68%]" data-name="Shape">
                          <div className="absolute inset-[-10.95%_-17.95%_-10.95%_-11.79%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.42015 8.348">
                              <path d={svgPaths.p1b61a7e0} id="Shape" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[38.35%_37.7%_59.7%_62.3%]" data-name="Shape">
                          <div className="absolute inset-[0_-0.75px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 0.935521">
                              <path d="M0.75 0V0.935521" id="Shape" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[54.56%_37.7%_43.49%_62.3%]" data-name="Shape">
                          <div className="absolute inset-[0_-0.75px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 0.93552">
                              <path d="M0.75 0V0.93552" id="Shape" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[19.72%_43.67%_68.05%_48.87%]" data-name="Shape">
                          <div className="absolute inset-[-12.77%_-20.94%_-12.77%_-14.68%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.85744 7.37136">
                              <path d={svgPaths.p2a536580} id="Shape" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[18.05%_47.16%_80.28%_52.84%]" data-name="Shape">
                          <div className="absolute inset-[0_-0.75px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 0.80208">
                              <path d="M0.75 0V0.80208" id="Shape" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[31.95%_47.16%_66.37%_52.84%]" data-name="Shape">
                          <div className="absolute inset-[0_-0.75px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 0.802081">
                              <path d="M0.75 0V0.802081" id="Shape" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DivCardHeader>
                  <DivCardBody>
                    <div className="absolute h-[122px] left-[33px] rounded-[6px] top-[200px] w-[317px]" data-name="Link [btn]">
                      <div className="absolute h-[14px] left-[201.09px] top-[96px] w-[23px]" data-name="Em [tertiary-btn-icon]">
                        <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Images">
                          <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Image">
                            <div className="absolute contents inset-[7.1%_4.44%_7.1%_4.51%]" data-name="Page-1">
                              <RightArrowGreen />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Wrapper2 additionalClassNames="left-px text-[#008533] top-[102px]">{`Consolidate your loans `}</Wrapper2>
                    </div>
                    <div className="absolute h-[96px] left-[33px] top-[80px] w-[317px]" data-name="Paragraph">
                      <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] pb-[4409px] pr-[15.609px] relative size-full text-[#494f50] text-[16px] whitespace-nowrap">
                        <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="leading-[24px]">{`Combining loans into one personal loan `}</p>
                        </div>
                        <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="leading-[24px]">{`with a fixed interest rate could save you `}</p>
                        </div>
                        <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="leading-[24px]">{`money every month while reducing your `}</p>
                        </div>
                        <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="leading-[24px]">total loan repayments over time.</p>
                        </div>
                      </div>
                    </div>
                    <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[33px] not-italic text-[#17252e] text-[23.4px] top-[39.5px] whitespace-nowrap">
                      <p className="leading-[32px]">Pay less interest</p>
                    </div>
                  </DivCardBody>
                </DivCard>
                <DivCard>
                  <DivCardHeader>
                    <div className="absolute left-[167.5px] overflow-clip size-[48px] top-[33px]" data-name="Image [card-icon]">
                      <div className="absolute contents inset-[8.79%_10.93%_5.05%_7.39%]" data-name="Icons/Visual-Icons/-Cup-Place-Winner-Award-Prize-Achievement">
                        <div className="absolute contents inset-[8.79%_10.93%_5.05%_7.39%]" data-name="thin-0658_cup_place_winner_award_prize_achievement">
                          <div className="absolute inset-[8.79%_10.93%_5.05%_7.39%]" data-name="Group">
                            <div className="absolute inset-[-1.81%_-1.9%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.7007 42.8577">
                                <g id="Group">
                                  <path clipRule="evenodd" d={svgPaths.p3ee70100} fillRule="evenodd" id="Shape" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                  <path d={svgPaths.p26b98dc0} id="Shape_2" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                  <path d={svgPaths.p11da6b00} id="Shape_3" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                  <path clipRule="evenodd" d={svgPaths.pa982100} fillRule="evenodd" id="Shape_4" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                  <path clipRule="evenodd" d={svgPaths.p293ff700} fillRule="evenodd" id="Shape_5" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                  <path d="M18.5997 37.9877V31.7748" id="Shape_6" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                  <path d="M22.101 37.9877V31.7748" id="Shape_7" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DivCardHeader>
                  <DivCardBody>
                    <div className="absolute h-[74px] left-[33px] rounded-[6px] top-[248px] w-[317px]" data-name="Link [btn]">
                      <div className="absolute h-[14px] left-[184.19px] top-[48px] w-[23px]" data-name="Em [tertiary-btn-icon]">
                        <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Images">
                          <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Image">
                            <div className="absolute contents inset-[7.1%_4.44%_7.1%_4.51%]" data-name="Page-1">
                              <RightArrowGreen />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Wrapper2 additionalClassNames="left-px text-[#008533] top-[54px]">{`More on Greenbacks `}</Wrapper2>
                    </div>
                    <div className="absolute h-[144px] left-[33px] top-[80px] w-[317px]" data-name="Paragraph">
                      <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] pb-[4409px] pr-[0.156px] relative size-full text-[#494f50] text-[16px] whitespace-nowrap">
                        <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="leading-[24px]">{`By simply paying your monthly `}</p>
                        </div>
                        <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="leading-[24px]">{`instalments on time, you'll earn `}</p>
                        </div>
                        <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="leading-[24px]">{`Greenbacks rewards that you can spend `}</p>
                        </div>
                        <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="leading-[24px]">{`as cash. You can also use your `}</p>
                        </div>
                        <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="leading-[24px]">{`Greenbakcs to pay your banking fees or as `}</p>
                        </div>
                        <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="leading-[24px]">a deposit into your investment account.</p>
                        </div>
                      </div>
                    </div>
                    <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[33px] not-italic text-[#17252e] text-[23.4px] top-[39.5px] whitespace-nowrap">
                      <p className="leading-[32px]">Earn as you pay</p>
                    </div>
                  </DivCardBody>
                </DivCard>
              </div>
            </div>
            <div className="absolute bg-white h-[64px] left-0 top-[4066px] w-[1425px]" data-name="Div [clearfix]" />
            <div className="absolute h-[522px] left-0 overflow-clip top-[3432px] w-[1425px]" data-name="Div [illustrationcardwrapper]">
              <div className="absolute content-stretch flex gap-[32px] h-[442px] items-start left-[91px] pl-[15px] top-0 w-[766px]" data-name="Div [row]">
                <DivCard1 additionalClassNames="h-[271px]">
                  <DivCardHeader>
                    <div className="absolute left-[167.5px] overflow-clip size-[48px] top-[33px]" data-name="Image [card-icon]">
                      <div className="absolute contents inset-[10%_10.19%_12.24%_12.5%]" data-name="call-us">
                        <div className="absolute inset-[10%_10.19%_12.24%_12.5%]" data-name="Group">
                          <div className="absolute inset-[-2.01%_-2.02%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.6091 38.8252">
                              <g id="Group">
                                <path clipRule="evenodd" d={svgPaths.p40c5780} fillRule="evenodd" id="Shape" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                <path d={svgPaths.p1fb06340} id="Shape_2" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                <path d={svgPaths.p2a0c0cdc} id="Shape_3" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                <path d={svgPaths.pe7db180} id="Shape_4" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DivCardHeader>
                  <div className="h-[176px] relative rounded-bl-[6px] rounded-br-[6px] shrink-0 w-[383px]" data-name="Div [card-body]">
                    <div aria-hidden="true" className="absolute border-[#e5edec] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[6px] rounded-br-[6px]" />
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24.5px] items-start pb-[3512px] pt-[23.5px] px-[34px] relative size-full">
                      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#17252e] text-[23.4px] whitespace-nowrap">
                        <p className="leading-[32px]">Ask us to call you back</p>
                      </div>
                      <div className="h-[144px] relative shrink-0 w-[317px]" data-name="Paragraph">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] pb-[3711px] pr-[9.594px] relative size-full text-[#494f50] text-[16px] whitespace-nowrap">
                          <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                            <p className="leading-[24px]">{`If you prefer for us to help you apply for `}</p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                            <p className="leading-[24px]">{`your loan over the phone, you can leave `}</p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                            <p className="leading-[24px]">{`your contact details with us and a `}</p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                            <p className="leading-[24px]">{`consultant will call you back. To complete `}</p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                            <p className="leading-[24px]">{`the application, you'll need to email the `}</p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                            <p className="leading-[24px]">required documents.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DivCard1>
                <DivCard1 additionalClassNames="h-[327px]">
                  <DivCardHeader>
                    <div className="absolute left-[167.5px] overflow-clip size-[48px] top-[33px]" data-name="Image [card-icon]">
                      <div className="absolute contents inset-[17.5%_3.26%_18.34%_2.5%]" data-name="online-application">
                        <div className="absolute inset-[17.5%_3.26%_18.34%_2.5%]" data-name="Group">
                          <div className="absolute inset-[-2.44%_-1.66%_-2.43%_-1.66%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.7342 32.2976">
                              <g id="Group">
                                <path d={svgPaths.p201e3b80} id="Shape" stroke="var(--stroke-0, #008533)" strokeWidth="1.5" />
                                <path clipRule="evenodd" d={svgPaths.p14582000} fillRule="evenodd" id="Shape_2" stroke="var(--stroke-0, #008533)" strokeWidth="1.5" />
                                <path d="M11.0303 7.46347H36.8433" id="Path-3" stroke="var(--stroke-0, #008533)" strokeWidth="1.5" />
                                <path d="M11.0303 13.4595H25.7806" id="Path-3_2" stroke="var(--stroke-0, #008533)" strokeWidth="1.5" />
                                <path d={svgPaths.p201e3b80} id="Shape_3" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                                <path clipRule="evenodd" d={svgPaths.p14582000} fillRule="evenodd" id="Shape_4" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                                <path d="M11.0303 7.46347H36.8433" id="Path-3_3" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                                <path d="M11.0303 13.4595H25.7806" id="Path-3_4" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DivCardHeader>
                  <div className="h-[232px] relative rounded-bl-[6px] rounded-br-[6px] shrink-0 w-[383px]" data-name="Div [card-body]">
                    <div aria-hidden="true" className="absolute border-[#e5edec] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[6px] rounded-br-[6px]" />
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[3488px] pt-[24px] px-[34px] relative size-full">
                      <div className="h-[64px] relative shrink-0 w-[317px]" data-name="H4">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold items-start leading-[0] not-italic pb-[3647px] pr-[68.5px] relative size-full text-[#17252e] text-[23.4px] whitespace-nowrap">
                          <div className="flex flex-col justify-center relative shrink-0">
                            <p className="leading-[32px]">{`Use the Money app or `}</p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0">
                            <p className="leading-[32px]">Online Banking</p>
                          </div>
                        </div>
                      </div>
                      <div className="h-[168px] relative shrink-0 w-[317px]" data-name="Paragraph">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] pb-[3743px] relative size-full text-[#494f50] text-[16px] whitespace-nowrap">
                          <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                            <p className="leading-[24px]">{`Open your Money app or Online Banking `}</p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                            <p>
                              <span className="leading-[24px]">{`and select `}</span>
                              <span className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[24px] text-[#494f50]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                Borrow
                              </span>
                              <span className="leading-[24px]">{`, then `}</span>
                              <span className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[24px] text-[#494f50]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                Personal loan
                              </span>
                              <span className="leading-[24px]">and</span>
                            </p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                            <p className="leading-[24px]">{`follow the easy steps. If you are a `}</p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                            <p className="leading-[24px]">{`Nedbank client, you might already have `}</p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                            <p className="leading-[24px]">{`loan offers waiting for you, which will `}</p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                            <p className="leading-[24px]">{`make the process and access to your `}</p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                            <p className="leading-[24px]">money even easier.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DivCard1>
              </div>
            </div>
            <div className="absolute bg-white h-[112px] left-0 top-[3954px] w-[1425px]" data-name="Section [nbd-head-desc-container]">
              <div className="absolute font-['Inter:Bold',sans-serif] font-bold h-[96px] leading-[0] left-[308.5px] not-italic text-[#17252e] text-[38.6px] top-0 w-[808px] whitespace-nowrap" data-name="H2 [nbd-league-pagetitle]">
                <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[52.13px] top-[71.5px]">
                  <p className="leading-[48px]">{`affordable and rewarding experience `}</p>
                </div>
                <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[100.23px] top-[23.5px]">
                  <p className="leading-[48px]">{`More ways to make your loan an `}</p>
                </div>
              </div>
            </div>
            <div className="absolute bg-white h-[80px] left-0 top-[3352px] w-[1425px]" data-name="Div [clearfix]" />
            <div className="absolute bg-white h-[48px] left-0 top-[3240px] w-[1425px]" data-name="Div [clearfix]" />
            <div className="absolute bg-white h-[64px] left-0 top-[3288px] w-[1425px]" data-name="Section [nbd-head-desc-container]">
              <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[322.08px] not-italic text-[#17252e] text-[38.6px] top-[23.5px] whitespace-nowrap">
                <p className="leading-[48px]">{`How to get a personal loan in 2 easy ways `}</p>
              </div>
            </div>
            <div className="absolute bg-[#fafafa] h-[380px] left-[106px] overflow-clip shadow-[0px_25px_20px_-15px_rgba(0,0,0,0.1)] top-[2860px] w-[1213px]" data-name="Div [ng-container]">
              <div className="absolute h-[380px] left-0 top-0 w-[1213px]" data-name="Div [row]">
                <div className="absolute h-[310px] left-[606.5px] top-[35px] w-[606.5px]" data-name="Div [nbd-cobl-content-div]">
                  <div className="absolute h-[26px] left-0 top-[252px] w-[188.24px]" data-name="Link [nbd-cobl-anchor]">
                    <div className="absolute h-[14px] left-[165.23px] top-[6px] w-[23px]" data-name="I [tertiary-btn-icon]">
                      <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Images">
                        <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Image">
                          <div className="absolute contents inset-[7.1%_4.44%_7.1%_4.51%]" data-name="Page-1">
                            <RightArrowGreen />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Wrapper2 additionalClassNames="left-0 text-[#008533] top-[13px]">{`See cashback offer `}</Wrapper2>
                  </div>
                  <div className="absolute h-[84px] left-0 top-[128px] w-[501.5px]" data-name="Paragraph">
                    <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] pb-[3278px] pr-[11.594px] relative size-full text-[#494f50] text-[20px] whitespace-nowrap">
                      <Wrapper7>{`Take out a personal loan and open a MiGoals Plus or `}</Wrapper7>
                      <Wrapper7>{`Premium Account to qualify for R200 cashback every `}</Wrapper7>
                      <Wrapper7>month throughout your loan repayment.</Wrapper7>
                    </div>
                  </div>
                  <div className="absolute h-[80px] left-0 top-[32px] w-[501.5px]" data-name="H3 [nbd-cobl-heading]">
                    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold items-start leading-[0] not-italic pb-[3170px] pr-[60.781px] relative size-full text-[#17252e] text-[30.9px] whitespace-nowrap">
                      <div className="flex flex-col justify-center relative shrink-0">
                        <p className="leading-[40px]">{`A loan that pays you back – `}</p>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0">
                        <p className="leading-[40px]">R200 cashback every month</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[380px] left-0 shadow-[0px_25px_20px_-15px_rgba(0,0,0,0.1)] top-0 w-[471.5px]" data-name="Image [nbd-cobl-imageshadow]">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageNbdCoblImageshadow} />
                </div>
              </div>
            </div>
            <div className="absolute h-[1029px] left-[106px] top-[1783px] w-[1213px]" data-name="Div [ng-container]">
              <div className="absolute border border-[#e5edec] border-solid h-[773px] left-0 rounded-[20px] top-[256px] w-[1213px]" data-name="Div [contentTabs]">
                <div className="absolute h-[659px] left-[15px] top-[48px] w-[1181px]" data-name="Div [aem-Grid]">
                  <div className="absolute h-[40px] left-[106px] top-[579px] w-[969px]" data-name="Div [ng-container]">
                    <div className="content-stretch flex flex-col items-start pb-[2755px] relative size-full">
                      <div className="h-[40px] relative shrink-0 w-[969px]" data-name="Span [nbd-disclaimer]">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] pb-[2815px] pl-[33px] pr-[44.328px] relative size-full text-[#94999c] text-[12px] whitespace-nowrap">
                          <Wrapper4>{`Our calculation is only an example of how the interest rate and fees can affect your repayments. Although we do our best to give you accurate calculations, they `}</Wrapper4>
                          <Wrapper4>will not be binding on us. To confirm the latest interest rate or fees, please visit your nearest branch.</Wrapper4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[569px] left-0 top-0 w-[1181px]" data-name="Div [calculator-container]">
                    <div className="content-stretch flex flex-col items-start pb-[1733px] pt-[5px] px-[31px] relative size-full">
                      <Wrapper additionalClassNames="h-[86px] w-[1119px]">
                        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[15px] not-italic text-[#494f50] text-[19.5px] top-[14px] whitespace-nowrap">
                          <p className="leading-[28px]">{`We'll show you how much your total repayments will be for the amount you'd like to borrow.`}</p>
                        </div>
                      </Wrapper>
                      <Wrapper additionalClassNames="h-[483px] w-[1119px]">
                        <div className="absolute h-[495px] left-[559.5px] top-[-12px] w-[559.5px]" data-name="Div [col-md-6]">
                          <div className="absolute h-[68px] left-[52px] top-[413px] w-[481.5px]" data-name="Div [row]">
                            <div className="content-stretch flex gap-[13px] items-start pl-[13px] pr-[527.75px] py-[6px] relative size-full">
                              <Wrapper additionalClassNames="h-[56px] rounded-[6px] w-[240.75px]">
                                <div className="absolute h-[14px] left-[180.92px] top-[21px] w-[18px]" data-name="I [tertiary-btn-icon]">
                                  <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[18px]" data-name="Background Images">
                                    <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[18px]" data-name="Background Image">
                                      <div className="absolute contents inset-[2.89%_4.1%_2.64%_3.89%]" data-name="Page-1">
                                        <div className="absolute contents inset-[2.89%_4.1%_2.64%_3.89%]" data-name="diagonal-arrow-green">
                                          <div className="absolute flex inset-[2.89%_4.1%_2.64%_3.89%] items-center justify-center">
                                            <div className="flex-none h-[12.012px] rotate-[-146.87deg] scale-y-97 skew-x-[-14.04deg] w-[9.257px]">
                                              <div className="relative size-full" data-name="icon-tailarrow-down">
                                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.25748 12.0116">
                                                  <g id="icon-tailarrow-down">
                                                    <path d={svgPaths.p20712580} fill="var(--fill-0, #009639)" id="path-1" />
                                                  </g>
                                                </svg>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Wrapper2 additionalClassNames="left-[41.81px] text-[#008533] top-[28px]">{`See loan details `}</Wrapper2>
                              </Wrapper>
                              <div className="bg-[#17252e] h-[56px] relative rounded-[6px] shrink-0 w-[240.75px]" data-name="Link [repay_startApplication]">
                                <div aria-hidden="true" className="absolute border-2 border-[#17252e] border-solid inset-0 pointer-events-none rounded-[6px]" />
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                  <Wrapper2 additionalClassNames="left-[73.36px] text-white top-[28px]">Get started</Wrapper2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bg-[#fafafa] h-[275px] left-[67px] rounded-[10px] shadow-[0px_25px_20px_-15px_rgba(0,0,0,0.1)] top-0 w-[477.5px]" data-name="Div [result-panel]">
                            <div className="overflow-clip rounded-[inherit] size-full">
                              <div className="content-stretch flex flex-col gap-[8px] items-start pb-[2198px] pt-[32px] px-[42px] relative size-full">
                                <div className="h-[89px] relative shrink-0 w-[393.5px]" data-name="Div">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2279.5px] relative size-full">
                                    <Wrapper additionalClassNames="h-[41px] mb-[-0.5px] w-[393.5px]">
                                      <div className="absolute left-[299.5px] overflow-clip size-[12px] top-[9.19px]" data-name="Image [tooltip-img]">
                                        <div className="absolute contents inset-0" data-name="Page-1">
                                          <div className="absolute contents inset-0" data-name="Calculator---Repaymant---Desktop">
                                            <Group />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[#17252e] text-[15.9px] top-[14.5px] whitespace-nowrap">
                                        <p className="leading-[24px]">{`How much you’ll pay back each month `}</p>
                                      </div>
                                    </Wrapper>
                                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] mb-[-0.5px] not-italic relative shrink-0 text-[#0c8450] text-[38.6px] whitespace-nowrap">
                                      <p className="leading-[48px]">R197.30</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="h-[89px] relative shrink-0 w-[393.5px]" data-name="Div">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2392.5px] relative size-full">
                                    <Wrapper additionalClassNames="h-[41px] mb-[-0.5px] w-[393.5px]">
                                      <div className="absolute left-[262.64px] overflow-clip size-[12px] top-[9.19px]" data-name="Image [tooltip-img]">
                                        <div className="absolute contents inset-0" data-name="Page-1">
                                          <div className="absolute contents inset-0" data-name="Calculator---Repaymant---Desktop">
                                            <Group />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[#17252e] text-[15.9px] top-[14.5px] whitespace-nowrap">
                                        <p className="leading-[24px]">{`How much you’ll pay back in total `}</p>
                                      </div>
                                    </Wrapper>
                                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] mb-[-0.5px] not-italic relative shrink-0 text-[#212529] text-[38.6px] whitespace-nowrap">
                                      <p className="leading-[48px]">R4,735.20</p>
                                    </div>
                                  </div>
                                </div>
                                <Wrapper additionalClassNames="h-[97px] w-[393.5px]">
                                  <div className="absolute h-[56px] left-[-15px] top-[41px] w-[423.5px]" data-name="Div [row]">
                                    <div className="absolute h-[40px] left-[211.75px] top-[16px] w-[123px]" data-name="Button [change-rate]">
                                      <div className="content-stretch flex gap-[42.125px] items-start pl-[48.109px] pr-[993.25px] py-[8px] relative size-full">
                                        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#008533] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                          <p className="leading-[24px]">{`Explore rate `}</p>
                                        </div>
                                        <Wrapper additionalClassNames="h-[21px] w-[25px]">
                                          <div className="absolute h-[21px] left-0 overflow-clip top-0 w-[25px]" data-name="Background Images">
                                            <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Background Image">
                                              <div className="absolute contents inset-0" data-name="Page-1">
                                                <div className="absolute contents inset-0" data-name="Calculator---Repaymant---Tooltip---Desktop">
                                                  <div className="absolute contents inset-0" data-name="Group-6">
                                                    <div className="absolute contents inset-0" data-name="Change-rate">
                                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                                        <g id="down_arrow_01">
                                                          <g id="Rectangle" />
                                                          <path d={svgPaths.p11d24680} id="Rectangle-7" stroke="var(--stroke-0, #008533)" strokeWidth="1.5" />
                                                        </g>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </Wrapper>
                                      </div>
                                    </div>
                                    <div className="absolute h-[48px] left-0 top-0 w-[211.75px]" data-name="H2 [repay_interest-value]">
                                      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[15px] not-italic text-[#17252e] text-[38.6px] top-[23.5px] whitespace-nowrap">
                                        <p className="leading-[48px]">18%</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute h-[41px] left-0 top-0 w-[393.5px]" data-name="H7 [nbd-title]">
                                    <div className="absolute left-[176.16px] overflow-clip size-[12px] top-[9.19px]" data-name="Image [tooltip-img]">
                                      <div className="absolute contents inset-0" data-name="Page-1">
                                        <div className="absolute contents inset-0" data-name="Calculator---Repaymant---Desktop">
                                          <Group />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[#17252e] text-[15.9px] top-[14.5px] whitespace-nowrap">
                                      <p className="leading-[24px]">{`Example interest rate `}</p>
                                    </div>
                                  </div>
                                </Wrapper>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute h-[337px] left-0 top-0 w-[559.5px]" data-name="Div [col-md-6]">
                          <div className="content-stretch flex flex-col items-start pb-[2192px] pl-[15px] pr-[67px] relative size-full">
                            <div className="h-[110px] relative shrink-0 w-[477.5px]" data-name="Div">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24.5px] items-start pb-[2221px] relative size-full">
                                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#17252e] text-[15.9px] whitespace-nowrap">
                                  <p className="leading-[24px]">How much do you need to borrow?</p>
                                </div>
                                <Wrapper additionalClassNames="h-[86px] w-[477.5px]">
                                  <Wrapper6 additionalClassNames="left-0 top-[74.5px]">Enter an amount between R2,000 and R400,000</Wrapper6>
                                  <div className="absolute border-2 border-[#bbb] border-solid h-[56px] left-0 overflow-clip top-0 w-[477.5px]" data-name="Input [loanamount]">
                                    <div className="-translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[24px] overflow-hidden text-[#17252e] text-[16px] text-ellipsis top-[26px] w-[473.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      <p className="leading-[24px] overflow-hidden">2000</p>
                                    </div>
                                  </div>
                                </Wrapper>
                              </div>
                            </div>
                            <div className="h-[112px] relative shrink-0 w-[477.5px]" data-name="Div">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24.5px] items-start pb-[2395px] relative size-full">
                                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#17252e] text-[15.9px] whitespace-nowrap">
                                  <p className="leading-[24px]">What’s your preferred repayment term?</p>
                                </div>
                                <Wrapper additionalClassNames="h-[88px] w-[477.5px]">
                                  <div className="absolute bg-[#c5c5c5] h-[5px] left-0 rounded-[5px] top-[52px] w-[477.5px]" data-name="Input [myRange]">
                                    <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[5px] not-italic overflow-hidden text-[#9d968e] text-[14px] text-ellipsis top-[2.5px] w-[477.5px] whitespace-nowrap">
                                      <p className="leading-[24px] overflow-hidden">2</p>
                                    </div>
                                  </div>
                                  <Wrapper6 additionalClassNames="left-0 top-[75.5px]">6 months</Wrapper6>
                                  <Wrapper6 additionalClassNames="left-[430.77px] top-[74.5px]">7 years</Wrapper6>
                                  <div className="absolute h-[40px] left-[88.3px] top-0 w-[107.63px]" data-name="Output [bubble]">
                                    <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[12px] not-italic text-[#17252e] text-[23.4px] top-[19.5px] whitespace-nowrap">
                                      <p className="leading-[32px]">2 years</p>
                                    </div>
                                  </div>
                                </Wrapper>
                              </div>
                            </div>
                            <Wrapper additionalClassNames="h-[115px] w-[477.5px]">
                              <div className="absolute h-[24px] left-0 top-[91px] w-[477.5px]" data-name="Label [nbd-personal-loan]">
                                <div className="-translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[43px] text-[#494f50] text-[16px] top-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  <p className="leading-[24px]">I have my own insurance</p>
                                </div>
                                <div className="absolute border-2 border-[#bbb] border-solid left-0 rounded-[12px] size-[24px] top-[2px]" data-name="Div" />
                              </div>
                              <div className="absolute h-[26px] left-0 top-[51px] w-[477.5px]" data-name="Label [nbd-personal-loan]">
                                <div className="absolute border-2 border-[#0c8450] border-solid left-0 rounded-[12px] size-[24px] top-[2px]" data-name="Div" />
                                <div className="absolute border-7 border-[#0c8450] border-solid left-[5px] rounded-[7px] size-[14px] top-[7px]" data-name="Div" />
                                <div className="-translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[43px] text-[#494f50] text-[0px] top-[14px] w-[391.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  <p>
                                    <span className="leading-[24px] text-[16px]">{`Add R8.07 to the loan amount for `}</span>
                                    <span className="[text-decoration-skip-ink:none] decoration-solid font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] text-[#008533] text-[18px] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      insurance
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="absolute h-[51px] left-0 top-0 w-[477.5px]" data-name="H7 [nbd-title]">
                                <div className="absolute left-[287.83px] overflow-clip size-[12px] top-[9.19px]" data-name="Image [tooltip-img]">
                                  <div className="absolute contents inset-0" data-name="Page-1">
                                    <div className="absolute contents inset-0" data-name="Calculator---Repaymant---Desktop">
                                      <Group />
                                    </div>
                                  </div>
                                </div>
                                <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[#17252e] text-[15.9px] top-[14.5px] whitespace-nowrap">
                                  <p className="leading-[24px]">{`Include insurance in your repayment `}</p>
                                </div>
                              </div>
                            </Wrapper>
                          </div>
                        </div>
                      </Wrapper>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-[56px] left-0 top-[200px] w-[1213px]" data-name="List [cmp-tabs__tablist]">
                <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[384.72px] not-italic text-[#17252e] text-[23.4px] top-[15.5px] whitespace-nowrap">
                  <p className="leading-[32px]">Loan consolidation calculator</p>
                </div>
                <div className="absolute border-[#008533] border-b-4 border-solid h-[56px] left-[40px] top-0 w-[264.72px]" data-name="Item [repayments_calculator]">
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[#17252e] text-[23.4px] top-[15.5px] whitespace-nowrap">
                    <p className="leading-[32px]">Repayments calculator</p>
                  </div>
                </div>
              </div>
              <div className="absolute h-[40px] left-0 top-[80px] w-[1213px]" data-name="H3 [nbd-calcul-head-title]">
                <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[#17252e] text-[0px] top-[19.5px] whitespace-nowrap">
                  <p>
                    <span className="leading-[40px] text-[30.9px]">{`Check your affordability `}</span>
                    <span className="font-['Inter:Regular',sans-serif] font-normal leading-[40px] not-italic text-[#17252e] text-[30.6px]">Use our loan calculators to see what works for you</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bg-white h-[32px] left-0 top-[1751px] w-[1425px]" data-name="Div [clearfix]" />
            <div className="absolute h-[508px] left-0 top-[1243px] w-[1425px]" data-name="Div [NBD_SPACING_2]">
              <div className="absolute bg-[#fafafa] h-[380px] left-[106px] overflow-clip shadow-[0px_25px_20px_-15px_rgba(0,0,0,0.1)] top-[128px] w-[1213px]" data-name="Div [ng-container]">
                <div className="absolute h-[380px] left-0 top-0 w-[1213px]" data-name="Div [row]">
                  <div className="absolute h-[338px] left-[606.5px] top-[21px] w-[606.5px]" data-name="Div [nbd-cobl-content-div]">
                    <div className="absolute h-[26px] left-0 top-[280px] w-[123.02px]" data-name="Link [cta-read-more-nedbank-cup]">
                      <div className="absolute h-[14px] left-[100.02px] top-[6px] w-[23px]" data-name="I [tertiary-btn-icon]">
                        <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Images">
                          <div className="absolute h-[14px] left-0 overflow-clip top-0 w-[23px]" data-name="Background Image">
                            <div className="absolute contents inset-[7.1%_4.44%_7.1%_4.51%]" data-name="Page-1">
                              <RightArrowGreen />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Wrapper2 additionalClassNames="left-0 text-[#008533] top-[13px]">{`Read more `}</Wrapper2>
                    </div>
                    <div className="absolute h-[112px] left-0 top-[128px] w-[501.5px]" data-name="Paragraph">
                      <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] pb-[1789px] pr-[11px] relative size-full text-[#494f50] text-[20px] whitespace-nowrap">
                        <Wrapper7>{`If the first digit of a goal scorer's jersey number `}</Wrapper7>
                        <Wrapper7>{`matches the first digit of your personal loan amount, `}</Wrapper7>
                        <Wrapper7>{`you could win your original loan amount back, up to `}</Wrapper7>
                        <Wrapper7>R50,000.</Wrapper7>
                      </div>
                    </div>
                    <div className="absolute h-[80px] left-0 top-[32px] w-[501.5px]" data-name="H3 [nbd-cobl-heading]">
                      <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold items-start leading-[0] not-italic pb-[1681px] pr-[37.969px] relative size-full text-[#17252e] text-[30.9px] whitespace-nowrap">
                        <div className="flex flex-col justify-center relative shrink-0">
                          <p className="leading-[40px]">{`Your loan could be the winning `}</p>
                        </div>
                        <div className="flex flex-col justify-center relative shrink-0">
                          <p className="leading-[40px]">goal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[380px] left-0 shadow-[0px_25px_20px_-15px_rgba(0,0,0,0.1)] top-0 w-[471.5px]" data-name="Image [nbd-cobl-imageshadow]">
                    <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageNbdCoblImageshadow1} />
                  </div>
                </div>
              </div>
              <div className="absolute bg-white h-[128px] left-0 top-0 w-[1425px]" data-name="Div [clearfix]" />
            </div>
            <div className="absolute bg-white h-[599px] left-0 top-[644px] w-[1425px]" data-name="Div [eligibility-info]">
              <div className="absolute h-[519px] left-[91px] top-[80px] w-[1243px]" data-name="Div [row]">
                <div className="absolute bg-white border border-[#e5edec] border-solid h-[244px] left-[636.5px] overflow-clip rounded-[12px] shadow-[0px_25px_20px_-15px_rgba(0,0,0,0.1)] top-[275px] w-[591.5px]" data-name="Div [card]">
                  <div className="absolute h-[242px] left-0 top-0 w-[589.5px]" data-name="Div [card-body]">
                    <Wrapper10>
                      <div className="h-[80px] relative w-[82px]" data-name="Div [icon-wrapper]">
                        <div className="absolute h-[80px] left-0 overflow-clip top-0 w-[82px]" data-name="Background Images">
                          <div className="absolute h-[80px] left-0 overflow-clip top-0 w-[82px]" data-name="Background Image">
                            <div className="absolute contents inset-0" data-name="Dev-uploads-MVP1">
                              <div className="absolute contents inset-0" data-name="Card-UI">
                                <CardsFeatureBenefit />
                              </div>
                            </div>
                          </div>
                        </div>
                        <Wrapper9 additionalClassNames="left-[21px] size-[40px]">
                          <div className="overflow-clip relative size-[40px]" data-name="Image [card-icon]">
                            <div className="absolute contents inset-[0_0.05%_4%_3.95%]" data-name="Page-1">
                              <div className="absolute inset-[0_0.05%_4%_3.95%]" data-name="discount">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.4 38.4">
                                  <g id="discount">
                                    <g id="Group">
                                      <path clipRule="evenodd" d={svgPaths.p3937040} fillRule="evenodd" id="Shape" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                                      <path d={svgPaths.p9ce6e00} id="Oval" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                                      <path d={svgPaths.p38ba0380} id="Oval_2" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                                      <path d={svgPaths.p174adbf0} id="Oval_3" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                                      <path d={svgPaths.p1f444f00} id="Shape_2" stroke="var(--stroke-0, #5FA317)" strokeWidth="1.5" />
                                    </g>
                                    <g id="Rectangle-path" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </Wrapper9>
                      </div>
                    </Wrapper10>
                    <div className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[48px] leading-[0] left-[36px] text-[#17252e] text-[16px] top-[144px] w-[517.5px] whitespace-nowrap" data-name="Paragraph [card-text]">
                      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[119.17px] top-[36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[24px]">you need a longer or short term loan.</p>
                      </div>
                      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-px top-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[24px]">{`Enjoy a personal interest rate that is tailored to your budget, whether `}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white border border-[#e5edec] border-solid h-[244px] left-[15px] overflow-clip rounded-[12px] shadow-[0px_25px_20px_-15px_rgba(0,0,0,0.1)] top-[275px] w-[591.5px]" data-name="Div [card]">
                  <div className="absolute h-[242px] left-0 top-0 w-[589.5px]" data-name="Div [card-body]">
                    <Wrapper10>
                      <div className="h-[80px] relative w-[82px]" data-name="Div [icon-wrapper]">
                        <div className="absolute h-[80px] left-0 overflow-clip top-0 w-[82px]" data-name="Background Images">
                          <div className="absolute h-[80px] left-0 overflow-clip top-0 w-[82px]" data-name="Background Image">
                            <div className="absolute contents inset-0" data-name="Dev-uploads-MVP1">
                              <div className="absolute contents inset-0" data-name="Card-UI">
                                <CardsFeatureBenefit />
                              </div>
                            </div>
                          </div>
                        </div>
                        <Wrapper9 additionalClassNames="h-[29.34px] left-[26.33px] w-[40px]">
                          <div className="h-[40px] overflow-clip relative w-[29.34px]" data-name="Image [card-icon]">
                            <div className="absolute contents inset-[5.25%_6.45%_2.63%_6.62%]" data-name="Icons-/-Visual-Icons">
                              <div className="absolute contents inset-[5.25%_6.45%_2.63%_6.62%]" data-name="Icons/Visual-Icons/-Calculator">
                                <div className="absolute contents inset-[5.25%_6.45%_2.63%_6.62%]" data-name="thin-0417_calculator">
                                  <div className="absolute inset-[5.25%_6.45%_2.63%_6.62%]" data-name="Group">
                                    <div className="absolute inset-[-2.04%_-2.94%]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.006 38.3488">
                                        <g id="Group">
                                          <path clipRule="evenodd" d={svgPaths.p27075900} fillRule="evenodd" id="Shape" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                          <path d="M5.5138 19.9903H11.7107" id="Shape_2" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                          <path d="M15.1169 19.9903H21.3139" id="Shape_3" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                          <path d="M15.1169 29.5913H21.3139" id="Shape_4" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                          <path d="M8.61227 16.8926V23.0882" id="Shape_5" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                          <path d={svgPaths.p2a592900} id="Shape_6" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                          <path d={svgPaths.p371d4fc0} id="Shape_7" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                          <path clipRule="evenodd" d={svgPaths.p15018000} fillRule="evenodd" id="Rectangle-path" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Wrapper9>
                      </div>
                    </Wrapper10>
                    <div className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[48px] leading-[0] left-[36px] text-[#17252e] text-[16px] top-[144px] w-[517.5px] whitespace-nowrap" data-name="Paragraph [card-text]">
                      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[153.48px] top-[36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[24px]">can afford before you apply.</p>
                      </div>
                      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[8px] top-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[24px]">{`Use our quick and easy loan repayments calculator to see what you `}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white border border-[#e5edec] border-solid h-[244px] left-[636.5px] overflow-clip rounded-[12px] shadow-[0px_25px_20px_-15px_rgba(0,0,0,0.1)] top-[15.5px] w-[591.5px]" data-name="Div [card]">
                  <div className="absolute h-[242px] left-0 top-0 w-[589.5px]" data-name="Div [card-body]">
                    <Wrapper10>
                      <div className="h-[80px] relative w-[82px]" data-name="Div [icon-wrapper]">
                        <div className="absolute h-[80px] left-0 overflow-clip top-0 w-[82px]" data-name="Background Images">
                          <div className="absolute h-[80px] left-0 overflow-clip top-0 w-[82px]" data-name="Background Image">
                            <div className="absolute contents inset-0" data-name="Dev-uploads-MVP1">
                              <div className="absolute contents inset-0" data-name="Card-UI">
                                <CardsFeatureBenefit />
                              </div>
                            </div>
                          </div>
                        </div>
                        <Wrapper9 additionalClassNames="left-[21px] size-[40px]">
                          <div className="overflow-clip relative size-[40px]" data-name="Image [card-icon]">
                            <div className="absolute inset-[5%_2.3%_7.07%_2.5%]" data-name="extra-cash">
                              <div className="absolute inset-[-2.13%_-4.22%_-2.13%_-1.97%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4365 36.6724">
                                  <g id="extra-cash">
                                    <path clipRule="evenodd" d={svgPaths.p1340a300} fillRule="evenodd" id="Shape" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                    <path d={svgPaths.p15d71000} id="Shape_2" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                    <path d={svgPaths.p6358f20} id="Shape_3" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                    <path clipRule="evenodd" d={svgPaths.p882d700} fillRule="evenodd" id="Rectangle-path" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                    <path d={svgPaths.p1fe3c100} id="Shape_4" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                    <path d={svgPaths.p1bce400} id="Shape_5" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </Wrapper9>
                      </div>
                    </Wrapper10>
                    <div className="-translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[40.2px] text-[#17252e] text-[16px] top-[156px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">No hidden fees. Just clear pricing and flexible loan repayment terms.</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white border border-[#e5edec] border-solid h-[244px] left-[15px] overflow-clip rounded-[12px] shadow-[0px_25px_20px_-15px_rgba(0,0,0,0.1)] top-[15.5px] w-[591.5px]" data-name="Div [card]">
                  <div className="absolute h-[242px] left-0 top-0 w-[589.5px]" data-name="Div [card-body]">
                    <Wrapper10>
                      <div className="h-[80px] relative w-[82px]" data-name="Div [icon-wrapper]">
                        <div className="absolute h-[80px] left-0 overflow-clip top-0 w-[82px]" data-name="Background Images">
                          <div className="absolute h-[80px] left-0 overflow-clip top-0 w-[82px]" data-name="Background Image">
                            <div className="absolute contents inset-0" data-name="Dev-uploads-MVP1">
                              <div className="absolute contents inset-0" data-name="Card-UI">
                                <CardsFeatureBenefit />
                              </div>
                            </div>
                          </div>
                        </div>
                        <Wrapper9 additionalClassNames="h-[37.5px] left-[22.25px] w-[40px]">
                          <div className="h-[40px] overflow-clip relative w-[37.5px]" data-name="Image [card-icon]">
                            <div className="absolute contents inset-[5.7%_4.38%_5.7%_4.09%]" data-name="Icons-/-Visual-Icons">
                              <div className="absolute contents inset-[5.7%_4.38%_5.7%_4.09%]" data-name="Icons/Visual-Icons/-Money-Payment-Dollars-Coins-Cash">
                                <div className="absolute contents inset-[5.7%_4.38%_5.7%_4.09%]" data-name="thin-0426_money_payment_dollars_coins_cash">
                                  <div className="absolute inset-[5.7%_4.38%_5.7%_4.09%]" data-name="Group">
                                    <div className="absolute inset-[-2.41%_-2.18%_-2.12%_-2.18%]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8252 37.0417">
                                        <g id="Group">
                                          <path d={svgPaths.p2bc99b00} id="Shape" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                          <path d={svgPaths.p337ee080} id="Shape_2" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                          <path d={svgPaths.p1b6cb180} id="Shape_3" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                          <path d={svgPaths.p2ecfce80} id="Shape_4" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                          <path d={svgPaths.p33e51300} id="Shape_5" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                          <path d={svgPaths.p137a500} id="Shape_6" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                          <path d={svgPaths.p5bbf00} id="Shape_7" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                          <path d={svgPaths.p10ef6980} id="Oval" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                          <g id="Group_2">
                                            <path d={svgPaths.p33be5580} id="Shape_8" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                            <path d={svgPaths.p17dc44c0} id="Shape_9" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                            <path d={svgPaths.p4c34400} id="Shape_10" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                            <path d={svgPaths.p1fd7b880} id="Shape_11" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                            <path d={svgPaths.p12678ee0} id="Shape_12" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                            <path d={svgPaths.p151b6b00} id="Shape_13" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                            <path d={svgPaths.p24d00fc0} id="Shape_14" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                            <path d={svgPaths.p2357e200} id="Shape_15" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                            <path d={svgPaths.p18606900} id="Oval_2" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                          </g>
                                          <g id="Group_3">
                                            <path d={svgPaths.p1e0bf800} id="Shape_16" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                            <path d={svgPaths.p12e53c00} id="Shape_17" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                            <path d={svgPaths.p24884180} id="Shape_18" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                            <path d={svgPaths.p35c76680} id="Shape_19" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                            <path d={svgPaths.p1c2d7f80} id="Shape_20" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                            <path d={svgPaths.p2a6c1b00} id="Oval_3" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                          </g>
                                          <path d={svgPaths.pa23fb80} id="Shape_21" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                          <path d={svgPaths.pb21a900} id="Shape_22" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                          <path d={svgPaths.p3ef65c80} id="Shape_23" stroke="var(--stroke-0, #78BE20)" strokeWidth="1.5" />
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Wrapper9>
                      </div>
                    </Wrapper10>
                    <div className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[48px] leading-[0] left-[36px] text-[#17252e] text-[16px] top-[144px] w-[517.5px] whitespace-nowrap" data-name="Paragraph [card-text]">
                      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[121.77px] top-[36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[24px]">Greenbacks are redeemable as cash.</p>
                      </div>
                      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[19.3px] top-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[24px]">{`Earn rewards every month you pay your loan back on time. Your `}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white h-[80px] left-0 top-[500px] w-[1425px]" data-name="Div [clearfix]" />
            <div className="absolute bg-white h-[64px] left-0 top-[580px] w-[1425px]" data-name="Section [nbd-head-desc-container]">
              <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[436.39px] not-italic text-[#17252e] text-[38.6px] top-[23.5px] whitespace-nowrap">
                <p>
                  <span className="leading-[48px]">{`Why choose `}</span>
                  <span className="font-['Inter:Regular',sans-serif] font-normal leading-[48px] not-italic text-[#17252e]">a Nedbank loan?</span>
                </p>
              </div>
            </div>
            <div className="absolute bg-white h-[500px] left-0 top-0 w-[1425px]" data-name="Div [row]">
              <div className="absolute h-[296px] left-[71.88px] top-[79.66px] w-[625.63px]" data-name="Div [nbd-banner-details]">
                <div className="absolute bg-[#17252e] border-2 border-[#17252e] border-solid h-[56px] left-0 rounded-[6px] top-[240px] w-[250px]" data-name="Link [nbdbannerbutton]">
                  <Wrapper2 additionalClassNames="left-[75.98px] text-white top-[26px]">Get started</Wrapper2>
                </div>
                <div className="absolute h-[112px] left-0 top-[88px] w-[593.63px]" data-name="Paragraph">
                  <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] pb-[267.656px] pr-[6.813px] relative size-full text-[#494f50] text-[20px] whitespace-nowrap">
                    <Wrapper7>{`Apply today for a personal loan from R2,000 to R400,000 at our `}</Wrapper7>
                    <Wrapper7>{`best rates, with repayment terms up to 84 months. Plus, you `}</Wrapper7>
                    <Wrapper7>{`could stand a chance to win your loan amount back, up to `}</Wrapper7>
                    <Wrapper7>R50,000 during the Nedbank Cup!</Wrapper7>
                  </div>
                </div>
                <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[#17252e] text-[46.7px] top-[28px] whitespace-nowrap">
                  <p className="leading-[56px]">Win your loan back</p>
                </div>
              </div>
              <div className="absolute h-[500px] left-[712.5px] top-0 w-[712.5px]" data-name="Figure [cdq_element_4]">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <div className="absolute bg-white inset-0" />
                  <img alt="" className="absolute max-w-none object-cover size-full" src={imgFigureCdqElement4} />
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
        <div className="absolute h-[461px] left-0 top-[7289px] w-[1425px]" data-name="Div [container-fluid]">
          <div className="content-stretch flex flex-col items-start pb-[7204px] px-[15px] relative size-full">
            <Wrapper additionalClassNames="h-[402px] w-[1395px]">
              <div className="absolute bg-[#fafafa] content-stretch flex h-[316px] items-start left-[-15px] pb-[60px] pl-[105px] pt-[40px] top-[86px] w-[1215px]" data-name="Div [row]">
                <div className="h-[120px] relative shrink-0 w-[303.75px]" data-name="Div [col-md-3]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] pb-[7391px] pr-[163.531px] relative size-full text-[#494f50] text-[16px] whitespace-nowrap">
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">About us</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">Careers</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">Investor relations</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">Nedbank suppliers</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">News and insights</p>
                    </div>
                  </div>
                </div>
                <div className="h-[144px] relative shrink-0 w-[303.75px]" data-name="Div [col-md-3]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] pb-[7391px] pr-[125.438px] relative size-full text-[#494f50] text-[16px] whitespace-nowrap">
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">Contact us</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">Get debt assistance</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">Resume application</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">Promotions</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">Nedbank blog</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">Need help? Chat to Enbi</p>
                    </div>
                  </div>
                </div>
                <div className="h-[192px] relative shrink-0 w-[303.75px]" data-name="Div [col-md-3]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] pb-[7391px] pr-[121.922px] relative size-full text-[#494f50] text-[16px] whitespace-nowrap">
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">2026 rates and fees</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">Digital banking</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">Switch to Nedbank</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">Log in to Online Banking</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">Fraud awareness</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">Unclaimed balances</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">Depositor insurance</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">Dormant accounts</p>
                    </div>
                  </div>
                </div>
                <div className="h-[216px] relative shrink-0 w-[303.75px]" data-name="Div [col-md-3]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] pb-[7391px] pr-[107.688px] relative size-full text-[#494f50] text-[16px] whitespace-nowrap">
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">Code of Banking Practice</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">Disclaimer</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">FAIS Conflict of Interest</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">FATCA and CRS</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">FICA</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">PAIA</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">Privacy Notice</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">Terms and conditions</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">Termination of agreement</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-[#fafafa] content-stretch flex h-[86px] items-start left-[-15px] pl-[105px] top-0 w-[1215px]" data-name="Div [row]">
                <DivColMdText text="Nedbank Group" />
                <DivColMdText text="Connect with us" />
                <DivColMdText text="Bank with us" />
                <DivColMdText text="Legal" />
              </div>
            </Wrapper>
            <div className="h-[59px] relative shrink-0 w-[1395px]" data-name="Div [nbd-footer-bottom]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20.234px] items-start pb-[7646px] pt-[53.766px] px-[90px] relative size-full">
                <div className="h-[14px] relative shrink-0 w-[100px]" data-name="Image">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                    <div className="absolute contents inset-[0_0_5.47%_0]" data-name="Page-1">
                      <div className="absolute contents inset-[0_0_5.47%_0]" data-name="Footer---Desktop">
                        <div className="absolute contents inset-[0_0_5.47%_0]" data-name="Footer">
                          <div className="absolute contents inset-[0_0_5.47%_0]" data-name="Disclaimer---logo---social">
                            <div className="absolute inset-[0_0_5.47%_0]" data-name="Combined-Shape">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 13.2345">
                                <g id="Combined-Shape">
                                  <path d={svgPaths.p9050200} fill="var(--fill-0, #009639)" id="Vector" />
                                  <path d={svgPaths.p9050200} fill="var(--fill-0, #006341)" id="Vector_2" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <DivRow additionalClassNames="h-[45px] w-[1215px]">
                  <Wrapper additionalClassNames="h-[45px] w-[911.25px]">
                    <Wrapper3 additionalClassNames="left-0 text-[#494f50]">Nedbank Ltd Reg No 1951/000009/06. Licensed financial services provider (FSP9363) and registered credit provider (NCRCP16)</Wrapper3>
                  </Wrapper>
                  <Wrapper additionalClassNames="h-[29px] w-[303.75px]">
                    <div className="absolute left-[271.75px] opacity-50 overflow-clip size-[22px] top-0" data-name="Image [nbd-social-icon]">
                      <div className="absolute inset-[14.45%_10.42%_15.35%_14.58%]" data-name="x-logo">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 15.443">
                          <g id="x-logo">
                            <path d={svgPaths.p35950200} fill="var(--fill-0, #8C9596)" id="x-icon" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute left-[235.3px] opacity-50 overflow-clip size-[22px] top-0" data-name="Image [nbd-social-icon]">
                      <div className="absolute contents inset-[22.73%_9.09%_18.18%_9.09%]" data-name="Page-3">
                        <div className="absolute inset-[22.73%_9.09%_18.18%_9.09%]" data-name="youtube-hover">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
                            <g id="youtube-hover">
                              <path d={svgPaths.p3ca3c540} fill="var(--fill-0, #17252E)" id="youtube" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[198.84px] opacity-50 overflow-clip size-[22px] top-0" data-name="Image [nbd-social-icon]">
                      <div className="absolute contents inset-[13.64%_13.97%_13.97%_13.64%]" data-name="Page-3">
                        <div className="absolute inset-[13.64%_13.97%_13.97%_13.64%]" data-name="instagram-hover">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9255 15.9255">
                            <g id="instagram-hover">
                              <path d={svgPaths.p32223c90} fill="var(--fill-0, #17252E)" id="instagram" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[162.39px] size-[22px] top-0" data-name="Image [nbd-social-icon]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                        <g id="Image [nbd-social-icon]" opacity="0.5">
                          <path d={svgPaths.p18b28080} fill="var(--fill-0, #17252E)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <div className="absolute left-[125.94px] opacity-50 overflow-clip size-[22px] top-0" data-name="Image [nbd-social-icon]">
                      <div className="absolute contents inset-[13.64%_31.82%]" data-name="Page-3">
                        <div className="absolute inset-[13.64%_31.82%]" data-name="facebook-hover">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 16">
                            <g id="facebook-hover">
                              <path d={svgPaths.pb536900} fill="var(--fill-0, #17252E)" id="facebook" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Wrapper>
                </DivRow>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}