// pages/index.js
import ZoomableSvg from "./components/WorldMap";

export default function Home({ colors = {} }) {
  return (
    <main className="flex flex-col items-center">
      <h1 className="font-bold p-10 text-xl">World Map Quiz</h1>
      
      <div>
        <ZoomableSvg src="/world.svg" />
      </div>
    </main>
  );
}
