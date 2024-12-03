import { Link } from "react-router-dom";

// Home Page
function Home() {
  return (
    <main className="bg-[#1F1B24] w-full flex flex-col justify-center items-center text-white">
      <div className="flex flex-col gap-6 lg:gap-0">
        <h1 className="font-bold text-4xl md:text-7xl text-center">Welcome to lavCART</h1>
        <h2 className=" text-xl md:text-3xl text-center lg:text-start">
          {/* Redirects to Shop page */}
          Checkout our <span className="underline  text-[#BB86F6]"><Link to="/shop">shop</Link></span>
        </h2>
      </div>
    </main>
  );
}

export default Home;
