import { baseURL, productionURL, apiEndpointV0 } from "../base"

export const getAllPost = async ({ user_id }) => {
  try {
    const queryParams = new URLSearchParams({
      user_id: user_id
    }).toString();

    const response = await fetch(`${baseURL}${apiEndpointV0}posts?${queryParams}`, {
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

export const createNewPost = async ({ userId, dateOfPost, link, postMessage }) => {
  try {
    const payload = {
      user_id: userId,
      date_of_post: dateOfPost,
      image_link: link,
      post_msg: postMessage
    }

    const response = await fetch(`${baseURL}${apiEndpointV0}posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const normalise_response = await response.json()

    if(response.ok) {
      alert(normalise_response?.message)
    }
    else {
      alert(normalise_response?.message)
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export const uploadImage = async({ formData }) => {
  try {
    const response = await fetch(`${baseURL}${apiEndpointV0}upload/image`, {
      method: 'POST',
      body: formData
    });

    const normalise_response = await response.json()

    if(response.ok) {
      return normalise_response
    }
    else {
      alert(normalise_response?.message)
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
