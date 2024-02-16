import Chat from "./assets/Chat";
import Login from "./assets/Login";
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [currentName, setCurrentName] = useState(null)
  
  return (
    <div className="App w-screen min-h-screen bg-slate-700">
      <ToastContainer position="bottom-left" autoClose={3000}/>
      {currentName ? <Chat/> : <Login toast={toast} setCurrentName={setCurrentName}/>}
      
    </div>
    
  );
}

export default App;
