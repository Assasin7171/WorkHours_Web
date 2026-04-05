import {ThemeSwitch} from "@/components/ui/ThemeSwitch";
import {Menu, User} from "lucide-react";
import Link from "next/link";

export default function NavBar() {
    return(
        <div className="m-5">
            {/*mobile*/}
            <div className="flex flex-row md:hidden justify-between items-center mb-3">
                <div className="flex flex-row items-center gap-2">
                    <Menu className="h-7 w-7 text-primary hover:cursor-pointer"/>
                    <h1 className="text-xl text-text-primary font-bold">WorkHours</h1>
                </div>

                <ThemeSwitch/>
            </div>

            {/*desktop*/}
            <div className="hidden md:flex flex-row justify-between items-center">
                <h1 className="text-xl text-text-primary font-bold">WorkHours</h1>

                <div className="">
                    <ul className="flex flex-row gap-4">
                        <li>
                            <Link className="hover:border-b-2 py-1 border-primary hover:text-primary" href="/">Dashboard</Link>
                        </li>
                        <li>
                            <Link className="hover:border-b-2 py-1 border-primary hover:text-primary" href="/">Logs</Link>
                        </li>
                        <li>
                            <Link className="hover:border-b-2 py-1 border-primary hover:text-primary" href="/">Projects</Link>
                        </li>
                        <li>
                            <Link className="hover:border-b-2 py-1 border-primary hover:text-primary" href="/">Settings</Link>
                        </li>

                    </ul>
                </div>

                <div className="flex flex-row items-center gap-2">
                    <ThemeSwitch/>

                    <User className="h-8 w-8 text-primary hover:cursor-pointer p-1"/>
                </div>
            </div>

        </div>
    )
}