export const convertNumberToString = (item: number) =>
  String(item).replace(/\./g, "");
export const convertStringToNumber = (item: string) => Number(item);
export const convertToDecimal = (total: number, sum: number) =>
  (total + sum).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export const getTotalOfBackers = (stored: number[], backers: number) => {
  let numberOfPledges = stored?.length;
  let tempBackers: string | number = convertNumberToString(backers);
  tempBackers = convertStringToNumber(tempBackers);
  tempBackers = convertToDecimal(tempBackers, numberOfPledges);
  return tempBackers;
};

export const sumOfPledges = (arr: number[]) => {
  if (arr.length < 1) return 0;
  return arr.reduce(function (a: number, b: number) {
    return a + b;
  });
};

export const getTotalOfBacked = (arr: number[], current: number) => {
  let sum = sumOfPledges(arr);
  let tempTotal: string | number = convertNumberToString(current);
  tempTotal = convertStringToNumber(tempTotal);
  tempTotal = convertToDecimal(tempTotal, sum);

  return tempTotal;
};

export const getStoredItem = (name: string) => {
  return JSON.parse(localStorage.getItem(name) || "[]");
};

export const setStoredItem = (name: string, arr: number[]) => {
  return localStorage.setItem(name, JSON.stringify(arr));
};

export const replaceDotByComma = (item: any) => item.replace(/\./g, ",");
