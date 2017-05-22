'use strict';

(function() {
    const customName = document.getElementById('customname')
    const randomize = document.querySelector('.randomize');
    const story = document.querySelector('.story');
    const characters = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
    const locations = ['Jamaica', 'Saudi Arabia', 'Israel', 'Vatican', 'Sicily'];
    const weirdEvents = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

    randomize.addEventListener('click', handleButtonClick);

    function handleButtonClick() {
        let nameValue = customName.value;
        if (nameValue === '') {
            nameValue = 'Bob';
        }
        let storyText = buildStory(nameValue);

        story.textContent = storyText;
        story.style.visibility = 'visible';
    }

    function grabRandomArrayItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function getMeasurements() {
        var measurements = {};
        measurements.weight = 300;
        measurements.temp = Math.floor(Math.random() * 94);
        measurements.tempText = "farenheit";
        measurements.weightText = "pounds";

        if (document.getElementById("uk").checked) {
            measurements.weight = Math.round(measurements.weight / 2);
            measurements.weightText = "kgs";
            measurements.temp = ((measurements.temp - 32) * (5 / 9));
            measurements.tempText = "centigrade"
        }
        return measurements;
    }

    function buildStory(customName = "Bob") {
        var character = grabRandomArrayItem(characters);
        var location = grabRandomArrayItem(locations);
        var weirdEvent = grabRandomArrayItem(weirdEvents);
        var measurements = getMeasurements();
        return `It was ${measurements.temp} ${measurements.tempText} outside, so ${character} went for a walk. 
                            When they got to ${location}, they stared in horror for a few moments, then ${weirdEvent}. 
                            ${customName} saw the whole thing, but he was not surprised — ${character} weighs ${measurements.weight} ${measurements.weightText}, 
                            and it was a hot day.`;
    };
})();

const state = {
    customName,
    isUk
}
