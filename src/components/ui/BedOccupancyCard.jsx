// BedOccupancyCard draws 3 concentric donut rings using Recharts.
// Rings animate in one after another. The center shows the aggregate.

import { motion } from "motion/react";
import { PieChart, Pie, Cell } from "recharts";
import { bedOccupancy } from "../../data/dashboardData";

export default function BedOccupancyCard() {
  // Reverse so we draw outer->inner as [Emergency, General, ICU].
  const rings = [...bedOccupancy.wards].reverse();

  // Radii for each ring, outer -> inner.
  // Gaps are 8px between rings. Inner hole is 60px across so the center text fits.
  const radii = [
    { inner: 74, outer: 88 },
    { inner: 52, outer: 66 },
    { inner: 30, outer: 44 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-[#181211] border border-neutral-900 rounded-xl p-5"
    >
      <h3 className="text-[13px] font-semibold text-white">Bed Occupancy</h3>
      <p className="text-[11px] text-neutral-500 mt-1">Occupancy rate by ward</p>

      {/* relative wrapper so the center text sits on top of the chart */}
      <div className="relative flex justify-center mt-5">
        <PieChart width={200} height={200}>
          {rings.map((ward, index) => {
            const slices = [
              { value: ward.value, fill: ward.color },
              { value: 100 - ward.value, fill: "#1a1a1a" },
            ];

            return (
              <Pie
                key={ward.label}
                data={slices}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                innerRadius={radii[index].inner}
                outerRadius={radii[index].outer}
                stroke="none"
                animationBegin={index * 200}
                animationDuration={900}
                animationEasing="ease-out"
              >
                {slices.map((slice, i) => (
                  <Cell key={i} fill={slice.fill} />
                ))}
              </Pie>
            );
          })}
        </PieChart>

        {/* Center text - exactly centered over the ring's inner hole */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
          <motion.p
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
            className="text-[22px] font-bold text-white leading-none"
          >
            {bedOccupancy.aggregate}%
          </motion.p>
          <p className="text-[10px] text-neutral-500 mt-1.5">Aggregate</p>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-5 space-y-2">
        {bedOccupancy.wards.map((ward) => (
          <div key={ward.label} className="flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: ward.color }}
              />
              <span className="text-neutral-400">{ward.label}</span>
            </div>
            <span className="text-white font-medium">{ward.value}%</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}