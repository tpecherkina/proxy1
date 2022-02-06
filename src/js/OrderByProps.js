export default function orderByProps(obj, arrOrder) {
  let arrAlphabetKey = [];
  for (const key in obj) {
    if (!arrOrder.includes(key)) { 
      arrAlphabetKey.push(key);
    }
  }

  arrAlphabetKey = [...arrOrder, ...arrAlphabetKey.sort()];
  const resultArr = [];
  for (const key of arrAlphabetKey) {
    resultArr.push({ key, value: obj[key] });
  }
  return resultArr;
}
