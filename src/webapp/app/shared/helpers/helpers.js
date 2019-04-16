export const generateDictFromArr = arr => {
  const dict = {};
  for (let i in arr) {
    dict[parseInt(i) + 1] = arr[i];
  }
  return dict;
};

export const isNullOrEmpty = val => {
  return val == null || val == "" || Number(val) === 0 ? true : false;
};
