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
  title?: string
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
              href: 'https://alexburner.github.io/swatches/',
              img: 'https://i.imgur.com/XbINmW2m.png',
            },
          ],
        },
        {
          title: 'daylight',
          thumbs: [
            {
              href: 'https://daylight.website/',
              img: 'https://i.imgur.com/Trh8ulIm.png',
            },
          ],
        },
        {
          title: 'spectrogram',
          thumbs: [
            {
              href:
                'https://spectrogram.website/#https://soundcloud.com/klippee/morning-walk-wip',
              img: 'https://i.imgur.com/lZgvaqjm.png',
            },
          ],
        },
        {
          title: 'wikitree',
          thumbs: [
            {
              href: 'https://wikitree.website/',
              img: 'https://i.imgur.com/l4fXdRxm.png',
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
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'gravity',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/vanilla/gravity/interaction/test1.html',
              img: 'https://i.imgur.com/oaBiH8bm.png',
            },
          ],
        },
        {
          title: 'euclid',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/paperjs/drawtool/euclid/zero.html',
              img: 'https://i.imgur.com/0pvDJ7q.jpg',
            },
          ],
        },
        {
          title: 'parallax',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/vanilla/parallax/2.html',
              img: 'https://i.imgur.com/zZVWNh8.jpg',
            },
          ],
        },
        {
          title: 'flocking',
          thumbs: [
            {
              img: 'https://i.imgur.com/VF36ufAm.png',
              href: 'http://alexburner.com/',
            },
          ],
        },
        {
          title: 'trails',
          thumbs: [
            {
              title: 'linear',
              href:
                'http://patterns.website/experiments/vanilla/flocking/play/unflock_lines.html',
              img: 'https://i.imgur.com/9u8u6qDm.png',
            },
            {
              title: 'wandering',
              href:
                'http://patterns.website/experiments/vanilla/flocking/play/unflock_trails.html',
              img: 'https://i.imgur.com/XBy09ABm.png',
            },
          ],
        },
        {
          title: 'connect dots',
          thumbs: [
            {
              title: 'graph',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'laser',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'flower draw',
          thumbs: [
            {
              title: 'euclidean',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'packing',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'treble rotations',
          thumbs: [
            {
              title: 'colors',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'outlines',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'nesting triangles',
          thumbs: [
            {
              title: 'monochrome',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'trichrome',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'moire',
          thumbs: [
            {
              title: 'monochrome',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'trichrome',
              img: 'https://i.imgur.com/BQs73xNm.png',
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
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'angles & hues',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'topography',
          thumbs: [
            {
              title: 'terrain',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'accident',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'diffusion',
          thumbs: [
            {
              title: '2d wild',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: '2d bound',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: '3d wild',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: '3d bound',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'diffusion tables',
          thumbs: [
            {
              title: 'wild',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'bound',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'mirror particles',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'nbody trails',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'sphere jumble',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xNm.png',
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
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'rainbow',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'polyhedra spreads',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'platonic duals',
          thumbs: [
            {
              title: 'tetra',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'octa',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'hexa',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'icosa',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'dodeca',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'polygon spreads',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'polygon nesting',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'hopf lines',
          thumbs: [
            {
              title: 'monochrome',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'rainbow',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'offsets',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'holonstar',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'genesis',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'flower',
          thumbs: [
            {
              title: 'single',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'doubled',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'doubled, ratio',
              img: 'https://i.imgur.com/BQs73xNm.png',
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
              title: 'random',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
            {
              title: 'all',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
        {
          title: 'bound concepts',
          thumbs: [
            {
              title: 'dimensions',
              img: 'https://i.imgur.com/BQs73xNm.png',
              href: 'https://alexburner.github.io/dimensions',
            },
          ],
        },
      ],
    },
  ],
}
