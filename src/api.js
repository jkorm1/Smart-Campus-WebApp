const API_URL = 'http://localhost:5000/api/hostels';
const PRICING_URL = 'http://localhost:5000/api/pricing';

// Function to fetch all hostels
export const fetchHostels = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching hostels:', error);
        throw error; // Rethrow the error for handling in the component
    }
};

// Function to fetch hostels by category
export const fetchHostelsByCategory = async (category) => {
    try {
        const response = await fetch(`${API_URL}?category=${category}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching ${category} hostels:`, error);
        throw error; // Rethrow the error for handling in the component
    }
};

// New function to fetch pricing details
export const fetchPricing = async () => {
    try {
        const response = await fetch(PRICING_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching pricing details:', error);
        throw error; // Rethrow the error for handling in the component
    }
};


// Function to fetch pricing details for a specific hostel
export const fetchPricingForHostel = async (hostelId) => {
    try {
        const response = await fetch(`${PRICING_URL}/${hostelId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching pricing details for hostel:', error);
        throw error;
    }
};
