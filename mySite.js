const sendBtn = document.getElementById("send");
const clearBtn = document.getElementById("clear");
const nameInput = document.getElementById("FirstName");
const lastNameInput = document.getElementById("LastName");
const emailInput = document.getElementById("email");
const commInput = document.getElementById("comm");

if (clearBtn) {
    clearBtn.addEventListener("click", function() {
        nameInput.value = "";
        lastNameInput.value = "";
        emailInput.value = "";
        commInput.value = "";
    });
}
	
sendBtn.onclick = function() {
  if (nameInput.value === "") {
    alert("Введите имя");
  } else if (lastNameInput.value === "") {
    alert("Введите фамилию");
  } else if (emailInput.value === "") {
    alert("Введите email");
  } else {
    alert("Спасибо, " + nameInput.value + "! Сообщение отправлено.");
    nameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    commInput.value = "";
  }
};
