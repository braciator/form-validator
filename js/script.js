const username = document.querySelector("#username")
const password = document.querySelector("#password")
const password2 = document.querySelector("#password2")
const email = document.querySelector("#email")
const clearBtn = document.querySelector(".clear")
const sendBtn = document.querySelector(".send")
const popup = document.querySelector(".popup")



clearBtn.addEventListener("click", e => {
	e.preventDefault();
	[username, password, password2, email].forEach(el => {
		el.value = "";
	})
})
