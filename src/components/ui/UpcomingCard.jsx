// UpcomingCard lists the next appointments as a simple vertical list.

import { upcomingAppointments } from "../../data/dashboardData";

export default function UpcomingCard() {
  return (
    <div className="bg-[#181211] border border-neutral-900 rounded-xl p-5">
      {/* Title + subtitle */}
      <h3 className="text-[13px] font-semibold text-white">Upcoming</h3>
      <p className="text-[11px] text-neutral-500 mt-1">Next appointments today</p>

      {/* The list */}
      <div className="mt-4 space-y-0.5">
        {upcomingAppointments.map((appt) => (
          <div
            key={appt.name}
            className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-neutral-900 transition-colors cursor-pointer"
          >

            {/* Circular avatar with initials */}
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0"
              style={{ backgroundColor: appt.color }}
            >
              {appt.initials}
            </div>

            {/* Name, time, and department pill */}
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-white leading-tight truncate">
                {appt.name}
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[11px] text-neutral-500">{appt.time}</span>
                <span className="text-[10px] text-neutral-400 border border-neutral-800 px-1.5 py-0.5 rounded">
                  {appt.department}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}