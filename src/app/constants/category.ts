import { Code, Palette, Leaf, Smartphone, Globe, Camera, LucideIconData } from 'lucide-angular'

export interface ICategory {
  name: string,
  icon?: LucideIconData,
  count: number
}

export const categories: ICategory[] = [
  { name: "Tecnologia", icon: Code, count: 24 },
  { name: "Design", icon: Palette, count: 18 },
  { name: "Sustentabilidade", icon: Leaf, count: 12 },
  { name: "Mobile", icon: Smartphone, count: 15 },
  { name: "Web", icon: Globe, count: 21 },
  { name: "Fotografia", icon: Camera, count: 9 },
]