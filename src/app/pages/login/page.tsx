'use client';
import { FormEvent } from "react";
import { loginApi } from "@/api/login";
export default function Login(){
    async function handleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        const formData=new FormData(e.currentTarget)
        const email=formData.get('email')
        const password=formData.get('password')
        await loginApi({email,password}).then((res)=>{
            if(res.ok){
                console.log("ok");
                
            }else{
                alert('登录失败')
            }
        })


    }
    return (
        <div className="flex justify-center items-center h-screen bg-slate-400 ">
            <form onSubmit={handleSubmit} className="flex flex-col bg-slate-300 rounded-2xl px-8 py-4 space-y-4 ">
                <h2 className="mx-auto">登录</h2>
                <input type="text" placeholder="请输入邮箱" name="email" required className=" h-6 rounded-md bg-white bg-opacity-20 placeholder-gray-300" />
                <input type="password" placeholder="请输入密码" name="password" required className=" h-6 rounded-md bg-white bg-opacity-20 placeholder-gray-300" />
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105">登录</button>
                <p className="text-center text-[10px] text-gray-500">还没有账号？<span className="text-blue-500">立即注册</span></p>
            </form>
        </div>
    )
}