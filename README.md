# Portal de Notícias - FIAP

Um portal de notícias moderno desenvolvido em React com TypeScript, seguindo as melhores práticas de desenvolvimento web.

## 🚀 Deploy na Vercel

**Link do projeto:** [https://portal-noticias-fiap.vercel.app](https://portal-noticias-fiap.vercel.app)

## 📋 Funcionalidades

### ✅ Organização do Projeto (2,0 pontos)
- ✅ Estrutura de pastas e arquivos organizada (0,5 ponto)
- ✅ Arquivos .gitignore configurados (0,5 ponto)
- ✅ Tipagens TypeScript implementadas (0,5 ponto)
- ✅ Service/Mock API com dados estruturados (0,5 ponto)

### ✅ Home Page (4,0 pontos)
- ✅ Listagem de notícias com array estático de 10+ notícias (2,0 pontos)
- ✅ Mensagem "Nenhum artigo encontrado" para filtros vazios (0,5 pontos)
- ✅ Campo de busca que filtra por:
  - ✅ Título (0,5 pontos)
  - ✅ Conteúdo (0,5 pontos)
  - ✅ Categorias (0,5 pontos)

### ✅ Visualização da Notícia (3,0 pontos)
- ✅ Página completa da notícia ao clicar (1,0 ponto)
- ✅ Componente de comentários isolado com carregamento assíncrono (1,0 ponto)
- ✅ Navegação para voltar à home page (1,0 ponto)

### ✅ Deploy na Vercel (1,0 ponto)
- ✅ Projeto deployado na Vercel com link público

### ✅ Extras
- ✅ Layout responsivo obrigatório
- ✅ Página 404 customizada (+0,5 pontos)
- ✅ Rodapé com informações do trio
- ✅ CSS externo (sem inline/internal)

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **React Router DOM** - Roteamento
- **CSS3** - Estilização responsiva
- **Vercel** - Deploy e hospedagem

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Comments.tsx    # Componente de comentários
│   ├── Comments.css
│   ├── NewsCard.tsx    # Card de notícia
│   ├── NewsCard.css
│   ├── Footer.tsx      # Rodapé
│   └── Footer.css
├── pages/              # Páginas da aplicação
│   ├── HomePage.tsx    # Página inicial
│   ├── HomePage.css
│   ├── NewsDetailPage.tsx # Página de detalhes
│   ├── NewsDetailPage.css
│   ├── NotFoundPage.tsx    # Página 404
│   └── NotFoundPage.css
├── services/           # Serviços e APIs
│   └── newsService.ts  # Mock API de notícias
├── types/              # Definições TypeScript
│   └── index.ts        # Interfaces e tipos
├── App.tsx             # Componente principal
├── App.css             # Estilos globais
├── index.tsx           # Ponto de entrada
└── index.css           # Reset CSS
```

## 🎯 Tipos TypeScript

```typescript
interface Comment {
  id: number;
  nome: string;
  texto: string;
}

interface News {
  id: number;
  titulo: string;
  data: string;
  conteudo: string;
  imagem: string;
  categorias: string[];
  comentarios: Comment[];
}
```

## 📱 Responsividade

O projeto foi desenvolvido com design responsivo, adaptando-se a diferentes tamanhos de tela:

- **Desktop**: Layout em grid com múltiplas colunas
- **Tablet**: Layout adaptado com colunas reduzidas
- **Mobile**: Layout em coluna única com navegação otimizada

## 🚀 Como Executar Localmente

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o projeto:
   ```bash
   npm start
   ```
4. Acesse `http://localhost:3000`

## 📦 Scripts Disponíveis

- `npm start` - Executa o projeto em modo de desenvolvimento
- `npm build` - Cria build de produção
- `npm test` - Executa os testes
- `npm eject` - Ejecta a configuração do Create React App

## 👥 Desenvolvido por

**Trio FIAP:**
- **Nome Completo 1** - RA: 123456789
- **Nome Completo 2** - RA: 987654321  
- **Nome Completo 3** - RA: 456789123

---

*Projeto desenvolvido para a disciplina de Frontend da FIAP*
