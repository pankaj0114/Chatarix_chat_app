import React , {lazy} from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Groups from './pages/Groups';

const Home = lazy (()=> import ("./pages/Home"));
const Login = lazy (()=> import ("./pages/Login"));

const Chat = lazy(()=> import ("./pages/chat"));

const App = () => {
  return (
   <BrowserRouter>
  <Routes>
  <Route path="/" element ={<Home />} />
   <Route path="/login" element ={<Login />} />
   <Route path="/chat/:chatId" element ={<Chat />} />
   <Route path="/Groups" element ={<Groups/>} />
  </Routes>
   
   </BrowserRouter>
  );
};

export default App;