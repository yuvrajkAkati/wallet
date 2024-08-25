import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
export default function SecretPhase({mnemonics}){   
    
    return (
        <>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <div className="bg-slate-200 hover:bg-slate-100 border-2 rounded-lg pr-4 border-slate-300 shadow">
                <AccordionTrigger>
                   <div className="text-4xl pl-4 ">
                    Secret Phase
                   </div>
                </AccordionTrigger>
                </div>
                <div className="pt-3">
                <AccordionContent>
                    <div className="grid grid-cols-4 ">{mnemonics.split(' ').map((mnemonic)=>{
                        return <div className="py-2 px-5"><Bgasd text={mnemonic} >
                        </Bgasd></div>
                    })}
                    </div>
                </AccordionContent>
                </div>
            </AccordionItem>
        </Accordion>
        </>
    )
}

export function Bgasd({text}){
    return (
        <div className="border rounded-lg bg-slate-100 px-2 py-4 shadow">
            {text}
        </div>
    )
}
