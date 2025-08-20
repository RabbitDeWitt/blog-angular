import { LucideIconData, Mail, MapPin, MessageCircleMore } from "lucide-angular";

export type Info = {
  title: string,
  value: string,
  description: string,
  color: string,
  icon?: LucideIconData
}

export const contactInfos: Info[] = [
  {
    title: 'E-mail',
    value: 'contato@meublog.com',
    description: 'Respondemos em até 24 horas',
    color: 'blue',
    icon: Mail
  },
  {
    title: 'WhatsApp',
    value: '(11) 99999-9999',
    description: 'Segunda a sexta, 9h às 18h',
    color: 'green',
    icon: MessageCircleMore
  },
  {
    title: 'Endereço',
    value: 'São Paulo, SP',
    description: 'Brasil',
    color: 'purple',
    icon: MapPin
  },
]