// src/components/FoodJointCard.jsx
import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';

const FoodJointCard = ({ joint }) => {
  const placeholderImage = 'https://via.placeholder.com/140'; // Placeholder image URL

  return (
    <Card className="flex bg-white rounded-lg shadow-md overflow-hidden p-3 m-4 max-w-screen-md mx-auto cursor-pointer">
      <img 
        src={joint.image || placeholderImage} 
        alt={joint.name} 
        className="w-1/4 h-24 object-cover rounded mr-3" 
        onError={(e) => e.target.src = placeholderImage} // Fallback to placeholder on error
      />
      <CardContent className="flex flex-col justify-center w-3/4">
        <CardTitle className="text-sm font-semibold mb-1">{joint.name}</CardTitle>
        <CardDescription className="text-xs text-yellow-500 font-semibold mb-1">
          {joint.rating} ({joint.reviews} reviews)
        </CardDescription>
        <CardDescription className="text-xs mb-1">Specialty: {joint.specialty}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default FoodJointCard;
