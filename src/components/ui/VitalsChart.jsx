// VitalsChart draws the 24h Patient Vitals Monitor line chart.
// It uses a chart library called Recharts.

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { vitalsData } from "../../data/dashboardData";

export default function VitalsChart() {
  return (
    <div className="bg-[#181211] border border-neutral-900 rounded-xl p-5">

      {/* Title + subtitle */}
      <div className="mb-4">
        <h3 className="text-[13px] font-semibold text-white">
          24h Patient Vitals Monitor
        </h3>
        <p className="text-[11px] text-[#655C59] mt-1">
          Hourly average heart rate, blood pressure, and SpO2 across all monitored patients
        </p>
      </div>

      {/* Chart area - NO border here, just padding */}
      <div className="w-full">
        <ResponsiveContainer width="100%" height={340}>
          <LineChart
            data={vitalsData}
            margin={{ top: 10, right: 10, bottom: 0, left: 0 }}
          >

            {/* Horizontal gridlines only */}
            <CartesianGrid stroke="#171717" vertical={false} />

            {/* Bottom axis - time labels */}
            <XAxis
              dataKey="time"
              interval={2}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6b6b6b", fontSize: 10 }}
            />

            {/* Left axis - bpm / mmHg */}
            <YAxis
              yAxisId="left"
              domain={[55, 145]}
              ticks={[55, 80, 105, 130, 145]}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6b6b6b", fontSize: 10 }}
              label={{
                value: "bpm / mmHg",
                angle: -90,
                position: "insideLeft",
                offset: 10,
                style: { fill: "#6b6b6b", fontSize: 10 },
              }}
            />

            {/* Right axis - % SpO2 */}
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[92, 100]}
              ticks={[92, 94, 96, 98, 100]}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6b6b6b", fontSize: 10 }}
              label={{
                value: "% SpO2",
                angle: 90,
                position: "insideRight",
                offset: 10,
                style: { fill: "#6b6b6b", fontSize: 10 },
              }}
            />

            {/* Tooltip + vertical cursor line */}
            <Tooltip
              cursor={{ stroke: "#404040", strokeWidth: 1 }}
              content={<CustomTooltip />}
            />

            {/* Heart Rate - cyan dashed line */}
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="heartRate"
              stroke="#22D3EE"
              strokeWidth={1.5}
              strokeDasharray="5 4"
              dot={false}
              activeDot={{ r: 3, fill: "#FFFFFF", stroke: "none" }}
            />

            {/* BP Systolic - green solid line */}
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="bpSystolic"
              stroke="#22C55E"
              strokeWidth={1.5}
              dot={false}
              activeDot={{ r: 3, fill: "#FFFFFF", stroke: "none" }}
            />

            {/* SpO2 - orange solid line, right axis */}
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="spo2"
              stroke="#FB923C"
              strokeWidth={1.5}
              dot={false}
              activeDot={{ r: 3, fill: "#FFFFFF", stroke: "none" }}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// CustomTooltip is the small box that appears when hovering the chart.

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;

  const heartRatePoint = payload[0];
  const bpPoint = payload[1];
  const spo2Point = payload[2];

  return (
    <div className="bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 shadow-lg">

      <p className="text-[11px] text-white font-medium mb-1.5">{label}</p>

      <p className="text-[11px]">
        <span className="text-[#D36151]">Heart Rate: </span>
        <span className="text-neutral-200">{heartRatePoint.value} bpm</span>
      </p>

      <p className="text-[11px]">
        <span className="text-[#14B8A6]">BP Systolic: </span>
        <span className="text-neutral-200">{bpPoint.value} mmHg</span>
      </p>

      <p className="text-[11px]">
        <span className="text-[#22C55E]">SpO2: </span>
        <span className="text-neutral-200">{spo2Point.value} %</span>
      </p>

    </div>
  );
}