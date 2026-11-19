import { ShoppingCart, CreditCard, Users, Settings, Check } from "lucide-react";
import { notifications } from "../../data/notifications";

const iconConfig = {
  order:   { icon: ShoppingCart, color: "#D36151" },
  payment: { icon: CreditCard,   color: "#3B82F6" },
  signup:  { icon: Users,        color: "#22C55E" },
  system:  { icon: Settings,     color: "#8B5CF6" },
};

export default function NotificationDropdown() {
  const unreadCount = notifications.filter((n) => n.unread).length;

  // ONLY show exactly 5 items, as requested.
  const visible = notifications.slice(0, 5);

  return (
    // bg-[#181211] is your custom color.
    // w-[340px] gives it a good width.
    <div className="w-[340px] bg-[#181211] border border-neutral-800/60 rounded-xl shadow-2xl overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800/60">
        <div className="flex items-center gap-2">
          <h3 className="text-[13px] font-semibold text-white">Notifications</h3>
          <span className="text-[10px] font-semibold bg-[#D36151] text-white px-1.5 py-0.5 rounded-full min-w-[16px] text-center">
            {unreadCount}
          </span>
        </div>
        <button className="flex items-center gap-1 text-[11px] text-neutral-400 hover:text-white transition-colors">
          <Check size={12} />
          Mark all read
        </button>
      </div>

      {/* 
        Scrollable list. 
        We set a max-height of 260px. 
        Since we only have 5 items, the scrollbar will be larger and match the design.
      */}
      <div className="max-h-[260px] overflow-y-auto custom-scrollbar">
        {visible.map((n) => (
          <NotificationRow key={n.id} notification={n} />
        ))}
      </div>

      {/* Footer */}
      <button className="w-full text-center text-[11px] font-medium text-[#D36151] hover:bg-white/[0.03] py-3 border-t border-neutral-800/60 transition-colors">
        View all notifications
      </button>
    </div>
  );
}

function NotificationRow({ notification }) {
  const config = iconConfig[notification.type];
  const Icon = config.icon;

  return (
    <button className="w-full flex items-start gap-2.5 px-4 py-3 hover:bg-white/[0.03] transition-colors text-left border-b border-neutral-800/30 last:border-0">

      {/* Icon */}
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
        style={{ backgroundColor: config.color + "20" }}
      >
        <Icon size={14} style={{ color: config.color }} />
      </div>

      {/* Text and Dot */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-3 w-full">
          <p
            className={
              notification.unread
                ? "text-[12px] font-semibold text-white truncate"
                : "text-[12px] text-neutral-400 truncate"
            }
          >
            {notification.title}
          </p>
          
          {/* The dot is pushed to the far right by justify-between */}
          {notification.unread && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#D36151] shrink-0" />
          )}
        </div>

        <p className="text-[11px] text-neutral-500 truncate mt-0.5">
          {notification.message}
        </p>

        <p className="text-[10px] text-neutral-600 mt-0.5">
          {notification.time}
        </p>
      </div>
    </button>
  );
}