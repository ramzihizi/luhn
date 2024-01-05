// American express 15 digits, and the rest 16 digits
const isStringLengthValid = (input: string): boolean => {
  const length = input.trim().length;
  return length >= 15 && length <= 16;
};

export default isStringLengthValid;
