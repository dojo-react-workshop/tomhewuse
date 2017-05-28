
function buildNameList(servRes){
    let htmlDivStr = '';

    for(let i=0; i<servRes.length; i++){
        htmlDivStr += `<div class="name"><p>${servRes[i].name}</p>
								<img class='nameInList' src='../images/trashIcon.png' alt='Delete'>
								</div>`;
    }

    $('#userList').html(htmlDivStr);
}