export function SkeletonBox({ height = 120 }: { height?: number }) {
  return (
    <div
      className="animate-pulse bg-gray-200 rounded mb-4"
      style={{ height }}
    />
  );
}
