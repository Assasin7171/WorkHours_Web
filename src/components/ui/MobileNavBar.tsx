import {Menu} from "lucide-react";
import {ThemeSwitch} from "@/components/ui/ThemeSwitch";

export default function MobileNavBar() {
    return(
        <div className="flex flex-row md:hidden justify-between items-center mb-3">
            <div className="flex flex-row items-center gap-2">
                <Menu className="h-7 w-7 text-primary hover:cursor-pointer"
                      onClick={() => console.log("menu clicked")}/>
                <h1 className="text-xl text-text-primary font-bold">WorkHours</h1>
            </div>

            <ThemeSwitch/>

            {/*mobile nav menu*/}
            <div className={`h-screen w-11/12 md:hidden rounded-r-4xl absolute z-10 left-0 top-0 bg-surface-highest `}>

            </div>
        </div>
    )
}