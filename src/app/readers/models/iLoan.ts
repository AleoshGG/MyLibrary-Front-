export interface iLoan {
  id_loan: number;
  id_reader: number;
  id_book: number;
  loan_date: string;
  delivery_date: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
}
