import * as fs from 'fs'

fs.readFile('./2015/02/input.txt', 'utf8', (e, data) => {
    if (e) { console.error(e); return; }

    const lines = data.split(/[\r\n]+/)

    const paper = lines.map(l => {
        const edges = l.split("x")
            .map(i => parseInt(i))
        
        const sides = [
            edges[0]*edges[1],
            edges[1]*edges[2],
            edges[2]*edges[0]
        ]

        const perimeters = [
            edges[0]+edges[1],
            edges[1]+edges[2],
            edges[2]+edges[0]
        ].map(n => n*2)

        const surfaceArea = sides.reduce((p, c) => (p + (2 * c)), 0)
        const slack = sides.reduce((p, c) => p > c ? c : p, 10000)

        const ribbon = perimeters.reduce((p, c) => p > c ? c : p, 10000)
        const bow = edges.reduce((p, c) => p*c, 1)

        return [surfaceArea + slack, ribbon + bow]
    })

    const paperTotal = paper.reduce((p, c) => p+c[0], 0)
    const ribbonTotal = paper.reduce((p, c) => p+c[1], 0)

    console.log(`${paperTotal}, ${ribbonTotal}`)
})