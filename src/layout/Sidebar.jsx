import { useState } from "react";
import {
  Heart,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { sidebarNav, sidebarBottom } from "../data/navigation";

export default function Sidebar() {
  // Collapsed = whether the sidebar is narrow (icon-only) or wide.
  const [collapsed, setCollapsed] = useState(false);

  // activeItem = the label of whichever nav item is currently highlighted.
  // We start with "Dashboard" so it's the default selected page.
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <aside
      className={
        "relative h-screen bg-[#020101] border-r border-neutral-800 flex flex-col transition-all duration-200 " +
        (collapsed ? "w-20" : "w-64")
      }
    >
      <CollapseButton collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <Logo collapsed={collapsed} />
      <NavList
        collapsed={collapsed}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <BottomLinks
        collapsed={collapsed}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <UserCard collapsed={collapsed} />
    </aside>
  );
}

function CollapseButton({ collapsed, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="absolute top-5 -right-3 z-10 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
    >
      {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
    </button>
  );
}

function Logo({ collapsed }) {
  return (
    <div className="flex items-center gap-2.5 px-4 h-16 border-b border-neutral-800">
      <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center text-white shrink-0">
        <Heart size={18} fill="currentColor" />
      </div>
      {!collapsed && (
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white leading-none">Ember</p>
          <p className="text-[10px] text-neutral-500 leading-none mt-0.5 tracking-wider">
            DASHBOARD
          </p>
        </div>
      )}
    </div>
  );
}

function NavList({ collapsed, activeItem, setActiveItem }) {
  return (
    <nav className="flex-1 overflow-y-auto custom-scrollbar px-3 py-3">
      {sidebarNav.map((group, index) => (
        <div
          key={group.section}
          className={
            index < sidebarNav.length - 1
              ? "pb-3 mb-3 border-b border-neutral-800"
              : ""
          }
        >
          {!collapsed && (
            <div className="flex items-center justify-between px-3 mb-2">
              <p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">
                {group.section}
              </p>
              <ChevronDown size={12} className="text-neutral-600" />
            </div>
          )}
          <div className="space-y-0.5">
            {group.items.map((item) => (
              <SidebarItem
                key={item.label}
                item={item}
                collapsed={collapsed}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}

function BottomLinks({ collapsed, activeItem, setActiveItem }) {
  return (
    <div className="px-3 pb-3 border-t border-neutral-800 pt-3">
      {sidebarBottom.map((item) => (
        <SidebarItem
          key={item.label}
          item={item}
          collapsed={collapsed}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      ))}
    </div>
  );
}

function UserCard({ collapsed }) {
  return (
    <div className="border-t border-neutral-800 p-3">
      <div
        className={
          collapsed
            ? "flex items-center justify-center py-2 rounded-lg hover:bg-neutral-900 cursor-pointer"
            : "flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-neutral-900 cursor-pointer"
        }
      >
        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
          AS
        </div>
        {!collapsed && (
          <>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-white truncate">
                Aigars S.
              </p>
              <p className="text-[10px] text-neutral-500">Admin</p>
            </div>
            <LogOut size={14} className="text-neutral-500" />
          </>
        )}
      </div>
    </div>
  );
}

function SidebarItem({ item, collapsed, activeItem, setActiveItem }) {
  // Is this specific item the active one?
  // Compare its label to the activeItem value we're tracking in the parent.
  const isActive = item.label === activeItem;

  return (
    <button
      onClick={() => setActiveItem(item.label)}
      className={
        "w-full flex items-center rounded-lg text-sm font-medium transition-colors " +
        (collapsed ? "justify-center py-2.5 " : "gap-2.5 px-3 py-2 ") +
        (isActive
          ? "bg-[#D36151]/10 text-[#D36151]"
          : "text-neutral-400 hover:bg-neutral-900 hover:text-white")
      }
    >
      <item.icon size={16} className="shrink-0" />
      {!collapsed && (
        <>
          <span className="flex-1 text-left">{item.label}</span>
          {item.badge && (
            <span className="text-[10px] font-semibold bg-[#D36151] text-white px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
              {item.badge}
            </span>
          )}
        </>
      )}
    </button>
  );
}