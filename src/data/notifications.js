// Mock notification data.
// "type" tells the component which icon + color to use.
// Types: order | payment | signup | system

export const notifications = [
  { id: 1, type: "order",   title: "New order received",   message: "Emma Wilson placed order ORD-7891 for $299.00",                 time: "2 min ago",  unread: true  },
  { id: 2, type: "payment", title: "Payment processed",    message: "Payment of $1,499.00 from Sofia Garcia confirmed",              time: "15 min ago", unread: false },
  { id: 3, type: "signup",  title: "New customer signup",  message: "James Chen created an account",                                  time: "1 hour ago", unread: true  },
  { id: 4, type: "order",   title: "Order shipped",        message: "ORD-7889 has been shipped to Sofia Garcia",                     time: "2 hours ago",unread: false },
  { id: 5, type: "system",  title: "System update",        message: "Dashboard v2.1 has been deployed successfully",                 time: "3 hours ago",unread: false },
  { id: 6, type: "payment", title: "Payment failed",       message: "Payment attempt for ORD-7888 from Alex Thompson failed",        time: "4 hours ago",unread: true  },
  { id: 7, type: "signup",  title: "New review",           message: "Maria Santos left a 5-star review: \"Excellent product!\"",      time: "5 hours ago",unread: false },
  { id: 8, type: "payment", title: "Subscription renewed", message: "Team Plan for James Chen renewed for another month",            time: "6 hours ago",unread: false },
  { id: 9, type: "system",  title: "Server maintenance",   message: "Scheduled maintenance window: Feb 20, 2:00 AM - 4:00 AM UTC",   time: "1 day ago",  unread: false },
];