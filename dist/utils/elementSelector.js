export function elementSelector(element) {
    return new Promise((resolve, reject) => {
        const el = document.querySelector(element);
        if (el === null) {
            reject();
            return;
        }
        resolve(el);
    });
}
