export const emitArr = (arr, action) => {
    arr.forEach(element => {
        action(element);
    });
}