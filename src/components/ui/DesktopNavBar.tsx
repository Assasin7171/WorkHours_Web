import Link from "next/link";
import {ThemeSwitch} from "@/components/ui/ThemeSwitch";
import {User} from "lucide-react";

export default function DesktopNavBar() {
    return(
        <div className="hidden md:flex flex-row justify-between items-center">
            <h1 className="text-xl text-text-primary font-bold">WorkHours</h1>

            <div className="">
                <ul className="flex flex-row md:text-xl gap-4">
                    <li>
                        <Link className="hover:border-b-2 py-1 border-primary hover:text-primary"
                              href="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link className="hover:border-b-2 py-1 border-primary hover:text-primary"
                              href="/">Logs</Link>
                    </li>
                    <li>
                        <Link className="hover:border-b-2 py-1 border-primary hover:text-primary"
                              href="/projects">Projects</Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-row items-center gap-2">
                <ThemeSwitch/>

                <Link className="hover:ring-1 rounded-full p-1 border-primary hover:text-primary" href="/"><User
                    className="h-8 w-8 text-primary hover:cursor-pointer p-1"/></Link>
            </div>
        </div>
    )
}