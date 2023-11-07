import * as fs from 'fs'

fs.readFile('./2015/03/input.txt', 'utf8', (e, data) => {
    if (e) { console.error(e); return; }

    const posReducer = (p,c) => {
        const last = p[p.length-1].split(",").map(x => x.trim()).map(i => parseInt(i))
        switch(c) {
            case "^":
                return [...p, [last[0], last[1]+1].toString()]
            case "v":
                return [...p, [last[0], last[1]-1].toString()]
            case ">":
                return [...p, [last[0]+1, last[1]].toString()]
            case "<":
                return [...p, [last[0]-1, last[1]].toString()]
            default:
                throw new Error("what")
        }
    }

    const directions = data.split("");
    const positions = directions.reduce(posReducer, [[0,0].toString()])

    // evil hack!
    const uniquePositions = new Set(positions)

    console.log(uniquePositions.size)

    const year2Santa = directions.filter((_, i) => i % 2 === 0)
    const year2Robot = directions.filter((_, i) => i % 2 === 1)
    const y2sp = year2Santa.reduce(posReducer, [[0,0].toString()])
    const y2rp = year2Robot.reduce(posReducer, [[0,0].toString()])
    const y2positions = [...y2sp, ...y2rp]
    const uniqueY2Positions = new Set(y2positions)

    console.log(uniqueY2Positions.size)
})