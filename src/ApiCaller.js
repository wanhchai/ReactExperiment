const axios = require("axios");

export async function GetUser(onSuccess, userName) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${userName}`
    );
    onSuccess(response.data);
  } catch (error) {
    console.error(error);
  }
}
