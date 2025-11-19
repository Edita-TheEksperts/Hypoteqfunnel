export default function FunnelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-white overflow-visible">
        {children}
      </div>
    </div>
  );
}
