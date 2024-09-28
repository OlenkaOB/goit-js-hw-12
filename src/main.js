import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createGalleryMarkup } from './js/render-functions';
import { perPage, fetchCard } from './js/pixabay-api';

const form = document.querySelector('form.js-search-form');
const gallery = document.querySelector('.gallery');
const btnLoader = document.querySelector('button.btn-loader');

let currentPage = 1;
let query = null;

const showBox = new SimpleLightbox('.galleryEl a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.7,
  className: 'lightbox',
});

function showLoader() {
  document.getElementById('loader').style.display = 'block';
}

function hideLoader() {
  document.getElementById('loader').style.display = 'none';
}

async function onButtonSubmit(event) {
  event.preventDefault();
  btnLoader.style.display = 'none';
  currentPage = 1;
  showLoader();

  const forma = event.currentTarget;

  query = forma.elements.searchValue.value.trim();

  if (query === '') {
    iziToast.show({
      message: `⚠️ Please fill search input`,
      position: 'topRight',
      color: 'yellow',
    });
    hideLoader();
    return;
  }
  gallery.innerHTML = '';

  try {
    const photos = await fetchCard(query);
    if (!photos.hits || photos.hits.length === 0) {
      iziToast.show({
        title: '❌',
        message: `"Sorry, there are no images matching your search query. Please try again!"`,
        position: 'topRight',
        color: 'red',
      });
      return;
    }
    console.log(photos);
    gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(photos.hits));
    showBox.refresh();
    if (photos.totalHits > 15) {
      btnLoader.style.display = 'block';
    }
    return query;
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}

async function btnLoaderClick() {
  try {
    showLoader();
    currentPage += 1;
    const photos = await fetchCard(query, currentPage);

    let totalPages = Math.ceil(photos.totalHits / perPage);

    if (currentPage >= totalPages) {
      btnLoader.style.display = 'none';
      iziToast.show({
        title: '❌',
        message: `"We're sorry, but you've reached the end of search results."`,
        position: 'bottomCenter',
        color: 'blue',
      });
    }
    gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(photos.hits));
    handleScrollView();
    showBox.refresh();
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}

function handleScrollView() {
  const lastArticle = gallery.lastElementChild;
  const articleHeight = lastArticle.getBoundingClientRect().height;
  const scrollHeight = articleHeight * 2;

  window.scrollBy({
    top: scrollHeight,
    left: 0,
    behavior: 'smooth',
  });
}

btnLoader.addEventListener('click', btnLoaderClick);
form.addEventListener('submit', onButtonSubmit);
