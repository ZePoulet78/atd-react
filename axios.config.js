// Fichier : axios.config.js
import axios from 'axios';

// Récupérer le jeton CSRF depuis le serveur
const getCsrfToken = async () => {
  try {
    const response = await axios.get('/csrf-token');
    return response.data.csrfToken;
  } catch (error) {
    console.error('Erreur lors de la récupération du jeton CSRF:', error);
    throw error;
  }
};

// Configurer les intercepteurs axios
axios.interceptors.request.use(
  async (config) => {
    if (config.method !== 'get') {
      config.headers['X-CSRF-Token'] = await getCsrfToken();
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 419) {
      try {
        // Récupérer un nouveau jeton CSRF et relancer la requête
        error.config.headers['X-CSRF-Token'] = await getCsrfToken();
        return axios.request(error.config);
      } catch (csrfError) {
        console.error('Erreur lors de la récupération du jeton CSRF:', csrfError);
      }
    }
    return Promise.reject(error);
  }
);

export default axios;