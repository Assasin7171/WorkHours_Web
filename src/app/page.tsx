import {AddTimeToSave} from "@/components/ui/AddTimeToSave";
import {QuickInfo} from "@/components/ui/QuickInfo";
import Link from "next/link";
import SingleSession from "@/components/ui/SingleSession";

export default function Home() {
    return (
        <div className="p-5 flex flex-col">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col gap-2 ">
                    <span className="text-text-primary text-xl font-light uppercase">Poniedziałek, 22 MAJA</span>
                    <h5 className="text-3xl">Dzisiaj</h5>
                </div>

                <div>
                    <span className="text-primary text-5xl font-bold">6.5h</span>
                </div>
            </div>

            <AddTimeToSave/>

            {/*Sekcja szybkie informacje*/}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <QuickInfo when={"dzisiaj"} time={6.5} performance={12}/>
                <QuickInfo when={"tydzien"} time={24.2} performance={40}/>
                <QuickInfo when={"miesiąc"} time={156} performance={0}/>
                <QuickInfo when={"tydzien"} time={24.2} performance={40}/>
            </div>

            {/*Ostatnie sesje*/}
            <div className="flex flex-col gap-4 ">
                <div className="flex flex-row justify-between items-center mt-10">
                    <h5 className="text-2xl text-text-primary font-bold">Ostatnie sesje</h5>
                    <Link href={"/"}>
                        <span className="text-primary text-md">Zobacz wszystkie</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">
                    <SingleSession
                        title={"App Design - Mobile"}
                        body={"lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
                        time={3.5}/>
                    <SingleSession
                        title={"App Design - Mobile"}
                        body={"refinement"}
                        time={3.5}/>
                    <SingleSession
                        title={"App Design - Mobile"}
                        body={"refinement"}
                        time={3.5}/>
                    <SingleSession
                        title={"App Design - Mobile"}
                        body={"refinement"}
                        time={3.5}/>
                </div>
            </div>
        </div>
    );
}
