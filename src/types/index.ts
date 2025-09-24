export interface Comment {
  id: number;
  nome: string;
  texto: string;
}

export interface News {
  id: number;
  titulo: string;
  data: string;
  conteudo: string;
  imagem: string;
  categorias: string[];
  comentarios: Comment[];
}

export interface NewsService {
  getAllNews(): News[];
  getNewsById(id: number): News | undefined;
  searchNews(query: string): News[];
}
