var contactme_form = document.querySelector("#contactme-form");
var contactme_fullname_input = document.querySelector("#contactme-fullname-input");
var contactme_email_input = document.querySelector("#contactme-email-input");
var contactme_phone_number_input = document.querySelector("#contactme-phone-number-input");
var contact_description = document.querySelector("#contactme-description-input");

var contactme_email_check = document.querySelector(".contactme-email-check");

var send1 = document.querySelector("#send1");

const pettern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

contactme_email_input.onkeyup = () => {
	email_check(contactme_email_input.value, contactme_email_check, send1);
}

send1.onclick = () => {
	if (contactme_fullname_input.value != "" && contactme_email_input.value.match(pettern) && contactme_phone_number_input.value != "" && contact_description.value != "") {
		contactme_email_check.innerHTML = "";
		return true;
	}
	else {
		return false;
	}
}

function email_check(email, email_check, btn) {
    if (email == ""){
        email_check.innerHTML = "E-Mail address is required";
        email_check.style.color = "red";
        btn.disabled = true;
    }
    else {
        if (email.match(pettern)){
            email_check.innerHTML = "Valid E-Mail address";
            email_check.style.color = "green";
            btn.disabled = false;
        }
        else {
            email_check.innerHTML = "Invaild E-Mail address";
            email_check.style.color = "red";
            btn.disabled = true;
        }
    }
}