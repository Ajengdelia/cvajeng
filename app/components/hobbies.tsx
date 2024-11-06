import React from 'react';

// Data Hobi
const hobbies = [
  { name: 'Fotografi', image: '/images/fotograf.jpg' },
  { name: 'Membaca', image: '/images/membaca.jpg' },
  { name: 'Travelling', image: '/images/travel.jpg' },
  { name: 'Catwalk', image: '/images/catwalk.jpg' },
];

const MyGallery: React.FC = () => {
  return (
    <section className="p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-6 text-center text-white">Hobi Saya</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1">
        {hobbies.map((hobby, index) => (
          <div key={index} className="flex flex-col items-center border-2 border-gray-300 rounded-lg p-2">
            {/* Kontainer dengan background pink di dalam kotak */}
            <div className="w-full h-full flex flex-col items-center justify-center bg-pink-200 rounded-lg p-4">
              <img
                src={hobby.image}
                alt={`Gambar hobi ${hobby.name}`}
                className="w-32 h-32 object-cover rounded-md shadow-md transition-transform transform hover:scale-105"
              />
              <span className="mt-2 text-black text-sm font-medium">{hobby.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyGallery;
