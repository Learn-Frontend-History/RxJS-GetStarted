import {fromEvent, throttleTime} from "rxjs";
import {print, prepareDOM} from "../tools";

const TAG = 'flow'
const OPTIONS = {
    header: 'Flow control',
    buttons: [
        {id: `native-${TAG}`, caption: `Native ${TAG}`},
        {id: `rxjs-${TAG}`, caption: `RxJS ${TAG}`},
    ]
}
prepareDOM(OPTIONS)

const DURATION = 5000

//native
let lastTime = 0;
document.getElementById(
    OPTIONS.buttons[0].id
).addEventListener(
    'click',
    _ => {
        const now = Date.now()
        if (now - lastTime > DURATION) {
            lastTime = now
            print('Native', 'click allowed after some time')
        }
    }
)

//rxjs
fromEvent(
    document.getElementById(OPTIONS.buttons[1].id),
    'click'
).pipe(
    throttleTime(DURATION)
).subscribe(
    _ => print('RxJS', 'click allowed after some time')
)
