import { useState } from "react";
import { motion } from "motion/react";
import { Search, Sun, Palette, Bell, Plus } from "lucide-react";
import NotificationDropdown from "../components/ui/NotificationDropdown";

export default function Header({ searchQuery, setSearchQuery }) {
  // notifOpen = is the notification dropdown showing?
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="relative h-16 bg-[#020101] border-b border-neutral-900 flex items-center justify-between px-6">

      {/* Search box */}
      <div className="relative w-80">
        <Search
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
        />
        <input
          type="text"
          placeholder="Search anything..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-neutral-900/60 border border-neutral-800 text-sm text-neutral-200 placeholder-neutral-500 pl-11 pr-14 py-2.5 rounded-full focus:outline-none focus:border-neutral-700"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-neutral-500 bg-neutral-800 px-2 py-0.5 rounded-md">
          ⌘K
        </span>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-4">

        <button className="flex items-center gap-1.5 bg-[#D36151] hover:bg-[#D36151] text-white text-sm font-sm px-2 py-1 rounded-lg transition-colors">
          <Plus size={16} />
          New Appointment
        </button>

        <div className="w-px h-6 bg-neutral-800" />

        <button className="text-neutral-400 hover:text-white transition-colors">
          <Sun size={18} />
        </button>

        <button className="text-neutral-400 hover:text-white transition-colors">
          <Palette size={18} />
        </button>

        {/* Bell button - toggles the dropdown */}
        <button
          onClick={() => setNotifOpen(!notifOpen)}
          className="relative text-neutral-400 hover:text-white transition-colors"
        >
          <Bell size={18} />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="w-8 h-8 rounded-full bg-[#D36151] flex items-center justify-center text-white text-xs font-bold cursor-pointer">
          AS
        </div>
      </div>

      {/* The dropdown - only rendered when notifOpen is true */}
      {notifOpen && (
        <>
          {/* Invisible overlay covering the whole screen.
              Clicking anywhere on it closes the dropdown. */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setNotifOpen(false)}
          />

          {/* The dropdown panel - small fade+slide when it opens */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute right-16 top-full mt-2 z-50">
            <NotificationDropdown />
          </motion.div>
        </>
      )}

    </header>
  );
}