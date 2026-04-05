import {AlbumIcon} from "lucide-react";

export default function SingleSession({title, body, time}: { title: string, body: string, time: number }) {
    return (
        <div className="bg-surface-low p-6 rounded-2xl">
            <div className="flex flex-row justify-center items-center gap-8">
                <div className="bg-primary/25 rounded-full p-4">
                    <AlbumIcon className="h-6 w-6 text-primary rounded-2xl"/>
                </div>

                <div className="flex flex-col">
                    <span className="text-text-primary font-bold text-xl">{title}</span>
                    <span className="text-text-primary/70 w-30 truncate">{body}</span>
                </div>

                <span className="bg-primary/25 p-4 rounded-3xl font-bold">{time}H</span>
            </div>
        </div>
    )
}