// ScheduleCard shows the Today's Schedule table.
// Each row = one appointment.

import { motion } from "motion/react";
import { todaySchedule } from "../../data/dashboardData";

export default function ScheduleCard({ searchQuery = "" }) {
    // 1. Convert the search query to lowercase (so "Anna" matches "anna").
  const query = searchQuery.toLowerCase();

  // 2. Filter the schedule array.
  const filteredSchedule = todaySchedule.filter((row) => {
    // Check if the patient name, doctor, or department includes the query.
    return (
      row.patient.toLowerCase().includes(query) ||
      row.doctor.toLowerCase().includes(query) ||
      row.department.toLowerCase().includes(query)
    );
  });
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-[#181211] border border-neutral-900 rounded-xl p-5"
    >
      <h3 className="text-[13px] font-semibold text-white">Today's Schedule</h3>
      <p className="text-[11px] text-neutral-500 mt-1">
        All appointments and consultations for today
      </p>

      {/* Table wrapper */}
      <div className="mt-4">

        {/* Header row.
            The empty 0.5-wide div reserves space for the color strip below, so the columns line up. */}
        <div className="flex gap-3 px-3 pb-3 border-b border-neutral-900">
          <div className="w-0.5" />
          <div className="flex-1 grid grid-cols-[70px_1.4fr_1.4fr_1.2fr_1fr_1fr] gap-4 text-[11px] text-neutral-500">
            <span>Time</span>
            <span>Patient</span>
            <span>Doctor</span>
            <span>Department</span>
            <span>Type</span>
            <span>Status</span>
          </div>
        </div>

        {/* Data rows */}
        <div className="mt-1">
          {filteredSchedule.length > 0 ? (
            filteredSchedule.map((row) => (
             <Row key={row.time + row.patient} row={row} />
            ))
          ) : (  
            <p className="text-center text-sm text-neutral-500 py-6">
              No appointments found for "{searchQuery}"
            </p>
        )}      
        </div>

      </div>
    </motion.div>
  );
}

// One row of the schedule table.
function Row({ row }) {
  return (
    <div className="flex gap-3 px-3 py-3 rounded-lg hover:bg-neutral-900/50 transition-colors">

      {/* Colored strip on the left */}
      <div
        className="w-0.5 rounded-full"
        style={{ backgroundColor: row.color }}
      />

      {/* The 6 columns */}
      <div className="flex-1 grid grid-cols-[70px_1.4fr_1.4fr_1.2fr_1fr_1fr] gap-4 items-center">

        {/* Time */}
        <span className="text-[12px] text-neutral-500">{row.time}</span>

        {/* Patient - bold white */}
        <span className="text-[13px] font-semibold text-white truncate">
          {row.patient}
        </span>

        {/* Doctor - gray */}
        <span className="text-[12px] text-neutral-400 truncate">
          {row.doctor}
        </span>

        {/* Department - outlined pill */}
        <span className="text-[10px] text-white border border-neutral-800 px-2 py-0.5 rounded-full w-fit">
          {row.department}
        </span>

        {/* Type - coral if In-person, outlined if Telehealth */}
        <TypeBadge type={row.type} />

        {/* Status - green, amber, or outlined */}
        <StatusBadge status={row.status} />

      </div>
    </div>
  );
}

// Small pill that shows the type. Color depends on the value.
function TypeBadge({ type }) {
  // In-person = coral filled
  // Telehealth = dark with border
  const classes =
    type === "In-person"
      ? "text-[10px] text-white bg-[#E8556D] px-2 py-0.5 rounded-full w-fit"
      : "text-[10px] text-white border border-neutral-800 px-2 py-0.5 rounded-full w-fit";

  return <span className={classes}>{type}</span>;
}

// Small pill that shows the status. Color depends on the value.
function StatusBadge({ status }) {
  // Use an object to map status -> classes. Cleaner than many if/else.
  const styles = {
    Completed:     "text-[10px] font-medium text-white bg-[#22C55E] px-2 py-0.5 rounded-full w-fit",
    "In Progress": "text-[10px] font-medium text-white bg-[#F59E0B] px-2 py-0.5 rounded-full w-fit",
    Scheduled:     "text-[10px] text-white border border-neutral-800 px-2 py-0.5 rounded-full w-fit",
  };

  // Fall back to the outlined style if the status isn't one we know.
  const classes = styles[status] || styles.Scheduled;

  return <span className={classes}>{status}</span>;
}