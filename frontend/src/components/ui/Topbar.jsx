import { Switch } from "./switch";
import { Moon ,Sun } from "lucide-react";
import { useState , useEffect } from "react";

export function Topbar(){

    const [theme, setTheme] = useState('light')

    useEffect(()=>{
      if(theme === 'dark'){
         document.documentElement.classList.add('dark')
      }else{
        document.documentElement.classList.remove('dark')
      }
    },[theme])
  
    const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <div>
            <div className="flex justify-between pb-9 pt-5"><div className="text-3xl antialiased font-bold "><span className="border shadow-md rounded-lg p-2 bg-gradient-to-r from-slate-400 to-slate-200">wally 1.0</span> </div><div className=" flex  pt-4">{/*<Sun></Sun><Switch onClick={handleTheme}  ></Switch><Moon/>*/}</div></div>
        </div>
    )
}

