export interface IPost {
  id: number,
  title: string,
  excerpt: string,
  category: string,
  image: string,
  readTime: string,
}

export const featuredPosts: IPost[] = [
  {
    id: 1,
    title: "O Futuro da Inteligência Artificial",
    excerpt: "Explore como a IA está transformando nossa sociedade e o que esperar nos próximos anos.",
    category: "Tecnologia",
    image: "https://placehold.co/300x200/lightgreen/white",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Design Minimalista: Menos é Mais",
    excerpt: "Descubra os princípios do design minimalista e como aplicá-los em seus projetos.",
    category: "Design",
    image: "https://placehold.co/300x200/lightblue/white",
    readTime: "3 min",
  },
  {
    id: 3,
    title: "Sustentabilidade na Era Digital",
    excerpt: "Como a tecnologia pode contribuir para um mundo mais sustentável e ecológico.",
    category: "Sustentabilidade",
    image: "https://placehold.co/300x200/pink/white",
    readTime: "7 min",
  },
]

export const recentPosts = [
  {
    id: 1,
    title: "Como Implementar Dark Mode em React",
    excerpt: "Um guia completo para adicionar tema escuro em suas aplicações React.",
    date: "2 dias atrás",
    category: "React",
  },
  {
    id: 2,
    title: "Tendências de UX Design para 2024",
    excerpt: "Descubra as principais tendências que vão dominar o design de interfaces.",
    date: "4 dias atrás",
    category: "UX Design",
  },
  {
    id: 3,
    title: "Otimização de Performance Web",
    excerpt: "Técnicas avançadas para melhorar a velocidade do seu site.",
    date: "1 semana atrás",
    category: "Performance",
  },
  {
    id: 4,
    title: "Introdução ao TypeScript",
    excerpt: "Aprenda os fundamentos do TypeScript e como ele pode melhorar seu código.",
    date: "1 semana atrás",
    category: "TypeScript",
  },
]

export const popularPosts = [
  {
    id: 1,
    title: 'Guia Completo de CSS Grid',
    views: '1.2k'
  },
  {
    id: 2,
    title: 'React Hooks Explicados',
    views: '980'
  },
  {
    id: 3,
    title: 'Design System do Zero',
    views: '756'
  },
]