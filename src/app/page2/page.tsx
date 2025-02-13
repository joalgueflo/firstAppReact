import Link from "next/link";
import Rectangle from "../components/rectangle";
import RectangleGrid from "../components/rectangleGrid";

export default function Page2() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-rows-3 items-center justify-between p-8 pb-20 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex justify-center space-x-4">
        <Rectangle color='green'/>
        <Rectangle color='red'/>
        <Rectangle color='green'/>
        <Rectangle color='red'/>
        <Rectangle color='green'/>
      </div>
      
      <div className="flex justify-center space-x-4">
        <Rectangle color='red'/>
        <Rectangle color='green'/>
        <Rectangle color='red'/>
        <Rectangle color='green'/>
        <Rectangle color='red'/>
      </div>

      <div className="flex justify-center space-x-4">
        <Rectangle color='green'/>
        <Rectangle color='red'/>
        <Rectangle color='green'/>
        <Rectangle color='red'/>
        <Rectangle color='green'/>
      </div>

      <div className="flex justify-center space-x-4">
        <Rectangle color='red'/>
        <Rectangle color='green'/>
        <Rectangle color='red'/>
        <Rectangle color='green'/>
        <Rectangle color='red'/>
      </div>

      <div className="flex justify-center space-x-4">
        <Rectangle color='green'/>
        <Rectangle color='red'/>
        <Rectangle color='green'/>
        <Rectangle color='red'/>
        <Rectangle color='green'/>
      </div>
      <Link href="/" className= "flex justify-center"> Ir a home</Link>
      </div>
    </div>
  );
}
