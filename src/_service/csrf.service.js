// csrf.service.js

export const getCsrfToken = async () => {
    try {
        // Logique pour récupérer le jeton CSRF depuis le serveur
        const response = await fetch('http://localhost:8000/sanctum/csrf-cookie');
        const data = await response.json();
        return data.csrfToken; // Supposons que le jeton CSRF est renvoyé sous la clé 'csrfToken' dans la réponse JSON
    } catch (error) {
        console.error('Erreur lors de la récupération du jeton CSRF :', error);
        throw error;
    }
};
