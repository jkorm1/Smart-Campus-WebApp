import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Footer from '@/components/Footer';
import MenuSheet from "@/components/MenuSheet";
import { fetchPricingForHostel } from '@/api'; // Correct import
import PricingCard from '@/components/PricingCard';

const HostelCardIn = () => {
  const [pricingDetails, setPricingDetails] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getPricingDetails = async () => {
      try {
        if (id) { // Ensure 'id' is defined
          const pricingData = await fetchPricingForHostel(id); // Fetch pricing details for specific hostel
          setPricingDetails(pricingData);
        } else {
          setError('Hostel ID is not defined');
        }
      } catch (error) {
        console.error('Failed to fetch pricing details:', error);
        setError('Failed to fetch pricing details');
      }
    };

    getPricingDetails();
  }, [id]);

  if (error) {
    return <div>{error}</div>; // Display error message if fetching fails
  }

  if (pricingDetails.length === 0) {
    return <div>Loading pricing details...</div>; // Show loading state for pricing
  }

  return (
    <div>
      <header className="flex items-center justify-between py-1 px-8 bg-gray-100 container mx-auto">
        <img src="/src/assets/public/logo.png" alt="Smartcampus logo" className="h-10 w-10" />
        <MenuSheet />
      </header>

      <div className="container mx-auto px-4">
        <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: 'url(path-to-your-header-image.jpg)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <nav className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 p-2 rounded-md" style={{ width: '70%', backgroundColor: 'rgba(211, 211, 211, 0.7)' }}>
              <ul className="flex justify-around">
                <li><a href="#rooms" className="text-white">Our Rooms</a></li>
                <li><a href="#frontdesk" className="text-white">Our Front Desk</a></li>
                <li><a href="#environment" className="text-white">Our Environment</a></li>
                <li><a href="#pricing" className="text-white">Our Pricing</a></li>
              </ul>
            </nav>
          </div>
        </div>

        {/* About Section */}
        <div className="my-8 flex flex-wrap mt-16">
          <div className="w-full md:w-1/2">
            <img src="path-to-about-image.jpg" alt="About Us" className="w-full mt-4 md:mt-0" />
          </div>
          <div className="w-full md:w-1/2 pr-4 ">
            <h2 className="text-2xl font-semibold">About <span className="text-yellow-600"> Our Company</span></h2>
            <h3 className="text-xl text-gray-600">Make the customer the hero of your story.</h3>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim...</p>
          </div>
        </div>


        {/* Rooms Section */}
        <div id="rooms" className="my-20 text-center">
          <h2 className="text-2xl font-semibold text-center mb-7">Our <span className="text-yellow-600">Room</span></h2>
          <div className="relative bg-gradient-to-b from-yellow-600 to-yellow-00">
            <div className="absolute inset-0 w-full h-[270px] bg-yellow-600" style={{ borderBottomLeftRadius: '50% 10px', borderBottomRightRadius: '50% 70px' }}></div>
            <div id="pricing" className="relative container mx-auto text-center py-8">
              <h3 className="text-xl text-gray-600 text-center">Simple, fair pricing.</h3>
              <p className="mt-4 text-center text-white">Marian, a free modern hotel website template...</p>
              <div className="flex justify-center mt-4 ">
                {pricingDetails.map((detail) => (
                  <PricingCard key={detail.id} detail={detail} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bedroom Images Section */}
        <div className="my-8">
          <h2 className="text-2xl font-semibold">Bedrooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <img src="path-to-bedroom-image1.jpg" alt="Bedroom 1" className="w-full" />
            <img src="path-to-bedroom-image2.jpg" alt="Bedroom 2" className="w-full" />
            <img src="path-to-bedroom-image3.jpg" alt="Bedroom 3" className="w-full" />
          </div>
        </div>

        {/* Bath Room Section */}
        <div className="my-8">
          <h2 className="text-2xl font-semibold">Bath Room</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="relative">
              <img src="path-to-bathroom-image1.jpg" alt="Bathroom 1" className="w-full" />
              <div className="absolute inset-0"></div> {/* Removed yellow opacity */}
            </div>
            <div className="relative">
              <img src="path-to-bathroom-image2.jpg" alt="Bathroom 2" className="w-full" />
              <div className="absolute inset-0"></div> {/* Removed yellow opacity */}
            </div>
            <div className="relative">
              <img src="path-to-bathroom-image3.jpg" alt="Bathroom 3" className="w-full" />
              <div className="absolute inset-0"></div> {/* Removed yellow opacity */}
            </div>
            <div className="relative">
              <img src="path-to-bathroom-image4.jpg" alt="Bathroom 4" className="w-full" />
              <div className="absolute inset-0"></div> {/* Removed yellow opacity */}
            </div>
          </div>
        </div>

        {/* Environment Section */}
        <section id="environment" className="py-8">
          <h1 className="text-2xl font-semibold text-center mb-7 mb-4">Our <span className="text-yellow-600">Environment</span></h1>
          <p>Details about the hostel's environment...</p>
          
          {/* Stacked Images with No Vertical Space */}
          <div className="flex flex-col">
            <div className="flex w-full">
              <div className="relative w-1/2">
                <img src="/src/assets/public/eug.jpeg" alt="Environment Image 1" className="w-full h-auto" />
                <div className="absolute inset-0 flex items-center justify-center"  style={{ bottom: '50%' }}>
                  <div className="bg-yellow-600 bg-opacity-20 text-black font-bold text-lg p-4 rounded-lg " style={{ width: '200%', right: '50%', transform: 'translateX(70%)' }}>
                   <h3 className="text-yellow-500 text-lg font-bold mb-3">Our Restaurant</h3>
                   <h4 className="text-black text-base font-bold mb-4">Dining & Drinking</h4>
                   <p className="text-gray-800 text-sm mb-10">
                     Explore a variety of dishes and beverages in an elegant setting, where taste meets comfort, and every moment is crafted to delight.
                   </p>
                   <button className="border border-yellow-500 text-yellow-500 px-4 py-3 rounded-lg bg-transparent">
                     Learn More
                   </button>
                  </div>
                </div>
              </div>
              
              <div className="relative w-1/2 mt-[910px]"> {/* Negative margin to pull the second image down */}
                <img src="/src/assets/public/me.jpeg" alt="Environment Image 2" className="w-full h-auto" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-yellow-600 bg-opacity-20 text-black font-bold text-lg p-4 rounded-lg" style={{ width: '200%', left: '50%', transform: 'translateX(-70%)' }}>
                   <h3 className="text-yellow-500 text-lg font-bold mb-3">Our Restaurant</h3>
                   <h4 className="text-black text-base font-bold mb-4">Dining & Drinking</h4>
                   <p className="text-gray-800 text-sm mb-10">
                     Explore a variety of dishes and beverages in an elegant setting, where taste meets comfort, and every moment is crafted to delight.
                   </p>
                   <button className="border border-yellow-500 text-yellow-500 px-4 py-3 rounded-lg bg-transparent">
                     Learn More
                   </button>                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Front Desk Section */}
        <section id="frontdesk" className="py-8 bg-gray-50 rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-semibold text-center mb-7 mb-4 ">Our <span className="text-yellow-600">Front Desk</span></h1>
          <p className="mb-2">Our front desk is here to assist you with all your needs. We offer the following services:</p>
          <ul className="list-disc list-inside mb-4">
            <li>24/7 Reception</li>
            <li>Check-in and Check-out Assistance</li>
            <li>Concierge Services</li>
            <li>Room Service</li>
            <li>Local Information and Recommendations</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Operating Hours:</h3>
          <p className="mb-4">Open 24 hours a day, 7 days a week.</p>
          <h3 className="text-lg font-semibold mb-2">Contact Information:</h3>
          <p>If you have any questions, feel free to reach us at:</p>
          <p className="font-bold">Phone: (123) 456-7890</p>
          <p className="font-bold">Email: frontdesk@hostel.com</p>
        </section>

        {/* Importing Footer */}       
      </div>
      <Footer />
    </div>
  );
};

export default HostelCardIn;
