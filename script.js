function generateDogs(){
    //let breed = $('.breed-input').val();
    let url = 'https://dog.ceo/api/breed/' + $('.breed-input').val() + '/images/random';
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(responseJson => displayImages(responseJson))
    .catch(error=> {
        alert('Breed Not Found');
    });
}


function displayImages(responseJson) {
    console.log(responseJson);
    //let num = $('.numberInput').val();
if($('.breed-input').val()){
    $('.results-img').replaceWith(
        `<img src='${responseJson.message}' class = 'results-img'>`
    )
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