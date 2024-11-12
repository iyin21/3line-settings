import Sidebar from "./Sidebar/sidebar"
import Navbar from "./navbar/navbar"
import { ReactNode } from "react"

interface Props {
    
    children: ReactNode
}
const Layout = ({ children }: Props) => {
    
    return (
        <div className="h-full relative ">
            
            <div className="w-full md:hidden  block fixed  z-20 bg-white-100 md:pb-0 ">
                    <Navbar
                        
                    />
                </div>
            
            <div className="relative md:pl-72  h-full ">
                <div className=" hidden md:block fixed left-0 md:w-72 h-screen overflow-y-auto ">
                    <Sidebar />
                </div>
                
                <main className="bg-[#F9FAFB] w-full h-screen overflow-y-auto md:p-6 py- md:py-6 py-20">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout
