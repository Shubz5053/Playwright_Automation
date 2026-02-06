// lowercase letters
export function randomLowercase(length = 6) {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  return generate(chars, length);
}

// UPPERCASE letters
export function randomUppercase(length = 6) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return generate(chars, length);
}

// numbers only
export function randomNumberString(length = 6) {
  const chars = '0123456789';
  return generate(chars, length);
}

// lowercase + uppercase
export function randomAlpha(length = 8) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return generate(chars, length);
}

// lowercase + uppercase + numbers
export function randomAlphaNumeric(length = 10) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return generate(chars, length);
}

function generate(chars, length) {
  return Array.from({ length }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join('');
}

// export default { randomAlphaNumeric, randomAlpha, randomNumberString, randomUppercase, randomLowercase }


