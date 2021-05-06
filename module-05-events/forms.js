const wes = document.querySelector('.wes');

/* prevent default */
/* wes.addEventListener('click', function (eve) {
    console.log('you clicked the link');
    const shouldChangePage = confirm('This website might be malicious, do you wish to proceed?');
    console.log(shouldChangePage);
    eve.preventDefault();
}); */

/* prevent default, goes to page after confirm */
wes.addEventListener('click', function (eve) {
    eve.preventDefault();
    const shouldChangePage = confirm('This website might be malicious, do you wish to proceed?');

    if (shouldChangePage) {
        window.location = eve.currentTarget.href;
    }
    console.log(shouldChangePage);
});

/* prevent default, not messing with window.location, stays on page after confirm */
/* wes.addEventListener('click', function (eve) {
    const shouldChangePage = confirm('This website might be malicious, do you wish to proceed?');
    if (!shouldChangePage) {
        eve.preventDefault();
    }
    console.log(shouldChangePage);
}) */


/* form element */
/* const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function (eve) {
    console.log(eve);
    eve.preventDefault();
}); */

/* make sure that terms and conditions are checked, if you need more validation than putting required on the input field */
/* const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function (eve) {
    const name = eve.currentTarget.name.value;
    const email = eve.currentTarget.email.value;
    const checkbox = eve.currentTarget.agree.checked;
    if (name.includes('Chad')) {
        alert('Sorry bro');
        eve.preventDefault();
    }
    console.dir(email);
    console.dir(checkbox);
}); */


/* `keyup`, `keydown`, `focus`, `blur` */
const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function (eve) {
    const name = eve.currentTarget.name.value;
    if (name.includes('Chad')) {
        alert('Sorry bro');
        eve.preventDefault();
    }
});

function logEvent(eve) {
    console.log(eve.type);
    console.log(eve.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

/* accessibility pitfalls */
const imgAcc = document.querySelector('.photo');

function handlePhotoClick(eve) {
    if (eve.type === 'click' || eve.key === 'Enter') {
        console.log('you clicked on the photo');
    }
}

imgAcc.addEventListener('click', handlePhotoClick);
imgAcc.addEventListener('keyup', handlePhotoClick);
