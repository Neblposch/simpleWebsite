const button = document.getElementById('generate-button');
const genreDisplay = document.getElementById('genre');

button.addEventListener('click', () => {
    fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
        .then(response => response.json())
        .then(data => {
            const finalGenre = data;
            const genres = ['Rock', 'Jazz', 'Classical', 'Hip-Hop', 'Pop']; // Example genres for shuffling
            let index = 0;
            const shuffleInterval = setInterval(() => {
                genreDisplay.textContent = genres[index];
                index = (index + 1) % genres.length;
            }, 100); // Change genre every 100ms

            setTimeout(() => {
                clearInterval(shuffleInterval);
                genreDisplay.textContent = finalGenre; // Display the final genre
            }, 1000); // Shuffle for 2 seconds
        })
        .catch(error => {
            console.error('Error fetching the genre:', error);
            genreDisplay.textContent = 'Oops! Something went wrong. Try again!';
        });
});