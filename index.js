import{a as b,S as w,i as u}from"./assets/vendor-CRCB-GUD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const f=s=>s.map(t=>`<li class="galleryEl">
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
      </li>`).join(""),L="https://pixabay.com/",P="46069997-68364f05efefbed8c9e798952";let h=15;async function y(s,t){const a={key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:h,page:t},n=new URLSearchParams(a);try{const e=await b.get(`${L}api/?${n}`);return console.log(e.data),e.data}catch(e){throw console.error(e),e}}const S=document.querySelector("form.js-search-form"),i=document.querySelector(".gallery"),c=document.querySelector("button.btn-loader");let o=1,l=null;const g=new w(".galleryEl a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.7,className:"lightbox"});function p(){document.getElementById("loader").style.display="block"}function m(){document.getElementById("loader").style.display="none"}async function v(s){if(s.preventDefault(),c.style.display="none",o=1,p(),l=s.currentTarget.elements.searchValue.value.trim(),l===""){u.show({message:"⚠️ Please fill search input",position:"topRight",color:"yellow"}),m();return}i.innerHTML="";try{const a=await y(l);if(!a.hits||a.hits.length===0){u.show({title:"❌",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight",color:"red"});return}return console.log(a),i.insertAdjacentHTML("beforeend",f(a.hits)),g.refresh(),a.totalHits>15&&(c.style.display="block"),l}catch(a){console.log(a)}finally{m()}}async function E(){try{p(),o+=1;const s=await y(l,o);console.log(o);let t=Math.ceil(s.totalHits/h);console.log(t),o>=t&&(c.style.display="none",u.show({title:"❌",message:`"We're sorry, but you've reached the end of search results."`,position:"bottomCenter",color:"blue"})),i.insertAdjacentHTML("beforeend",f(s.hits)),$(),g.refresh()}catch(s){console.log(s)}finally{m()}}function $(){const a=i.lastElementChild.getBoundingClientRect().height*2;window.scrollBy({top:a,left:0,behavior:"smooth"})}c.addEventListener("click",E);S.addEventListener("submit",v);
//# sourceMappingURL=index.js.map
