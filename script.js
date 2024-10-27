const genBtn = document.querySelector(".gen-btn");
const qrCodeBox = document.querySelector(".qr-code");
const input = document.querySelector("input");
const image = document.querySelector(".qr");

genBtn.addEventListener("click", () => {
  let inputValue = input.value;
  if (!inputValue) {
    return alert("Please enter a text or URL!");
  }
  genBtn.innerHTML = 'Converting <i class="fa-solid fa-sync fa-spin"></i>';
  image.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${inputValue}`;
  image.addEventListener("load", () => {
    qrCodeBox.classList.remove("hidden");
    genBtn.innerText = "Generate";
  });
  input.addEventListener("keyup", () => {
    if (!input.value) {
      qrCodeBox.classList.add("hidden");
      
    }
  });
});