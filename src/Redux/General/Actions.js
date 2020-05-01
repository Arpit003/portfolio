export const ACTION_TYPES = {
    TOAST_MESSAGE_ENABLE        : "TOAST_MESSAGE_ENABLE",
    TOAST_MESSAGE_DISABLE       : "TOAST_MESSAGE_DISABLE"
}

export const showToast = (message) => {
    return {
        type    : ACTION_TYPES.TOAST_MESSAGE_ENABLE,
        message : message || ''
    }
}
export const hideToast = () => {
    return {
        type    : ACTION_TYPES.TOAST_MESSAGE_DISABLE
    }
}

