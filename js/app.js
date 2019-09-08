document.addEventListener('DOMContentLoaded', () => {
    
    const newItemForm = document.querySelector('#new-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

    const songListEffect = document.querySelector('#song-list');
    songListEffect.addEventListener("mouseover", function(event) {
        event.target.style.color = "red";
        setTimeout(function() {
            event.target.style.color = "";
        }, 500);
    }, false);

})

    const handleNewItemFormSubmit = function (event) {
        event.preventDefault();

        const songListItem = createSongListItem(event.target);
        const songList = document.querySelector('#song-list');
        songList.appendChild(songListItem);

        event.target.reset();
    }

    const createSongListItem = function (form) {
        const songListItem = document.createElement('li');
        songListItem.classList.add('song-list-item');
    
        const song = document.createElement('h2');
        song.textContent = form.song.value;
        songListItem.appendChild(song);

        const artist = document.createElement('h3');
        artist.textContent = form.artist.value;
        songListItem.appendChild(artist);
        
        const genre = document.createElement('h4');
        genre.textContent = form.genre.value;
        songListItem.appendChild(genre);

        const button = document.createElement('h4');
        button.textContent = form.button.value;
        songListItem.appendChild(button);
        
        return songListItem;
    }

    const handleDeleteAllClick = function (event) {
        const songList = document.querySelector('#song-list');
        songList.innerHTML = '';
    }