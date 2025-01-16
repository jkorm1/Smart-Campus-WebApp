// api.jsx
const API_URL = 'http://localhost:5000/api/hostels';
const PRICING_URL = 'http://localhost:5000/api/pricing';
const FOODJOINT_URL = 'http://localhost:5000/api/foodjoints'; // New URL for food joints

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
        throw error;
    }
};

// Function to fetch hostels by category and type
export const fetchHostelsByCategory = async (category, type = 'hostel') => {
    try {
        const response = await fetch(`${API_URL}?category=${category}&type=${type}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching ${category} ${type}s:`, error);
        throw error; // Rethrow the error for handling in the component
    }
};

// New function to fetch food joints
export const fetchFoodJoints = async () => {
    try {
        const response = await fetch(FOODJOINT_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching food joints:', error);
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
