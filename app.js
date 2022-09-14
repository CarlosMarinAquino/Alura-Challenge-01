let inputText = document.querySelector(".input-text");
let message = document.querySelector(".message");
const vowelsToEncrypt = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];
const encryptButton = () => {
  let stringTransformed = encrypt(inputText.value);
  message.value = stringTransformed;
  message.style.backgroundImage = "none";
  inputText.value = " ";
};
const encrypt = (stringCatched) => {
  stringCatched = stringCatched.toLowerCase();
  for (let i = 0; i < vowelsToEncrypt.length; i++) {
    if (stringCatched.includes(vowelsToEncrypt[i][0])) {
      stringCatched = stringCatched.replaceAll(
        vowelsToEncrypt[i][0],
        vowelsToEncrypt[i][1]
      );
    }
  }
  return stringCatched;
};
const decryptButton = () => {
  let stringToDecript = dencrypt(message.value);
  message.value = stringToDecript;
  message.style.backgroundImage = "none";
  inputText.value = " ";
};
const dencrypt = (stringCatched) => {
  stringCatched = stringCatched.toLowerCase();
  for (let i = 0; i < vowelsToEncrypt.length; i++) {
    if (stringCatched.includes(vowelsToEncrypt[i][1])) {
      stringCatched = stringCatched.replaceAll(
        vowelsToEncrypt[i][1],
        vowelsToEncrypt[i][0]
      );
    }
  }
  return stringCatched;
};
const copy = () => {
  message.select();
  navigator.clipboard.writeText(message.value);
  message.style.backgroundImage = "initial";
  message.value = "";
  alert("Texto Copiado");
};
