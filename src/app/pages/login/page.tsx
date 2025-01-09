"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useLoginStore from "@/app/store/useLoginStore";
import Link from "next/link";
import { loginApi } from "@/api/login";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const isUserRegister = useLoginStore((state: any) => state.isUserRegister);
  const setCurrentUser = useLoginStore((state: any) => state.setCurrentUser);
  const handleLoginSubmit = async function handleLoginSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();
    // if (isUserRegister(email, password)) {
    //   setCurrentUser(email);
    //   localStorage.setItem("eamil", email);
    //   alert("登录成功");
    //   router.push("home");
    // } else {
    //   alert("该邮箱未注册");
    // }
    await loginApi(email, password).then((res) => {});
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
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          required
          className=" h-6 rounded-md bg-white bg-opacity-20 placeholder-gray-300"
        />
        <input
          type="password"
          placeholder="请输入密码"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          required
          className=" h-6 rounded-md bg-white bg-opacity-20 placeholder-gray-300"
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
      </form>
    </div>
  );
}
