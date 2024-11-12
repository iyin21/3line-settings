import Logo from "@/assets/icons/logo.svg"
import { routes } from "./utils/routes"
import Avatar from "@/assets/icons/avatar.svg"
import { LogOut } from "lucide-react"
import DummyPicture from "@/assets/images/dummyPicture.png"
import { Search } from "lucide-react"

const Sidebar = () => {
    return (
        <aside className="bg-white-100 px-4  py-6 pb-16 ">
            <img src={Logo} alt="" />
            <div
                className="mt-6 flex items-center border border-[#D6BBFB] p-2  rounded-[8px]"
                style={{ boxShadow: "0px 0px 0px 4px rgba(244, 235, 255, 1)" }}
            ><div><Search color="#667085" size={18} /></div>
                
                <input
                    type="text"
                    placeholder="Olivia Rhye"
                    className="pl-2 outline-none "
                />
            </div>
            <ul className="mt-6">
                {routes?.map((route, index) => (
                    <li
                        className="flex items-center   text-md text-black-90 "
                        key={index}
                    >
                        <div className={`flex items-center justify-between w-full  font-medium  py-4 p-2 ${index===7 && "bg-[#F9FAFB] rounded-[6px]"}`}>
                            <div className="flex items-center gap-2  ">
                                <img src={route.Icon} alt="" />
                                <p className="text-lg">{route?.name}</p>
                            </div>
                            {index === 1 && (
                                <p className="text-black-90 bg-[#F2F4F7] p-1 rounded-2xl">
                                    10
                                </p>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
            <div className="bg-gray-100 p-4 mt-6">
                <p className="font-medium">New features available!</p>
                <p>Check out the new dashboard view. Pages now load faster. </p>
                <img src={DummyPicture} className="rounded-[8px] my-3" alt="" />
                <div className="flex">
                    <p className="text-gray-90">Dismiss</p>
                    <p className="text-[#6941C6] pl-2">What's new?</p>
                </div>
            </div>
            <hr className="bg-[#EAECF0] my-2" />
            <div className="flex gap-2">
                <img src={Avatar} alt="Avatar" />
                <div className="">
                    <p className="text-black-[#101828]">Olivia Rhye</p>
                    <p className="text-gray-90">olivia@untitledui.com</p>
                </div>
                <LogOut color="#667085" />
            </div>
        </aside>
    )
}
export default Sidebar

// box-shadow: 0px 0px 0px 4px rgba(244, 235, 255, 1);

// box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
