"use client";
import { useState } from "react";
import useLoginStore from "@/app/store/useLoginStore";
import { useRouter } from "next/navigation";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const setAuth = useLoginStore((state: any) => state.setAuth);
  const router = useRouter();
  const handleRegisterSubmit = async function handleRegisterSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("两次的密码不一致！！！");
    } else {
      setAuth({ email, password });
      alert("注册成功");
      router.push("login");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-slate-400 ">
      <form
        onSubmit={handleRegisterSubmit}
        className="flex flex-col bg-slate-300 rounded-2xl px-8 py-4 space-y-4 "
      >
        <h2 className="mx-auto">注册</h2>
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
        <input
          type="password"
          placeholder="请再次输入密码"
          onChange={(e) => setConfirmPassword(e.target.value)}
          name="ComfirmPassword"
          required
          className=" h-6 rounded-md bg-white bg-opacity-20 placeholder-gray-300"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          注册
        </button>
      </form>
    </div>
  );
}
