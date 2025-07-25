import {getImagesByQuery} from './js/pixabay-api.js';
import {createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");
const input = document.querySelector('input[name="search-text"]');
const button = document.querySelector('button[type="submit"]');
const gallery = document.querySelector(".gallery");

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();
    const query = input.value.trim();
    if(query === "") {
        iziToast.show({
        title: 'Ой, що це коїться???',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        color: 'red',
        position: 'topRight',
    });
        return;
    } 
    clearGallery();
    showLoader();

        getImagesByQuery(query)
        .then(images => {
            if(images.length > 0) {
                createGallery(images)
                
            } else {
                gallery.innerHTML = `Зображень за запитом ${query} не знайдено`;
            }
            
            
        })
        .catch(error => {
            console.log(error);
             gallery.innerHTML = `<p>Сталася помилка при отриманні зображень.</p>`;
        })
        .finally(() => {
            hideLoader();
        })
        
    }

