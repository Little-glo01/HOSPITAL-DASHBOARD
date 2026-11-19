import {
  LayoutDashboard,
  BarChart3,
  LineChart,
  HeartPulse,
  CalendarDays,
  FileText,
  Pill,
  FlaskConical,
  Syringe,
  Video,
  Bed,
  Users,
  ClipboardList,
  Activity,
  ListOrdered,
  Receipt,
  FileSpreadsheet,
  UserPlus,
  UserCog,
  Bell,
  Settings,
  HelpCircle,
  BookOpen,
} from "lucide-react";

export const sidebarNav = [
  {
    section: "OVERVIEW",
    items: [
      { label: "Dashboard", icon: LayoutDashboard },
      { label: "Analytics", icon: BarChart3 },
      { label: "Charts", icon: LineChart },
    ],
  },
  {
    section: "CLINICAL",
    items: [
      { label: "Patient Overview", icon: HeartPulse },
      { label: "Appointments", icon: CalendarDays, badge: 8 },
      { label: "Health Records", icon: FileText },
      { label: "Prescriptions", icon: Pill },
      { label: "Lab Results", icon: FlaskConical },
      { label: "Vaccinations", icon: Syringe },
    ],
  },
  {
    section: "OPERATIONS",
    items: [
      { label: "Telemedicine", icon: Video },
      { label: "Bed Management", icon: Bed },
      { label: "Staff", icon: Users },
      { label: "Task Board", icon: ClipboardList },
      { label: "Vitals Monitor", icon: Activity },
    ],
  },
  {
    section: "ADMINISTRATION",
    items: [
      { label: "Patients List", icon: ListOrdered },
      { label: "Billing", icon: Receipt },
      { label: "Invoices", icon: FileSpreadsheet },
      { label: "Onboarding", icon: UserPlus },
    ],
  },
  {
    section: "SYSTEM",
    items: [
      { label: "Users", icon: UserCog },
      { label: "Notifications", icon: Bell, badge: 3 },
      { label: "Settings", icon: Settings },
      { label: "Help & Support", icon: HelpCircle },
    ],
  },
];

export const sidebarBottom = [
  { label: "Documentation", icon: BookOpen },
];