import{a as b,S as w,i as u}from"./assets/vendor-CRCB-GUD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const f=r=>r.map(t=>`<li class="galleryEl">
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
      </li>`).join(""),L="https://pixabay.com/",P="46069997-68364f05efefbed8c9e798952";let h=15;async function y(r,t){const s={key:P,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:h,page:t},l=new URLSearchParams(s);try{return(await b.get(`${L}api/?${l}`)).data}catch(e){throw console.error(e),e}}const S=document.querySelector("form.js-search-form"),i=document.querySelector(".gallery"),c=document.querySelector("button.btn-loader");let n=1,o=null;const p=new w(".galleryEl a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.7,className:"lightbox"});function g(){document.getElementById("loader").style.display="block"}function m(){document.getElementById("loader").style.display="none"}async function v(r){if(r.preventDefault(),c.style.display="none",n=1,g(),o=r.currentTarget.elements.searchValue.value.trim(),o===""){u.show({message:"⚠️ Please fill search input",position:"topRight",color:"yellow"}),m();return}i.innerHTML="";try{const s=await y(o);if(!s.hits||s.hits.length===0){u.show({title:"❌",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight",color:"red"});return}return i.insertAdjacentHTML("beforeend",f(s.hits)),p.refresh(),s.totalHits>15&&(c.style.display="block"),o}catch(s){console.log(s)}finally{m()}}async function E(){try{g(),n+=1;const r=await y(o,n);let t=Math.ceil(r.totalHits/h);n>=t&&(c.style.display="none",u.show({title:"❌",message:`"We're sorry, but you've reached the end of search results."`,position:"bottomCenter",color:"blue"})),i.insertAdjacentHTML("beforeend",f(r.hits)),$(),p.refresh()}catch(r){console.log(r)}finally{m()}}function $(){const s=i.lastElementChild.getBoundingClientRect().height*2;window.scrollBy({top:s,left:0,behavior:"smooth"})}c.addEventListener("click",E);S.addEventListener("submit",v);
//# sourceMappingURL=index.js.map
