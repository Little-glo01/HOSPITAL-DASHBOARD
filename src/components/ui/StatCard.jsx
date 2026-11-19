// StatCard shows one KPI card (Patients Today, Appointments, etc.).
// The parent passes a "data" prop with all the values it needs.

export default function StatCard({ data }) {
  // Destructure - pull the fields we need out of the data object.
  const { label, value, change, color, positive } = data;

  // Decide the badge style once, based on whether the change is positive.
  // Positive -> green badge. Otherwise -> red badge.
  const badgeClass = positive
    ? "text-[10px] font-bold bg-[#00A256] text-[#010101] px-1.5 py-0.8 rounded"
    : "text-[10px] font-bold bg-[#E62C2B] text-[#F8E7E7] px-1.5 py-0.8 rounded";

  return (
    <div className="bg-[#181211] rounded-lg overflow-hidden flex">

      {/* Left color strip - inline style because the color changes per card */}
      <div className="w-1" style={{ backgroundColor: color }} />

      <div className="flex-1 px-4 py-3">
        <p className="text-xs text-[#655C59] ">{label}</p>

        <div className="flex items-center gap-2 mt-1">
          <p className="text-3xl font-bold text-white">{value}</p>
          <span className={badgeClass}>{change}</span>
        </div>
      </div>

    </div>
  );
}




