import {fromEvent} from "rxjs";
import {print, prepareDOM} from "../tools";

const TAG = 'click'
const OPTIONS = {
    header: 'First example: handling events',
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
    _ => {
        console.group()
        print('Native', 'click')
    }
)

//rxjs
fromEvent(
    document.getElementById(OPTIONS.buttons[1].id),
    'click'
).subscribe(
    _ => {
        console.group()
        print('RxJS', 'click')
    }
)
