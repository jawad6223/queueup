export interface DashboardItem {
  label: string;
  numbers: { Active: number; Completed: number; Cancelled: number };
}

export const DashboardData: DashboardItem[] = [
  {
    label: "Orders Today",
    numbers: { Active: 5, Completed: 2, Cancelled: 0 },
  },
  {
    label: "Coaches Online",
    numbers: { Active: 3, Completed: 1, Cancelled: 0 },
  },
  {
    label: "Coaches in session",
    numbers: { Active: 3, Completed: 1, Cancelled: 2 },
  },
  {
    label: "Players Online",
    numbers: { Active: 3, Completed: 1, Cancelled: 2 },
  },
];

export interface OrderItem {
  id: string;
  customerName: string;
  coachName: string;
  service: string;
  status: string;
  duration: string;
  timeElapsed: string;
  orderValue: string;
  timezone: string;
}

export const OrderData: OrderItem[] = [
  {
    id: "ORD001",
    customerName: "Sarah Johnson",
    coachName: "Alex Thompson",
    service: "Instant Session",
    status: "Active",
    duration: "2 hours",
    timeElapsed: "45 minutes",
    orderValue: "$75",
    timezone: "UTC"
  },
  {
    id: "ORD002", 
    customerName: "Mike Chen",
    coachName: "Jessica Rodriguez",
    service: "Direct Session",
    status: "Active",
    duration: "1 hour",
    timeElapsed: "30 minutes",
    orderValue: "$50",
    timezone: "America/New York"
  },
  {
    id: "ORD003",
    customerName: "Emily Davis",
    coachName: "David Wilson",
    service: "Scheduled Session",
    status: "Active", 
    duration: "1.5 hours",
    timeElapsed: "20 minutes",
    orderValue: "$60",
    timezone: "Europe/London"
  },
  {
    id: "ORD004",
    customerName: "Robert Brown",
    coachName: "Maria Garcia",
    service: "Instant Session",
    status: "Active",
    duration: "45 minutes", 
    timeElapsed: "15 minutes",
    orderValue: "$40",
    timezone: "Asia/Karachi"
  },
  {
    id: "ORD002", 
    customerName: "Mike Chen",
    coachName: "Jessica Rodriguez",
    service: "Direct Session",
    status: "Active",
    duration: "1 hour",
    timeElapsed: "30 minutes",
    orderValue: "$50",
    timezone: "Asia/Dubai"
  },
  {
    id: "ORD001",
    customerName: "Sarah Johnson",
    coachName: "Alex Thompson",
    service: "Instant Session",
    status: "Active",
    duration: "2 hours",
    timeElapsed: "45 minutes",
    orderValue: "$75",
    timezone: "Australia/Sydney"
  },
  {
    id: "ORD003",
    customerName: "Emily Davis",
    coachName: "David Wilson",
    service: "Scheduled Session",
    status: "Active", 
    duration: "1.5 hours",
    timeElapsed: "20 minutes",
    orderValue: "$60",
    timezone: "Asia/Tokyo"
  },
  {
    id: "ORD004",
    customerName: "Robert Brown",
    coachName: "Maria Garcia",
    service: "Instant Session",
    status: "Active",
    duration: "45 minutes", 
    timeElapsed: "15 minutes",
    orderValue: "$40",
    timezone: "Asia/Kolkata"
  },
  {
    id: "ORD003",
    customerName: "Emily Davis",
    coachName: "David Wilson",
    service: "Scheduled Session",
    status: "Active", 
    duration: "1.5 hours",
    timeElapsed: "20 minutes",
    orderValue: "$60",
    timezone: "Asia/Shanghai"
  },
  {
    id: "ORD002", 
    customerName: "Mike Chen",
    coachName: "Jessica Rodriguez",
    service: "Direct Session",
    status: "Active",
    duration: "1 hour",
    timeElapsed: "30 minutes",
    orderValue: "$50",
    timezone: "Europe/Berlin"
  },
  {
    id: "ORD001",
    customerName: "Sarah Johnson",
    coachName: "Alex Thompson",
    service: "Instant Session",
    status: "Active",
    duration: "2 hours",
    timeElapsed: "45 minutes",
    orderValue: "$75",
    timezone: "Europe/Paris"
  },
  {
    id: "ORD004",
    customerName: "Robert Brown",
    coachName: "Maria Garcia",
    service: "Instant Session",
    status: "Active",
    duration: "45 minutes", 
    timeElapsed: "15 minutes",
    orderValue: "$40",
    timezone: "Asia/Hong Kong"
  }
];