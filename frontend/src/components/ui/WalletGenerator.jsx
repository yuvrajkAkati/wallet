import { WalletDeletion } from "./WalletDeletion";


export function WalletGenerator({wallet , onClick , onClickDelete}){
    return (
        <div>
            <div className="flex justify-between pt-8">
                <div className="text-4xl font-bold font-medium shadow">
                    {wallet}
                </div>
                <div>
                    <button className="bg-slate-900 border rounded-lg text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 h-10 px-4 py-2" onClick={onClick}>add wallet</button> <WalletDeletion onClickDelete={onClickDelete}></WalletDeletion>
                </div>
            </div>
        </div>
    )
}