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