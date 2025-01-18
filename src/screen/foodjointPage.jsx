// src/screen/FoodJointPage.jsx
import React, { useEffect, useState } from 'react';
import FoodJointCard from '@/components/FoodJointCard';
import { fetchFoodJoints } from '@/api';
import MenuSheet from "@/components/MenuSheet";
import Footer from "@/components/Footer";

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

  // Filter food joints based on the search query
  const filteredFoodJoints = foodJoints.filter(joint =>
    joint.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (error) {
    return <div>{error}</div>;
  }

  // Filter food joints by category
  const popularFoodJoints = filteredFoodJoints.filter(joint => joint.category === 'popular');
  const topFoodJoints = filteredFoodJoints.filter(joint => joint.category === 'top');
  const normalFoodJoints = filteredFoodJoints.filter(joint => joint.category === 'normal');

  return (
    <div>
      <nav className="flex space-x-4 p-4 bg-gray-800 text-white">
        <a href="/" className="hover:underline">Hostels</a>
        <a href="/food-joints" className="hover:underline">Food Joints</a>
        <a href="/other-link" className="hover:underline">Other Link</a>
      </nav>

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
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query based on user input
            />
          </div>
        </section>

        <hr className="border-t-1 border-gray-400" />

        <section className="py-8">
          <h2 className="text-2xl text-center mb-4">Popular <span className="text-yellow-600">Food Joints</span></h2>
          <div className="grid grid-cols-4 gap-10">
            {popularFoodJoints.map((joint) => (
              <FoodJointCard key={joint.id} joint={joint} />
            ))}
          </div>
        </section>

        <section className="py-8">
          <h2 className="text-2xl text-center mb-4">Top <span className="text-yellow-600">Food Joints</span></h2>
          <div className="grid grid-cols-4 gap-10">
            {topFoodJoints.map((joint) => (
              <FoodJointCard key={joint.id} joint={joint} />
            ))}
          </div>
        </section>

        <section className="py-8">
          <h2 className="text-2xl text-center mb-4">Normal <span className="text-yellow-600">Food Joints</span></h2>
          <div className="grid grid-cols-4 gap-10">
            {normalFoodJoints.map((joint) => (
              <FoodJointCard key={joint.id} joint={joint} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FoodJointPage;
