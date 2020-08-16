function infoDetail() {
    let userName = document.querySelector('#inputId1').value;

    let email = document.querySelector('#inputId2').value;

    let pwd = document.querySelector('#inputId3').value;

    if (userName != "" && email != "" && pwd != "") {
        let cloneNode = document.querySelector('#details').cloneNode(true);

        cloneNode.children[0].innerHTML = "Login Details of User :-";

        cloneNode.children[1].innerHTML = "Username : " + userName;
        cloneNode.children[2].innerHTML = "Email : " + email;
        cloneNode.children[3].innerHTML = "Password : " + pwd;

        let infoContent = document.querySelector('#infoContent');

        infoContent.insertBefore(cloneNode, infoDetail.firstChild);

        document.querySelector('#inputId1').value = "";

        document.querySelector('#inputId2').value = "";

        document.querySelector('#inputId3').value = "";

        //alert("You have logged in succesfully");
    }

    else {
        alert("Something is missing");
    }
}
