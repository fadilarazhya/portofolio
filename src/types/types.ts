export type NavLinkItem = {
  href: string
  label: string
}

export type ToolItem = {
  id: string
  name: string
  icon: React.ReactNode
  hoverColor: string
}

export type ProjectItem = {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
}

export type SocialLink = {
  id: string
  name: string
  url: string
  icon: React.ReactNode
}