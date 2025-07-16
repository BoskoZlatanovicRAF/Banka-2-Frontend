import {ColumnDef} from "@tanstack/react-table";
import {Button} from "@/components/ui/button.tsx";
import {createOrder} from "@/api/exchange/order.ts";
import {CreateOrderRequest, OrderDirection, OrderType} from "@/types/exchange/order.ts";
import {Asset} from "@/types/exchange/asset.ts";
import {useNavigate} from "react-router-dom";
import {getSecurityTypeRoute, SecurityType} from "@/types/exchange/security.ts";



export function generatePortfolioColumns(setOpen: (open: boolean) => void, setSelectedRow: (row: Asset) => void, navigate: any): ColumnDef<Asset>[] {    return [

        {
            accessorKey: "ticker",
            header: "Ticker",
            cell: ({ row }) => (
                row.original.security.ticker
            ),
        },
        {
            accessorKey: "amount",
            header: "Amount",
            cell: ({ row }) => (
                row.original.quantity
            ),
        },
        {
            accessorKey: "Avg. price",
            header: "Avg. price",
            cell: ({ row }) => (
                row.original.averagePrice
            ),
        },
        {
            id: "sell",
            header: "Sell asset",
            cell: ({ row }) => (
                <Button
                    variant="gradient"
                    onClick={() => handleSell(row.original, navigate)}
                >
                    Sell
                </Button>
            ),
        },

    ];
}
const handleSell = async (item: Asset, navigate: any) => {



    const securityId = item.security.id;
    const securityType = getSecurityTypeRoute(item.security.securityType ? item.security.securityType : SecurityType.Unknown);
    console.log(securityType);

    if (securityType && securityId) {
        navigate(`/trading${securityType}/${securityId}`);
    } else {
        console.error("Security type or ID is missing.");
        console.log(securityId, securityType);
    }

    // const accountNumber = item.actuary.account.accountNumber;
    // if(!accountNumber){
    //     return;
    // }
    // // TODO: FIX this, ASSET DOESNT HAVE REQUIRED FIELDS
    // const orderRequest : CreateOrderRequest = {
    //     actuaryId: item.actuary.id,
    //     accountNumber: String(accountNumber) ,
    //     orderType: OrderType.MARKET,
    //     quantity: item.quantity,
    //     contractCount: 1,
    //     limitPrice: 200,
    //     stopPrice: 150,
    //     direction: OrderDirection.SELL,
    //     securityId: item.security.id
    //
    // }
    // try{
    //     await createOrder(orderRequest)
    //
    // }catch (error){
    //     console.error("asdfsadadas", error);
    // }
};
