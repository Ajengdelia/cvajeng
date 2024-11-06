'use client';  // Menandakan komponen ini adalah Client Component

import React, { useState } from 'react';

// Fungsi untuk menangani form
const ContactForm: React.FC = () => {
  // State untuk form input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handler saat form disubmit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && comment) {
      setIsSubmitted(true);
      // Reset form setelah submit
      setName('');
      setEmail('');
      setComment('');
    }
  };

  return (
    <div className="py-10 px-5 md:px-20">
      <div className="max-w-xl mx-auto p-8 rounded-lg shadow-lg border">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Leave a Comment</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Input Nama */}
          <div className="space-y-3">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Input Email */}
          <div className="space-y-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"  // Basic email pattern validation
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Input Comment */}
          <div className="space-y-3">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Your comment"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
            Submit
          </button>
        </form>

        {/* Pesan Terima Kasih setelah submit */}
        {isSubmitted && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 border border-green-300 rounded-md">
            <h3 className="text-lg font-medium">Thank you for your comment, {name}!</h3>
            <p>We appreciate your feedback.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
