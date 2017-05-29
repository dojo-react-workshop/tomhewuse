$(document).ready(function(){


    $('#userList').on('click','p', function(){
        let parentDiv = $(this).parent();
        let name = $(this).text()
        $(parentDiv).html(buildNameUpdate(name));
        let inputTextBox = $(parentDiv).children('form').children('input');
        $(inputTextBox).select();
    });

    $('#userList').on('click', 'img.update',function(){
        let userObject = {key: $(this).parent().parent().attr('key')};
        userObject.name = $('#updateText').val();

        $.ajax({
            url: '/updateName',
            method: 'put',
            data: userObject,
            success: function(responseFromServer) {
                buildNameList(responseFromServer);
            }
        });
    });

    $('#userList').on('click','img.delete', function(){
        let userKey = {key:`${$(this).parent().attr('key')}`};
        $.ajax({
            url: '/removeName',
            method: 'delete',
            data: userKey,
            success: function(responseFromServer) {
                buildNameList(responseFromServer);
            }
        });

    })

    $.ajax({
        url: '/api/userList',
        method: 'get',
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
            method: 'post',
            data: userName,
            success: function(responseFromServer){
                buildNameList(responseFromServer);
            }
        });

        $('#name').val('');
    });

});