import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowDown } from "lucide-react"
import { CloudDownload } from "lucide-react"
import { UserRoleType } from "@/types/userRoles.type"
import { userStatus } from "../utils/settings.utils"

interface UserRolesTableInterface {
    data: UserRoleType[]
}
const UserRolesTable = ({ data }: UserRolesTableInterface) => {
    const tableHeaders = [
        "",
        "Name",
        "Type",
        "Date created",
        "Status",
        "Role users",
        "",
    ]
    return (
        <div>
            <Table className="rounded-[24px] pl-2 border border-[#EAECF0]"
            style={{ boxShadow: "0px 2px 4px -2px rgba(16, 24, 40, 0.06)" }}
            >
                <TableHeader className="">
                    <TableRow className="bg-[#F9FAFB] text-gray-90">
                        {tableHeaders.map((item, index) => (
                            <TableHead className="w-[100px] " key={index}>
                                <div className="flex items-center text-nowrap">
                                    {index === 0 && (
                                        <Checkbox className="border-[#D0D5DD] rounded-[6px]" />
                                    )}{" "}
                                    {item}
                                    {index === 1 && (
                                        <ArrowDown color="#667085" size={16} />
                                    )}
                                </div>
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody className="bg-white-100">
                    {data.map((item, index) => (
                        <TableRow key={index} className="pl-4">
                            <TableCell className="font-medium sm:w-[5%]">
                                <Checkbox className="border-[#D0D5DD] rounded-[6px] " />
                            </TableCell>

                            <TableCell className="font-medium text-black-[#101828] sm:w-[35%]">
                                {item.name}
                            </TableCell>
                            <TableCell className="text-gray-90 text-nowrap">
                                {item.type}
                            </TableCell>
                            <TableCell className="text-gray-90">
                                {item.dateCreated}
                            </TableCell>
                            <TableCell>{userStatus(item.status)}</TableCell>
                            <TableCell className="w-ful">
                                <img src={item.roleUsers} alt="" />
                            </TableCell>
                            <TableCell className="flex justify-end sm:pr-4">
                                <CloudDownload color="#667085" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default UserRolesTable
