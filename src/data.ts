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
          title: 'dimensions',
          thumbs: [
            {
              title: 'dimensions',
              img: '/img/dimensions',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
      ],
    },
    {
      title: 'interactive experiments',
      items: [
        {
          title: 'dimensions',
          thumbs: [
            {
              title: 'dimensions',
              img: '/img/dimensions',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
      ],
    },
    {
      title: 'static experiments (random)',
      items: [
        {
          title: 'dimensions',
          thumbs: [
            {
              title: 'dimensions',
              img: '/img/dimensions',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
      ],
    },
    {
      title: 'static experiments (deterministic)',
      items: [
        {
          title: 'dimensions',
          thumbs: [
            {
              title: 'dimensions',
              img: '/img/dimensions',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
      ],
    },
    {
      title: 'printables',
      items: [
        {
          title: 'dimensions',
          thumbs: [
            {
              title: 'dimensions',
              img: '/img/dimensions',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
      ],
    },
  ],
}
