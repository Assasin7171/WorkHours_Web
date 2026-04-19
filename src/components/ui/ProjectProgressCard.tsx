import {PencilIcon} from "lucide-react";
import {ProjectCardType} from "@/lib/types";
import Image from "next/image";

export const ProjectProgressCard = ({title, description, totalHours, progress, users}: ProjectCardType) => {
    return (
        <div className="bg-surface-low p-6 rounded-2xl cursor-pointer">
            <div className="flex flex-row justify-between items-center">
                <div className="bg-surface-highest h-12 w-12 rounded-xl flex items-center justify-center">
                    <PencilIcon className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-text-primary flex flex-col text-right">
                    <span className="text-2xl">{totalHours}H</span>
                    <span className="uppercase text-text-primary/50 text-sm">suma godzin</span>
                </div>
            </div>

            <div className="flex flex-col mt-6 gap-3">
                <span className={"text-text-primary font-medium text-2xl"}>{title}</span>
                <span className="truncate text-text-primary/50 text-sm">{description}</span>
            </div>

            <div className="mt-6">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-text-primary/50">Postęp projektu</span>
                    <span className="text-primary font-bold">{progress}%</span>
                </div>
                <div className="w-full bg-surface-highest rounded-full h-2.5 mt-4">
                    <div className="bg-primary h-2.5 rounded-full" style={{width: `${progress}%`}}></div>
                </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-6">
                <div className="flex flex-row gap-2">
                    {users.map((user) => (
                        <div key={user.id} className="bg-surface-highest p-2 rounded-full">
                            <Image src={user.avatar} alt="avatar" className="h-8 w-8 rounded-full"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}