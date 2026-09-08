const jokeText = document.getElementById('joke-text');
const getJokeBtn = document.getElementById('get-joke-btn');

// Using JokeAPI - free API for jokes
const JOKE_API_URL = 'https://official-joke-api.appspot.com/random_joke';

getJokeBtn.addEventListener('click', fetchJoke);

async function fetchJoke() {
    jokeText.textContent = 'Loading...';
    getJokeBtn.disabled = true;

    try {
        const response = await fetch(JOKE_API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch joke');
        }
        const data = await response.json();
        displayJoke(data);
    } catch (error) {
        jokeText.textContent = 'Oops! Failed to load joke. Please try again!';
        console.error('Error:', error);
    } finally {
        getJokeBtn.disabled = false;
    }
}

function displayJoke(joke) {
    jokeText.textContent = `${joke.setup}\n\n${joke.punchline}`;
}

// Load a joke when page loads
window.addEventListener('load', fetchJoke);