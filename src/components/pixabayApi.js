const API_KEY = '23041177-0c0b450b7629b324f32016842';
const BASE_URL = 'https://pixabay.com/api/';

function fetchPictures(value, page) {
  const url = `${BASE_URL}?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(url)
  .then(response => {
    // if(response)
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
    new Error(`Nothing found for the your request ${value}`)
    );
  });
}

const api = { fetchPictures };
export default api 
