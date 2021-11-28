let select = document.querySelector("select"), // Select
  textArea = document.querySelector("textarea"), // TexArea
  showResultArea = document.querySelector("#showArea"); // Result Area

textArea.addEventListener("input", () => {
  encodeAndDecode();
});

select.addEventListener("change", () => {
  encodeAndDecode();
});

function encodeAndDecode() {
  /*To Cheack If The Select Value Equa To decode
    decode The Text
  Else It Is Equa To encode 
    Encode The Text
  Else 
    Appear Wrining Massage*/
  if (select.value == "decode")
    showResultArea.value = window.btoa(textArea.value);
  else if (select.value == "encode")
    showResultArea.value = window.atob(textArea.value);
  else showResultArea.value = "Please Choose a Currecr Choosen";
}
