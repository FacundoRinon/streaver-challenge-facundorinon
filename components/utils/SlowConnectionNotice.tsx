"use client";

interface SlowConnectionNoticeProps {
  visible: boolean;
}

export default function SlowConnectionNotice({
  visible,
}: SlowConnectionNoticeProps) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="rounded-lg bg-yellow-50 border border-yellow-200 px-4 py-3 shadow-md text-sm text-yellow-800 max-w-xs">
        La conexión está siendo lenta. Cargando datos…
      </div>
    </div>
  );
}
