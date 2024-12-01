import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="bg-slate-600 w-full flex flex-col justify-center items-center text-3xl">
      <div className="">
        <h1 className="font-bold text-7xl">Welcome to lavCART</h1>
        <h2>
          Checkout our <span className="underline text-purple-400"><Link to="/shop">shop</Link></span>
        </h2>
      </div>
    </main>
  );
}

export default Home;
