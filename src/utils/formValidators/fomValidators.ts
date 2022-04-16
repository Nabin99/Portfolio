export const nameValidator = (value: string) => {
  const regex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
  if (!regex.test(value.trim())) return false;
  return true;
};
export const lastNameValidator = (value: string) => {
  const regex = /^[a-zA-Z]{2,30}$/;
  if (!regex.test(value.trim())) return false;
  return true;
};

export const emailValidator = (value: string) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(value.trim())) return false;
  return true;
};

export const messageValidator = (value: string) => {
  if (value.trim().length <= 3) return false;
  return true;
};
