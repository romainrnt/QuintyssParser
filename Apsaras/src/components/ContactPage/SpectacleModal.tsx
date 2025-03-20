import React from 'react';

interface Event {
  id: string;
  location: string;
  city: string;
  date: string;
}

interface SpectacleModalProps {
  isOpen: boolean;
  onClose: () => void;
  events: Event[];
}

const SpectacleModal: React.FC<SpectacleModalProps> = ({ isOpen, onClose, events }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[240px] h-[395px] relative shadow-md rounded-lg">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-lg"
        >
          ×
        </button>

        <div className="p-4">
          <h2 className="text-[#09252D] text-xl font-bold text-left">SÉNÉGAL</h2>
          <div className="w-[72px] h-0 border-t-2 border-[#892014] mt-1" />
        </div>

        <div className="mx-4 pb-6">
          <div className="overflow-y-auto h-[280px] custom-scrollbar">
            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className={`pb-2 w-[201px] ${
                    events[events.length - 1].id === event.id
                      ? ''
                      : 'border-b border-[#59BDBB] border-opacity-30'
                  }`}
                >
                  <p className="text-[#09252D] text-xs font-medium text-left">{event.location}</p>
                  <p className="text-[#960F05] text-sm font-bold text-left">{event.city}</p>
                  <p className="text-[#59BDBB] text-xs text-left">{event.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpectacleModal;
