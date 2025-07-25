import{a as m,i as c,S as h}from"./assets/vendor-w2JwYdZo.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f="51465381-3669693f35fe6c0ef244a196a";function p(n){return m.get("https://pixabay.com/api/",{params:{key:f,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>(console.log(t),t.data.hits.length===0?(c.show({title:"Ой, що це коїться???",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),[]):t.data.hits)).catch(t=>{console.log(t)})}const y=new h(".gallery a",{captions:!0,captionDelay:250}),l=document.querySelector(".gallery");function g(n){const t=n.map(({webformatURL:o,largeImageURL:s,tags:e,likes:r,views:i,comments:d,downloads:u})=>`
                <div class="cards">
                <a href="${s}"> <img src="${o}" alt="${e}" class="card-image"/></a>
                <div class="commments">
                <div class="card-comment">
                <h2>Likes</h2>
                <p>${r}</p>
                </div>

                <div class="card-comment">
                <h2>Views</h2>
                <p>${i}</p>
                </div>

                

                <div class="card-comment">
                <h2>Comments</h2>
                <p>${d}</p>
                </div>

                <div class="card-comment">
                <h2>Downloads</h2>
                <p>${u}</p>
                
                </div>
                </div>
                </div>
                `).join("");l.insertAdjacentHTML("beforeend",t),y.refresh()}function v(){l.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("hidden")}function S(){document.querySelector(".loader").classList.add("hidden")}const q=document.querySelector(".form"),b=document.querySelector('input[name="search-text"]');document.querySelector('button[type="submit"]');const a=document.querySelector(".gallery");q.addEventListener("submit",$);function $(n){n.preventDefault();const t=b.value.trim();if(t===""){c.show({title:"Ой, що це коїться???",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}v(),L(),p(t).then(o=>{o.length>0?g(o):a.innerHTML=`Зображень за запитом ${t} не знайдено`}).catch(o=>{console.log(o),a.innerHTML="<p>Сталася помилка при отриманні зображень.</p>"}).finally(()=>{S()})}
//# sourceMappingURL=index.js.map
