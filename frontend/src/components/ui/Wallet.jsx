import { Section } from "lucide-react"
import { useState } from "react"

export function Wallet({wally}){

    return (
        <div>
            {wally.map((wallet)=>{
                if(wallet.id == 0 ){
                    return (<></>)
                }else{
                    return <W id={wallet.id} public_key={wallet.public_key} private_key={wallet.private_key}></W>
                }
            })}
        </div>
    )
}

export function W({id,public_key, private_key}){
    return (
        <div className="pt-10 transition-transform duration-200">
            <div className="border rounded-lg pt-2 shadow-lg bg-slate-200 hover:bg-slate-100">
                <div className="">
                    <div>                       
                        <div className="pl-4 pb-4 text-5xl font-semibold pt-2 ">Wallet <span className="pl-1"> {id}</span></div>
                    </div>
                    <div className="bg-slate-300 rounded-t-lg pl-4 ">
                    <div className=" pt-5 pb-3 ">
                        <div className="text-3xl font-semibold">Public Key</div>
                        <div className="pr-4 pt-2 "><div className=" border rounded-lg pt-1 pb-1 pl-2 ">{public_key}</div></div>
                    </div>
                    <div className=" pb-5">
                        <div className="text-3xl font-semibold">Private Key</div>
                        <div className="pr-4 pt-2 "><div className=" text-slate-600 border rounded-lg pt-1 pb-1 pl-2 ">{private_key}</div></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}