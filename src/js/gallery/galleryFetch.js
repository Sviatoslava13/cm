const URL_DB = `https://carpathians-db.onrender.com/api/gallery`
const KEY = 'dede23wfWSD@@$fsD3'

export async function fetchGallery(season) {
    try {
        const response = await fetch(`${URL_DB}/${season}`, {
            method: 'GET',
            headers: { key: KEY }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error);
    }
}