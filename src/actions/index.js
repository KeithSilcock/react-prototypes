export function updateTime() {
    return {
        type:'UPDATE_TIME',
        payload: new Date().toLocaleTimeString(),
    }
}
export function setTime() {
    return {
        type:'SET_TIME',
        payload:'MY STRING'
    }
}