const wes = document.querySelector('.wes');

// PREVENT DEFAULT

/* wes.addEventListener('click', function (eve) {
  console.log('you clicked the link');

  const shouldChangePage = confirm('This website might be malicious, do you wish to proceed?');

  console.log(shouldChangePage); // returns true or false, but does NOT go to page after OK

  eve.preventDefault();
}); */


// PREVENT DEFAULT - goes to page after confirm

wes.addEventListener('click', function (eve) {

  eve.preventDefault();

  const shouldChangePage = confirm('This website might be malicious, do you wish to proceed?');

  if (shouldChangePage) {
    window.location = eve.currentTarget.href;
  }

  console.log(shouldChangePage); // returns true or false
});


// PREVENT DEFAULT - not messing with window.location, stays on page after confirm (not working??)

/* wes.addEventListener('click', function (eve) {

  const shouldChangePage = confirm('This website might be malicious, do you wish to proceed?');

  if (!shouldChangePage) {
    eve.preventDefault();
  }
}) */


// FORM ELEMENT

/* const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function (eve) {
  console.log(eve); // SubmitEvent
  eve.preventDefault();
}); */

// make sure that terms and conditions are checked, if you need more validation than putting required on the input field

/* const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function (eve) {
  const name = eve.currentTarget.name.value;
  const email = eve.currentTarget.email.value;
  const checkbox = eve.currentTarget.agree.checked;

  console.log(eve.currentTarget.name.value);
  console.log(eve.currentTarget.email.value);
  console.log(eve.currentTarget.agree.checked);

  if (name.includes('Chad')) {
    alert('Sorry bro');
    eve.preventDefault();
  }
}); */


// `keyup`, `keydown`, `focus`, `blur`

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


// ACCESSIBILITY PITFALLS

// not clickable with only keyboard
/* const imgAcc = document.querySelector('.photo');

imgAcc.addEventListener('click', function () {
  console.log('you clicked the image');
}) */

// clickable due to tabindex
/* const imgAccTab = document.querySelector('.photo-clickable');

function handlePhotoClick(eve) {
  if (eve.type === 'click' || eve.key === 'Enter') {
    console.log('clicked the image via keyboard due to tabindex');
  }
}

imgAccTab.addEventListener('click', handlePhotoClick);
// keyup is needed as otherwise a click won't be triggered
imgAccTab.addEventListener('keyup', handlePhotoClick); */

// clickable with keyboard due to role button
const imgAccButton = document.querySelector('.photo-button');

function handlePhotoClick(eve) {
  if (eve.type === 'click' || eve.key === 'Enter') {
    console.log('you clicked the image type button');
  }
}

imgAccButton.addEventListener('click', handlePhotoClick);
// keyup is needed as otherwise a click won't be triggered
imgAccButton.addEventListener('keyup', handlePhotoClick);
