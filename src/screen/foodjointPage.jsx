// src/screen/FoodJointPage.jsx
import React, { useEffect, useState, useRef } from 'react';
import FoodJointCard from '@/components/FoodJointCard';
import { fetchFoodJoints } from '@/api';
import MenuSheet from "@/components/MenuSheet";
import Footer from "@/components/Footer";
import { Facebook, Instagram, Twitter } from "lucide-react";

const FoodJointPage = () => {
  const [foodJoints, setFoodJoints] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getFoodJoints = async () => {
      try {
        const foodJointData = await fetchFoodJoints();
        setFoodJoints(foodJointData);
      } catch (error) {
        setError('Failed to fetch food joints');
      }
    };

    getFoodJoints();
  }, []);

  const filteredFoodJoints = foodJoints.filter(joint =>
    joint.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="max-w-screen-lg p-2 mx-auto font-sans">
        <header className="">
          <div className="flex items-center justify-between">
            <img src="/src/assets/public/logo.png" alt="Smartcampus logo" className="h-10 w-10" />
            <MenuSheet />
          </div>
        </header>

        <section className="flex flex-col items-center justify-center text-center py-8" style={{ backgroundImage: `url(/src/assets/public/eugenia (2).jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <h1 className="text-2xl text-gray-100 mb-4">SMART CAMPUS</h1>
          <div className="w-full py-10 text-center bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-500">
            <input
              type="text"
              placeholder="&#x1F4CD; Where do you want to go?"
              className="p-2 w-1/2 text-lg rounded border border-gray-300"
              onChange={(e) => setSearchQuery(e.target.value)} // Set search query based on user input
            />
          </div>
        </section>

        <hr className="border-t-1 border-gray-400" />

        <section className="text-center py-6">
          <h2 className="text-2xl mt-4 text-gray-800">Popular <span className="text-yellow-600">Food Joints</span></h2>
          <div className="grid grid-cols-4 gap-10 max-w-full px-40 mx-auto">
            {filteredFoodJoints.map((joint) => (
              <FoodJointCard key={joint.id} joint={joint} />
            ))}
          </div>
        </section>

        <hr className="border-t-1 border-gray-400" />

        <div className="flex gap-4 ml-auto text-2xl text-gray-800 transition-colors">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook className="hover:text-gray-500 h-4 w-4" /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram className="hover:text-gray-500 h-4 w-4" /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter className="hover:text-gray-500 h-4 w-4" /></a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FoodJointPage;
