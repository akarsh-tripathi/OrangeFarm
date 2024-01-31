import React from 'react'

export default function Topstates() {
  return (
    <div className="w-80 rounded-2xl bg-white overflow-hidden shrink-0 flex flex-col items-center justify-start pt-6 px-6 pb-11 box-border gap-[24px] min-w-[320px]">
    <div className="self-stretch flex flex-row items-start justify-start">
        <h3 className="m-0 relative text-inherit tracking-[-0.2px] font-semibold font-inherit mq450:text-base">
            Top states
        </h3>
    </div>
    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-sm">
        <div className="self-stretch rounded [background:linear-gradient(90deg,_#ffcd71,_rgba(255,_205,_113,_0))] flex flex-row items-center justify-start py-1.5 px-2 relative gap-[211px]">
            <div className="relative uppercase font-semibold">NY</div>
            <div className="absolute my-0 mx-[!important] top-[calc(50%_-_6.5px)] right-[8px] text-3xs uppercase font-medium text-right">
                120k
            </div>
        </div>
        <div className="w-[229px] rounded [background:linear-gradient(90deg,_#ffcd71,_rgba(255,_205,_113,_0))] flex flex-row items-center justify-start py-1.5 px-2 box-border relative gap-[170px]">
            <div className="relative uppercase font-semibold">MA</div>
            <div className="absolute my-0 mx-[!important] top-[calc(50%_-_6.5px)] right-[8px] text-3xs uppercase font-medium text-right">
                80k
            </div>
        </div>
        <div className="w-[207px] rounded [background:linear-gradient(90deg,_#ffcd71,_rgba(255,_205,_113,_0))] flex flex-row items-center justify-start py-1.5 px-2 box-border relative gap-[151px]">
            <div className="relative uppercase font-semibold">NH</div>
            <div className="absolute my-0 mx-[!important] top-[calc(50%_-_6.5px)] right-[8px] text-3xs uppercase font-medium text-right">
                70k
            </div>
        </div>
        <div className="w-[150px] rounded [background:linear-gradient(90deg,_#ffcd71,_rgba(255,_205,_113,_0))] flex flex-row items-center justify-start py-1.5 px-2 box-border relative gap-[94px]">
            <div className="relative uppercase font-semibold">OR</div>
            <div className="absolute my-0 mx-[!important] top-[calc(50%_-_6.5px)] right-[8px] text-3xs uppercase font-medium text-right">
                50k
            </div>
        </div>
    </div>
</div>
  )
}
