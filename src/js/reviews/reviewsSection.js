import { fetchReviews } from './reviewsFetch';
import { markupReviews } from './reviewsMarkup';

(async () => {
  try {
    const data = await fetchReviews();
    return markupReviews(data);
  } catch (error) {
    console.log(error);
  }
})();
