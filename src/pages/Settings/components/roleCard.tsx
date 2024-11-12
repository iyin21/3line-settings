import { Circle } from "lucide-react"
import CheckedIcon from "@/assets/icons/checked.svg"
import RoleIcon from "@/assets/icons/roleIcon.svg"

interface RoleCardProps {
    active: boolean
    title: string
    date: string
    setActive: () => void
}
const RoleCard = ({ active, date, title, setActive }: RoleCardProps) => {
    return (
        <div
            className={`${
                active
                    ? "bg-[#F9F5FF] text-[#53389E] border  border-[#D6BBFB]"
                    : "bg-white-100 text-black-90"
            } flex justify-between p-4 w-full items-start mb-4 rounded-[8px] cursor-pointer`}
            onClick={setActive}
        >
            <div className="flex gap-4 items-start">
                <img src={RoleIcon} alt="" />
                <div>
                    <p
                        className={`${
                            active ? "text-[#53389E]" : "text-black-90"
                        } font-medium`}
                    >
                        {title}
                    </p>
                    <p
                        className={`${
                            active ? "text-[#7F56D9]" : "text-[#70798C]"
                        } font-medium`}
                    >
                        Last active {date}
                    </p>
                    <div className="flex mt-2">
                        <p
                            className={`${
                                active ? "text-[#9E77ED]" : "text-[#667085]"
                            } cursor-pointer`}
                        >
                            Set as default
                        </p>
                        <p className="text-[#6941C6] pl-2 cursor-pointer">
                            Edit
                        </p>
                    </div>
                    <p></p>
                </div>
            </div>
            {active ? (
                <img src={CheckedIcon} alt="checked" />
            ) : (
                <Circle color="#D0D5DD" size={16} />
            )}
        </div>
    )
}
export default RoleCard
