import MessageSent from "../components/MessageSent";
import MessageReceived from "../components/MessageReceived";
import axios from "axios";
import { useState, useEffect } from "react";

const URL = "http://localhost:8080/";

function Chat({currentName}) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [existsData, setExistsData] = useState(false);
  const getData = async () => {
    try {
      const res = await axios.get(URL);
      if (res.data.messages) {
        setMessages(res.data.messages);
        setUsers(res.data.users);
        setExistsData(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const postData = async () => {
    try {
      const res = await axios.post(URL, {
        text: message,
        user_name: currentName,
      });
      setMessage("");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getData();
    }, 1000); // Request every 1 second

    return () => clearInterval(intervalId);
  }, []);

  const findUserName = (id) => {
    const user = users.filter((user) => user.id == id);
    return user[0].name;
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="w-full flex flex-col gap-3 px-16 py-10 flex-1 overflow-y-scroll max-h-[91vh]">
        {existsData
          ? messages.map((item, index) => {
              const userName = findUserName(item.user);
              if (userName.toLowerCase() == currentName.toLowerCase()) {
                return <MessageSent key={index} text={item.text} />;
              } else {
                return (
                  <MessageReceived
                    name={userName}
                    text={item.text}
                    key={index}
                  />
                );
              }
            })
          : null}
      </div>
      <form
        className="w-full px-10 py-5 flex bg-slate-800 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          postData();
        }}
      >
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Type your message..."
          required
          autoComplete="off"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
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

export default Chat;
