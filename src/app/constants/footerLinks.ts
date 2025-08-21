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
        href: '/',
        title: 'Home'
      },
      {
        href: '/sobre',
        title: 'Sobre'
      },
      {
        href: '/categorias',
        title: 'Categorias'
      },
      {
        href: '/contato',
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