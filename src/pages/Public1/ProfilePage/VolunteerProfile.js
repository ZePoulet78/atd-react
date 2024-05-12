// volunteer profile page

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const VolunteerProfile = () => {
    const { id } = useParams();
    const [volunteer, setVolunteer] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/volunteers/${id}`)
            .then((res) => res.json())
            .then((data) => setVolunteer(data));
    }, [id]);

    if (!volunteer) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>
                <FormattedMessage id="volunteerProfile" />
            </h2>
            <div>
                <img src={volunteer.image} alt={volunteer.name} />
                <h3>{volunteer.name}</h3>
                <p>{volunteer.location}</p>
                <p>{volunteer.email}</p>
                <p>{volunteer.phone}</p>
                <p>{volunteer.about}</p>
            </div>
        </div>
    );
}