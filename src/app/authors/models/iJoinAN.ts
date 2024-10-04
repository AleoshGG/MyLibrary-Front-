import { iNationality } from "./iNationality";

export interface iJoinAN {
  id_author: number;
  first_name: string;
  last_name: string;
  birthdate: string;
  nationality: number;
  place_birth: string;
  Nationality: iNationality;
}
