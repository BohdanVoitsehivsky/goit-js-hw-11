import{a as u,i as m,S as f}from"./assets/vendor-w2JwYdZo.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="51465381-3669693f35fe6c0ef244a196a";function h(n){return u.get("https://pixabay.com/api/",{params:{key:p,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>(console.log(t),t.data.hits.length===0?(m.show({title:"Ой, що це коїться???",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),[]):t.data.hits)).catch(t=>{console.log(t)})}const y=new f(".gallery a",{captions:!0,captionDelay:250}),a=document.querySelector(".gallery");function g(n){const t=n.map(({webformatURL:o,largeImageURL:c,tags:e,likes:r,views:i,comments:l,downloads:d})=>`
                <div class="cards">
                <a href="${c}"> <img src="${o}" alt="${e}" class="card-image"/></a>
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
                <p>${l}</p>
                </div>

                <div class="card-comment">
                <h2>Downloads</h2>
                <p>${d}</p>
                
                </div>
                </div>
                </div>
                `).join("");a.insertAdjacentHTML("beforeend",t),y.refresh()}function v(){a.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("hidden")}function S(){document.querySelector(".loader").classList.add("hidden")}const b=document.querySelector(".form"),q=document.querySelector('input[name="search-text"]');document.querySelector('button[type="submit"]');const s=document.querySelector(".gallery");b.addEventListener("submit",$);function $(n){n.preventDefault();const t=q.value.trim();if(t===""){alert("Введіть Ваш запит");return}v(),L(),h(t).then(o=>{o.length>0?g(o):s.innerHTML=`Зображень за запитом ${t} не знайдено`}).catch(o=>{console.log(o),s.innerHTML="<p>Сталася помилка при отриманні зображень.</p>"}).finally(()=>{S()})}
//# sourceMappingURL=index.js.map
