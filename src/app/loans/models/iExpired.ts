export interface iExpired {
  id_loan: number;
  id_reader: number;
  id_book: number;
  loan_date: string;
  delivery_date: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  Book: {
    title: string;
  };
  reader: {
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
  };
}
