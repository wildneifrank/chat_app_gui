function App() {
  return (
    <div className="App w-screen min-h-screen bg-slate-700 flex flex-col  ">
      <div className="w-full flex flex-col gap-3 px-16 py-10 flex-1">
        <div classNamew="w-full flex">
          <div className="max-w-sm min-h-4 bg-blue-950 rounded-3xl rounded-ss-none text-white flex flex-col px-6 py-4 text-lg">
            <span className="font-bold">Name</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              dignissimos maiores! Ipsam unde, optio qui veritatis eveniet in
              omnis expedita deserunt, quia velit debitis sapiente blanditiis
              accusamus itaque ipsum doloremque.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-row-reverse">
          <div className="max-w-sm min-h-4 bg-blue-900 rounded-3xl rounded-ee-none text-white flex flex-col px-6 py-4 text-lg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              dignissimos maiores! Ipsam unde, optio qui veritatis eveniet in
              omnis expedita deserunt, quia velit debitis sapiente blanditiis
              accusamus itaque ipsum doloremque.
            </p>
          </div>
        </div>
      </div>
      <form className="w-full px-10 py-5 flex bg-slate-800 gap-4" onSubmit={(e)=>{
        e.preventDefault();
      }}>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Type your message..."
          required
          className="bg-transparent px-3 py-2 outline-none rounded-md border-slate-500 border text-white flex-1 text-lg font-semibold"
        />
        <button type="submit" className="w-12 flex justify-center items-center rounded-full border border-slate-500 group duration-500 ease-in-out hover:bg-white">
          <i className="fa-solid fa-paper-plane text-white duration-500 ease-in-out group-hover:text-slate-800"></i>
        </button>
      </form>
    </div>
  );
}

export default App;
