import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import profileImg from '../assets/blankProfilePicture.png';

// Sample/mock user data
const mockUsers = [
  {
  id: 1,
  name: `yahia`,
  description: `Professor of Computer Science
Jordan University of Science and Technology`,
  location: `Jorden`,
  website: `https://localhost:7138/api/Website/ahmad-shaban-7af5edd591e642698`,
 }, 
 {
  id: 2,
  name: `farah`,
  description: `Assistant Professor, Data Science | Jordan University of Science and Technology`,
  location: `Jordan`,
  website: `https://localhost:7138/api/Website/farah-2a6c6425862a455fa53dfc8c`,
 }, 
 {
  id: 3,
  name: `yaser`,
  description: `Professor, Computer Science Department
Jordan University of Science and Technology`,
  location: `jordan`,
  website: `https://localhost:7138/api/Website/saed-71dc858225bd4e2e88f34ac90`,
 }, 
 {
  id: 4,
  name: `User`,
  description: `Research in AI, Graph Theory, Cybersecurity`,
  location: `jordan`,
  website: `https://user4.academic.ws`,
 }, 
  { id: 5, name: 'monir', description: 'Research in AI, cs, Cybersecurity', location: 'yarmok', website: 'https://localhost:7138/api/Website/monir-ba95ba2ea8394984ad6a378f' },
  { id: 6, name: 'ahmad mohsen', description: 'Research in AI, Graph Theory, Cybersecurity', location: 'jordan', website: 'https://localhost:7138/api/Website/ahmad-mohsen-29a3a970400941a89' },
  { id: 7, name: 'User', description: 'Research in AI, Graph Theory, Cybersecurity', location: 'College 3 (Country)', website: 'https://user3.academic.ws' },
  { id: 8, name: 'User', description: 'Research in AI, Graph Theory, Cybersecurity', location: 'College 4 (Country)', website: 'https://user4.academic.ws' },
  { id: 9, name: 'User', description: 'Research in AI, Graph Theory, Cybersecurity', location: 'College 1 (Country)', website: 'https://user5.academic.ws' },
  { id: 10, name: 'User ', description: 'Research in AI, Graph Theory, Cybersecurity', location: 'College 2 (Country)', website: 'https://user6.academic.ws' },
  { id: 11, name: 'User ', description: 'Research in AI, Graph Theory, Cybersecurity', location: 'College 3 (Country)', website: 'https://user7.academic.ws' },
  { id: 12, name: 'User ', description: 'Research in AI, Graph Theory, Cybersecurity', location: 'College 4 (Country)', website: 'https://user8.academic.ws' },
  { id: 13, name: 'User ', description: 'Research in AI, Graph Theory, Cybersecurity', location: 'College 1 (Country)', website: 'https://user9.academic.ws' },
  { id: 14, name: 'User ', description: 'Research in AI, Graph Theory, Cybersecurity', location: 'College 2 (Country)', website: 'https://user10.academic.ws' },
  { id: 15, name: 'User', description: 'Research in AI, Graph Theory, Cybersecurity', location: 'College 3 (Country)', website: 'https://user11.academic.ws' },
  { id: 16, name: 'User', description: 'Research in AI, Graph Theory, Cybersecurity', location: 'College 4 (Country)', website: 'https://user12.academic.ws' },
  { id: 17, name: 'User', description: 'Research in AI, Graph Theory, Cybersecurity', location: 'College 1 (Country)', website: 'https://user13.academic.ws' },
  { id: 18, name: 'User', description: 'Research in AI, Graph Theory, Cybersecurity', location: 'College 2 (Country)', website: 'https://user14.academic.ws' },
  { id: 19, name: 'User', description: 'Research in AI, Graph Theory, Cybersecurity', location: 'College 3 (Country)', website: 'https://user15.academic.ws' },
  { id: 20, name: 'User', description: 'Research in AI, Graph Theory, Cybersecurity', location: 'College 4 (Country)', website: 'https://user16.academic.ws' },
];

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
