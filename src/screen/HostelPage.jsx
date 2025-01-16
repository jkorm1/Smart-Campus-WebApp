import React, { useEffect, useState, useRef } from "react";
import HostelCard from "@/components/HostelCard";
import HostelCardHori from "@/components/HostelCardHori";
import HostelCard3 from "@/components/HostelCard3";
import { Facebook, Instagram, Twitter, ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import MenuSheet from "@/components/menuSheet";
import { fetchHostelsByCategory } from '@/api';

const HostelPage = () => {
  const scrollRef = useRef(null);
  const [popularHostels, setPopularHostels] = useState([]);
  const [topHostels, setTopHostels] = useState([]);
  const [normalHostels, setNormalHostels] = useState([]);
  const [error, setError] = useState(null);
  const [type, setType] = useState('hostel');
  const [searchQuery, setSearchQuery] = useState(''); // New state for search query

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  useEffect(() => {
    const getHostels = async () => {
      try {
        const popularData = await fetchHostelsByCategory('popular', type);
        const topData = await fetchHostelsByCategory('top', type);
        const normalData = await fetchHostelsByCategory('normal', type);
        setPopularHostels(popularData);
        setTopHostels(topData);
        setNormalHostels(normalData);
      } catch (error) {
        setError('Failed to fetch hostels');
      }
    };

    getHostels();
  }, [type]);

  const filteredPopularHostels = popularHostels.filter(hostel =>
    hostel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTopHostels = topHostels.filter(hostel =>
    hostel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredNormalHostels = normalHostels.filter(hostel =>
    hostel.name.toLowerCase().includes(searchQuery.toLowerCase())
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

        <div className="flex items-center justify-between p-4 bg-white">
          <div className="flex gap-8 items-center justify-center ml-auto">
            <a
              href="#hostels"
              className={`text-xs text-gray-800 font-medium transition-colors hover:text-gray-500 ${type === 'hostel' ? 'underline' : ''}`}
              onClick={() => setType('hostel')}
            >
              Hostel
            </a>
            <a
              href="#homstel"
              className={`text-xs text-gray-800 font-medium transition-colors hover:text-gray-500 ${type === 'homstel' ? 'underline' : ''}`}
              onClick={() => setType('homstel')}
            >
              Homstel
            </a>
            <a href="#food-joints" className="text-xs text-gray-800 font-medium transition-colors hover:text-gray-500">
              Food Joint
            </a>
          </div>
          <div className="flex gap-4 ml-auto text-2xl text-gray-800 transition-colors">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook className="hover:text-gray-500 h-4 w-4" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram className="hover:text-gray-500 h-4 w-4" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter className="hover:text-gray-500 h-4 w-4" /></a>
          </div>
        </div>

        <hr className="border-t-1 border-gray-400" />

        <section className="text-center py-6">
          <h2 className="text-2xl mt-4 text-gray-800">Popular Hostels <span className="text-yellow-600">Worldwide</span></h2>
          <div className="grid grid-cols-4 gap-10 max-w-full px-40 mx-auto">
            {filteredPopularHostels.map((hostel) => (
              <HostelCard
                key={hostel.id}
                image={hostel.image}
                title={hostel.name}
                price={hostel.price}
                handle={hostel.handle}
                hostel={hostel}
              />
            ))}
          </div>
        </section>

        <section className="py-8 px-20 mt-10">
          <h3 className="text-2xl text-center my-10 text-black">TOP <span className="text-yellow-600">HOSTELS</span></h3>
          <div className="relative py-3 mt-8 bg-white rounded-lg shadow-md">
            <div className="absolute top-0 left-0 bg-yellow-500 text-white font-bold p-2 rounded-br-md text-xs">
              Most Popular
            </div>
            <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded-l">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div ref={scrollRef} className="overflow-x-auto flex space-x-4 p-4 scrollbar-hide">
              {filteredTopHostels.map((hostel, index) => (
                <div key={index} className="min-w-[230px]"> 
                  <HostelCardHori hostel={hostel} />
                </div>
              ))}
            </div>
            <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded-r bg-opacity-50">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        <section className="py-8">
          <div className="text-center mb-4">
            <h2 className="text-2xl mb-4">Normal <span className="text-yellow-600">HOSTELS</span></h2>
          </div>
          <div className="space-y-4">
            {filteredNormalHostels.map((hostel, index) => (
              <HostelCard3 key={index} hostel={hostel} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HostelPage;
