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
  subtitle: '2012—2018',
  sections: [
    {
      title: 'sites',
      items: [
        {
          title: 'swatches',
          thumbs: [
            {
              href: 'https://alexburner.github.io/swatches/',
              img: 'https://i.imgur.com/XbINmW2l.png',
            },
          ],
        },
        {
          title: 'daylight',
          thumbs: [
            {
              href: 'https://daylight.website/',
              img: 'https://i.imgur.com/Trh8ulIl.png',
            },
          ],
        },
        {
          title: 'spectrogram',
          thumbs: [
            {
              href:
                'https://spectrogram.website/#https://soundcloud.com/closet-shaman/stillhere',
              img: 'https://i.imgur.com/lZgvaqjl.png',
            },
          ],
        },
        {
          title: 'wikitree',
          thumbs: [
            {
              href: 'https://wikitree.website/',
              img: 'https://i.imgur.com/dxIq6uQl.png',
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
              href: 'https://alexburner.github.io/dimensions',
              img: 'https://i.imgur.com/BQs73xNl.png',
            },
          ],
        },
        {
          title: 'force colors',
          thumbs: [
            {
              title: 'hover',
              href: 'https://alexburner.github.io/force-base/#pixi-map-hover',
              img: 'https://i.imgur.com/wSV8HUGl.png',
            },
            {
              title: 'plain',
              href: 'https://alexburner.github.io/force-base/#pixi-map',
              img: 'https://i.imgur.com/r9G9yu3l.png',
            },
          ],
        },
        {
          title: 'force drag',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/workers/force-layout/2nd--drag/dragging.html',
              img: 'https://i.imgur.com/CEsYk4ll.png',
            },
          ],
        },
        {
          title: 'gravity',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/vanilla/gravity/interaction/test1.html',
              img: 'https://i.imgur.com/oaBiH8bl.png',
            },
          ],
        },
        {
          title: 'euclid',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/paperjs/drawtool/euclid/zero.html',
              img: 'https://i.imgur.com/0pvDJ7ql.png',
            },
          ],
        },
        {
          title: 'parallax',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/vanilla/parallax/2.html',
              img: 'https://i.imgur.com/raVJ7TBl.png',
            },
          ],
        },
        {
          title: 'flocking',
          thumbs: [
            {
              href: 'http://alexburner.com/',
              img: 'https://i.imgur.com/5VqVBGnl.png',
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
              img: 'https://i.imgur.com/9u8u6qDl.png',
            },
            {
              title: 'jitter',
              href:
                'http://patterns.website/experiments/vanilla/flocking/play/unflock_trails.html',
              img: 'https://i.imgur.com/XBy09ABl.png',
            },
          ],
        },
        {
          title: 'connect the dots',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/paperjs/originals/connect_the_dots_graph.html',
              img: 'https://i.imgur.com/uXQRQIRl.png',
            },
          ],
        },
        {
          title: 'flower sequence',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/paperjs/originals/flower_of_life_giant.html',
              img: 'https://i.imgur.com/SQaf8qel.png',
            },
          ],
        },
        {
          title: 'treble rotations',
          thumbs: [
            {
              title: 'colors',
              href:
                'http://patterns.website/experiments/paperjs/originals/treble.html',
              img: 'https://i.imgur.com/zx8vQITl.png',
            },
            {
              title: 'outlines',
              href:
                'http://patterns.website/experiments/paperjs/originals/treble_outlines.html',
              img: 'https://i.imgur.com/YWeQw9Yl.png',
            },
          ],
        },
        {
          title: 'triangle rotations',
          thumbs: [
            {
              title: 'trichrome',
              href:
                'http://patterns.website/experiments/paperjs/originals/triangles_colors.html',
              img: 'https://i.imgur.com/3Q0tNqkl.png',
            },
            {
              title: 'monochrome',
              href:
                'http://patterns.website/experiments/paperjs/originals/triangles.html',
              img: 'https://i.imgur.com/jDxMHmvl.png',
            },
          ],
        },
        {
          title: 'moire',
          thumbs: [
            {
              title: 'monochrome',
              href: 'http://patterns.website/experiments/d3js/moire/mono.html',
              img: 'https://i.imgur.com/h5aTfgvl.png',
            },
            {
              title: 'trichrome',
              href: 'http://patterns.website/experiments/d3js/moire/chrom.html',
              img: 'https://i.imgur.com/sjc9vppl.png',
            },
          ],
        },
      ],
    },
    {
      title: 'experiments (static) [random] ',
      items: [
        {
          title: 'orbit trails',
          thumbs: [
            {
              href: 'https://alexburner.github.io/dimension-trails',
              img: 'https://i.imgur.com/d2uR59il.png',
            },
          ],
        },
        {
          title: 'flow field',
          thumbs: [
            {
              title: 'lines',
              href:
                'http://patterns.website/experiments/p5js/shiffman/flow-field/lines.html',
              img: 'https://i.imgur.com/EAG99VQl.png',
            },
            {
              title: 'hues',
              href:
                'http://patterns.website/experiments/p5js/shiffman/flow-field/hues.html',
              img: 'https://i.imgur.com/Wj2tDpol.png',
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
              img: 'https://i.imgur.com/CDKgzt5l.png',
            },
            {
              title: 'whoops',
              href:
                'http://patterns.website/experiments/paperjs/other/terrain--hmmm.html',
              img: 'https://i.imgur.com/Um1Duxzl.png',
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
              img: 'https://i.imgur.com/DhGNMNul.png',
            },
            {
              title: '2d wild',
              href:
                'http://patterns.website/experiments/workers/diffusion/2nd--worker-pool/diffuse-2d-wild.html#24',
              img: 'https://i.imgur.com/InRERwhl.png',
            },
            {
              title: '3d bound',
              href:
                'http://patterns.website/experiments/workers/diffusion/2nd--worker-pool/diffuse-3d-bound.html#24',
              img: 'https://i.imgur.com/qbejFQxl.png',
            },
            {
              title: '3d wild',
              href:
                'http://patterns.website/experiments/workers/diffusion/2nd--worker-pool/diffuse-3d-wild.html#24',
              img: 'https://i.imgur.com/F4bAXBwl.png',
            },
          ],
        },
        {
          title: 'diffusion 2d/3d',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/workers/diffusion/3rd--n-table/draft-2/normal.html#7',
              img: 'https://i.imgur.com/LAI6Ingl.png',
            },
          ],
        },
        {
          title: 'diffusion circles',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/workers/diffusion/3rd--n-table/groups/test5.html',
              img: 'https://i.imgur.com/jRY5PZQl.png',
            },
          ],
        },
        {
          title: 'nbody trails',
          thumbs: [
            {
              href: 'http://patterns.website/experiments/protovis/trails.html',
              img: 'https://i.imgur.com/KxlpfbZl.png',
            },
          ],
        },
        {
          title: 'flock trails',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/vanilla/flock-n/2d.html',
              img: 'https://i.imgur.com/MA0CKsUl.png',
            },
          ],
        },
        {
          title: 'polyhedra spread',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/threejs/polyhedra/numbers.html',
              img: 'https://i.imgur.com/EwdkU0Ml.png',
            },
          ],
        },
        {
          title: 'mirror particles',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/threejs/polyhedra/twist.html',
              img: 'https://i.imgur.com/Dw6nBpAl.png',
            },
          ],
        },
        {
          title: 'spheres',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/threejs/spheres+cam.html',
              img: 'https://i.imgur.com/tnrTVcBl.png',
            },
          ],
        },
      ],
    },
    {
      title: 'experiments (static) [determined]',
      items: [
        {
          title: 'polygon stream',
          thumbs: [
            {
              title: 'monochrome',
              href:
                'http://patterns.website/experiments/p5js/n-gons/test2.html',
              img: 'https://i.imgur.com/t1CVrhAl.png',
            },
            {
              title: 'rainbow',
              href:
                'http://patterns.website/experiments/p5js/n-gons/test3.html',
              img: 'https://i.imgur.com/nm2NgEil.png',
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
              img: 'https://i.imgur.com/Z7Pt4cFl.png',
            },
            {
              title: 'octa',
              href:
                'http://patterns.website/experiments/threejs/polyhedra/plato-0/bylength/duals/06-octa.html',
              img: 'https://i.imgur.com/nW3XUpil.png',
            },
            {
              title: 'hexa',
              href:
                'http://patterns.website/experiments/threejs/polyhedra/plato-0/bylength/duals/08-hexa.html',
              img: 'https://i.imgur.com/g6XPs6dl.png',
            },
            {
              title: 'icosa',
              href:
                'http://patterns.website/experiments/threejs/polyhedra/plato-0/bylength/duals/12-icosa.html',
              img: 'https://i.imgur.com/zumxhB1l.png',
            },
            {
              title: 'dodeca',
              href:
                'http://patterns.website/experiments/threejs/polyhedra/plato-0/bylength/duals/20-dodeca.html',
              img: 'https://i.imgur.com/tqbCrEfl.png',
            },
          ],
        },
        {
          title: 'polygon spread',
          thumbs: [
            {
              title: 'radius',
              href:
                'http://patterns.website/experiments/paperjs/other/polygon-numbers(sameradius).html',
              img: 'https://i.imgur.com/vfyI476l.png',
            },
            {
              title: 'proximity',
              href:
                'http://patterns.website/experiments/paperjs/other/polygon-numbers.html',
              img: 'https://i.imgur.com/jk3OQ0wl.png',
            },
          ],
        },
        {
          title: 'polygon nesting',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/paperjs/other/polygon_overlap.html',
              img: 'https://i.imgur.com/x5vKlKXl.png',
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
              img: 'https://i.imgur.com/Rfz9TDOl.png',
            },
            {
              title: 'rainbow',
              href:
                'http://patterns.website/experiments/paperjs/other/hopf_more+color.html',
              img: 'https://i.imgur.com/AMVAyJhl.png',
            },
          ],
        },
        {
          title: 'genesis',
          thumbs: [
            {
              title: 'northern rotation',
              href:
                'http://patterns.website/experiments/paperjs/genesis/summary/series.html',
              img: 'https://i.imgur.com/N0w1wuzl.png',
            },
            {
              title: 'natural rotation',
              href:
                'http://patterns.website/experiments/paperjs/genesis/summary-x/series.html',
              img: 'https://i.imgur.com/leXh84Bl.png',
            },
          ],
        },
        {
          title: 'holonstar',
          thumbs: [
            {
              href:
                'http://patterns.website/experiments/paperjs/other/holonstar-6.html',
              img: 'https://i.imgur.com/0uxwVXql.png',
            },
          ],
        },
      ],
    },
    /* {
      title: 'printables',
      items: [
        {
          title: 'flower double',
          thumbs: [
            {
              title: 'pure',
              href:
                'http://patterns.website/experiments/paperjs/working2/flower_x2.html',
              img: 'https://i.imgur.com/OovBNZFl.png',
            },
            {
              title: 'ratio',
              href:
                'http://patterns.website/experiments/paperjs/working2/flower_x2_rt.html',
              img: 'https://i.imgur.com/kk2I1NHl.png',
            },
          ],
        },
      ],
    }, */
    {
      title: 'words',
      items: [
        {
          title: 'quotes',
          thumbs: [
            {
              title: 'random',
              href: 'http://originalburn.com/quotes/newrandom',
              img: 'https://i.imgur.com/auw5S6Zl.png',
            },
            {
              title: 'all',
              href: 'http://originalburn.com/quotes/all',
              img: 'https://i.imgur.com/OxDwKp3l.png',
            },
          ],
        },
        {
          title: 'cycles',
          thumbs: [
            {
              href: 'http://originalburn.com/bounds/random',
              img: 'https://i.imgur.com/XuSI23ql.png',
            },
          ],
        },
        {
          title: 'complexities',
          thumbs: [
            {
              href: 'https://alexburner.github.io/core-complexities',
              img: 'https://i.imgur.com/TNiCWmRl.png',
            },
          ],
        },
      ],
    },
  ],
}
