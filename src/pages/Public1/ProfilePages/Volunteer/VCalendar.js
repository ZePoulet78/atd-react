import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { activityService } from '@/_service/activity.service';

const VCalendar = () => {
  const [activity, setActivity] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    activityService
      .getAllActivity()
      .then((res) => {
        setActivity(res.data.activity);
        setError(null);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!Array.isArray(activity) || activity.length === 0) {
    return (
      <div>
        <div>Aucune donnée à afficher.</div>
      </div>
    );
  }

  return (
    <section>
      <h2>Calendrier</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="my-calendar w-100 m-auto">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          events={activity.map((act) => {
            return {
              title: act.description,
              start: act.date,
              end: act.date,
            };
          })}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          height={"50vh"}
          locales={["fr"]}
        />
      </div>
    </section>
  );
};

export default VCalendar;