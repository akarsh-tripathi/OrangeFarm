import React from "react";

export default function NavBar() {
  return (
    <>
      <div className="w-full rounded-3xl flex flex-row items-center justify-start py-3 px-5 box-border gap-[12px] min-w-[264px] max-w-[320px]">
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
          src="/icon1.svg"
        />
        <div className="flex-1 relative tracking-[-0.25px] leading-[14px]">
          Dashboard
        </div>
      </div>
      <div className="self-stretch h-[41px] flex flex-row items-start justify-start min-w-[264px]">
        <div className="self-stretch flex-1 rounded-3xl flex flex-row items-center justify-start py-3 pr-9 pl-5 box-border relative gap-[12px] min-w-[264px] max-w-[320px]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0"
            alt=""
            src="/icon-from-tablerio-2.svg"
          />
          <div className="flex-1 relative tracking-[-0.25px] leading-[14px]">
            Customers
          </div>
          <img
            className="h-4 w-4 absolute my-0 mx-[!important] top-[12.5px] left-[228px] overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/closed.svg"
          />
        </div>
      </div>
      <div className="w-full rounded-3xl flex flex-row items-center justify-start py-3 px-5 box-border gap-[12px] min-w-[264px] max-w-[320px]">
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
          alt=""
          src="/icon-from-tablerio-3.svg"
        />
        <div className="flex-1 relative tracking-[-0.25px] leading-[14px]">
          All reports
        </div>
      </div>
      <div className="w-full rounded-3xl flex flex-row items-center justify-start py-3 px-5 box-border gap-[12px] min-w-[264px] max-w-[320px]">
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
          alt=""
          src="/icon-from-tablerio-4.svg"
        />
        <div className="flex-1 relative tracking-[-0.25px] leading-[14px]">
          Geography
        </div>
      </div>
      <div className="w-full rounded-3xl flex flex-row items-center justify-start py-3 px-5 box-border gap-[12px] min-w-[264px] max-w-[320px]">
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
          alt=""
          src="/icon-from-tablerio-5.svg"
        />
        <div className="flex-1 relative tracking-[-0.25px] leading-[14px]">
          Conversations
        </div>
      </div>
      <div className="w-full rounded-3xl flex flex-row items-center justify-start py-3 px-5 box-border gap-[12px] min-w-[264px] max-w-[320px]">
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
          alt=""
          src="/icon-from-tablerio-6.svg"
        />
        <div className="flex-1 relative tracking-[-0.25px] leading-[14px]">
          Deals
        </div>
      </div>
      <div className="w-full rounded-3xl flex flex-row items-center justify-start py-3 px-5 box-border gap-[12px] min-w-[264px] max-w-[320px]">
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
          alt=""
          src="/icon-from-tablerio-7.svg"
        />
        <div className="flex-1 relative tracking-[-0.25px] leading-[14px]">
          Export
        </div>
      </div>

      <div className="self-stretch h-full flex flex-col items-center justify-end pt-4 px-2 pb-6 box-border gap-[12px]">
        <div className="self-stretch h-10 flex flex-row items-center justify-start py-0 px-5 box-border gap-[12px]">
          <img
            className="h-8 w-8 relative object-cover"
            loading="eager"
            alt=""
            src="/avatar@2x.png"
          />
          <div className="flex flex-col items-start justify-center gap-[4px]">
            <div className="relative tracking-[-0.25px] font-medium">
              Gustavo Xavier
            </div>
            <div className="rounded-3xl bg-mid-orange flex flex-row items-center justify-center py-0 px-1.5 text-3xs">
              <div className="relative tracking-[-0.5px] leading-[16px]">
                Admin
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-center gap-[2px]">
        <div className="w-full rounded-3xl flex flex-row items-center justify-start py-3 px-5 box-border gap-[12px] min-w-[264px] max-w-[320px]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/icon-from-tablerio-8.svg"
          />
          <div className="flex-1 relative tracking-[-0.25px] leading-[14px]">
            Settings
          </div>
        </div>
        <div className="w-full rounded-3xl flex flex-row items-center justify-start py-3 px-5 box-border gap-[12px] min-w-[264px] max-w-[320px] text-dark-red">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            src="/icon-from-tablerio-9.svg"
          />
          <div className="flex-1 relative tracking-[-0.25px] leading-[14px]">
            Log out
          </div>
        </div>
      </div>
    </>
  );
}
