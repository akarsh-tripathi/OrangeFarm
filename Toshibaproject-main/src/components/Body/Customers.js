import React from "react";

export default function Customers() {
  return (
    <div className="flex-1 rounded-2xl bg-white overflow-hidden flex flex-col items-start justify-start pt-6 px-0 pb-[25px] box-border gap-[29px] min-w-[361px] min-h-[400px] max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border mq450:min-w-full">
      <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-6 gap-[20px] mq450:flex-wrap">
          <h3 className="m-0 relative text-inherit tracking-[-0.2px] font-semibold font-inherit mq450:text-base">
            Customers
          </h3>
          <div className="flex flex-row items-start justify-start gap-[4px] text-sm text-dark-gray">
            <div className="relative tracking-[-0.3px]">
              <span>{`Sort by `}</span>
              <span className="font-medium">Newest</span>
            </div>
            <img
              className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-from-tablerio-14.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-2 text-sm">
          <div className="self-stretch rounded-2xl flex flex-row items-center justify-start p-4 gap-[12px] mq450:flex-wrap">
            <img
              className="h-8 w-8 relative object-cover"
              alt=""
              src="/avatar-1@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <div className="relative tracking-[-0.3px] font-medium">
                Chris Friedkly
              </div>
              <div className="relative text-xs tracking-[-0.3px] text-dark-gray">
                Supermarket Villanova
              </div>
            </div>
            <div className="h-6 w-6 hidden flex-row items-center justify-center">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
              />
            </div>
            <div className="h-6 w-6 hidden flex-row items-center justify-center">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
              />
            </div>
            <div className="h-6 w-6 hidden flex-row items-center justify-center">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
              />
            </div>
          </div>
          <div className="self-stretch rounded-2xl bg-light-orange flex flex-row items-center justify-between py-[17px] pr-[26px] pl-4 gap-[20px] mq450:flex-wrap">
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <img
                className="h-8 w-8 relative object-cover"
                alt=""
                src="/avatar-2@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[2px]">
                <div className="relative tracking-[-0.3px] font-medium">
                  Maggie Johnson
                </div>
                <div className="relative text-xs tracking-[-0.3px] text-dark-gray">
                  Oasis Organic Inc.
                </div>
              </div>
            </div>
            <div className="h-6 flex flex-row items-center justify-start gap-[23px]">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/icon-from-tablerio-18.svg"
              />
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/icon-from-tablerio-19.svg"
              />
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/Icon=tabler-icon-pencil.svg"
              />
              
              <div className="h-[25px] w-px relaive box-border opacity-[0.2] border-r-[1px] border-solid border-dark-orange" />
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/icon-from-tablerio-21.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch rounded-2xl flex flex-row items-end justify-start pt-4 px-4 pb-[17px] gap-[12px] mq450:flex-wrap">
              <img
                className="h-8 w-8 relative object-cover"
                alt=""
                src="/avatar-3@2x.png"
              />
              <div className="h-[34px] flex flex-col items-start justify-start gap-[1px]">
                <div className="relative tracking-[-0.3px] font-medium">
                  Gael Harry
                </div>
                <div className="relative text-xs tracking-[-0.3px] text-dark-gray">
                  New York Finest Fruits
                </div>
              </div>
              <div className="h-6 w-6 hidden flex-row items-center justify-center">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                />
              </div>
              <div className="h-6 w-6 hidden flex-row items-center justify-center">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                />
              </div>
              <div className="h-6 w-6 hidden flex-row items-center justify-center">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                />
              </div>
            </div>
            <div className="self-stretch rounded-2xl flex flex-row items-center justify-start p-4 gap-[12px] z-[1] mt-[-1px] mq450:flex-wrap">
              <img
                className="h-8 w-8 relative object-cover"
                alt=""
                src="/avatar-4@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[2px]">
                <div className="relative tracking-[-0.3px] font-medium">
                  Jenna Sullivan
                </div>
                <div className="relative text-xs tracking-[-0.3px] text-dark-gray">
                  Walmart
                </div>
              </div>
              <div className="h-6 w-6 hidden flex-row items-center justify-center">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                />
              </div>
              <div className="h-6 w-6 hidden flex-row items-center justify-center">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                />
              </div>
              <div className="h-6 w-6 hidden flex-row items-center justify-center">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-6 text-sm text-dark-orange">
        <div className="flex flex-row items-end justify-start gap-[4px]">
          <div className="relative tracking-[-0.3px]">All customers</div>
          <img
            className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
            alt=""
            src="/icon-from-tablerio-28.svg"
          />
        </div>
      </div>
    </div>
  );
}
