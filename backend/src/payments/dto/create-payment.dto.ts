export class CreatePaymentDto {
  invoiceId!: number;
  amount!: number;
  paymentMethod!: string;
  paymentDate!: string;
  status!: string;
}