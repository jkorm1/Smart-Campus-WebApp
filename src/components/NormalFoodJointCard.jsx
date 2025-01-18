import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';

const NormalFoodJointCard = ({ joint }) => {
  return (
    <Card className="flex bg-white rounded-lg shadow-md overflow-hidden p-3 m-4 max-w-screen-md mx-auto cursor-pointer">
      <img 
        src={joint.image} 
        alt={joint.name} 
        className="w-1/3 h-32 object-cover rounded-l-lg"
        onError={(e) => e.target.src = 'https://via.placeholder.com/140'} // Fallback to placeholder on error
      />
      <CardContent className="flex flex-col justify-center w-2/3 p-4">
        <CardTitle className="text-lg font-semibold mb-1">{joint.name}</CardTitle>
        <CardDescription className="text-sm text-yellow-500 font-semibold mb-1">
          {joint.rating} ({joint.reviews} reviews)
        </CardDescription>
        <CardDescription className="text-sm mb-1">Specialty: {joint.specialty}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default NormalFoodJointCard; 