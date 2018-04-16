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
          title: 'swatches',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'daylight',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'spectrogram',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'wikitree',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xN.png',
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
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'gravity',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'euclid',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'parallax',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'flocking',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'trails',
          thumbs: [
            {
              title: 'smooth',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'jitter',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'connect dots',
          thumbs: [
            {
              title: 'graph',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'laser',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'flower draw',
          thumbs: [
            {
              title: 'euclidean',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'packing',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'treble rotations',
          thumbs: [
            {
              title: 'colors',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'outlines',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'nesting triangles',
          thumbs: [
            {
              title: 'monochrome',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'trichrome',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'moire',
          thumbs: [
            {
              title: 'monochrome',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'trichrome',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
      ],
    },
    {
      title: 'static (random) experiments',
      items: [
        {
          title: 'flow field',
          thumbs: [
            {
              title: 'angles',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'angles & hues',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'topography',
          thumbs: [
            {
              title: 'terrain',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'accident',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'diffusion',
          thumbs: [
            {
              title: '2d wild',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: '2d bound',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: '3d wild',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: '3d bound',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'mirror particles',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'nbody trails',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'sphere jumble',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
      ],
    },
    {
      title: 'static (deterministic) experiments',
      items: [
        {
          title: 'polygon stream',
          thumbs: [
            {
              title: 'monochrome',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'rainbow',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'polyhedra spreads',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'polygon spreads',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'polygon nesting',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'hopf lines',
          thumbs: [
            {
              title: 'monochrome',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'rainbow',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'offsets',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'holonstar',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'genesis',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'flower',
          thumbs: [
            {
              title: 'single',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'doubled',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'doubled, ratio',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
      ],
    },
    {
      title: 'theoretics',
      items: [
        {
          title: 'quote garden',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'bound concepts',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xN.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
      ],
    },
  ],
}
