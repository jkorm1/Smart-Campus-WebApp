import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const PricingCard = ({ detail }) => {
  return (
    <Card className="flex bg-white rounded-md shadow-md overflow-hidden p-3 m-4 h-60">
      <CardContent className="flex flex-col justify-center w-full">
        <CardTitle className="text-sm font-semibold mb-1">{detail.title}</CardTitle>
        <CardDescription className="text-xs mb-1">{detail.price}</CardDescription>
        <CardDescription className="text-xs">
          <ul>
            {detail.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
