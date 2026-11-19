import { kpiData } from "../data/dashboardData";
import StatCard from "../components/ui/StatCard";
import VitalsChart from "../components/ui/VitalsChart";
import BedOccupancyCard from "../components/ui/BedOccupancyCard";
import DeptWorkloadCard from "../components/ui/DeptWorkloadCard";
import UpcomingCard from "../components/ui/UpcomingCard";
import ScheduleCard from "../components/ui/ScheduleCard";

export default function Dashboard({ searchQuery = "" }) {
  return (
    <div>

      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-sm text-neutral-400 mt-1">
          Today's patient flow, occupancy, and revenue at a glance.
        </p>
      </div>

      {/* Row 1: KPI cards */}
      <div className="grid grid-cols-4 gap-4">
        {kpiData.map((kpi) => (
          <StatCard key={kpi.label} data={kpi} />
        ))}
      </div>

      {/* Row 2: Vitals chart */}
      <div className="mt-4">
        <VitalsChart />
      </div>

      {/* Row 3: three cards */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <BedOccupancyCard />
        <DeptWorkloadCard />
        <UpcomingCard />
      </div>

      {/* Row 4: Today's Schedule — only once, with searchQuery passed */}
      <div className="mt-4">
        <ScheduleCard searchQuery={searchQuery} />
      </div>

    </div>
  );
}