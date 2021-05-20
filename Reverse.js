const Reverse = (digit) => {
  let binary = +digit.toString(2);
  let revBinary = () => {
    return binary.toFixed(0).split('').reverse().join('') - 0;
  };
  let revDigit = revBinary(binary);
  let reverseBits = parseInt(revDigit, 2);
  return reverseBits;
};
Reverse(2017);

export default Reverse;
