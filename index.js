import{S as m,a as b,i as d}from"./assets/vendor-CRCB-GUD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();new m(".galleryEl a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.7,className:"lightbox"});const y=a=>a.map(t=>`<li class="galleryEl">
    <a class="gallery-link" href="${t.largeImageURL}">
        <img
          class="gallery-image"
          src="${t.webformatURL}"
          alt="${t.tags}"
          title="${t.tags}"/>
      </a>
        <ul class="data-list">
          <li class="card-text">
            <h2 class="data-item-name" >likes</h2>
            <p class="data-numbers">${t.likes}</p>
          </li>
          <li class="card-text">
            <h2 class="data-item-name">views</h2>
            <p class="data-numbers">${t.views}</p>
          </li>
          <li class="card-text">
            <h2 class="data-item-name">comments</h2>
            <p class="data-numbers">${t.comments}</p>
          </li>
          <li class="card-text">
            <h2 class="data-item-name">downloads</h2>
            <p class="data-numbers">${t.downloads}</p>
          </li>
        </ul>
      </li>`).join(""),w="https://pixabay.com/",L="46069997-68364f05efefbed8c9e798952";let h=15;async function f(a,t){const r={key:L,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:h,page:t},s=new URLSearchParams(r);try{const e=await b.get(`${w}api/?${s}`);return console.log(e.data),e.data}catch(e){throw console.error(e),e}}const v=document.querySelector("form.js-search-form"),n=document.querySelector(".gallery"),i=document.querySelector("button.btn-loader");let l=1,E=null;const g=new m(".galleryEl a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.7,className:"lightbox"});function p(){document.getElementById("loader").style.display="block"}function u(){document.getElementById("loader").style.display="none"}async function P(a){a.preventDefault(),i.style.display="none",l=1,p();const t=a.currentTarget,{searchValue:{value:r}}=t.elements;if(console.log(r),r===""){d.show({message:"⚠️ Please fill search input",position:"topRight",color:"yellow"}),u();return}n.innerHTML="";try{const s=await f(r);if(!s.hits||s.hits.length===0){d.show({title:"❌",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight",color:"red"});return}return console.log(s),n.insertAdjacentHTML("beforeend",y(s.hits)),g.refresh(),s.totalHits>15&&(i.style.display="block"),r}catch(s){console.log(s)}finally{u()}}async function S(){try{p(),l+=1;const a=await f(E,l);console.log(l);let t=Math.ceil(a.totalHits/h);console.log(t),l>=t&&(i.style.display="none",d.show({title:"❌",message:`"We're sorry, but you've reached the end of search results."`,position:"bottomCenter",color:"blue"})),n.insertAdjacentHTML("beforeend",y(a.hits)),x(),g.refresh()}catch(a){console.log(a)}finally{u()}}function x(){const r=n.lastElementChild.getBoundingClientRect().height*2;window.scrollBy({top:r,left:0,behavior:"smooth"})}i.addEventListener("click",S);v.addEventListener("submit",P);
//# sourceMappingURL=index.js.map
