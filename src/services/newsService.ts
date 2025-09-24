import { News, NewsService } from '../types';

const mockNews: News[] = [
  {
    id: 1,
    titulo: "Nova tecnologia chega ao mercado",
    data: "2024-01-15",
    conteudo: "Uma nova tecnologia está revolucionando o mercado de trabalho. Empresas estão adotando novas ferramentas para aumentar a produtividade.",
    imagem: "https://picsum.photos/400/250?random=1",
    categorias: ["Tecnologia"],
    comentarios: [
      { id: 1, nome: "João Silva", texto: "Muito interessante!" },
      { id: 2, nome: "Maria Santos", texto: "Preciso me atualizar." }
    ]
  },
  {
    id: 2,
    titulo: "Empresas investem em sustentabilidade",
    data: "2024-01-14",
    conteudo: "Cada vez mais empresas estão implementando práticas sustentáveis. A preocupação com o meio ambiente cresce.",
    imagem: "https://picsum.photos/400/250?random=2",
    categorias: ["Sustentabilidade"],
    comentarios: [
      { id: 3, nome: "Carlos Oliveira", texto: "Excelente iniciativa!" },
      { id: 4, nome: "Ana Costa", texto: "Espero que mais empresas sigam." }
    ]
  },
  {
    id: 3,
    titulo: "Educação digital cresce no Brasil",
    data: "2024-01-13",
    conteudo: "O ensino digital se consolida no Brasil. Plataformas online estão sendo incorporadas ao processo de aprendizagem.",
    imagem: "https://picsum.photos/400/250?random=3",
    categorias: ["Educação"],
    comentarios: [
      { id: 5, nome: "Pedro Lima", texto: "A educação precisa se modernizar." },
      { id: 6, nome: "Lucia Ferreira", texto: "Ótimo ver essas inovações." }
    ]
  },
  {
    id: 4,
    titulo: "Saúde mental no trabalho",
    data: "2024-01-12",
    conteudo: "Empresas investem em programas de bem-estar. A saúde mental dos funcionários é cada vez mais importante.",
    imagem: "https://picsum.photos/400/250?random=4",
    categorias: ["Saúde"],
    comentarios: [
      { id: 7, nome: "Roberto Alves", texto: "Muito importante!" },
      { id: 8, nome: "Fernanda Rocha", texto: "Minha empresa já tem programas assim." }
    ]
  },
  {
    id: 5,
    titulo: "E-commerce cresce no Brasil",
    data: "2024-01-11",
    conteudo: "O comércio online registrou crescimento recorde. Pequenos empresários descobrem novas oportunidades.",
    imagem: "https://picsum.photos/400/250?random=5",
    categorias: ["Comércio"],
    comentarios: [
      { id: 9, nome: "Marcos Souza", texto: "O e-commerce revolucionou o comércio." },
      { id: 10, nome: "Patricia Mendes", texto: "Excelente oportunidade." }
    ]
  },
  {
    id: 6,
    titulo: "Energia solar se populariza",
    data: "2024-01-10",
    conteudo: "Painéis solares ficam mais baratos. Famílias investem em energia limpa.",
    imagem: "https://picsum.photos/400/250?random=6",
    categorias: ["Energia"],
    comentarios: [
      { id: 11, nome: "Diego Santos", texto: "Ótima notícia para o meio ambiente!" },
      { id: 12, nome: "Camila Torres", texto: "Já estou pensando em instalar." }
    ]
  },
  {
    id: 7,
    titulo: "IA ajuda médicos no diagnóstico",
    data: "2024-01-09",
    conteudo: "Inteligência artificial auxilia profissionais da saúde. Diagnósticos ficam mais precisos.",
    imagem: "https://picsum.photos/400/250?random=7",
    categorias: ["Saúde"],
    comentarios: [
      { id: 13, nome: "Dr. Antonio Silva", texto: "A IA será fundamental na medicina." },
      { id: 14, nome: "Juliana Costa", texto: "Espero que melhore o atendimento." }
    ]
  },
  {
    id: 8,
    titulo: "Bicicletas compartilhadas crescem",
    data: "2024-01-08",
    conteudo: "Cidades investem em mobilidade sustentável. Bicicletas públicas se popularizam.",
    imagem: "https://picsum.photos/400/250?random=8",
    categorias: ["Mobilidade"],
    comentarios: [
      { id: 15, nome: "Rafael Oliveira", texto: "Precisamos de mais iniciativas assim." },
      { id: 16, nome: "Beatriz Lima", texto: "Adoro usar as bicicletas compartilhadas!" }
    ]
  },
  {
    id: 9,
    titulo: "Blockchain muda finanças",
    data: "2024-01-07",
    conteudo: "Bancos adotam tecnologia blockchain. Transações ficam mais seguras.",
    imagem: "https://picsum.photos/400/250?random=9",
    categorias: ["Finanças"],
    comentarios: [
      { id: 17, nome: "Gabriel Martins", texto: "Blockchain é o futuro!" },
      { id: 18, nome: "Isabela Rocha", texto: "Interessante ver a evolução." }
    ]
  },
  {
    id: 10,
    titulo: "Agricultura usa drones",
    data: "2024-01-06",
    conteudo: "Fazendeiros usam drones para monitorar plantações. Produtividade aumenta.",
    imagem: "https://picsum.photos/400/250?random=10",
    categorias: ["Agricultura"],
    comentarios: [
      { id: 19, nome: "José Ferreira", texto: "A tecnologia revoluciona o campo!" },
      { id: 20, nome: "Mariana Alves", texto: "Ótimo para sustentabilidade." }
    ]
  }
];

class NewsServiceImpl implements NewsService {
  getAllNews(): News[] {
    return mockNews;
  }

  getNewsById(id: number): News | undefined {
    return mockNews.find(news => news.id === id);
  }

  searchNews(query: string): News[] {
    if (!query.trim()) {
      return mockNews;
    }

    const lowerQuery = query.toLowerCase();
    return mockNews.filter(news => 
      news.titulo.toLowerCase().includes(lowerQuery) ||
      news.conteudo.toLowerCase().includes(lowerQuery) ||
      news.categorias.some(categoria => categoria.toLowerCase().includes(lowerQuery))
    );
  }
}

export const newsService = new NewsServiceImpl();
