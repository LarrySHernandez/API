// console.log("Let's get this party started!");


// Function deletes all images from the DOM
document.getElementsByClassName("removeBtn")[0].addEventListener('click', function(){    
    document.getElementsByClassName("giphyImages").innerHTML = "";
});

document.getElementsByClassName("searchBtn")[0].addEventListener('click', async function(e){
    e.preventDefault();
    
    try{
        let res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${document.getElementsByClassName('giphySearch')[0].value}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
        let randomNum = Math.floor(Math.random() * res.data.data.length);
        console.log(res.data.data[randomNum].images.original.url);
        let url = res.data.data[randomNum].images.original.url;
        appendImages(url);
    
        }
        catch(e){
            console.log(e);
        }

});



function appendImages(url){
    let img = document.createElement('img');
    img.src = url;
    img.classList.add('img-Size');
    document.getElementById('giphyImages').append(img);
    giphyImages.append(img);
}