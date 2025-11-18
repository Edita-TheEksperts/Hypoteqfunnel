import FunnelSidebar from "@/app/funnel/FunnelSidebar";

export default function FunnelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <FunnelSidebar />
      <div className="flex-1 min-h-screen bg-white p-10 overflow-visible">
        {children}
      </div>
    </div>
  );
}
