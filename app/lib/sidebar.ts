const SIDEBAR_KEY = "ml-sidebar-open";

export function isSidebarOpen(): boolean {
  if (typeof window === "undefined") return true;
  const value = localStorage.getItem(SIDEBAR_KEY);
  return value !== "false";
}

export function toggleSidebar() {
  if (typeof window === "undefined") return;

  const current = isSidebarOpen();
  localStorage.setItem(
    SIDEBAR_KEY,
    String(!current)
  );

  // 🔔 notify UI
  window.dispatchEvent(
    new Event("ml-sidebar-toggle")
  );
}
