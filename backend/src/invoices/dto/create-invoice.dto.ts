export class CreateInvoiceDto {
  customerId!: number;
  productId!: number;
  quantity!: number;
  totalAmount!: number;
  invoiceDate!: string;
}