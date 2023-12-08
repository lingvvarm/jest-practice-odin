export default function caesarCipher(str, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return str.split('').map((elem) => alphabet[(alphabet.indexOf(elem.toLowerCase()) + shift) % (alphabet.length)]).join('').toUpperCase();
}
