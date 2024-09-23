import{S as u,i}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();const m="https://pixabay.com/",d="46069997-68364f05efefbed8c9e798952";new u(".galleryEl a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.7,className:"lightbox"});const f=s=>s.map(a=>`<li class="galleryEl">
    <a class="gallery-link" href="${a.largeImageURL}">
        <img
          class="gallery-image"
          src="${a.webformatURL}"
          alt="${a.tags}"
          title="${a.tags}"/>
      </a>
        <ul class="data-list">
          <li class="card-text">
            <h2 class="data-item-name" >likes</h2>
            <p class="data-numbers">${a.likes}</p>
          </li>
          <li class="card-text">
            <h2 class="data-item-name">views</h2>
            <p class="data-numbers">${a.views}</p>
          </li>
          <li class="card-text">
            <h2 class="data-item-name">comments</h2>
            <p class="data-numbers">${a.comments}</p>
          </li>
          <li class="card-text">
            <h2 class="data-item-name">downloads</h2>
            <p class="data-numbers">${a.downloads}</p>
          </li>
        </ul>
      </li>`).join(""),y=document.querySelector("form.js-search-form"),n=document.querySelector(".gallery");y.addEventListener("submit",h);const g=new u(".galleryEl a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.7,className:"lightbox"});function p(){document.getElementById("loader").style.display="block"}function c(){document.getElementById("loader").style.display="none"}function h(s){s.preventDefault(),p();const a=s.currentTarget,{searchValue:{value:r}}=a.elements;if(console.log(r),r===""){i.show({message:"⚠️ Please fill search input",position:"topRight",color:"yellow"}),c();return}const l={key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"},t=new URLSearchParams(l);console.log(t.toString()),n.innerHTML="",fetch(`${m}api/?${t}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(!e.hits||e.hits.length===0){i.show({title:"❌",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight",color:"red"});return}console.log(e),n.insertAdjacentHTML("beforeend",f(e.hits)),g.refresh()}).catch(e=>console.log(e)).finally(()=>{c()})}
//# sourceMappingURL=index.js.map
