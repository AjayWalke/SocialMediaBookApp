import { baseURL, productionURL, apiEndpointV0 } from "../base"

export const getLogin = async ({ email, password }) => {
  try {
    const queryParams = new URLSearchParams({
      email: email,
      password: password,
    }).toString();

    const response = await fetch(`${baseURL}${apiEndpointV0}users?${queryParams}`, {
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
};

export const sendNewRegistration = async ({ username, name, address, email, password }) => {
  try {
    const response = await fetch(`${baseURL}${apiEndpointV0}users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, name, address, email, password}),
    });
    
    const normalise_response = await response.json()

    if(response.ok) {
      alert(normalise_response?.message)
    }
    else {
      alert(normalise_response?.message)
    }
  } catch (error) {
    console.error('Error registering:', error);
    throw error;
  }
};
