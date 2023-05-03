import { galleryMarkup } from './galleryMarkup';
import { fetchGallery } from './galleryFetch';

(async () => {
    const buttons = document.querySelectorAll('#galleryBtn');
    const item = document.querySelector('#swiper3');

        try {
            const data = await fetchGallery('summer');
            galleryMarkup(data);
        } catch (error) {
            throw new Error(error);
        }

        buttons.forEach(button => {
            button.addEventListener('click', async () => {
                if (button.classList.contains('gallery__button--active')) {
                    return;
                }
                
                item.classList.remove('is-visible')
                setTimeout(() => {
                    item.classList.add('is-visible')
                }, 1000);
                
                const season = button.getAttribute('data-season');

                buttons.forEach(otherButton => {
                    if (otherButton !== button) {
                        otherButton.classList.remove('gallery__button--active');
                    }
                });
                button.classList.add('gallery__button--active');

                try {
                    const data = await fetchGallery(season);
                    galleryMarkup(data);
                } catch (error) {
                    throw new Error(error);;
                }
            });
        });
})();