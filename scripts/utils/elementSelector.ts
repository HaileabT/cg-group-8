export function elementSelector<T>(element: string): Promise<T | undefined> {
  return new Promise((resolve, reject) => {
    const el: T = document.querySelector(element) as T;

    if (el === null) {
      reject();
      return;
    }

    resolve(el);
  });
}
