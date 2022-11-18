
var method = 'POST'
var url = 'https://dev-test-hn.herokuapp.com/'

function validateEmail(email,nome,cognome) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myform.email.value))
  {
    return true
  }
    alert("You have entered an invalid email address!")
    return false
}


async function sendDataForm(){

    var nome = document.getElementById("nome").value;
    console.log(nome);
    var cognome = document.getElementById("cognome").value;
    console.log(cognome);
    var email = document.getElementById("email").value;
    console.log(email);

    var emailVerified = validateEmail(email);

    let body = {
        name: nome,
        surname: cognome,
        email: emailVerified ? email : ""
    };

    let headers= { 
        'Content-type': 'application/json; charset=UTF-8' 
    }

    let dataJson = `${nome} ${cognome} ${email}`

    let response = await callFetch(url, method, body, headers);


    if (!response.success) alert("richiesta NON invata con successo");
    
    if (response.data.logged == true) alert("BENTORNATO");
    else alert("BENVENUTO");

    console.log(dataJson);

    return dataJson;
}


async function postData(url, obj) { 
    let response;
    try {
        response = await fetch(url, { 
            method: 'POST', 
            body: JSON.stringify(obj.body), 
            headers: obj.headers
          })
    } catch (error) {
        console.log(error);
    }
    return response;

}





async function callFetch(url, method, body, headers){
    let obj = {
        method: method,
        body,
        headers
    }
    let urlPost = url + 'api/m1/auth/getJson'
    let response = await postData(urlPost, obj);
    let jsonParsed = await response.json();
    console.log(jsonParsed);

    return jsonParsed
}
