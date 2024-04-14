import ky from 'ky';

const apiClient = ky.create({
  prefixUrl: 'http://localhost:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const userService = {
  getAllUsers: () => apiClient.get('admin/users').json(),
  getUserById: (id) => apiClient.get(`admin/users/${id}`),
  addUser: (user) => apiClient.post('admin/users', { json: user }),
};