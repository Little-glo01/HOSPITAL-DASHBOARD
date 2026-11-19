// DeptWorkloadCard draws horizontal bars - one per department.

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { deptWorkload } from "../../data/dashboardData";

export default function DeptWorkloadCard() {
  return (
    <div className="bg-[#181211] border border-neutral-900 rounded-xl p-5">
      {/* Title + subtitle */}
      <h3 className="text-[13px] font-semibold text-white">Dept Workload</h3>
      <p className="text-[11px] text-neutral-500 mt-1">Active patients by department</p>

      <div className="mt-6">
        <ResponsiveContainer width="100%" height={240}>
          <BarChart
            data={deptWorkload}
            layout="vertical"
            margin={{ top: 0, right: 20, bottom: 0, left: 0 }}
            barCategoryGap={14}
          >

            {/* Vertical gridlines only (design shows only vertical lines) */}
            <CartesianGrid stroke="#171717" horizontal={false} />

            {/* Bottom axis - patient counts */}
            <XAxis
              type="number"
              domain={[0, 36]}
              ticks={[0, 9, 18, 27, 36]}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6b6b6b", fontSize: 10 }}
            />

            {/* Left axis - department names */}
            <YAxis
              type="category"
              dataKey="department"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#a3a3a3", fontSize: 11 }}
              width={90}
            />

            {/* Tooltip - the cursor fills the hovered row with a subtle gray track */}
            <Tooltip
              cursor={{ fill: "#e5e5e5" }}
              content={<CustomTooltip />}
            />

            {/* The bars - coral, rounded on the right side */}
            <Bar
              dataKey="patients"
              fill="#D36151"
              radius={[0, 4, 4, 0]}
              barSize={14}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// Custom tooltip - dark box with "patients" label and the count
function CustomTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;

  const row = payload[0].payload;

  return (
    <div className="bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 shadow-lg">
      <p className="text-[10px] text-neutral-400">patients</p>
      <p className="text-[12px] text-white font-semibold">{row.patients} patients</p>
    </div>
  );
}