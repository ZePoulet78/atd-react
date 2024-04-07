const API_BASE_URL = 'http://127.0.0.1:8000';

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/admin/users`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des utilisateurs');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
