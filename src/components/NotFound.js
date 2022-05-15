import Navbar from "./Navbar";

function NotFound() {
  return (
    <>
      <Navbar />
      <div className="text-center text-xl mt-10 font-semibold">
        <p>404 This page does not exist</p>
      </div>
    </>
  );
}

export default NotFound;
