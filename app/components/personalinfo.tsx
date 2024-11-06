import React from 'react';

// Object MyInfos yang berisi informasi tentang diri kamu
const MyInfos = {
  TTL: "Sumedang, 11 Juni 2003",
  Gender: "Wanita",
  TinggiBadan: "165 cm",
  BeratBadan: "47 kg",
  StatusPernikahan: "Belum Menikah",
  Whatsapp: "+62 812 3456 7890",
  Email: "ajengdeliaeriskaa@gmail.com"
};

// Komponen untuk menampilkan informasi
const InfoSection: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-pink-200 shadow-xl rounded-lg mt-10">
      <h1 className="text-3xl font-semibold text-center text-black mb-6">Personal Information</h1>

      <ul className="space-y-4">
        {Object.entries(MyInfos).map(([key, value], index) => (
          <li
            key={index}
            className="flex justify-between text-white p-4 rounded-lg bg-opacity-80 hover:bg-opacity-90 transition-all"
            style={{ backgroundColor: `rgba(255, 105, 180, 0.${index + 4})` }} // Warna pink lebih lembut
          >
            <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoSection;

