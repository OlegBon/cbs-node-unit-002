const buff_1 = Buffer.from("Hello");
const buff_2 = Buffer.from(" world!");

const bufferConc = (buff_1, buff_2) => {
  const newBuff = Buffer.concat([buff_1, buff_2]);
  return newBuff;
};

console.log("Buffer 1: ", buff_1.toString());
console.log("Buffer 2: ", buff_2.toString());
console.log("Concatenated buffers:", bufferConc(buff_1, buff_2).toString());
