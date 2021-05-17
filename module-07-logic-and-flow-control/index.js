function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
    // console.log('Running calculate bill');
    const total = billAmount + billAmount * taxRate + billAmount + taxRate;
    return total;
}

// BEDMAS
const age = 10 * 5 - 2; // 48
const age2 = 10 * (5 - 2); // 30
const total = calculateBill(100) + (calculateBill(20) - calculateBill(15)); // 128 + (25.6 - 19.2)

// FLOW CONTROL
// IF STATEMENTS
if (10 > 2) {
    //console.log('Yo');
} else if (11 > 10) {
    console.log('first else if yes');
} else if (3 > 1) {
    console.log('second else if yes');
}

const alter = 50;
if (alter > 70) {
    console.log('In your seventies');
} else if (alter > 60) {
    console.log('In your sixties');
} else if (alter > 50) {
    console.log('In your fifties');
} else {
    //console.log('Nothing was true');
}

// IF STATEMENTS inside of functions
function slugify1(sentence, lowercase) {
    if (lowercase) {
        return sentence.replace(/\s/g, '-').toLowerCase();
    } else {
        return sentence.replace(/\s/g, '-');
    }
}
//console.log(slugify1('This, too, shall pass.')); // This,-too,-shall-pass.
//console.log(slugify1('This, too, shall pass.', true)); // this,-too,-shall-pass.


function slugify2(sentence, lowercase) {
    if (lowercase) {
        return sentence.replace(/\s/g, '-').toLowerCase();
    } else
        return sentence.replace(/\s/g, '-');
}
//console.log(slugify2('Same, Same, but different')); // Same,-Same,-but-different
//console.log(slugify2('Same, Same, but different', true)); // same,-same,-but-different


function slugify3(sentence, lowercase) {

    let slug = sentence.replace(/\s/g, '-');

    if (lowercase) {
        return slug = slug.toLowerCase();
    } else {
        return slug;
    }
}
//console.log(slugify3('Another One here')); // Another-One-here
//console.log(slugify3('Another One here', true)); // another-one-here

// OPERATORS
// age = 48; // Uncaught TypeError: Assignment to constant variable. at <anonymous>:1:5

// checks for value
age == 48; // true
age == '48'; // true

// checks for type
age === 48; // true
age === '48'; // false
console.log(typeof (48)); // number
console.log(typeof ('48')); // string

// || and &&
const naming = 'wes';
const lastNaming = 'bos';

if (naming === 'wes' || naming === 'scott') {
    console.log('cool name(s)'); // cool name(s)
    console.log(naming); // wes
}

if (naming === 'wes' && lastNaming === 'bos') {
    console.log(naming, lastNaming); // wes bos
}

if (naming === 'scott' || (naming === 'wes' && lastNaming === 'bos')) {
    console.log(naming, lastNaming); // wes bos
}

// true and false with functions
const isAwesomeName = 'awesome'.includes(naming)
if (isAwesomeName) {
    console.log('super awesome'); // super awesome
}

// own function, that returns true or false
function nameIsAwesome(naming) {
    return 'awesome'.includes(naming);
}
if (nameIsAwesome('wes')) {
    console.log('own function wes');
}

// TRUTHY and FALSY
const dog = 'snickers';
if (dog) {
    console.log('you have a dog'); // you have a dog
} else {
    console.log('you don\'t have a dog'); //
}

const dog2 = '';
if (dog2) {
    console.log('you have a dog'); //
} else {
    console.log('you don\'t have a dog'); // you don't have a dog
}

// TRUTHY
/* const score = 1;
if (score) {
    console.log('there is a score already'); // there is a score already
} else {
    console.log('no score yet');
} */

/* const score = -10;
if (score) {
    console.log('there is a score already'); // there is a score already
} else {
    console.log('no score yet');
} */

/* let score1 = [];
if (score1) {
    console.log('there is a score already');
} else {
    console.log('no score yet');
} */

let score1 = {};
if (score1) {
    console.log('there is a score already');
} else {
    console.log('no score yet');
}

// FALSY
/* const score = 0;
if (score) {
    console.log('there is a score already');
} else {
    console.log('no score yet');
} */

/* let score;
if (score) {
    console.log('there is a score already');
} else {
    console.log('no score yet'); // no score yet, `score` is undefined
} */

/* let score1 = 'wes' * 100;
if (score1) {
    console.log('there is a score already');
} else {
    console.log('no score yet'); // no score yet, `score1` is NaN
} */

// GRAB ALL OF THEM, LOOP OVER, TRUTHY OR FALSY
const values = [[], {}, -10, 1, 0, '', 'full string', ' ', undefined, NaN, null];

values.forEach(value => {
    if (value) {
        console.log(value, 'is truthy')
    } else {
        console.log(value, 'is falsy')
    }
});
