/**
 * Created by Hew4803 on 5/25/17.
 */
'use strict';
const http = axios;
function renderCard(data){
    let infoHtml = `<div id="surveyForm">
                        <div class="input">
                            <label for="name">Your Name:</label>
                            <p>${data.name}</p>
                        </div>
                        <div class="input">
                            <label for="location">Dojo Location:</label>
                            <p>${data.location}</p>
                        </div>
                        <div class="input">
                              <label for="language">Favorite Language: </label>
                              <p>${data.language}</p>
                        </div>
                        <div id="comments">
                              <label for="comments">Comments</label>
                              <p>${data.comments}</p>
                        </div>
                        <button id="goBack">Go Back</button>
                    </div>`;
    $('#container').html(infoHtml);
    $('#goBack').on('click', function(event){
        renderInputForm();
    });
}

function renderInputForm(){
    let inputHtml = `<form id="surveyForm" action="/result" method="post">
                        <div class="input">
                            <label for="name">Your Name:</label>
                            <input type="text" name="name">
                        </div>
                        <div class="input">
                            <label for="location">Dojo Location:</label>
                            <select name="location">
                                <option value="Milwaukee">Milwaukee</option>
                                <option value="Phoenix">Phoenix</option>
                                <option value="New York">New York</option>
                                <option value="Franklin">Franklin</option>
                            </select>
                        </div>
                        <div class="input">
                            <label for="language">Favorite Language: </label>
                            <select name="language">
                                <option value="Javascript">Javascript</option>
                                <option value="C++">C++</option>
                                <option value="Java">Java</option>
                                <option value="PL1">PL1</option>
                            </select>
                        </div>
                        <div id="comments">
                            <label for="comments">Comments</label>
                            <input id="commentBox" type="text" name="comments">
                        </div>
                        <input id="submit" type="submit" value="Submit">
                    </form>`;
    $('#container').html(inputHtml);
}

$(document).ready(function() {
    renderInputForm();

    $('#container').on('submit', 'form', function (event) {
        event.preventDefault();
        //ajax call to send data
        let formData = $(this).serialize();
        console.log(formData);


        var promise = http({
            url: '/result',
            method: 'POST',
            data: formData
        });
        promise.then(function(response){
            console.log(response);
            renderCard(response);
        });

        // $.ajax({
        //     url: '/result',
        //     method: 'POST',
        //     data: formData,
        //     success: function(data){
        //         //success receives json back with data
        //         console.log(data);
        //         renderCard(data);
        //     }
        // });
        //function builds card with data received
    })
});