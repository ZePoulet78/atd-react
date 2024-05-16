import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ticketService } from '@/_service/ticket.service';

const TicketsPage = () => {
    const navigate = useNavigate();
    const [tickets, setTickets] = useState([]);
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        subject: '',
        description: '',
        ticket_category_id: ''
    });
    const [file, setFile] = useState(null);

    useEffect(() => {
        ticketService.getCategories()
            .then(res => {
                setCategories(res.data.tickets);
            })
            .catch(err => console.error(err));

        loadTickets();
    }, []);

    const loadTickets = () => {
        ticketService.getMyTickets()
            .then(res => {
                setTickets(res.data.tickets);
            })
            .catch(err => console.error(err));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataWithFile = new FormData();
        formDataWithFile.append('subject', formData.subject);
        formDataWithFile.append('description', formData.description);
        formDataWithFile.append('ticket_category_id', formData.ticket_category_id);
        formDataWithFile.append('file', file);

        ticketService.createTicket(formDataWithFile)
            .then(res => {
                console.log('Ticket created successfully');
                loadTickets();
                
                navigate(`/tickets/${res.data.id}`);
            })
            .catch(err => console.error(err));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="container mt-4">
            <h2>Mes Tickets</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Sujet:</label>
                    <input type="text" className="form-control" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} rows="5"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="ticket_category_id" className="form-label">Catégorie:</label>
                    <select className="form-select" id="ticket_category_id" name="ticket_category_id" value={formData.ticket_category_id} onChange={handleChange}>
                        <option value="">Sélectionnez une catégorie...</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="file" className="form-label">Pièce jointe:</label>
                    <input type="file" className="form-control" id="file" name="file" onChange={handleFileChange} />
                </div>
                <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>

            <div className="mt-4">
                <h3>Mes Tickets</h3>
                <ul className="list-group">
                    {tickets.map(ticket => (
                        <li key={ticket.id} className="list-group-item">{ticket.subject}</li>
                        
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TicketsPage;
