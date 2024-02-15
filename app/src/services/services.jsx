// src/services/services.jsx

const API_URL = '/api/fetch-tiktok-data'; // This will be proxied to Flask during development

export const fetchDashboardData = async () => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ /* Your request body if needed */ }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  return response.json();
};

// Add a Brand
export const addBrand = async (brandData) => {
  try {
    const response = await fetch(`${API_URL}/brands`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(brandData),
    });
    if (!response.ok) throw new Error('Network response was not ok.');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem adding a brand:', error);
    throw error;
  }
};

// Remove a Brand
export const removeBrand = async (brandId) => {
  try {
    const response = await fetch(`${API_URL}/brands/${brandId}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Network response was not ok.');
    return true; // Assuming deletion doesn't return any content
  } catch (error) {
    console.error('There was a problem removing the brand:', error);
    throw error;
  }
};
