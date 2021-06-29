export const generateArray = (max, length = 3) => {
  const result = [];
  for (let i = 0; i < max; i++) {
    result.push(i.toString().padStart(length, "0"));
  }
  return result;
};

export const isRepeat = (str) => {
  var hash = {};
  for (let i = 0; i < str.length; i++) {
    const item = str.charAt(i);
    if (hash[item]) {
      return true;
    }
    hash[item] = true;
  }
  return false;
};
