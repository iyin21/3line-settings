import Layout from "@/components/Layout/layout"
import RoleCard from "./components/roleCard"
import { useState } from "react"
import { Plus } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import UserRolesTable from "./components/userRoleTable"
import { CloudDownload } from "lucide-react"
import { userRoles, activeRoles, tabTitles } from "./utils/settings.utils"

const Settings = () => {
    const [activRole, setActiveRole] = useState(0)
    return (
        <Layout>
            <h2 className="font-medium md:text-2xl mt-2 md:px-0 px-4">
                Settings
            </h2>
            <h4 className="text-gray-90 md:px-0 px-4">
                Manage your team and preferences here.
            </h4>
            <div className="mt-4"></div>
            <Tabs defaultValue="roles" className="">
                <TabsList className="bg-white-100 rounded-[8px] border-[#D0D5DD] border py-0 ">
                    {tabTitles.map((item, index) => (
                        <TabsTrigger
                            value={item.value}
                            className={`bg-white-100 data-[state=active]:bg-[#D0D5DD] border-[#D0D5DD]  ${
                                index !== 8 && "border-r"
                            }`}
                        >
                            {item.title}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <TabsContent value="myDetails"></TabsContent>
                <TabsContent value="profile"></TabsContent>
                <TabsContent value="password"></TabsContent>
                <TabsContent value="team"></TabsContent>
                <TabsContent value="plan"></TabsContent>

                <TabsContent value="roles" className="md:px-0 px-4">
                    <h3 className="font-medium text-[#101828] mt-6">
                        User Roles
                    </h3>
                    <p className="text-gray-90 mt-1">
                        Update your roles details and information.
                    </p>
                    <hr className="bg-[#EAECF0] my-6" />

                    <div className="sm:flex sm:gap-6 w-fu">
                        <div>
                            <p className="font-medium">Connected email</p>
                            <p className="text-gray-90">Select role account</p>
                        </div>
                        <div className="sm:mt-0 mt-4">
                            <RadioGroup defaultValue="account-email">
                                <div className="flex space-x-2">
                                    <RadioGroupItem
                                        value="account-email"
                                        id="option-one"
                                        className="g border-[#7F56D9]"
                                    />
                                    <div>
                                        <Label
                                            htmlFor="account-email "
                                            className="flex flex-col"
                                        >
                                            <span> My account-email</span>
                                            <span className="pt-2 text-gray-90">
                                                olivia@untitledui.com
                                            </span>
                                        </Label>
                                    </div>
                                </div>
                                <div className="flex  space-x-2 mt-4">
                                    <RadioGroupItem
                                        value="option-two"
                                        id="alternative-email"
                                        className="bg-[#7F56D9 border-[#7F56D9] space-x-4 space-y-4 ring-offset-background"
                                    />

                                    <Label htmlFor="alternative-email">
                                        An alternative email
                                        <div className="bg-white-100 border-[#D0D5DD] border rounded-[8px] p-2 flex mt-2 ">
                                            <Mail color="#667085" size={20} />
                                            <input
                                                type="text"
                                                className="pl-2 outline-none"
                                                placeholder="billing@untitledui.com"
                                            />
                                        </div>
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                    <hr className="bg-[#EAECF0] my-4" />
                    <div className="sm:flex sm:gap-4">
                        <div>
                            <p className="font-medium text-black-90">
                                Active Role
                            </p>
                            <p className="text-gray-90">
                                Select active role available to the user.
                            </p>
                        </div>
                        <div className="w-full sm:mt-0 mt-4">
                            {activeRoles.map((item, index) => (
                                <RoleCard
                                    title={item.title}
                                    date={item.date}
                                    active={index === activRole}
                                    setActive={() => setActiveRole(index)}
                                />
                            ))}
                            <div className="flex mt-2 text-gray-90 items-center">
                                <Plus color="#667085" />
                                <p className="ml-2">Add role to user</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="sm:flex justify-between mt-6 mb-4">
                            <h3 className="font-medium text-[#101828]">
                                User Roles
                            </h3>
                            <Button className="bg-white-100 border border-[#D0D5DD] text-black-90 rounded-[8px] text-md sm:mt-0 mt-4">
                                <CloudDownload /> Download all
                            </Button>
                        </div>
                        <UserRolesTable data={userRoles} />
                    </div>
                </TabsContent>

                <TabsContent value="notifications"></TabsContent>
                <TabsContent value="integrations"></TabsContent>
            </Tabs>
        </Layout>
    )
}
export default Settings
