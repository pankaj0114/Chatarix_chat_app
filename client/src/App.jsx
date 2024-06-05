import React , {lazy} from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';

import ProtectRoute from './components/auth/ProtectRoute';

const Home = lazy (()=> import ("./pages/Home"));
const Login = lazy (()=> import ("./pages/Login"));

const Chat = lazy(()=> import ("./pages/chat"));
const Groups = lazy(()=> import ("./pages/Groups"));


let user = true;




const App = () => {
  return (
   <BrowserRouter>
  <Routes>
   <Route element={<ProtectRoute user={user}/>}>
   <Route path="/" element ={<Home/>} />
   
   <Route path="/chat/:chatId" element ={<Chat />} />
   <Route path="/Groups" element ={<Groups/>} />
   </Route>

   <Route path="/login" element ={
      <ProtectRoute user={!user} redirect="/">
        <Login />
      </ProtectRoute>
    } />

    <Route path="*" element={<Home/>}/>
  </Routes>
  
   
   </BrowserRouter>
  );

};

export default App;