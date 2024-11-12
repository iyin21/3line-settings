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
import { Check } from "lucide-react"

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
            <Table className="rounded-[40px] pl-2 border border-[#EAECF0] shadow-[0px_2px_4px_-2px_ rgba(16, 24, 40, 0.06)]">
                <TableHeader className="">
                    <TableRow className="bg-[#F9FAFB] text-gray-90">
                        {tableHeaders.map((item, index) => (
                            <TableHead className="w-[100px] " key={index}>
                                <div className="flex items-center">
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
                            <TableCell className="font-medium">
                                <Checkbox className="border-[#D0D5DD] rounded-[6px]" />
                            </TableCell>

                            <TableCell className="font-medium text-black-[#101828] w-[35%]">
                                {item.name}
                            </TableCell>
                            <TableCell className="text-gray-90">
                                {item.type}
                            </TableCell>
                            <TableCell className="text-gray-90">
                                {item.dateCreated}
                            </TableCell>
                            <TableCell>
                                <div className="flex bg-[#ECFDF3] w-fit rounded-[16px] items-center p-2 text-[#027A48] font-medium">
                                    <Check size={14} color="#12B76A" />
                                    {item.status}
                                </div>
                            </TableCell>
                            <TableCell>
                                <img src={item.roleUsers} alt="" />
                            </TableCell>
                            <TableCell className="text-right">
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
