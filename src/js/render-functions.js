import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const showBox = new SimpleLightbox('.galleryEl a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.7,
  className: 'lightbox',
});

export const createGalleryMarkup = photos =>
  photos
    .map(
      photo =>
        `<li class="galleryEl">
    <a class="gallery-link" href="${photo.largeImageURL}">
        <img
          class="gallery-image"
          src="${photo.webformatURL}"
          alt="${photo.tags}"
          title="${photo.tags}"/>
      </a>
        <ul class="data-list">
          <li class="card-text">
            <h2 class="data-item-name" >likes</h2>
            <p class="data-numbers">${photo.likes}</p>
          </li>
          <li class="card-text">
            <h2 class="data-item-name">views</h2>
            <p class="data-numbers">${photo.views}</p>
          </li>
          <li class="card-text">
            <h2 class="data-item-name">comments</h2>
            <p class="data-numbers">${photo.comments}</p>
          </li>
          <li class="card-text">
            <h2 class="data-item-name">downloads</h2>
            <p class="data-numbers">${photo.downloads}</p>
          </li>
        </ul>
      </li>`
    )
    .join('');
