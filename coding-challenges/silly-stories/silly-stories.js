var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
var x = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
var y = ['the soup kitchen', 'Disneyland', 'the White House'];
var z = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


function randomValueFromArray(array){
    return array[Math.floor(Math.random()*array.length)];
}

randomize.addEventListener('click', result);

function result() {

    if(customName.value != '') {
        var name = customName.value;

    }

    if(document.getElementById("uk").checked) {
        var weight = Math.round(300);
        var temperature =  Math.round(94);
        var tempText = "celsius";
    } else{
        weight = 300;
        temperature=94;
        tempText = "fanrenheit"
    }
    var who = randomValueFromArray(x);
    var where = randomValueFromArray(y);
    var event = randomValueFromArray(z);

    var story = `It was ${temperature} ${tempText} outside, so ${who} went for a walk. 
                When they got to ${where}, they stared in horror for a few moments, then ${event}. 
                Bob saw the whole thing, but he was not surprised — ${who} weighs 300 pounds, and it was a hot day.`
    story.textContent = story;
    story.style.visibility = 'visible';
}