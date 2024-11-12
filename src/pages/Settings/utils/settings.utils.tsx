import AvatarGroup1 from "@/assets/icons/avatarGroup1.svg"
import AvatarGroup2 from "@/assets/icons/avatarGroup2.svg"
import AvatarGroup3 from "@/assets/icons/avatarGroup3.svg"
import AvatarGroup4 from "@/assets/icons/avatarGroup4.svg"
import AvatarGroup5 from "@/assets/icons/avatarGroup5.svg"
import AvatarGroup6 from "@/assets/icons/avatarGroup6.svg"
import AvatarGroup7 from "@/assets/icons/avatarGoup7.svg"
import { Check } from "lucide-react"

export const userRoles = [
    {
        name: "Superadmin",
        type: "DEFAULT",
        dateCreated: "Jan 1, 2023",
        status: "Active",
        roleUsers: AvatarGroup1,
    },
    {
        name: "Merchantadmin",
        type: "DEFAULT",
        dateCreated: "Feb 1, 2023",
        status: "Active",
        roleUsers: AvatarGroup2,
    },
    {
        name: "supportadmin",
        type: "DEFAULT",
        dateCreated: "Feb 1, 2023",
        status: "Active",
        roleUsers: AvatarGroup3,
    },
    {
        name: "sales personnel",
        type: "CUSTOM",
        dateCreated: "Mar 1, 2023",
        status: "Active",
        roleUsers: AvatarGroup4,
    },
    {
        name: "Deputy sales personnel",
        type: "CUSTOM",
        dateCreated: "Apr 1, 2023",
        status: "Inactive",
        roleUsers: AvatarGroup5,
    },
    {
        name: "Developeradmin",
        type: "SYSTEM-CUSTOM",
        dateCreated: "May 1, 2023",
        status: "Active",
        roleUsers: AvatarGroup6,
    },
    {
        name: "Developer-basic",
        type: "SYSTEM-CUSTOM",
        dateCreated: "Jun 1, 2023",
        status: "Active",
        roleUsers: AvatarGroup7,
    },
]

export const activeRoles = [
    { title: "Superadmin", date: "06/2023" },
    { title: "Developeradmin", date: "01/2023" },
    { title: "Supportadmin", date: "10/2022" },
]
export const tabTitles = [
    { title: "My details", value: "myDetails" },
    { title: "Profile", value: "profile" },
    { title: "password", value: "Password" },
    { title: "Team", value: "team" },
    { title: "Plan", value: "plan" },
    { title: "Roles", value: "roles" },
    { title: " Notifications", value: " notifications" },
    { title: "Integrations", value: "Integrations" },
    { title: "API", value: "api" },
]

export const userStatus = (role: string) => {
    switch (role) {
        case "Active":
            return (
                <div className="flex bg-[#ECFDF3] w-fit rounded-[16px] items-center p-1 text-[#027A48] font-medium">
                    <Check size={14} color="#12B76A" />
                    Active
                </div>
            )
        case "Inactive":
            return (
                <div className="flex bg-[#F2994A] w-fit rounded-[16px] items-center p-1 text-white-100 font-medium">
                    In Active
                </div>
            )
        default:
            return <span>Unknown Role</span>
    }
}
