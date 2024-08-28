import { Button } from "@/components/ui/button";
import { Topbar } from "@/components/ui/Topbar";
import { useNavigate } from "react-router-dom";

export function LandingPage(){
    const navigate = useNavigate()
    function goToPage(blockchain){
        navigate(`/${blockchain}`)
    }
    return (
        <div className='bg-white-500 dark:bg-black h-full '>
        <div className='px-28 pt-8 pb-8'>
            <Topbar></Topbar> 
            <div className="text-5xl font-semibold shadow pb-4 pt-4 pl-2 rounded-lg text-slate-500 ">Choose a blockchain to create your wallet .</div>
            <div className="pt-10 "><Button className="w-32 text-2xl h-15" onClick={()=>{
                goToPage('solana')
            }}>Solana</Button><span className="pl-5"><Button className=" w-36 text-2xl h-15" onClick={()=>{
                goToPage('ethereum')
            }}>Ethereum</Button></span></div>
        </div>
        </div>
    )
}