import "./App.css";
import Error from "./components/Error";
import{Routes, Route} from 'react-router-dom';
import NotificationPage from "./components/notification /NotificationPage";
import Chatbot from "./components/chatbot/Chatbot";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import LoginComponent from "./components/LoginComponent";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginComponent/>}/>
      </Routes>
      <Sidebar>
      <Routes>
        <Route path="/notification" element={<NotificationPage/>}/>
        <Route path="/chatbot" element={<Chatbot/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        
        <Route path="*" element={<Error/>}/>
      </Routes>
      </Sidebar>
    </>
  );

}

export default App;
