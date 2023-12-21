// Visitor Name Prompt
name = prompt("Welcome to SMAN 1 Antah Berantah website, What is your name?", "Anonymous")
document.getElementById("visitor-name").innerHTML = name

// Automatic Slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex +=n);
}

function showDivs(n) {
	var x = document.getElementsByClassName("img-slideshow");
	if (n > x.length) {
		slideIndex = 1;
	};
	if (n < 1) {
		slideIndex = x.length
	};
	for (let i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex-1].style.display = "block";
}

setInterval(function () {
  plusDivs(1)
}, 3000)

// Email Validation
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Function to handle keyup event on the email input
function handleEmailValidation() {
  const emailInput = document.getElementById('email');
  const errorEmail = document.getElementById('error-email');
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    errorEmail.textContent = 'Email is required';
  } else if (!validateEmail(emailValue)) {
    errorEmail.textContent = 'Invalid email format';
  } else {
    errorEmail.textContent = ''; // Clear error message if email is valid
  }
}

// Attach the event listener to the email input
const emailInput = document.getElementById('email');
emailInput.addEventListener('keyup', handleEmailValidation);

function validateForm(event) {
	const formattedTime = getCurrentTime();
	const fullName = document.forms["message-form"]["full-name"].value;
	const email = document.forms["message-form"]["email"].value;
	const phoneNumber = document.forms["message-form"]["phone-number"].value;
	const birthDate = formatDateToIndonesian(document.forms["message-form"]["birth-date"].value.trim());
	const gender = document.forms["message-form"]["gender"].value;
	const messages = document.forms["message-form"]["messages"].value;

	if (fullName === "") {
		document.getElementById("error-full-name").innerHTML = 'Name is required'
		return false
	} else {
		document.getElementById("error-full-name").innerHTML = ''
	}
	if (email === "") {
		document.getElementById("error-email").innerHTML = 'Email is required'
		return false
	} else {
		document.getElementById("error-email").innerHTML = ''
	}
	if (phoneNumber === "") {
		document.getElementById("error-phone-number").innerHTML = 'Phone Number is required'
		return false
	} else {
		document.getElementById("error-phone-number").innerHTML = ''
	}
	if (birthDate === "") {
		document.getElementById("error-birth-date").innerHTML = 'Birth Date is required'
		return false
	} else {
		document.getElementById("error-birth-date").innerHTML = ''
	}
	if (gender === "") {
		document.getElementById("error-gender").innerHTML = 'Gender is required'
		return false
	} else {
		document.getElementById("error-gender").innerHTML = ''
	}
	if (messages === "") {
		document.getElementById("error-messages").innerHTML = 'Messages is required'
		return false
	} else {
		document.getElementById("error-messages").innerHTML = ''
	}

	setSenderUI(formattedTime, fullName, email, phoneNumber, birthDate, gender, messages)
	return false
}

function setSenderUI(formattedTime, fullName, email, phoneNumber, birthDate, gender, messages) {
	document.getElementById("current-time").innerHTML = formattedTime
	document.getElementById("sender-full-name").innerHTML = fullName
	document.getElementById("sender-email").innerHTML = email
	document.getElementById("sender-phone-number").innerHTML = phoneNumber
	document.getElementById("sender-birth-date").innerHTML = birthDate
	document.getElementById("sender-gender").innerHTML = gender
	document.getElementById("sender-messages").innerHTML = messages
}

function getCurrentTime() {
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
    timeZone: 'GMT'
  };

  const currentTime = new Date().toLocaleString('en-US', options);
  return currentTime;
}

function formatDateToIndonesian(dateString) {
  const monthsIndonesian = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const formattedDate = `${day} ${monthsIndonesian[monthIndex]} ${year}`;
  return formattedDate;
}