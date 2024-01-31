import React from 'react'

 function Logo() {
  return (
    <div> <div className="flex-1 flex flex-row items-center justify-center relative gap-[6.4px]">
    <div className="overflow-hidden flex flex-row items-center justify-center relative gap-[6.97px]">
      <div className="h-[21px] w-[20.8px] relative rounded-[50%] bg-orange" />
      <div className="h-[12.2px] w-[14.1px] absolute my-0 mx-[!important] top-[4.86px] left-[-3px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.6),_rgba(255,_255,_255,_0))] [transform:_rotate(-33.41deg)] [transform-origin:0_0] z-[1]" />
      <img
        className="h-[7px] w-[7.5px] absolute my-0 mx-[!important] top-[0px] right-[0.5px] object-cover z-[2]"
        loading="eager"
        alt=""
        src="/union@2x.png"
      />
    </div>
    <img
      className="h-6 w-[121px] relative"
      loading="eager"
      alt=""
      src="/frame-3.svg"
    />
    <div className="w-[121px] absolute my-0 mx-[!important] top-[0px] left-[27.2px] tracking-[-0.68px] font-semibold hidden z-[2] mq450:text-[18px]">
      OrangeFarm
    </div>
  </div> </div>
  )
}
export default Logo;
