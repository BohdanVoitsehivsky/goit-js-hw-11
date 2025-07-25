import axios from "axios"
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

const API_KEY = "51465381-3669693f35fe6c0ef244a196a"
const BASE_URL = 'https://pixabay.com/api/'


export function getImagesByQuery(query) {
    return axios.get('https://pixabay.com/api/', {
        params:{
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        
        }
    })
    .then(res => {
        console.log(res);
        if(res.data.hits.length === 0) {
//             iziToast.show({
//     title: 'Ой, що це коїться???',
//     message: 'Sorry, there are no images matching your search query. Please try again!',
//     color: 'red',  
//     position: 'topRight',

// });
return[];
        }
        return res.data.hits;
        
    })
    .catch(error => {
        console.log(error);
        
    })
}