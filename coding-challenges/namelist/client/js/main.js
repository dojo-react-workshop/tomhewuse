$(document).ready(function(){
    $('#userList').on('click','p', function(){
        console.log(`this - ${this}`);
        let parent = $(this).parent();
        console.log(`parent: ${parent}`);
        $(parent).html(`<input type=text value='${$(this).text()}'>
                        <img src="../images/plus.png">`);
        let inputField = $(parent).children('input');
        $(inputField).select();

    })
    $('#userList').on('click','img', function(){
        let userName = {name:`${$(this).siblings('p').text()}`};
        $.ajax({
            url: '/removeName',
            method: 'POST',
            data: userName,
            success: function(responseFromServer) {
                buildNameList(responseFromServer);
            }
        });

    })

    $.ajax({
        url: '/api/userList',
        method: 'GET',
        success: function(responseFromServer){
            console.log(responseFromServer);
            buildNameList(responseFromServer);
        }
    });

    $('#userForm').submit(function(event){
        event.preventDefault();

        const userName = { name: $('#name').val() };

        $.ajax({
            url: '/postName',
            method: 'POST',
            data: userName,
            success: function(responseFromServer){
                buildNameList(responseFromServer);
            }
        });

        $('#name').val('');
    });

});