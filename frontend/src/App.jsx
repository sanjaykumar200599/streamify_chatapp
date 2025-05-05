import React, { useEffect, useState } from 'react'

import { Route, Routes } from "react-router";
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from "./pages/LoginPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import OnboardingPage from "./pages/OnboardingPage.jsx";

import axios from "axios"

import toast, { Toaster } from "react-hot-toast"
import { useQuery } from '@tanstack/react-query';

const App = () => {
  // const [data,setData]= useState([]);
  // const [isLoading, setLoading] = useState(false);
  // const [error,setError]= useState(null);

  // useEffect(()=>{
  //   const getData = async()=>{
  //     try{
  //       const data= await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //       const json = await data.json()
  //       setData(json)
  //     }catch(error){
  //       setError(error)
  //     }finally{
  //         setLoading(false);
  //     }
  //   };

  //   getData();
  // },[]);

  //tanstack query crash course
 const {data,isLoading,error} = useQuery({
  queryKey:["todos"],

  queryFn: async()=>{
    const res= await axios.get("https://jsonplaceholder.typicode.com/todos");
    
    return res.data;
  },
 });

   return (
    <div className='h-screen'>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/notifications" element={<NotificationsPage />}/>
        <Route path="/call" element={<CallPage />}/>
        <Route path="/chat" element={<ChatPage />}/>
        <Route path="/onboarding" element={<OnboardingPage />}/>
      </Routes>

    <Toaster/>
    </div>
    
  )
}

export default App