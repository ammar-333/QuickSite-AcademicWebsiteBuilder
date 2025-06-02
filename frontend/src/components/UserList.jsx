import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import profileImg from '../assets/blankProfilePicture.png';

// Sample/mock user data
const mockUsers = Array.from({ length: 35 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  description: `Research in AI, Graph Theory, Cybersecurity`,
  location: `College ${i % 4 + 1} (Country)`,
  website: `https://user${i + 1}.academic.ws`,
}));

const USERS_PER_PAGE = 10;

const UserList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [displayedUsers, setDisplayedUsers] = useState([]);

  useEffect(() => {
    const start = currentPage * USERS_PER_PAGE;
    const end = start + USERS_PER_PAGE;
    setDisplayedUsers(mockUsers.slice(start, end));
  }, [currentPage]);

  const handlePageChange = (type) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage((prev) =>
      type === 'next' ? prev + 1 : Math.max(prev - 1, 0)
    );
  };

  const hasNext = (currentPage + 1) * USERS_PER_PAGE < mockUsers.length;
  const hasPrevious = currentPage > 0;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Academic websites that inspire.</h1>
      <p className="text-lg text-gray-600 mb-6">
        Discover academic websites created by Ph.D. students, faculty, researchers, and scientists.
      </p>

      <input
        type="text"
        placeholder="Search sites"
        className="w-full border border-gray-300 rounded-md p-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="space-y-6">
        {displayedUsers.map((user) => (
          <div key={user.id} className="flex items-start space-x-4 border-b pb-4">
            <img
              src={profileImg}
              alt={user.name}
              className="w-14 h-14 rounded-full object-cover mt-1"
            />
            <div>
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-gray-700">{user.description}</p>
              <p className="text-gray-500 text-sm mt-1">{user.location}</p>
              <a
                href={user.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 text-sm mt-1 inline-block underline hover:text-yellow-800"
              >
                {user.website.replace(/^https?:\/\//, '')}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={() => handlePageChange('prev')}
          disabled={!hasPrevious}
          className={`flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition ${
            !hasPrevious ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </button>
        <button
          onClick={() => handlePageChange('next')}
          disabled={!hasNext}
          className={`flex items-center px-4 py-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 transition ${
            !hasNext ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default UserList;
