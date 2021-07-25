import {fromEvent, scan} from "rxjs";
import {print, prepareDOM} from "../tools";

const TAG = 'counter'
const OPTIONS = {
    header: 'Purity: isolate implementation',
    buttons: [
        { id: `native-${TAG}`, caption: `Native ${TAG}` },
        { id: `rxjs-${TAG}`, caption: `RxJS ${TAG}` },
    ]
}
prepareDOM(OPTIONS)

//native
let count = 0
document.getElementById(
    OPTIONS.buttons[0].id
).addEventListener(
    'click',
    _ => print('Native', `${++count}`)
)

//rxjs
fromEvent(
    document.getElementById(OPTIONS.buttons[1].id),
    'click'
).pipe(
    scan(count => ++count, 0)
).subscribe(
    count => print('RxJS', count)
)
