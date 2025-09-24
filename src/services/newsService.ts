import { News, NewsService } from '../types';

const mockNews: News[] = [
  {
    id: 1,
    titulo: "Tecnologia revoluciona o mercado de trabalho",
    data: "2024-01-15",
    conteudo: "A inteligência artificial e automação estão transformando completamente o cenário profissional. Empresas de todos os setores estão adotando novas tecnologias para aumentar a produtividade e reduzir custos operacionais. Especialistas preveem que nos próximos anos, muitas profissões tradicionais serão substituídas por sistemas automatizados, enquanto novas oportunidades surgirão em áreas como análise de dados, desenvolvimento de software e gestão de projetos digitais.",
    imagem: "https://via.placeholder.com/400x250/4A90E2/FFFFFF?text=Tecnologia",
    categorias: ["Tecnologia", "Trabalho"],
    comentarios: [
      { id: 1, nome: "João Silva", texto: "Muito interessante essa perspectiva sobre o futuro do trabalho!" },
      { id: 2, nome: "Maria Santos", texto: "Preciso me atualizar para não ficar para trás." }
    ]
  },
  {
    id: 2,
    titulo: "Sustentabilidade ganha força nas empresas",
    data: "2024-01-14",
    conteudo: "Cada vez mais empresas estão implementando práticas sustentáveis em seus processos produtivos. A preocupação com o meio ambiente não é mais apenas uma questão de responsabilidade social, mas também uma estratégia de negócio que pode gerar economia de recursos e melhorar a imagem da marca junto aos consumidores conscientes.",
    imagem: "https://via.placeholder.com/400x250/50C878/FFFFFF?text=Sustentabilidade",
    categorias: ["Sustentabilidade", "Negócios"],
    comentarios: [
      { id: 3, nome: "Carlos Oliveira", texto: "Excelente iniciativa das empresas!" },
      { id: 4, nome: "Ana Costa", texto: "Espero que mais empresas sigam esse exemplo." }
    ]
  },
  {
    id: 3,
    titulo: "Educação digital avança no Brasil",
    data: "2024-01-13",
    conteudo: "O ensino remoto e híbrido se consolidaram como alternativas viáveis para a educação brasileira. Plataformas digitais, realidade virtual e inteligência artificial estão sendo incorporadas ao processo de aprendizagem, oferecendo experiências mais interativas e personalizadas para os estudantes.",
    imagem: "https://via.placeholder.com/400x250/FF6B6B/FFFFFF?text=Educação",
    categorias: ["Educação", "Tecnologia"],
    comentarios: [
      { id: 5, nome: "Pedro Lima", texto: "A educação precisa mesmo se modernizar." },
      { id: 6, nome: "Lucia Ferreira", texto: "Ótimo ver essas inovações chegando ao Brasil." }
    ]
  },
  {
    id: 4,
    titulo: "Saúde mental no ambiente corporativo",
    data: "2024-01-12",
    conteudo: "Empresas estão investindo cada vez mais em programas de bem-estar e saúde mental para seus funcionários. A pandemia acelerou essa tendência, mostrando a importância de cuidar da saúde psicológica dos colaboradores para manter a produtividade e reduzir o turnover.",
    imagem: "https://via.placeholder.com/400x250/9B59B6/FFFFFF?text=Saúde+Mental",
    categorias: ["Saúde", "Trabalho"],
    comentarios: [
      { id: 7, nome: "Roberto Alves", texto: "Muito importante essa abordagem humanizada." },
      { id: 8, nome: "Fernanda Rocha", texto: "Minha empresa já tem alguns programas assim." }
    ]
  },
  {
    id: 5,
    titulo: "E-commerce cresce exponencialmente",
    data: "2024-01-11",
    conteudo: "O comércio eletrônico brasileiro registrou crescimento recorde no último ano, impulsionado pela pandemia e pela melhoria da infraestrutura de entregas. Pequenos e médios empresários estão descobrindo novas oportunidades de negócio através das plataformas digitais.",
    imagem: "https://via.placeholder.com/400x250/F39C12/FFFFFF?text=E-commerce",
    categorias: ["Comércio", "Tecnologia"],
    comentarios: [
      { id: 9, nome: "Marcos Souza", texto: "O e-commerce realmente revolucionou o comércio." },
      { id: 10, nome: "Patricia Mendes", texto: "Excelente oportunidade para pequenos negócios." }
    ]
  },
  {
    id: 6,
    titulo: "Energia renovável se torna mais acessível",
    data: "2024-01-10",
    conteudo: "Os custos de instalação de painéis solares e turbinas eólicas diminuíram significativamente nos últimos anos, tornando a energia renovável uma opção viável para residências e empresas. Governos de vários países estão oferecendo incentivos fiscais para acelerar a transição energética.",
    imagem: "https://via.placeholder.com/400x250/1ABC9C/FFFFFF?text=Energia+Renovável",
    categorias: ["Energia", "Sustentabilidade"],
    comentarios: [
      { id: 11, nome: "Diego Santos", texto: "Ótima notícia para o meio ambiente!" },
      { id: 12, nome: "Camila Torres", texto: "Já estou pensando em instalar painéis solares." }
    ]
  },
  {
    id: 7,
    titulo: "Inteligência artificial na medicina",
    data: "2024-01-09",
    conteudo: "Algoritmos de IA estão sendo utilizados para diagnosticar doenças, analisar exames médicos e até mesmo desenvolver novos medicamentos. A tecnologia promete revolucionar a área da saúde, oferecendo diagnósticos mais precisos e tratamentos mais eficazes.",
    imagem: "https://via.placeholder.com/400x250/E74C3C/FFFFFF?text=IA+Medicina",
    categorias: ["Saúde", "Tecnologia"],
    comentarios: [
      { id: 13, nome: "Dr. Antonio Silva", texto: "A IA será uma ferramenta fundamental na medicina." },
      { id: 14, nome: "Juliana Costa", texto: "Espero que isso melhore o atendimento médico." }
    ]
  },
  {
    id: 8,
    titulo: "Mobilidade urbana sustentável",
    data: "2024-01-08",
    conteudo: "Cidades ao redor do mundo estão investindo em soluções de mobilidade mais sustentáveis, como bicicletas compartilhadas, veículos elétricos e transporte público eficiente. O objetivo é reduzir a poluição e melhorar a qualidade de vida dos cidadãos.",
    imagem: "https://via.placeholder.com/400x250/3498DB/FFFFFF?text=Mobilidade",
    categorias: ["Mobilidade", "Sustentabilidade"],
    comentarios: [
      { id: 15, nome: "Rafael Oliveira", texto: "Precisamos de mais iniciativas assim nas cidades." },
      { id: 16, nome: "Beatriz Lima", texto: "Adoro usar o sistema de bicicletas compartilhadas!" }
    ]
  },
  {
    id: 9,
    titulo: "Blockchain transforma setor financeiro",
    data: "2024-01-07",
    conteudo: "A tecnologia blockchain está sendo adotada por bancos e instituições financeiras para aumentar a segurança das transações e reduzir custos operacionais. Criptomoedas e contratos inteligentes estão ganhando espaço no mercado financeiro tradicional.",
    imagem: "https://via.placeholder.com/400x250/8E44AD/FFFFFF?text=Blockchain",
    categorias: ["Finanças", "Tecnologia"],
    comentarios: [
      { id: 17, nome: "Gabriel Martins", texto: "Blockchain é o futuro das finanças!" },
      { id: 18, nome: "Isabela Rocha", texto: "Interessante ver como a tecnologia evolui." }
    ]
  },
  {
    id: 10,
    titulo: "Agricultura de precisão aumenta produtividade",
    data: "2024-01-06",
    conteudo: "Fazendeiros estão utilizando drones, sensores IoT e análise de dados para otimizar o cultivo e aumentar a produtividade agrícola. A agricultura de precisão permite o uso mais eficiente de recursos como água, fertilizantes e pesticidas, reduzindo custos e impactos ambientais.",
    imagem: "https://via.placeholder.com/400x250/27AE60/FFFFFF?text=Agricultura",
    categorias: ["Agricultura", "Tecnologia"],
    comentarios: [
      { id: 19, nome: "José Ferreira", texto: "A tecnologia está revolucionando o campo!" },
      { id: 20, nome: "Mariana Alves", texto: "Ótimo para a sustentabilidade na agricultura." }
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
