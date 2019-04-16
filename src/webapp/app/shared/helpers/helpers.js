export const  generateDictFromArr = (arr) => {
    const dict = {};
    for (let i in arr) {
      dict[parseInt(i) + 1] = arr[i];
    }
    return dict;
  }