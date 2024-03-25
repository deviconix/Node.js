export const createEmitterArr = (arr, action) => {
    const lists = [];
    arr.forEach(element => {
        const item = action(element);
        lists.push(item);
    });
    return lists;
}