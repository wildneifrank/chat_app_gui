import MessageSent from "./components/MessageSent";
import MessageReceived from "./components/MessageReceived";
import axios from "axios";
import { useState, useEffect } from "react";

const URL = "http://localhost:8080/";

function App() {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([])
  const getData = async () => {
    try {
      const res = await axios.get(URL);
      setMessages(res.data.messages);
      setUsers(res.data.users)
      console.log("res.data", res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const findUser = (id) => {
    const user = users.filter((user) => user.id == id)
    return user[0].name;
  }
  return (
    <div className="App w-screen min-h-screen bg-slate-700 flex flex-col  ">
      <div className="w-full flex flex-col gap-3 px-16 py-10 flex-1">
        {messages.map((item, index) => {
          return <MessageReceived name={findUser(item.user)} text={item.text} key={index}/>;
        })}
        <MessageReceived
          name={"Name"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,dignissimos maiores! Ipsam unde, optio qui veritatis eveniet inomnis expedita deserunt, quia velit debitis sapiente blanditiisaccusamus itaque."
          }
        />
        <MessageSent
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,dignissimos maiores! Ipsam unde, optio qui veritatis eveniet inomnis expedita deserunt, quia velit debitis sapiente blanditiisaccusamus itaque ipsum."
          }
        />
      </div>
      <form
        className="w-full px-10 py-5 flex bg-slate-800 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Type your message..."
          required
          className="bg-transparent px-3 py-2 outline-none rounded-md border-slate-500 border text-white flex-1 text-lg font-semibold"
        />
        <button
          type="submit"
          className="w-12 flex justify-center items-center rounded-full border border-slate-500 group duration-500 ease-in-out hover:bg-white"
        >
          <i className="fa-solid fa-paper-plane text-white duration-500 ease-in-out group-hover:text-slate-800"></i>
        </button>
      </form>
    </div>
  );
}

export default App;
