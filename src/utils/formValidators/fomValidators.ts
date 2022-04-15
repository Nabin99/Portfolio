export const nameValidator = (value: string) => {
  const regex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
  if (!regex.test(value)) return false;
  return true;
};

export const emailValidator = (value: string) => {
  const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!regex.test(value)) return false;
  return true;
};

export const messageValidator = (value: string) => {
  if (value.length <= 3) return false;
  return true;
};
