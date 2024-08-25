import { Switch } from "./switch";
import { Moon ,Sun } from "lucide-react";

export function Topbar(){
    return (
        <div>
            <div className="flex justify-between pb-9 "><div className="text-5xl antialiased font-bold ">wally <span>1.0</span></div><div className=" flex  pt-4">{/*<Sun></Sun><Switch></Switch><Moon/>*/}</div></div>
        </div>
    )
}