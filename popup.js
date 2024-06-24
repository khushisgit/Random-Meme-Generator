document.getElementById('generate').addEventListener('click', function() {
    fetch('https://meme-api.com/gimme')
        .then(response => response.json())
        .then(data => {
            const memeImage = document.getElementById('meme');
            memeImage.src = data.url;
            memeImage.style.display = 'block'; // Ensure this line is present
        })
        .catch(error => console.error('Error fetching meme:', error));
});
