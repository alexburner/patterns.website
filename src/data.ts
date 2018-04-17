export interface SiteData {
  title: string
  subtitle: string
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
  subtitle: '2012 – 2018',
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
      title: 'experiments (interactive)',
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
              img: 'https://i.imgur.com/raVJ7TB.png',
            },
          ],
        },
        {
          title: 'flocking',
          thumbs: [
            {
              img: 'https://i.imgur.com/5VqVBGn.png',
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
                'http://patterns.website/experiments/paperjs/originals/flower_of_life_giant.html',
              img: 'https://i.imgur.com/pDgzwdSm.png',
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
              img: 'https://i.imgur.com/jDxMHmvm.png',
            },
            {
              title: 'trichrome',
              href:
                'http://patterns.website/experiments/paperjs/originals/triangles_colors.html',
              img: 'https://i.imgur.com/oWKa2o8m.png',
            },
          ],
        },
        {
          title: 'moire',
          thumbs: [
            {
              title: 'monochrome',
              href: 'http://patterns.website/experiments/d3js/moire/mono.html',
              img: 'https://i.imgur.com/PSp85R8m.png',
            },
            {
              title: 'trichrome',
              href: 'http://patterns.website/experiments/d3js/moire/chrom.html',
              img: 'https://i.imgur.com/sjc9vppm.png',
            },
          ],
        },
      ],
    },
    {
      title: 'experiments (static) [random] ',
      items: [
        {
          title: 'flow field',
          thumbs: [
            {
              title: 'lines',
              href:
                'http://patterns.website/experiments/p5js/shiffman/flow-field/lines.html',
              img: 'https://i.imgur.com/EAG99VQm.png',
            },
            {
              title: 'hues',
              href:
                'http://patterns.website/experiments/p5js/shiffman/flow-field/hues.html',
              img: 'https://i.imgur.com/Wj2tDpom.png',
            },
          ],
        },
        {
          title: 'topography',
          thumbs: [
            {
              title: 'terrain',
              href:
                'http://patterns.website/experiments/paperjs/other/terrain.html',
              img: 'https://i.imgur.com/CDKgzt5m.png',
            },
            {
              title: 'whoops',
              href:
                'http://patterns.website/experiments/paperjs/other/terrain--hmmm.html',
              img: 'https://i.imgur.com/Um1Duxzm.png',
            },
          ],
        },
        {
          title: 'diffusion',
          thumbs: [
            {
              title: '2d bound',
              href:
                'http://patterns.website/experiments/workers/diffusion/2nd--worker-pool/diffuse-2d-bound.html#24',
              img: 'https://i.imgur.com/DhGNMNu.png',
            },
            {
              title: '2d wild',
              href:
                'http://patterns.website/experiments/workers/diffusion/2nd--worker-pool/diffuse-2d-wild.html#24',
              img: 'https://i.imgur.com/InRERwh.png',
            },
            {
              title: '3d bound',
              href:
                'http://patterns.website/experiments/workers/diffusion/2nd--worker-pool/diffuse-3d-bound.html#24',
              img: 'https://i.imgur.com/qbejFQx.png',
            },
            {
              title: '3d wild',
              href:
                'http://patterns.website/experiments/workers/diffusion/2nd--worker-pool/diffuse-3d-wild.html#24',
              img: 'https://i.imgur.com/F4bAXBw.png',
            },
          ],
        },
        {
          title: 'diffusion 2d/3d',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/workers/diffusion/3rd--n-table/draft-2/normal.html#7',
              img: 'https://i.imgur.com/LAI6Ingm.png',
            },
          ],
        },
        {
          title: 'diffusion circles',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/workers/diffusion/3rd--n-table/groups/test5.html',
              img: 'https://i.imgur.com/jRY5PZQm.png',
            },
          ],
        },
        {
          title: 'nbody trails',
          thumbs: [
            {
              href: 'http://patterns.website/experiments/protovis/trails.html',
              img: 'https://i.imgur.com/KxlpfbZm.png',
            },
          ],
        },
        {
          title: 'mirror particles',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/threejs/polyhedra/twist.html',
              img: 'https://i.imgur.com/Dw6nBpAm.png',
            },
          ],
        },
        {
          title: 'spheres',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/threejs/spheres+cam.html',
              img: 'https://i.imgur.com/tnrTVcBm.png',
            },
          ],
        },
      ],
    },
    {
      title: 'experiments (static) [deterministic]',
      items: [
        {
          title: 'polygon streams',
          thumbs: [
            {
              title: 'monochrome',
              href:
                'http://patterns.website/experiments/p5js/n-gons/test2.html',
              img: 'https://i.imgur.com/t1CVrhAm.png',
            },
            {
              title: 'rainbow',
              href:
                'http://patterns.website/experiments/p5js/n-gons/test3.html',
              img: 'https://i.imgur.com/nm2NgEim.png',
            },
          ],
        },
        {
          title: 'platonic duals',
          thumbs: [
            {
              title: 'tetra',
              href:
                'http://patterns.website/experiments/threejs/polyhedra/plato-0/bylength/duals/04-tetra.html',
              img: 'https://i.imgur.com/Z7Pt4cF.png',
            },
            {
              title: 'octa',
              href:
                'http://patterns.website/experiments/threejs/polyhedra/plato-0/bylength/duals/06-octa.html',
              img: 'https://i.imgur.com/nW3XUpi.png',
            },
            {
              title: 'hexa',
              href:
                'http://patterns.website/experiments/threejs/polyhedra/plato-0/bylength/duals/08-hexa.html',
              img: 'https://i.imgur.com/g6XPs6d.png',
            },
            {
              title: 'icosa',
              href:
                'http://patterns.website/experiments/threejs/polyhedra/plato-0/bylength/duals/12-icosa.html',
              img: 'https://i.imgur.com/zumxhB1.png',
            },
            {
              title: 'dodeca',
              href:
                'http://patterns.website/experiments/threejs/polyhedra/plato-0/bylength/duals/20-dodeca.html',
              img: 'https://i.imgur.com/tqbCrEf.png',
            },
          ],
        },
        {
          title: 'polyhedra spreads',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/threejs/polyhedra/numbers.html',
              img: 'https://i.imgur.com/EwdkU0Mm.png',
            },
          ],
        },
        {
          title: 'polygon spreads',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/paperjs/other/polygon-numbers.html',
              img: 'https://i.imgur.com/6GqUVQHm.png',
            },
          ],
        },
        {
          title: 'polygon nesting',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/paperjs/other/polygon_overlap.html',
              img: 'https://i.imgur.com/x5vKlKXm.png',
            },
          ],
        },
        {
          title: 'hopf lines',
          thumbs: [
            {
              title: 'monochrome',
              href:
                'http://patterns.website/experiments/paperjs/other/hopf_more.html',
              img: 'https://i.imgur.com/Rfz9TDOm.png',
            },
            {
              title: 'rainbow',
              href:
                'http://patterns.website/experiments/paperjs/other/hopf_more+color.html',
              img: 'https://i.imgur.com/AMVAyJhm.png',
            },
          ],
        },
        {
          title: 'holonstar',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/paperjs/other/holonstar-6.html',
              img: 'https://i.imgur.com/0uxwVXqm.png',
            },
          ],
        },
        {
          title: 'genesis',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/paperjs/genesis/summary/series.html',
              img: 'https://i.imgur.com/6L0gcN1.png',
            },
          ],
        },
        {
          title: 'flower doubles',
          thumbs: [
            {
              title: 'pure',
              href:
                'http://patterns.website/experiments/paperjs/working2/flower_x2.html',
              img: 'https://i.imgur.com/cBKkqzrm.png',
            },
            {
              title: 'ratio',
              href:
                'http://patterns.website/experiments/paperjs/working2/flower_x2_rt.html',
              img: 'https://i.imgur.com/VLp0GMUm.png',
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
              href: 'http://originalburn.com/quotes/newrandom',
              img: 'https://i.imgur.com/auw5S6Zm.png',
            },
            {
              title: 'all',
              href: 'http://originalburn.com/quotes/all',
              img: 'https://i.imgur.com/OxDwKp3m.png',
            },
          ],
        },
        {
          title: 'bound concepts',
          thumbs: [
            {
              href: 'http://originalburn.com/bounds/random',
              img: 'https://i.imgur.com/XuSI23qm.png',
            },
          ],
        },
      ],
    },
  ],
}
