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
              title: 'jitter',
              href:
                'http://patterns.website/experiments/vanilla/flocking/play/unflock_trails.html',
              img: 'https://i.imgur.com/XBy09ABm.png',
            },
          ],
        },
        {
          title: 'connect the dots',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/paperjs/originals/connect_the_dots_graph.html',
              img: 'https://i.imgur.com/uXQRQIRm.jpg',
            },
          ],
        },
        {
          title: 'flower sequence',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/paperjs/originals/flower_of_life.html',
              img: 'https://i.imgur.com/qq6BA94m.png',
            },
          ],
        },
        {
          title: 'treble rotations',
          thumbs: [
            {
              title: 'outlines',
              href:
                'http://patterns.website/experiments/paperjs/originals/treble_outlines.html',
              img: 'https://i.imgur.com/YWeQw9Ym.png',
            },
            {
              title: 'colors',
              href:
                'http://patterns.website/experiments/paperjs/originals/treble.html',
              img: 'https://i.imgur.com/zx8vQITm.png',
            },
          ],
        },
        {
          title: 'nesting triangles',
          thumbs: [
            {
              title: 'monochrome',
              href:
                'http://patterns.website/experiments/paperjs/originals/triangles.html',
              img: 'https://i.imgur.com/XLNP0k9m.png',
            },
            {
              title: 'trichrome',
              href:
                'http://patterns.website/experiments/paperjs/originals/triangles_colors.html',
              img: 'https://i.imgur.com/3oLBDwim.png',
            },
          ],
        },
        {
          title: 'moire',
          thumbs: [
            {
              title: 'monochrome',
              href: 'http://patterns.website/experiments/d3js/moire/mono.html',
              img: 'https://i.imgur.com/w2JM4iGm.png',
            },
            {
              title: 'trichrome',
              href: 'http://patterns.website/experiments/d3js/moire/chrom.html',
              img: 'https://i.imgur.com/T9MwGblm.png',
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
