import {PlusCircle} from "lucide-react";
import {ProjectProgressCard} from "@/components/ui/ProjectProgressCard";

export default function Projects() {
    return (
        <div className="mt-10 flex flex-col ">
            {/*header*/}
            <div className="flex flex-row gap-4 justify-between items-center">
                <div className="">
                    <h1 className="text-2xl md:text-5xl font-bold text-primary">Moje projekty</h1>
                    <h3 className="text-text-primary/50 mt-4 text-sm md:text-xl">Zarządzaj czasem pracy w czasie rzeczywistym.</h3>
                </div>
                <div>
                    <button
                        className="bg-primary text-gray-100 font-bold py-2 px-4 w-full max-w-80 rounded-3xl text-lg hover:cursor-pointer">
                        <div className="flex flex-row justify-center items-center gap-2">
                            <PlusCircle className="w-fit h-fit"/>
                            <span className="text-sm md:text-lg">Nowy projekt</span>
                        </div>
                    </button>
                </div>
            </div>

            {/*projects list*/}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <ProjectProgressCard progress={72}
                                     title={"Redesign Portal Cloud"}
                                     users={[]}
                                     totalHours={12}
                                     description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}/>
                <ProjectProgressCard
                    progress={72}
                    title={"Redesign Portal Cloud"}
                    users={[]}
                    totalHours={12}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}/>
                <ProjectProgressCard
                    progress={72}
                    title={"Redesign Portal Cloud"}
                    users={[]}
                    totalHours={12}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}/>
                <ProjectProgressCard
                    progress={72}
                    title={"Redesign Portal Cloud"}
                    users={[]}
                    totalHours={12}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}/>
                <ProjectProgressCard
                    progress={72}
                    title={"Redesign Portal Cloud"}
                    users={[]}
                    totalHours={12}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}/>
            </div>

        </div>
    )
}