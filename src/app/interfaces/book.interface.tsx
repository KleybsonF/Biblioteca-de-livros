export interface BookInterface {
  id?: string;
  titulo?: string;
  genero?: string;
  autor?: string;
  descricao?: string;
  [key: string]: string | boolean | undefined;
}