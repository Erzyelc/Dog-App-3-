function generateDogs(){
    let url = 'https://dog.ceo/api/breeds/image/random/' + $('.numberInput').val();
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(responseJson => displayImages(responseJson))
    .catch(error => console.log(error)); //alert('uh-oh, that was NOT supposed to happen'));
}


function displayImages(responseJson) {
    console.log(responseJson);
    //let num = $('.numberInput').val();
if($('.numberInput').val() == 1){
    $('.results-img').replaceWith(
        `<img src='${responseJson.message}' class = 'results-img'>`
    )
} else{
    let imageList = '';
    //let response = jquery.parseJSON(responseJson);
    let message = responseJson.message;
    for(let i = 0;  i < message.length; i++){
        $('.results-img').append(`<img src='${message[i]}' class = 'results-img'>`);
    }
}




    $('.images').removeClass('hidden');
}



function formInput(){
    $('form').submit(event => {
        event.preventDefault();
        generateDogs();
    });
}

$(function() {
    console.log('The app has successfully loaded!');
    formInput();
});