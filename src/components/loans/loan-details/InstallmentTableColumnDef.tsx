import { ColumnDef } from "@tanstack/react-table"
import {formatCurrency} from "@/lib/format-currency.ts";
import {Badge} from "@/components/ui/badge.tsx";
import {Installment, InstallmentStatus} from "@/types/bank_user/installment.ts";

// Utility function to format date and time
const formatDate = (date: Date) => {
    if (!date) return "—";
    return date.toLocaleDateString('sr-RS'); // Example: 05/03/2025
};

export function generateInstallmentColumns(): ColumnDef<Installment>[] {
    return [
        {
            accessorKey: "amount",
            header: "Amount",
            enableHiding: false,
            cell: ({row} )=> {
                return formatCurrency(row.original.amount, "RSD");
            }
        },
        {
            accessorKey: "expectedDueDate",
            header: "Expected due date",
            enableHiding: true,
            cell: ({ row }) => {
                const date = new Date(row.original.expectedDueDate);
                return formatDate(date);
            }
        },
        {
            accessorKey: "actualDueDate",
            header: "Actual due date",
            enableHiding: true,
            cell: ({ row }) => {
                const date = new Date(row.original.actualDueDate);
                return formatDate(date);
            }
        },
        {
            accessorKey: "status",
            header: "Status",
            enableHiding: true,
            cell: ({ row }) => {
                const status = row.original.status as InstallmentStatus;

                const statusMap: Record<InstallmentStatus, { label: string; variant: "outline" | "success" | "warning" | "destructive" }> = {
                    [InstallmentStatus.Pending]: { label: "Pending", variant: "warning" },
                    [InstallmentStatus.Paid]: { label: "Paid", variant: "success" },
                    [InstallmentStatus.Overdue]: { label: "Overdue", variant: "destructive" },
                    [InstallmentStatus.Cancelled]: { label: "Cancelled", variant: "outline" }
                };

                return (
                    <Badge variant={statusMap[status]?.variant || "default"}>
                        {statusMap[status]?.label || "Unknown"}
                    </Badge>
                );
            }
        },
    ];
}
