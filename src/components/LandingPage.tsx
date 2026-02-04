import TypeArea from "./TypeArea";

function LandingPage() {
  return (
    <>
      <div className="flex flex-col container w-full mt-6 gap-6">
        <h1 className="geist text-white text-5xl">TypeTheScript</h1>
        <TypeArea />
      </div>
    </>
  );
}
export default LandingPage;
