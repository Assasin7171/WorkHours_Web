import MobileNavBar from "@/components/ui/MobileNavBar";
import DesktopNavBar from "@/components/ui/DesktopNavBar";

export default function NavBar() {
    return (
        <div className="m-5">
            {/*mobile*/}
            <MobileNavBar/>

            {/*desktop*/}
            <DesktopNavBar/>

        </div>
    )
}