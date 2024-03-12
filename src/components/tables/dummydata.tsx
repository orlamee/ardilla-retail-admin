import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowUpDown,
  Eye,
  MoreVertical,
  Trash2Icon,
} from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";

// Branch
export type userMangementDataType = {
  id: string;
  state: string;
  head_branch: string;
  lga: string;
  email: string;
  phone_number: string;
  address: string;
};

export const userManagementData: userMangementDataType[] = [
  {
    id: "1",
    state: "Lagos",
    head_branch: "Yes",
    lga: "oshodi",
    email: "john@example.com",
    phone_number: "08165342678",
    address: "29, Oladoyingbe street, Ogba,Ikeja.Lagos.",
  },
];

export const userManagementColumns: ColumnDef<userMangementDataType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: boolean) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "state",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center text-[12px] font-[400]"
        >
          State <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "head_branch",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
        >
          Head Branch
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "lga",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
        >
          LGA
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },

  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  
  {
    accessorKey: "address",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
        >
          Address
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },

  {
    accessorKey: "phone_number",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
        >
          Phone Number
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const data = row.original;

      return (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <button className="h-8 w-8 p-0 outline-none">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4 text-[#240552]" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
            >
              <Link
                href={`/dashboard/branch/details/${data.id}`}
              >
                <div className="flex items-center cursor-pointer">
                  <Eye className="w-[14px] text-[#9CA3AF] mr-2" />{" "}
                  <span className="text-[12px] font-[400] leading-[12px]">
                    {" "}
                    View Location
                  </span>
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
            >
              <Link
                href={`/dashboard/branch/details/${data.id}`}
              >
                <div className="flex items-center cursor-pointer">
                  <Trash2Icon className="w-[14px] text-[#EF4444] mr-2" />{" "}
                  <span className="text-[12px] font-[400] leading-[12px]">
                    {" "}
                    Delete Location
                  </span>
                </div>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];