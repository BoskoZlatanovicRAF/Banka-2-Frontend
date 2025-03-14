import {useEffect, useState} from "react";
import {getAllAccountsClient} from "@/api/bankAccount.ts";
import {BankAccount} from "@/types/bankAccount.ts"


export  function useBankAccountsData() {
    const [bankAccounts, setBankAccounts] = useState<Array<{ title: string; url: string }>>([])
    useEffect(() => {
        const fetchBankAccounts = async () => {
            try {
                const rawData = sessionStorage.getItem("user");
                let id: string = "";
                if (rawData) {
                    const user = JSON.parse(rawData);
                    id = user.id;
                }
                if (id.length == 0){
                    throw new Error("User ID not found");
                }

                console.log(id);

                const response = await getAllAccountsClient(id);
                console.log(response);

                if (response.status != 200){
                    throw new Error("Bank accounts not found");
                }



                setBankAccounts(response.data.items.map((account: BankAccount) => ({
                    title: account.name || "Unnamed account",
                    url: `/bank-account/${account.id}`
                })));

            } catch (error) {
                console.error("Failed to fetch bank accounts:", error)
                setBankAccounts([])
            }
        }

        fetchBankAccounts()
        console.log("Fetched bank accounts")
    }, [])

    return bankAccounts;

}