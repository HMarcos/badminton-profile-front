import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://badminton-profile.herokuapp.com',
});

export const signUp = async (formData) => {
  return api.post('/sign-up', formData);
};

export const signIn = async (formData) => {
  return api.post('/sign-in', formData);
};
