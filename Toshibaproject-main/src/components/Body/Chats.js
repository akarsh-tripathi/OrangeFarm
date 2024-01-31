import React from 'react'

export default function Chats() {
  return (
    <div className="w-80 rounded-2xl bg-white overflow-hidden shrink-0 flex flex-col items-center justify-start p-6 box-border gap-[62px] min-w-[320px] mq450:gap-[31px]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                                <div className="flex flex-col items-start justify-start gap-[8px]">
                                    <h3 className="m-0 relative text-inherit tracking-[-0.2px] font-semibold font-inherit mq450:text-base">
                                        Chats
                                    </h3>
                                    <div className="relative text-sm tracking-[-0.3px] text-dark-gray">
                                        2 unread messages
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-6 pl-0 gap-[8px]">
                                    <button className="cursor-pointer [border:none] p-0 bg-light-orange h-14 flex-1 relative rounded-2xl">
                                        <img
                                            className="absolute top-[12px] left-[12px] w-8 h-8 object-cover"
                                            alt=""
                                            src="/avatar-2@2x.png"
                                        />
                                        <div className="absolute top-[15.4px] left-[38px] rounded-[50%] bg-red box-border w-2 h-2 z-[1] border-[2px] border-solid border-light-orange" />
                                    </button>
                                    <button className="cursor-pointer [border:none] p-0 bg-light-orange h-14 flex-1 relative rounded-2xl">
                                        <img
                                            className="absolute top-[12px] left-[12px] w-8 h-8 object-cover"
                                            alt=""
                                            src="/avatar-7@2x.png"
                                        />
                                        <div className="absolute top-[15.4px] left-[38px] rounded-[50%] bg-red box-border w-2 h-2 z-[1] border-[2px] border-solid border-light-orange" />
                                    </button>
                                    <div className="rounded-2xl flex flex-row items-center justify-start p-3">
                                        <img
                                            className="h-8 w-8 relative object-cover"
                                            alt=""
                                            src="/avatar-8@2x.png"
                                        />
                                    </div>
                                    <div className="rounded-2xl flex flex-row items-center justify-start p-3">
                                        <img
                                            className="h-8 w-8 relative object-cover"
                                            alt=""
                                            src="/avatar-9@2x.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-[17px] flex flex-row items-start justify-start text-sm text-dark-orange">
                                <div className="self-stretch w-[102px] flex flex-row items-end justify-start gap-[4px]">
                                    <div className="self-stretch flex-1 relative tracking-[-0.3px]">
                                        All messages
                                    </div>
                                    <img
                                        className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
  )
}
