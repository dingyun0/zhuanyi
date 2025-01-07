"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginApi } from "@/api/auth";
import Link from "next/link";
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
        alert("登录成功");
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
    <div className="flex justify-center items-center h-screen bg-slate-400 ">
      <form
        onSubmit={handleLoginSubmit}
        className="flex flex-col bg-slate-300 rounded-2xl px-8 py-4 space-y-4 "
      >
        <h2 className="mx-auto">登录</h2>
        <input
          type="text"
          placeholder="请输入邮箱"
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          required
          className=" h-6 rounded-md bg-white bg-opacity-20 placeholder-black"
        />
        <input
          type="password"
          placeholder="请输入密码"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          required
          className=" h-6 rounded-md bg-white bg-opacity-20 placeholder-black"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          登录
        </button>
        <p className="text-center text-[10px] text-gray-500">
          还没有账号？
          <span className="text-blue-500">
            <Link href="pages/register">立即注册</Link>
          </span>
        </p>
        {/* <p className="text-center text-[10px] text-gray-500">
          <span className="text-blue-500">
            <Link href="/pages/forgetPassword">忘记密码?</Link>
          </span>
        </p> */}
      </form>
    </div>
  );
}
