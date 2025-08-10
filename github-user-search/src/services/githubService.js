import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

/**
 * Fetch GitHub user data by username
 * @param {string} username - The GitHub username
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {}
    });
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};
