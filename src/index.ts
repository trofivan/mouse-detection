enum Devices {
    MOUSE = 'Mouse',
    TRACKPAD = 'Trackpad'
}

const $elem = document.getElementById('root')
const $text = document.getElementById('text')

const WHEEL_DELTA_MOUSE_WEBKIT = 120 // corresponds to the scrolling step for 1 event with a mouse
const WHEEL_DELTA_MOUSE_SAFARI = 12 // corresponds to the scrolling step for 1 event with a mouse
const WHEEL_DELTA_TOUCHPAD_COUNT = 3 // corresponds to the scrolli

const log = {
    [Devices.MOUSE]: 0,
    [Devices.TRACKPAD]: 0,
}

$elem.addEventListener('wheel', (e) => {
    const device = detectDevice(e)
    log[device] += 1
    $text.innerHTML = `
        <h3>${device}</h3>
        <p>
            Mouse: ${log[Devices.MOUSE]}<br/>
            Trackpad: ${log[Devices.TRACKPAD]}
        </p>

    `
})

function detectDevice(e: WheelEvent): Devices {
    const isTrackpad = e.wheelDeltaY ? e.wheelDeltaY === -3 * e.deltaY : e.deltaMode === 0

    return isTrackpad ? Devices.TRACKPAD : Devices.MOUSE
}