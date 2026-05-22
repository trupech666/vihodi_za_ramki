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
	
sendBtn.addEventListener("click", function(event) {
		let hasError = false;
        if (nameInput.value === "") {
            alert("Введите имя");
            hasError = true;
        } else if (lastNameInput.value === "") {
            alert("Введите фамилию");
            hasError = true;
        } else if (emailInput.value === "") {
            alert("Введите email");
            hasError = true;
        }
        if (hasError) {
            event.preventDefault();
        }
    });
}
