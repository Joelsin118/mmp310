const submitButton = document.getElementById('submit');
const storyP = document.getElementById('story');

const nounInput = document.getElementById('noun');
const nounError = document.getElementById('noun-error');

const verbInput = document.getElementById('verb');
const verbError = document.getElementById('verb-error')

const adjectiveInput = document.getElementById('adjective');
const adjectiveError = document.getElementById('adjective-error')

const placeInput = document.getElementById('place');
const placeError = document.getElementById('place-error')

submitButton.onclick = function () {
    const noun = nounInput.value;
    const verb = verbInput.value;
    const adjective = adjectiveInput.value;
    const place = placeInput.value;

    //Check to make sure user input a noun

    if (!nounInput.value) {

        nounError.textContent = "Please enter a noun.";

    } else if (!verbInput.value) {
        verbError.textContent = "Please enter a verb";

    } else if (!adjectiveInput.value) {
        adjectiveError.textContent = "Please enter a adjective"

    } else if (!placeInput.value) {
        placeError.textContent = "Please enter a place."

    } else {
        const story = " This is a " + nounInput.value + " no its not its a door. " + " You are going to be " + verbInput.value + " when your see me. " + " That building is " + adjectiveInput.value + " go tell someone. " + " I would love to be in " + placeInput.value + " when no one is actually there. ";
        storyP.textContent = story;
    }
};








//const story = " This is a " + noun + " no its not its a door. " + " You are going to be " + verb + " when your see me. " + " That building is " + adjective + " go tell someone. " + " I would love to be in " + place + " when no one is actually there. ";
//storyP.textContent = story;
