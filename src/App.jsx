import { useState } from "react";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  // This state holds whatever the user types in the search bar.
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex h-screen bg-[#020101]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        
        {/* Pass the state and the updater function to Header */}
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Pass just the value to Dashboard */}
          <Dashboard searchQuery={searchQuery} />
        </main>
        
      </div>
    </div>
  );
}

export default App;