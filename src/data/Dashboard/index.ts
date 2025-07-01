export interface DashboardItem {
  label: string;
  number: string;
}

export const DashboardData: DashboardItem[] = [
  {
    label: "Orders Today",
    number: "3",
  },
  {
    label: "Coaches Online",
    number: "1",
  },
  {
    label: "Coaches in session",
    number: "3",
  },
  {
    label: "Players Online",
    number: "3",
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
    orderValue: "$75"
  },
  {
    id: "ORD002", 
    customerName: "Mike Chen",
    coachName: "Jessica Rodriguez",
    service: "Direct Session",
    status: "Active",
    duration: "1 hour",
    timeElapsed: "30 minutes",
    orderValue: "$50"
  },
  {
    id: "ORD003",
    customerName: "Emily Davis",
    coachName: "David Wilson",
    service: "Scheduled Session",
    status: "Active", 
    duration: "1.5 hours",
    timeElapsed: "20 minutes",
    orderValue: "$60"
  },
  {
    id: "ORD004",
    customerName: "Robert Brown",
    coachName: "Maria Garcia",
    service: "Instant Session",
    status: "Active",
    duration: "45 minutes", 
    timeElapsed: "15 minutes",
    orderValue: "$40"
  },
  {
    id: "ORD002", 
    customerName: "Mike Chen",
    coachName: "Jessica Rodriguez",
    service: "Direct Session",
    status: "Active",
    duration: "1 hour",
    timeElapsed: "30 minutes",
    orderValue: "$50"
  },
  {
    id: "ORD001",
    customerName: "Sarah Johnson",
    coachName: "Alex Thompson",
    service: "Instant Session",
    status: "Active",
    duration: "2 hours",
    timeElapsed: "45 minutes",
    orderValue: "$75"
  },
  {
    id: "ORD003",
    customerName: "Emily Davis",
    coachName: "David Wilson",
    service: "Scheduled Session",
    status: "Active", 
    duration: "1.5 hours",
    timeElapsed: "20 minutes",
    orderValue: "$60"
  },
  {
    id: "ORD004",
    customerName: "Robert Brown",
    coachName: "Maria Garcia",
    service: "Instant Session",
    status: "Active",
    duration: "45 minutes", 
    timeElapsed: "15 minutes",
    orderValue: "$40"
  },
  {
    id: "ORD003",
    customerName: "Emily Davis",
    coachName: "David Wilson",
    service: "Scheduled Session",
    status: "Active", 
    duration: "1.5 hours",
    timeElapsed: "20 minutes",
    orderValue: "$60"
  },
  {
    id: "ORD002", 
    customerName: "Mike Chen",
    coachName: "Jessica Rodriguez",
    service: "Direct Session",
    status: "Active",
    duration: "1 hour",
    timeElapsed: "30 minutes",
    orderValue: "$50"
  },
  {
    id: "ORD001",
    customerName: "Sarah Johnson",
    coachName: "Alex Thompson",
    service: "Instant Session",
    status: "Active",
    duration: "2 hours",
    timeElapsed: "45 minutes",
    orderValue: "$75"
  },
  {
    id: "ORD004",
    customerName: "Robert Brown",
    coachName: "Maria Garcia",
    service: "Instant Session",
    status: "Active",
    duration: "45 minutes", 
    timeElapsed: "15 minutes",
    orderValue: "$40"
  }
];