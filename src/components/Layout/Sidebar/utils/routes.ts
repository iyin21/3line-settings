import HomeIcon from "@/assets/icons/home.svg"
import DashboardIcon from "@/assets/icons/dashboard.svg"
import ProjectIcon from "@/assets/icons/home.svg"
import ReportingIcon from "@/assets/icons/reporting.svg"
import SettingsIcon from "@/assets/icons/settings.svg"
import SupportIcon from "@/assets/icons/support.svg";
import TaskIcon from "@/assets/icons/task.svg"
import UserIcon from "@/assets/icons/user.svg"


export const routes=[
    {
        name: "Home",
        Icon: HomeIcon,
        link: "/talents",
    },
    { name: "Dashboard", Icon: DashboardIcon, link: "/dashboard" },
    {
        name: "Projects",
        Icon: ProjectIcon,
        link: "/projects",
    },
    {
        name: "Tasks",
        Icon: TaskIcon,
        link: "/calendar",
    },
    {
        name: "Reporting",
        Icon: ReportingIcon,
        link: "/inquiry-management",
    },
    { name: "Users", Icon: UserIcon, link: "/messaging" },

    {
        name: "Support",
        Icon: SupportIcon,
        link: "/team",
    },
    { name: "Settings", Icon: SettingsIcon, link: "/settings" },
    
]