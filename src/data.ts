export interface SiteData {
  title: string
  sections: SectionData[]
}

export interface SectionData {
  title: string
  items: ItemData[]
}

export interface ItemData {
  title: string
  description: string
  thumbs: ThumbData[]
}

export interface ThumbData {
  title: string
  img: string
  href: string
}

export const site: SiteData = {
  title: 'patterns',
  sections: [
    {
      title: 'sites',
      items: [
        {
          title: 'daylight',
          description: 'Natural clock visualizing daylight hours',
          thumbs: [],
        },
      ],
    },
    {
      title: 'interactive experiements',
      items: [
        {
          title: 'daylight',
          description: 'Natural clock visualizing daylight hours',
          thumbs: [],
        },
      ],
    },
    {
      title: 'static experiements (random chance)',
      items: [
        {
          title: 'daylight',
          description: 'Natural clock visualizing daylight hours',
          thumbs: [],
        },
      ],
    },
    {
      title: 'static experiements (deterministic)',
      items: [
        {
          title: 'daylight',
          description: 'Natural clock visualizing daylight hours',
          thumbs: [],
        },
      ],
    },
    {
      title: 'printables',
      items: [],
    },
    {
      title: 'theoreticals',
      items: [],
    },
  ],
}
