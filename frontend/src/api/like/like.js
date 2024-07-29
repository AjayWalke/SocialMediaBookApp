import { baseURL, productionURL, apiEndpointV0 } from "../base"

export const increaseLikeCount = async ({ like_id }) => {
  try {
    const queryParams = new URLSearchParams({
      like_id: like_id
    }).toString();

    const response = await fetch(`${baseURL}${apiEndpointV0}likes/inc?${queryParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const normalise_response = await response.json()

    if(response.ok) {
      return normalise_response?.data
    }
    else {
      alert(normalise_response?.message)
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}