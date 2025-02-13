import Link from "next/link";
import Rectangle from "../components/rectangle";

export default function RectangleGrid() {
  const colors = ["green", "red"]; // Two colors to alternate between
  const rows = 5; // Number of rows
  const columns = 5; // Number of columns

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-rows-3 items-center justify-between p-8 pb-20 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex justify-center space-x-4">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <Rectangle
                key={colIndex}
                color={colors[(rowIndex + colIndex) % 2]} // Alternates colors
              />
            ))}
          </div>
        ))}
        <Link href="/" className="flex justify-center">Ir a home</Link>
      </div>
    </div>
  );
}