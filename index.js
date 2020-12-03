document.addEventListener('DOMContentLoaded', function() {
    fetchImage()
  })

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

  function fetchImage() {
       return fetch(imgUrl)
      .then(resp => resp.json())
      .then(results => {results.message.forEach(image => renderImage(image))
    });
}



  function renderImage(pics) {
    const imageDiv = document.querySelector('#dog-image-container');
    const i = document.createElement('img');
        i.src = pics;
        imageDiv.appendChild(i);
    }
 

 