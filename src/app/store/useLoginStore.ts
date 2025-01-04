import { create } from "zustand";
interface User {
  email: string;
  password: string;
}
interface LoginStore {
  users: User[]; //users列表是一个数组，数组里面的类型是User
  currentUser: string | null;
  setAuth: (auth: User) => void; //接受一个参数，参数的类型是User
  setCurrentUser: (email: string) => void;
  isUserRegister: (email: string, password: string) => boolean;
}
const useLoginStore = create<LoginStore>((set) => ({
  users: [{ email: "123@123.com", password: "123456" }],
  currentUser: null,
  //调用setAuth函数，将auth作为参数；setAuth内部调用set函数，set函数接受一个回调函数作为参数，回调函数接受state作为参数
  //调用setAuth，setAuth执行set，set会执行接受的回调函数，回调函数返回一个新的users列表用于更新state
  setAuth: (auth) => set((state) => ({ users: [...state.users, auth] })),
  setCurrentUser: (email: string) => set(() => ({ currentUser: email })),
  isUserRegister: (email, password): boolean => {
    return useLoginStore
      .getState()
      .users.some((user) => user.email === email && user.password === password);
  },
}));
export default useLoginStore;
