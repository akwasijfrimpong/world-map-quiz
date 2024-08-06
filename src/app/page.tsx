import ZoomableSvg from "./components/WorldMap";
import Rules from "./components/Rules";
export default function Home({ colors = {} }) {
  return (
    <main className="flex flex-col items-center">
      <div>
        {" "}
        <Rules />{" "}
      </div>

      <div className="pb-10">
        <ZoomableSvg src="/world.svg" />
      </div>
    </main>
  );
}
