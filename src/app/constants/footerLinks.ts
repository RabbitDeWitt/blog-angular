interface footerLink {
  category: string,
  links: {
    href: string,
    title: string
  }[]
}

export const footerLinks: footerLink[] = [
  {
    category: 'Navegação',
    links: [
      {
        href: '#',
        title: 'Home'
      },
      {
        href: '#',
        title: 'Sobre'
      },
      {
        href: '#',
        title: 'Categorias'
      },
      {
        href: '#',
        title: 'Contato'
      },
    ]
  },
  {
    category: 'Categorias',
    links: [
      {
        href: '#',
        title: 'Tecnologia'
      },
      {
        href: '#',
        title: 'Design'
      },
      {
        href: '#',
        title: 'Sustentabilidade'
      },
      {
        href: '#',
        title: 'Mobile'
      },
    ]
  },
  {
    category: 'Redes Sociais',
    links: [
      {
        href: '#',
        title: 'Twitter'
      },
      {
        href: '#',
        title: 'LinkedIn'
      },
      {
        href: '#',
        title: 'Instagram'
      },
      {
        href: '#',
        title: 'GitHub'
      },
    ]
  },
]