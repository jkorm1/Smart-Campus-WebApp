import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Instagram } from 'lucide-react';

const HostelCard = ({ title, image, price, handle }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/HostelCardIn');
  };

  return (
    <Card 
      onClick={handleClick} 
      className="relative cursor-pointer transform transition-transform duration-300 even:translate-y-0 odd:translate-y-20 rounded-lg overflow-hidden w-full"
    >
      <img src={image} alt={title} className="w-full h-[140px] object-cover rounded-t-lg" />
      <CardContent className="absolute top-4 left-0 bg-black bg-opacity-50 p-2 rounded-r text-white max-w-xs">
        <CardTitle className="text-sm font-semibold">{title}</CardTitle>
        <CardDescription className="text-xs text-gray-300">From GHS {price}</CardDescription>
      </CardContent>
      {handle && (
        <div className="absolute bottom-4 right-4 flex items-center text-yellow">
          <Instagram className="mr-1 w-3 h-3" />
          <a
            href={`https://www.instagram.com/${handle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px]"
          >
            {handle}
          </a>
        </div>
      )}
    </Card>
  );
};

export default HostelCard;
