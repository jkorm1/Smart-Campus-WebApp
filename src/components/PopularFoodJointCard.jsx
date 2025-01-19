import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';

const PopularFoodJointCard = ({ joint }) => {
  return (
    <Card className="relative cursor-pointer transform transition-transform duration-300 rounded-lg overflow-hidden w-full">
      <img 
        src={joint.image} 
        alt={joint.name} 
        className="w-full h-[140px] object-cover rounded-t-lg"
        onError={(e) => e.target.src = 'https://via.placeholder.com/140'} // Fallback to placeholder on error
      />
      <CardContent className="absolute top-4 left-0 bg-black bg-opacity-50 p-2 rounded-r text-white max-w-xs">
        <CardTitle className="text-sm font-semibold">{joint.name}</CardTitle>
        <CardDescription className="text-xs text-gray-300">
          {joint.rating} ({joint.reviews} reviews)
        </CardDescription>
        <CardDescription className="text-xs text-gray-300">Specialty: {joint.specialty}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default PopularFoodJointCard; 