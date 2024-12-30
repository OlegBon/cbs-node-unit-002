function convertString(value) {
  return Buffer.from(value).toString("base64");
}

export default convertString;
