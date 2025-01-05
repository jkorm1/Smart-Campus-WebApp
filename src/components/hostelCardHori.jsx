import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const HostelCardHori = ({ hostel }) => {
  return (
    <Card className="flex bg-white rounded-lg shadow-md overflow-hidden p-2 m-2 max-w-screen-md mx-auto">
      <img src={hostel.image} alt={hostel.name} className="w-2/5 h-24 object-cover rounded mr-3" />
      <CardContent className="flex flex-col justify-center w-3/4">
        <CardTitle className="text-sm font-semibold mb-1">{hostel.name}</CardTitle>
        <CardDescription className="text-xs text-yellow-500 font-semibold mb-1">
          {hostel.rating} Superb ({hostel.reviews})
        </CardDescription>
        <CardDescription className="text-xs mb-1">GHS {hostel.price}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default HostelCardHori;
