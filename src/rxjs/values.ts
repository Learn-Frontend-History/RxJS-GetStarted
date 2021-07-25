import {fromEvent, map} from "rxjs";
import {print, prepareDOM} from "../tools";

const TAG = 'value'
const OPTIONS = {
    header: 'Value transformation',
    buttons: [
        { id: `native-${TAG}`, caption: `Native ${TAG}` },
        { id: `rxjs-${TAG}`, caption: `RxJS ${TAG}` },
    ]
}
prepareDOM(OPTIONS)

//native
document.getElementById(
    OPTIONS.buttons[0].id
).addEventListener(
    'click',
    event => print('Native', `coordinates: ${[event.clientX, event.clientY]}`)
)

//rxjs
fromEvent(
    document.getElementById(OPTIONS.buttons[1].id),
    'click'
).pipe(
    map((event: MouseEvent) => [event.clientX, event.clientY])
).subscribe(
    coordinates => print('RxJS', `coordinates ${coordinates}`)
)
