import { iLiteraryGenre } from '../../books/models/iLiteraryGenre';

export interface iBook {
    id_book: number;
    title: string;
    date_publication: string;
    amount: number;
    editorial: string;
    id_literaty_genre: number;
    Literary_genre?: iLiteraryGenre;
}