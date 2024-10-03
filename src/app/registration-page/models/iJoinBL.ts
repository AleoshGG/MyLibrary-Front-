import { iLiteraryGenre } from '../../books/models/iLiteraryGenre';
import { iJoinAW } from './iJoinAW';

export interface iJoinBL {
  id_book: number;
  title: string;
  date_publication: string;
  amount: number;
  editorial: string;
  id_literary_genre: number;
  Literary_genre: iLiteraryGenre;
  author?: iJoinAW[];
}
