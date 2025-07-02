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
  Active: {
    id: string;
    customerName: string;
    coachName: string;
    service: string;
    status: string;
    duration: string;
    timeElapsed: string;
    orderValue: string;
    coach: string;
    timezone: string;
  }[];
  Completed: {
    id: string;
    customerName: string;
    coachName: string;
    service: string;
    status: string;
    duration: string;
    timeElapsed: string;
    orderValue: string;
    coach: string;
    timezone: string;
  }[];
  Cancelled: {
    id: string;
    customerName: string;
    coachName: string;
    service: string;
    status: string;
    duration: string;
    timeElapsed: string;
    orderValue: string;
    coach: string;
    timezone: string;
  }[];
}

export const OrderData: OrderItem[] = [
  {
    Active: [
      {
        id: "ORD001",
        customerName: "Sarah Johnson",
        coachName: "View Details",
        service: "Instant Session",
        status: "Active",
        duration: "2 hours",
        timeElapsed: "45 minutes",
        orderValue: "$75",
        coach: "Alex Thompson",
        timezone: "America/New York"
      },
      {
        id: "ORD002",
        customerName: "Mike Chen",
        coachName: "View Details",
        service: "Direct Session",
        status: "Active",
        duration: "1 hour",
        timeElapsed: "30 minutes",
        orderValue: "$50",
        coach: "Jessica Rodriguez",
        timezone: "Asia/Dubai"
      },
      {
        id: "ORD003",
        customerName: "Emily Davis",
        coachName: "View Details",
        service: "Scheduled Session",
        status: "Active",
        duration: "1.5 hours",
        timeElapsed: "20 minutes",
        orderValue: "$60",
        coach: "David Wilson",
        timezone: "Europe/London"
      },
      {
        id: "ORD004",
        customerName: "Robert Brown",
        coachName: "View Details",
        service: "Instant Session",
        status: "Active",
        duration: "45 minutes",
        timeElapsed: "15 minutes",
        orderValue: "$40",
        coach: "Maria Garcia",
        timezone: "Asia/Karachi"
      },
      {
        id: "ORD002",
        customerName: "Mike Chen",
        coachName: "View Details",
        service: "Direct Session",
        status: "Active",
        duration: "1 hour",
        timeElapsed: "30 minutes",
        orderValue: "$50",
        coach: "Jessica Rodriguez",
        timezone: "Asia/Dubai"
      },
      {
        id: "ORD001",
        customerName: "Sarah Johnson",
        coachName: "View Details",
        service: "Instant Session",
        status: "Active",
        duration: "2 hours",
        timeElapsed: "45 minutes",
        orderValue: "$75",
        coach: "Alex Thompson",
        timezone: "America/New York"
      },
      {
        id: "ORD003",
        customerName: "Emily Davis",
        coachName: "View Details",
        service: "Scheduled Session",
        status: "Active",
        duration: "1.5 hours",
        timeElapsed: "20 minutes",
        orderValue: "$60",
        coach: "David Wilson",
        timezone: "Europe/London"
      },
      {
        id: "ORD004",
        customerName: "Robert Brown",
        coachName: "View Details",
        service: "Instant Session",
        status: "Active",
        duration: "45 minutes",
        timeElapsed: "15 minutes",
        orderValue: "$40",
        coach: "Maria Garcia",
        timezone: "Asia/Karachi"
      },
    ],
    Completed: [
      {
        id: "ORD001",
        customerName: "Sarah Johnson",
        coachName: "View Details",
        service: "Instant Session",
        status: "Active",
        duration: "2 hours",
        timeElapsed: "45 minutes",
        orderValue: "$75",
        coach: "Alex Thompson",
        timezone: "America/New York"
      },
      {
        id: "ORD002",
        customerName: "Mike Chen",
        coachName: "View Details",
        service: "Direct Session",
        status: "Active",
        duration: "1 hour",
        timeElapsed: "30 minutes",
        orderValue: "$50",
        coach: "Jessica Rodriguez",
        timezone: "Asia/Dubai"
      },
      {
        id: "ORD001",
        customerName: "Sarah Johnson",
        coachName: "View Details",
        service: "Instant Session",
        status: "Active",
        duration: "2 hours",
        timeElapsed: "45 minutes",
        orderValue: "$75",
        coach: "Alex Thompson",
        timezone: "America/New York"
      },
      {
        id: "ORD002",
        customerName: "Mike Chen",
        coachName: "View Details",
        service: "Direct Session",
        status: "Active",
        duration: "1 hour",
        timeElapsed: "30 minutes",
        orderValue: "$50",
        coach: "Jessica Rodriguez",
        timezone: "Asia/Dubai"
      },
      {
        id: "ORD002",
        customerName: "Mike Chen",
        coachName: "View Details",
        service: "Direct Session",
        status: "Active",
        duration: "1 hour",
        timeElapsed: "30 minutes",
        orderValue: "$50",
        coach: "Jessica Rodriguez",
        timezone: "Asia/Dubai"
      },
    ],
    Cancelled: [
      {
        id: "ORD001",
        customerName: "Sarah Johnson",
        coachName: "View Details",
        service: "Instant Session",
        status: "Active",
        duration: "2 hours",
        timeElapsed: "45 minutes",
        orderValue: "$75",
        coach: "Alex Thompson",
        timezone: "America/New York"
      },
      {
        id: "ORD002",
        customerName: "Mike Chen",
        coachName: "View Details",
        service: "Direct Session",
        status: "Active",
        duration: "1 hour",
        timeElapsed: "30 minutes",
        orderValue: "$50",
        coach: "Jessica Rodriguez",
        timezone: "Asia/Dubai"
      },
    ]
  }
]