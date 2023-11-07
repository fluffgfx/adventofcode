import * as crypto from 'crypto'

const input = "ckczppom"

let test = 1

while (true) {
    const hash = crypto.createHash('md5').update(`${input}${test}`).digest('hex')

    if(hash.substring(0, 6) === "000000") {
        console.log(test)
        break
    } else {
        test++
    }
}
