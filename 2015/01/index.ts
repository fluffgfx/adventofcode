import * as fs from 'fs'

fs.readFile('./2015/01/input.txt', 'utf8', (e, data) => {
    if (e) { console.error(e); return; }

    let level = 0
    let pos = 1
    let left = data

    while (left.length > 0) {
        const next = left.substring(0, 1)
        left = left.substring(1)

        if (next === "(") level++
        if (next === ")") level--

        if (level < 0) { console.log(pos); return; }

        pos++
    }
})