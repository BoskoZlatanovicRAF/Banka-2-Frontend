import {Toaster} from "@/components/ui/sonner.tsx";
import AllLoanTable from "@/components/loans/employee/allLoansTable/AllLoanTable.tsx";


export default function AllLoanList() {
    return (
        <main>
            <Toaster richColors />
            <AllLoanTable />
        </main>
    );
}
