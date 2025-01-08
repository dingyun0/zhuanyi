"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginApi } from "@/api/auth";
import Link from "next/link";
import DynamicBackground from "@/components/DynamicBackground ";
import { motion } from "framer-motion";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLoginSubmit = async function handleLoginSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();
    await loginApi(username,password).then((res)=>{
      if(res.status === 200){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        if (window.location.pathname !== '/') {
          window.location.replace('/');
        }
        router.push("/pages/home");
      }else{
        alert("登录失败");
      }
    }).catch((err)=>{
      console.log(err);
    })
  };
  return (
    <div className="min-h-screen flex items-center justify-center  overflow-hidden bg-blue-300">
      <DynamicBackground  />
      <motion.div className="flex flex-col bg-slate-300 rounded-2xl z-10 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-4xl font-bold mb-6 text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          登录
        </motion.h1>
        <form
          onSubmit={handleLoginSubmit}
          className="flex flex-col  rounded-2xl px-8 pt-4 pb-4 space-y-4 "

        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >

          <input
            type="text"
            placeholder="请输入邮箱"
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
            className="w-full bg-blue-300 border-white border-2 hover:bg-blue-400 text-white font-bold py-1 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            登录
          </button>
          <p className="text-center text-[10px] text-gray-500 mt-4">
            还没有账号？
            <span className="text-blue-500">
              <Link href="pages/register">立即注册</Link>
            </span>
          </p>
          </motion.div>

        </form>
      </motion.div>
    </div>
  );
}
