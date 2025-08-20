import { Eye, Heart, LucideIconData, Zap } from "lucide-angular";

export type Mission = {
  title: string,
  description: string,
  icon?: LucideIconData,
  color: string
}

export const missions = [
  {
    title: 'Missão',
    description: 'Democratizar o conhecimento através de conteúdo acessível e de qualidade para todos.',
    icon: Zap,
    color: 'blue'
  },
  {
    title: 'Visão',
    description: 'Ser referência em conteúdo educativo e inspirador na comunidade digital brasileira.',
    icon: Eye,
    color: 'green'
  },
  {
    title: 'Valores',
    description: 'Autenticidade, qualidade, inclusão e compromisso com o crescimento da nossa comunidade.',
    icon: Heart,
    color: 'purple'
  },
]