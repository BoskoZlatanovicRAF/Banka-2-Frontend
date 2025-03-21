import { BankAccount } from "./bankAccount";
import { Currency } from "./currency";
import { LoanType } from "./loanType";
import {InstallmentStatus, InterestType, LoanStatus} from "@/types/enums.ts";

export interface Loan{
    id: string,
    type: LoanType,
    account: BankAccount,
    amount: number,
    period: number,
    creationDate: Date,
    maturityDate: Date,
    currency: Currency,
    status: LoanStatus,
    interestType: InterestType,
    createdAt: Date,
    modifiedAt: Date,
    nominalInstallmentRate: number,
    remainingAmount: number,
}


export interface LoanResponse{
    items: Loan[];
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
}


export interface LoanUpdateRequest{
    status: LoanStatus;
    maturityDate: Date,
}


export interface LoanCreateRequest{
    typeId: string,
    accountId: string,
    amount: number,
    period: number,
    currencyId: string,
    interestType: InterestType
}

export interface Installment {
    id: string,
    loan: Loan,
    interestRate: number,
    expectedDueDate: Date,
    actualDueDate: Date,
    status: InstallmentStatus,
    createdAt: Date,
    modifiedAt: Date,
    amount: number,
}

export interface InstallmentResponsePage{
    items: Installment[];
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
}

export interface InstallmentUpdateRequest{
    actualDueDate: Date,
    status: InstallmentStatus,
}

export interface InstallmentRequest{
    loanId: string,
    interestRate: number,
    expectedDueDate: Date,
    actualDueDate: Date,
    status: InstallmentStatus,
}