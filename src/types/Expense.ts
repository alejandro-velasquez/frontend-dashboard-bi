export interface ExpenseResponseDto {
    totalAmount: number;
    details?: Array<{
        month: string;
        amount: number;
    }>;
}