export const isEqualsArray = (arr1, arr2) => {
    if(!(arr1 instanceof Array ) || !(arr1 instanceof Array ))
        return false;
    
    if(arr1.length !== arr2.length)
        return false;

    if(arr1 instanceof Object && arr2 instanceof Object) {
        let isEqual = true, arrayLength = arr1.length;
        for (let index = 0; index < arrayLength && isEqual; index++) {
            if(JSON.stringify(arr1[index]) !== JSON.stringify(arr2[index]))
                isEqual = false;
        }

        return isEqual;
    }

    return false;
}

export function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export function isIEBrowser() {
    // BROWSER CHECK VARIABLES
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf('MSIE ');
    const msie11 = ua.indexOf('Trident/');
    // const msedge = ua.indexOf('Edge/');
    return msie > 0 || msie11 > 0;
    // const isEdge = msedge > 0;
}