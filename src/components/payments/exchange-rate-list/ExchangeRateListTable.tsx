import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {formatCurrency} from "@/lib/format-currency.ts";
import {useEffect, useState} from "react";
import {showErrorToast} from "@/lib/show-toast-utils.tsx";
import {CurrencyExchange} from "@/types/bank_user/currency_exchange.ts";
import {getAllCurrencyExchanges} from "@/api/bank_user/currency_exchange.ts";


export default function ExchangeRateListTable({className, ...props}: React.ComponentProps<"table">) {
    const [exchanges, setExchanges] = useState<CurrencyExchange[]>([])

    useEffect(() => {
        async function fetchExchanges() {
            try{
                const data = await getAllCurrencyExchanges();
                setExchanges(data)
            }
            catch(error){
                showErrorToast({error, defaultMessage: "Error fetching exchanges"})
            }
        }

        fetchExchanges();
    }, []);
    return (
        <Table className={className} {...props}>
            <TableHeader className="border-b-3">
                <TableRow className="text-sm font-medium text-secondary-foreground">
                    <TableHead className="py-3 px-6">Currency</TableHead>
                    <TableHead className="py-3 px-6">Code (Symbol)</TableHead>
                    <TableHead className="py-3 px-6">Quantity</TableHead>
                    <TableHead className="py-3 px-6">Buying rate</TableHead>
                    <TableHead className="py-3 px-6">Average rate</TableHead>
                    <TableHead className="py-3 px-6">Selling rate</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {exchanges.map((item) => (
                    <TableRow
                        key={item.id}
                        className="text-sm font-medium border-border text-secondary-foreground"
                    >
                        <TableCell className="px-6 py-5">
                            {item.currencyTo.name}
                        </TableCell>
                        <TableCell className="px-6 py-5">
                            {item.currencyTo.code} ({item.currencyTo.symbol})
                        </TableCell>
                        <TableCell className="px-8 py-5">
                            1
                        </TableCell>
                        <TableCell className="px-6 py-5 ">
                            {formatCurrency(1/(item.rate * (1+item.commission)), item.currencyFrom.code, 2, 4)}
                        </TableCell>
                        <TableCell className="px-6 py-5 ">
                            {formatCurrency(item.inverseRate, item.currencyFrom.code, 2, 4)}
                        </TableCell>
                        <TableCell className="px-6 py-5">
                            {formatCurrency(1/(item.rate * (1-item.commission)), item.currencyFrom.code, 2, 4)}
                        </TableCell>

                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}