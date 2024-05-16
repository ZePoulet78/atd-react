import Axios from 'axios';

const getCategories = () => {
    return Axios.get('/categories');
};

const getMyTickets = () => {
    return Axios.get('/user/mytickets');
};

const createTicket = (formData) => {
    return Axios.post('/tickets', formData);
};

const uploadAttachment = (ticketId, file) => {
    const formData = new FormData();
    formData.append('file', file);
    return Axios.post(`/tickets/${ticketId}/attachments`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

const getTicketComments = (ticketId) => {
    return Axios.get(`/tickets/${ticketId}/comments`);
};

export const ticketService = {
    getCategories,
    getMyTickets,
    createTicket,
    uploadAttachment,
    getTicketComments
};
