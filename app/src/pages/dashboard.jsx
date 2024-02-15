import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../context/MyContext';
import { fetchDashboardData } from '../services/services'; // Import the fetch service

// Assume you have a Chart component for displaying data
// import Chart from '../components/Chart';

const Dashboard = () => {
  const { state, dispatch } = useContext(MyContext);
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use the imported service function to fetch dashboard data
        const data = await fetchDashboardData();
        setAnalyticsData(data); // Update local state with fetched data
      } catch (error) {
        console.error('Failed to fetch analytics data:', error);
        // Optionally, handle the error more gracefully in your UI
      }
    };

    fetchData();
  }, [state]); // Re-fetch when context state changes, if relevant to your data fetching

  return (
    <div className="dashboard">
      <h1>Analytics Dashboard</h1>
      {/* Render your analytics components here, passing analyticsData as props */}
      {/* Example usage with a Chart component */}
      {/* {analyticsData.map(data => <Chart key={data.id} data={data} />)} */}
    </div>
  );
};

export default Dashboard;
