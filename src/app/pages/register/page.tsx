"use client";
import { useState } from "react";
import { registerApi } from "@/api/auth";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import DynamicBackground from "@/components/DynamicBackground ";
export default function Register() {
  const [username,setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleRegisterSubmit = async function handleRegisterSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();
    await registerApi(username,email,password).then((res)=>{
      if(res.status === 200){
        alert("注册成功");
        if (window.location.pathname !== '/') {
          window.location.replace('/');
        }
        router.push("/pages/login");
      }else{
        alert("注册失败");
      }
    })
  };
  // return (
  //   <div className="flex justify-center items-center h-screen bg-slate-400 ">
  //     <form
  //       onSubmit={handleRegisterSubmit}
  //       className="flex flex-col bg-slate-300 rounded-2xl px-8 py-4 space-y-4 "
  //     >
  //       <h2 className="mx-auto">注册</h2>
  //       <input
  //         type="text"
  //         placeholder="请输入用户名"
  //         onChange={(e) => setUsername(e.target.value)}
  //         name="username"
  //         required
  //         className=" h-6 rounded-md bg-white bg-opacity-20 placeholder-black"
  //       />
  //       <input
  //         type="password"
  //         placeholder="请输入密码"
  //         onChange={(e) => setPassword(e.target.value)}
  //         name="password"
  //         required
  //         className=" h-6 rounded-md bg-white bg-opacity-20 placeholder-black"
  //       />
  //       <input
  //         type="text"
  //         placeholder="请输入邮箱"
  //         onChange={(e) => setEmail(e.target.value)}
  //         name="email"
  //         required
  //         className=" h-6 rounded-md bg-white bg-opacity-20 placeholder-black"
  //       />
  //       <button
  //         type="submit"
  //         className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
  //       >
  //         注册
  //       </button>
  //     </form>
  //   </div>
  // );
  return (
    <div className="min-h-screen flex items-center justify-center  overflow-hidden bg-blue-300">
      <DynamicBackground  />
      <motion.div className="flex flex-col bg-slate-300 rounded-2xl z-10 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-4xl font-bold mb-4 text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          注册
        </motion.h1>
        <form
          onSubmit={handleRegisterSubmit}
          className="flex flex-col  rounded-2xl px-8 pt-4 pb-4 space-y-4 "

        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >

          <input
          type="text"
          placeholder="请输入用户名"
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          required
          className=" h-6 rounded-md border-white border-2 bg-white bg-opacity-20 placeholder-black"
        />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >

          <input
            type="password"
            placeholder="请输入密码"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
            className=" h-6 rounded-md bg-white border-white border-2 bg-opacity-20 placeholder-black"
          />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            
          <input
          type="text"
          placeholder="请输入邮箱"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          required
          className=" h-6 rounded-md border-white border-2 bg-white bg-opacity-20 placeholder-black"
        />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >

          <button
            type="submit"
            className="w-full bg-blue-300 border-white border-2 hover:bg-blue-400 mb-4 text-white font-bold py-1 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            注册
          </button>

          </motion.div>

        </form>
      </motion.div>
    </div>
  );
}
