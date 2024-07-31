import { comment } from "postcss";
import { baseURL, productionURL, apiEndpointV0 } from "../base"

export const getAllPostComments = async ({ post_id }) => {
  try {
    const queryParams = new URLSearchParams({
      post_id: post_id
    }).toString();

    const response = await fetch(`${baseURL}${apiEndpointV0}comments/get-all?${queryParams}`, {
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

export const createNewComment = async ({ postId, newComment, parentId, dateOfPost }) => {
  try {
    const payload = {
      post_id: postId,
      parent_id: parentId,
      comment_msg: newComment,
      date_of_post: dateOfPost
    }

    console.log(payload)
    const response = await fetch(`${baseURL}${apiEndpointV0}comments`, {
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

export const getAllChildComments = async ({ parent_id }) => {
  try {
    const queryParams = new URLSearchParams({
      parent_id: parent_id
    }).toString();

    const response = await fetch(`${baseURL}${apiEndpointV0}comments/child-comment?${queryParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const normalise_response = await response.json()

    if(response.ok) {
      return { data: normalise_response?.data, parentMsg: normalise_response?.parent_msg }
    }
    else {
      alert(normalise_response?.message)
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
