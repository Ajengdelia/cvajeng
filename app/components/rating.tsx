'use client';  // Menandakan bahwa ini adalah komponen sisi klien

import React, { useState } from 'react';

// Komponen RatingStars untuk menampilkan sistem rating bintang
const RatingStars: React.FC<{ rating: number; setRating: (rating: number) => void }> = ({ rating, setRating }) => {
  const stars = [1, 2, 3, 4, 5]; // 5 bintang total

  return (
    <div className="flex space-x-1">
      {stars.map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          fill={star <= rating ? 'black' : 'none'}  // Mengubah warna bintang menjadi hitam jika terisi
          stroke="black"  // Garis luar bintang tetap hitam
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-6 h-6 cursor-pointer hover:fill-gray-700 transition-colors duration-300"
          onClick={() => setRating(star)}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0); // Status rating
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Menyimpan data komentar yang sudah dikirim
  const [commentsList, setCommentsList] = useState<{ name: string; email: string; comment: string; rating: number }[]>([]);

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && comment && rating > 0) {
      // Menambahkan komentar baru ke dalam daftar
      setCommentsList((prevComments) => [
        ...prevComments,
        { name, email, comment, rating },
      ]);
      setIsSubmitted(true);

      // Reset form setelah pengiriman
      setName('');
      setEmail('');
      setComment('');
      setRating(0);
    }
  };

  // Menghitung rata-rata rating
  const averageRating =
    commentsList.length > 0
      ? commentsList.reduce((a, b) => a + b.rating, 0) / commentsList.length
      : 0;

  return (
    <div className="py-10 px-5 md:px-20">
      <div className="max-w-xl mx-auto p-8 rounded-lg shadow-lg border bg-pink-100">
        <h2 className="text-2xl font-semibold text-center text-black">Tinggalkan Komentar</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Input Nama */}
          <div className="space-y-3">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nama
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Anda"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Input Email */}
          <div className="space-y-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Anda"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Input Komentar */}
          <div className="space-y-3">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
              Komentar
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Komentar Anda"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Bagian Rating */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <RatingStars rating={rating} setRating={setRating} />
            <p className="text-sm text-gray-600">Klik pada bintang untuk memberikan rating</p>
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition duration-300"
            disabled={isSubmitted} // Menonaktifkan tombol setelah pengiriman
          >
            {isSubmitted ? 'Terkirim' : 'Kirim'}
          </button>
        </form>

        {/* Pesan Terima Kasih */}
        {isSubmitted && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 border border-green-300 rounded-md">
            <h3 className="text-lg font-medium">Terima kasih atas komentar Anda, {name}!</h3>
            <p>Kami menghargai masukan Anda.</p>
            <p className="mt-2 text-sm">
              Rata-rata Rating: {averageRating.toFixed(2)} / 5
            </p>
          </div>
        )}
      </div>

      {/* Menampilkan Daftar Komentar */}
      <div className="mt-10 max-w-xl mx-auto">
        <h3 className="text-xl font-semibold text-center text-black">Komentar Pengguna</h3>
        <div className="mt-6 space-y-4">
          {commentsList.length > 0 ? (
            commentsList.map((commentData, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow-md rounded-lg border border-gray-200"
              >
                <h4 className="text-lg font-bold text-gray-800">{commentData.name}</h4>
                <p className="text-sm text-gray-600">{commentData.email}</p>
                <p className="mt-2 text-gray-800">{commentData.comment}</p>
                <div className="flex items-center mt-2">
                  <RatingStars rating={commentData.rating} setRating={() => {}} />
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-black-600">Belum ada komentar.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
