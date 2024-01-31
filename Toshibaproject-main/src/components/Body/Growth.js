import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";


export default function Growth() {

  //const data = awit axios.GET("https://localhost:5000");
  const data = [];

  return (
    <div className="w-[540px] flex flex-col items-start justify-start gap-[15px] min-w-[540px] max-w-full mq700:min-w-full mq925:flex-1">
      <div className="self-stretch rounded-2xl bg-white overflow-hidden flex flex-col items-center justify-start p-6 box-border gap-[8px] min-w-[320px] min-h-[200px] max-w-full">
        <div className="self-stretch flex flex-row items-center justify-between pt-0 px-0 pb-4 gap-[20px] mq450:flex-wrap">
          <h3 className="m-0 relative text-inherit tracking-[-0.2px] font-semibold font-inherit mq450:text-base">
            Growth
          </h3>
          <div className="flex flex-row items-start justify-start gap-[4px] text-sm text-dark-gray">
            <div className="relative tracking-[-0.3px]">Yearly</div>
            <img
              className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-from-tablerio-14.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3.5 pl-0 box-border max-w-full text-3xs text-mid-gray">
          <AreaChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
}
