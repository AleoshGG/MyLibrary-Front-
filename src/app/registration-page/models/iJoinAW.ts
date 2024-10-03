export interface iJoinAW {
  id_author: number;
  first_name: string;
  last_name: string;
  birthdate: string;
  nationality: number;
  place_birth: string;
  writings: {
    id_writing: number;
    id_book: number;
    id_author: number;
  };
  
}
