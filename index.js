import{a as p,S as b,i as d}from"./assets/vendor-CRCB-GUD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const m=s=>s.map(t=>`<li class="galleryEl">
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
      </li>`).join(""),w="https://pixabay.com/",L="46069997-68364f05efefbed8c9e798952";let f=15;async function h(s,t){const r={key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:f,page:t},o=new URLSearchParams(r);try{const e=await p.get(`${w}api/?${o}`);return console.log(e.data),e.data}catch(e){throw console.error(e),e}}const P=document.querySelector("form.js-search-form"),n=document.querySelector(".gallery"),i=document.querySelector("button.btn-loader");let l=1,S=null;const y=new b(".galleryEl a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.7,className:"lightbox"});function g(){document.getElementById("loader").style.display="block"}function u(){document.getElementById("loader").style.display="none"}async function v(s){s.preventDefault(),i.style.display="none",l=1,g();const t=s.currentTarget,{searchValue:{value:r}}=t.elements;if(console.log(r),r===""){d.show({message:"⚠️ Please fill search input",position:"topRight",color:"yellow"}),u();return}n.innerHTML="";try{const o=await h(r);if(!o.hits||o.hits.length===0){d.show({title:"❌",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight",color:"red"});return}return console.log(o),n.insertAdjacentHTML("beforeend",m(o.hits)),y.refresh(),o.totalHits>15&&(i.style.display="block"),r}catch(o){console.log(o)}finally{u()}}async function E(){try{g(),l+=1;const s=await h(S,l);console.log(l);let t=Math.ceil(s.totalHits/f);console.log(t),l>=t&&(i.style.display="none",d.show({title:"❌",message:`"We're sorry, but you've reached the end of search results."`,position:"bottomCenter",color:"blue"})),n.insertAdjacentHTML("beforeend",m(s.hits)),$(),y.refresh()}catch(s){console.log(s)}finally{u()}}function $(){const r=n.lastElementChild.getBoundingClientRect().height*2;window.scrollBy({top:r,left:0,behavior:"smooth"})}i.addEventListener("click",E);P.addEventListener("submit",v);
//# sourceMappingURL=index.js.map
