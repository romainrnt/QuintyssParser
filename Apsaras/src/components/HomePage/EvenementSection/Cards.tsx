import React from 'react';

import { eventsList } from '../../data/Events';
import { EventCard } from '../../EvenementsPage/EventCards';

// Cards.tsx
const Cards: React.FC = () => {
  return (
    <div className="mt-7 lg:mt-12">
      <div
        className="grid gap-8"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 376px))',
          justifyContent: 'center',
        }}
      >
        {eventsList.map((event) => (
          <EventCard
            key={event.id}
            image={event.image}
            imageIcon={event.imageIcon}
            title={event.title}
            description={event.description}
            dates={event.dates}
            showMultipleDates={event.hasMultipleDates}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
