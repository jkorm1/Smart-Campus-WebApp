import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const HostelCardHori = ({ hostel }) => {
  return (
    <Card className="flex bg-white rounded-lg shadow-md overflow-hidden p-3 m-4 max-w-screen-md mx-auto">
      <img src={hostel.image} alt={hostel.name} className="w-1/4 h-24 object-cover rounded mr-3" />
      <CardContent className="flex flex-col justify-center w-3/4">
        <CardTitle className="text-sm font-semibold mb-1">{hostel.name}</CardTitle>
        <CardDescription className="text-xs text-yellow-500 font-semibold mb-1">
          {hostel.rating} Superb ({hostel.reviews})
        </CardDescription>
        <CardDescription className="text-xs mb-1">{hostel.price}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default HostelCardHori;
