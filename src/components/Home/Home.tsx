import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="bg-[#1F1B24] w-full flex flex-col justify-center items-center text-3xl text-white">
      <div className="">
        <h1 className="font-bold text-7xl">Welcome to lavCART</h1>
        <h2>
          Checkout our <span className="underline text-[#BB86F6]"><Link to="/shop">shop</Link></span>
        </h2>
      </div>
    </main>
  );
}

export default Home;
