import { useState } from "react";

function Login({ toast, setCurrentName }) {
  const [name, setName] = useState("");
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form onSubmit={(e) => {
        e.preventDefault();
        name ? setCurrentName(name): toast.warn("The name must be filled in");
        
      }} className="w-1/4 rounded-lg shadow-lg justify-center items-center gap-4 bg-slate-800 flex flex-col text-lg text-white px-5 py-11">
        <label className="font-semibold">Enter a Name</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="bg-transparent px-3 py-2 w-3/4 outline-none rounded-md border-slate-500 border text-white flex-1 text-lg font-semibold"
        />
        <button
          className="cursor-pointer flex justify-center w-1/3 px-4 py-3 border rounded-md border-slate-500 duration-500 ease-in-out hover:bg-white hover:text-slate-800 font-semibold" type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
