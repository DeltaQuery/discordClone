function diff(num1, num2) {
    if (num1 > num2) {
        return num1 - num2
    } else {
        return num2 - num1
    }
}

export const checkSwipeToOpen = (touchStart, touchEnd = touchStart) => {
    const verticalDiff = diff(touchEnd[1], touchStart[1])

    if (window.innerWidth <= 600) {
        if (((touchEnd[0] - touchStart[0] > 55)) && (verticalDiff < 20)) {
            return true
        }
        return false
    }

}

export const checkSwipeToClose = (touchStart, touchEnd = touchStart) => {
    const verticalDiff = diff(touchEnd[1], touchStart[1])

    if (window.innerWidth <= 600) {
        if (((touchStart[0] - touchEnd[0] > 55)) && (verticalDiff < 20)) {
            return false
        }
        return true
    }

}