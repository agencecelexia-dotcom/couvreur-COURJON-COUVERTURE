export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[100]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-full border-4 border-primary-100 border-t-accent-500 animate-spin" />
        <p className="text-sm text-neutral-400 font-medium">Chargement…</p>
      </div>
    </div>
  );
}
