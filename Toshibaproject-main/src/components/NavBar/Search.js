import React from 'react'

function Search() {
  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-3 pb-3 top-[0] z-[99] sticky">
    <div className="self-stretch rounded-[20px] bg-white flex flex-row items-center justify-start py-3 px-4 gap-[8px] border-[1px] border-solid border-light-gray">
      <img
        className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
        alt=""
        src="/icon-from-tablerio.svg"
      />
      <input
        className="w-[45px] [border:none] [outline:none] font-inter text-sm bg-[transparent] h-3.5 relative tracking-[-0.25px] leading-[14px] text-mid-gray text-left inline-block"
        placeholder="Search"
        type="text"
      />
    </div>
  </div>
  )
}
export default Search;
