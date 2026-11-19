

export const kpiData = [
  {
    label: "Patients Today",
    value: "48",
    change: "+12%",
    color: "#D36151",  
    positive: true,
  },
  {
    label: "Appointments",
    value: "24",
    change: "-3%",
    color: "#14B8A6",   
    positive: false,
  },
  {
    label: "Bed Occupancy",
    value: "78%",
    change: "+5%",
    color: "#22C55E",   
    positive: true,
  },
  {
    label: "Revenue",
    value: "$42.5K",
    change: "+8%",
    color: "#8B5CF6",   
    positive: true,
  },
];




export const vitalsData = [
  { time: "00:00", heartRate: 118, bpSystolic: 96,  spo2: 93.0 },
  { time: "01:00", heartRate: 122, bpSystolic: 92,  spo2: 92.8 },
  { time: "02:00", heartRate: 120, bpSystolic: 86,  spo2: 93.2 },
  { time: "03:00", heartRate: 118, bpSystolic: 84,  spo2: 93.8 },
  { time: "04:00", heartRate: 116, bpSystolic: 90,  spo2: 94.2 },
  { time: "05:00", heartRate: 122, bpSystolic: 100, spo2: 94.5 },
  { time: "06:00", heartRate: 73,  bpSystolic: 116, spo2: 97.2 },
  { time: "07:00", heartRate: 125, bpSystolic: 118, spo2: 97.0 },
  { time: "08:00", heartRate: 120, bpSystolic: 112, spo2: 96.5 },
  { time: "09:00", heartRate: 118, bpSystolic: 108, spo2: 96.0 },
  { time: "10:00", heartRate: 122, bpSystolic: 122, spo2: 95.8 },
  { time: "11:00", heartRate: 121, bpSystolic: 120, spo2: 95.2 },
  { time: "12:00", heartRate: 126, bpSystolic: 110, spo2: 94.5 },
  { time: "13:00", heartRate: 130, bpSystolic: 108, spo2: 94.0 },
  { time: "14:00", heartRate: 128, bpSystolic: 118, spo2: 94.2 },
  { time: "15:00", heartRate: 133, bpSystolic: 122, spo2: 94.5 },
  { time: "16:00", heartRate: 130, bpSystolic: 120, spo2: 94.0 },
  { time: "17:00", heartRate: 128, bpSystolic: 118, spo2: 94.3 },
  { time: "18:00", heartRate: 131, bpSystolic: 125, spo2: 95.0 },
  { time: "19:00", heartRate: 122, bpSystolic: 120, spo2: 95.2 },
  { time: "20:00", heartRate: 120, bpSystolic: 118, spo2: 95.0 },
  { time: "21:00", heartRate: 128, bpSystolic: 116, spo2: 96.0 },
  { time: "22:00", heartRate: 130, bpSystolic: 118, spo2: 96.5 },
  { time: "23:00", heartRate: 122, bpSystolic: 106, spo2: 95.8 },
];



// Bed occupancy - one entry per ward.
// In the chart, we draw them as concentric rings: index 0 = inner, index 2 = outer.
// In the legend we show them in this exact order.
export const bedOccupancy = {
  aggregate: 78,
  wards: [
    { label: "ICU",       value: 85, color: "#D36151" },
    { label: "General",   value: 72, color: "#14B8A6" },
    { label: "Emergency", value: 91, color: "#22C55E" },
  ],
};

// Department workload - each row becomes one horizontal bar
export const deptWorkload = [
  { department: "Emergency",   patients: 34 },
  { department: "Cardiology",  patients: 28 },
  { department: "Pediatrics",  patients: 15 },
  { department: "Orthopedics", patients: 20 },
  { department: "Neurology",   patients: 14 },
];

// Upcoming appointments - each row becomes one list entry
export const upcomingAppointments = [
  { initials: "SJ", name: "Sarah Johnson",   time: "09:00", department: "Cardiology",  color: "#D36151" },
  { initials: "MC", name: "Michael Chen",    time: "09:30", department: "Neurology",   color: "#14B8A6" },
  { initials: "ED", name: "Emily Davis",     time: "10:00", department: "Pediatrics",  color: "#22C55E" },
  { initials: "JW", name: "James Wilson",    time: "10:30", department: "Orthopedics", color: "#8B5CF6" },
  { initials: "MR", name: "Maria Rodriguez", time: "11:00", department: "Emergency",   color: "#F59E0B" },
  { initials: "RT", name: "Robert Taylor",   time: "11:30", department: "Cardiology",  color: "#D36151" },
];


// Today's Schedule table rows.
// Each row has a color that becomes the little strip on the left.
export const todaySchedule = [
  { time: "08:00", patient: "Anna Brooks",    doctor: "Dr. Williams", department: "Cardiology",  type: "In-person",  status: "Completed",   color: "#D36151" },
  { time: "08:30", patient: "David Kim",      doctor: "Dr. Patel",    department: "Neurology",   type: "Telehealth", status: "Completed",   color: "#14B8A6" },
  { time: "09:00", patient: "Sarah Johnson",  doctor: "Dr. Williams", department: "Cardiology",  type: "In-person",  status: "Completed",   color: "#22C55E" },
  { time: "09:30", patient: "Michael Chen",   doctor: "Dr. Patel",    department: "Neurology",   type: "In-person",  status: "In Progress", color: "#D36151" },
  { time: "10:00", patient: "Emily Davis",    doctor: "Dr. Garcia",   department: "Pediatrics",  type: "Telehealth", status: "In Progress", color: "#22C55E" },
  { time: "10:30", patient: "James Wilson",   doctor: "Dr. Kim",      department: "Orthopedics", type: "In-person",  status: "Scheduled",   color: "#8B5CF6" },
  { time: "11:00", patient: "Maria Rodriguez", doctor: "Dr. Thompson", department: "Emergency",   type: "In-person",  status: "Scheduled",   color: "#F59E0B" },
  { time: "11:30", patient: "Robert Taylor",  doctor: "Dr. Williams", department: "Cardiology",  type: "Telehealth", status: "Scheduled",   color: "#D36151" },
];