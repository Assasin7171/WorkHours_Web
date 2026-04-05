import {ArrowUp, PlusCircleIcon} from "lucide-react";

export const AddTimeToSave = () => {
    return(
        <div className="flex gap-5 flex-col my-10 bg-surface-low rounded-2xl p-6 text-text-primary">
            <div className="">
                <div className="flex items-center gap-2">
                    <PlusCircleIcon className="h-6 w-6 font-bold"/>
                    <h5 className="text-xl font-medium">Szybkie dodawanie</h5>
                </div>
            </div>

            <div className="flex flex-col justify-center xl:flex-row gap-5">
                <div className="bg-surface-highest p-6 relative rounded-2xl focus-within:shadow-[0_0_0_2px_var(--color-primary)] flex items-center">
                    <input type="text"
                           placeholder="0.00"
                           className="w-full font-bold z-0 text-2xl outline-none"/>
                    <span className="absolute right-6 z-10">godz</span>
                </div>

                <div className="relative bg-surface-highest p-6 rounded-2xl transition focus-within:shadow-[0_0_0_2px_var(--color-primary)] ">
                    <select className="w-full bg-transparent font-semibold text-lg outline-none appearance-none pr-10 cursor-pointer">
                        <option className="text-text-primary">Wybierz projekt</option>
                    </select>

                    <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-text-secondary">
                        ▼
                    </div>
                </div>

                <div className="bg-surface-highest p-6 rounded-2xl">
                    <input type="text"
                           placeholder="Opis zadania..."
                           className="w-full font-bold z-0 text-2xl outline-none"/>
                </div>
            </div>



            <div className="flex justify-center">
                <button className="bg-primary text-gray-100 font-bold py-4 px-6 w-full max-w-80 rounded-2xl text-xl hover:cursor-pointer">
                    <div className="flex flex-row justify-center items-center gap-2">
                        <span>Zapisz czas</span>
                        <ArrowUp className="h-6 w-6"/>
                    </div>
                </button>
            </div>

        </div>
    )
}