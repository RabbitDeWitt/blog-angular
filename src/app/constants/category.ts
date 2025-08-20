import { Code, Palette, Leaf, Smartphone, Globe, Camera, LucideIconData } from 'lucide-angular'

export type Category = {
  name: string,
  icon?: LucideIconData,
  count: number,
  description: string
}

export const categories: Category[] = [
  {
    name: "Tecnologia",
    icon: Code,
    count: 24,
    description: "Últimas tendências em tecnologia, programação e inovação digital.",
  },
  {
    name: "Design",
    icon: Palette,
    count: 18,
    description: "Inspiração e técnicas de design gráfico, UX/UI e criatividade visual.",
  },
  {
    name: "Sustentabilidade",
    icon: Leaf,
    count: 12,
    description: "Práticas sustentáveis, meio ambiente e responsabilidade social.",
  },
  {
    name: "Mobile",
    icon: Smartphone,
    count: 15,
    description: "Desenvolvimento mobile, apps e tendências em dispositivos móveis.",
  },
  { name: "Web", icon: Globe, count: 21, description: "Desenvolvimento web, frameworks e tecnologias para internet." },
  {
    name: "Fotografia",
    icon: Camera,
    count: 9,
    description: "Técnicas fotográficas, equipamentos e inspiração visual.",
  },
]

export const tags = [
  "React",
  "JavaScript",
  "CSS",
  "Node.js",
  "Python",
  "Design System",
  "UX Research",
  "Figma",
  "TypeScript",
  "Next.js",
  "Tailwind",
  "Mobile First",
  "Responsive",
  "API",
  "Database",
  "Cloud",
]