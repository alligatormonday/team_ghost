$(document).ready(function () {

    console.log(md5("want"))

    let publicKey = "b96debf8a06e6f68f22924e2c930b450"
    let privateKey = "274ea5c7e32c0faf4d49d5ffc01a19459d78299a"
    let ts = 1;
    let hash = md5(ts+privateKey+publicKey);
    
    $.ajax({
        url:"https://gateway.marvel.com/v1/public/characters?apikey=b96debf8a06e6f68f22924e2c930b450&ts=1&hash=" + hash,
        method: "GET"
    }).then(function (response){
        console.log(response)
    })



});