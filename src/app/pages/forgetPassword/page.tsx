// "use client"
// import { useState } from "react";
// import { getCaptchaApi,resetPasswordApi,resetPasswordDown } from "@/api/auth";
// export default function FotgetPassword(){
//     const [username_or_email,setUsernameOrEmail] = useState("")
//     const [password,setPassword] = useState("")
//     const [confirmPassword,setConfirmPassword] = useState("")
//     const [captchaCode, setCaptchaCode] = useState('');  
//     const handleResetPasswordSubmit = async function handleResetPasswordSubmit(e:React.FormEvent){
//         e.preventDefault();
//         try{
//             await getCaptchaApi(username_or_email).then((res)=>{
//                 console.log("验证码为：",res);
//             })
//             await resetPasswordApi(captchaCode,password,confirmPassword).then((res)=>{
//                 console.log("重置密码成功");
//             })
//             await resetPasswordDown().then((res)=>{
//                 console.log("重置密码完成")}
//         )}catch(err){
//             console.log(err);
//         }
        
//     }
//     return (
//         <div className="flex justify-center items-center h-screen bg-slate-400 ">
//         <form
//         onSubmit={handleResetPasswordSubmit}
//           className="flex flex-col bg-slate-300 rounded-2xl px-8 py-4 space-y-4 "
//         >
//           <h2 className="mx-auto">重置密码</h2>
//           <input
//             type="text"
//             placeholder="请输入用户名或者邮箱"
//             onChange={(e) => setUsernameOrEmail(e.target.value)}
//             name="username_or_email"
//             required
//             className=" h-6 rounded-md bg-white bg-opacity-20 placeholder-gray-300"
//           />
//           <input
//             type="password"
//             placeholder="请输入新密码"
//             onChange={(e) => setPassword(e.target.value)}
//             name="password"
//             required
//             className=" h-6 rounded-md bg-white bg-opacity-20 placeholder-gray-300"
//           />
//           <input
//             type="password"
//             placeholder="请确认新密码"
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             name="confirmPassword"
//             required
//             className=" h-6 rounded-md bg-white bg-opacity-20 placeholder-gray-300"
//           />
//           <input
//             type="captchaCode"
//             placeholder="请确认验证码"
//             onChange={(e) => setCaptchaCode(e.target.value)}
//             name="captchaCode"
//             required
//             className=" h-6 rounded-md bg-white bg-opacity-20 placeholder-gray-300"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
//           >
//             确定
//           </button>

//         </form>
//       </div>
//     )
// }