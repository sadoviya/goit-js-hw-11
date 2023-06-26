import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

const containerRef = document.querySelector('.gallery');
containerRef.innerHTML = createGalleryItem(galleryItems);

function createGalleryItem(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<div class="photo-card">
  <img src="" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
</div>`
    )
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionDelay: 0,
  animationSpeed: 125,
  fadeSpeed: 125,
  animationSlide: false,
});
