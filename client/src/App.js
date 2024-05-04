import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import React from 'react';
import GetFiles from './components/File/GetFiles.js'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/Home/Home.js'
import SignUp from "./components/User/SignUp.js"
import SignIn from "./components/User/SignIn.js"
import store  from'./store';
import { laodUser } from "./actions/userAction";
import UploadFiles from './components/File/UploadFiles.js'
import axios from "axios";
import User from './components/User/User.js'
import { useSelector } from "react-redux";
import AboutUs from "./components/Main/AboutUs";
import ContactUs from "./components/Main/ContactUs";
axios.defaults.withCredentials=true
function App() {

const {isAuthenticated}=useSelector(state=>state.user);

  React.useEffect(()=>{
    store.dispatch(laodUser())
  },[isAuthenticated])

  return (
<>
<Header/>
<Router basename="/">
  <Routes>

  <Route path="/" element={<Home/>}/>
 { isAuthenticated && <Route path="/file/getAllFiles" element={<GetFiles/>}/>}
  { isAuthenticated &&<Route path="/account" element={<User/>}/>}
  { isAuthenticated && <Route path="/file/uploadFile" element={<UploadFiles/>}/>}
  <Route path="/register" element={<SignUp/>}/>
  <Route path="/aboutus" element={<AboutUs/>}/>
  <Route path="/contactus" element={<ContactUs/>}/>
  <Route path="/login" element={<SignIn/>}/>
  
  </Routes>
</Router>
<Footer/>
</>
  );
}

export default App;
