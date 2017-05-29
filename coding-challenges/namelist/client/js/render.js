
function buildNameList(servRes){
    let htmlDivStr = '';
    for(let i=0; i<servRes.length; i++){
        htmlDivStr += `<div class="name" key="${servRes[i].key}" name="${servRes[i].name}"><p>${servRes[i].name}</p>
								<img class='nameInList delete' src='../images/trashIcon.png' alt='Delete'>
								</div>`;
    }

    $('#userList').html(htmlDivStr);
}

function buildNameUpdate(defaultText){
    let htmlUpdateForm = '';
    htmlUpdateForm += `<form action="/updateName" method="put">
                            <input id="updateText" type='text' value='${defaultText}'>
                            <img class="update" src="../images/plus.png">
                       </form>`;
    return htmlUpdateForm;

}