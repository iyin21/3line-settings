import Logo from "@/assets/icons/logo.svg"
import MenuIcon from "@/assets/icons/menu.svg"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { routes } from "../Sidebar/utils/routes"

const Navbar = () => {
    return (
        <nav className="flex justify-between bg-white-10 p-3">
            <img src={Logo} alt="" />

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <img src={MenuIcon} alt="" />
                </DropdownMenuTrigger>

                <DropdownMenuContent className="bg-white-100 w-full pr-4">
                    {routes?.map((route, index) => (
                        <DropdownMenuLabel
                            key={index}
                            className="flex w-full gap-2 py-3  cursor-pointer"
                        >
                            <img src={route.Icon} alt="" />
                            <p className="text-lg text-black-90">
                                {route?.name}
                            </p>
                        </DropdownMenuLabel>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    )
}
export default Navbar
