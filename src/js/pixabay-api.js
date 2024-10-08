import axios from 'axios';
export const BASE_URL = 'https://pixabay.com/';
export const API_KEY = '46069997-68364f05efefbed8c9e798952';

export let currentPage = 1;
export let perPage = 15;

export async function fetchCard(query, currentPage) {
  const options = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: perPage,
    page: currentPage,
  };

  const params = new URLSearchParams(options);

  try {
    const response = await axios.get(`${BASE_URL}api/?${params}`);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
