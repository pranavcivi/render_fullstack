import React, { useState, useEffect } from 'react';

export const Test_page = () => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    const getMenu = () => {
        // const url = "http://localhost:8080/three"
        const url = "https://backend-th8h.onrender.com/three"
      fetch(url)
        .then(response => response.json())
        .then(data => {
          // Set the menuData state to the fetched data
          setMenuData(JSON.stringify(data, null, 2));
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };

    getMenu(); // Invoke the getMenu function inside useEffect
  }, []); // Empty dependency array to trigger fetching once on component mount

  return (
    <pre>
        This is the new page
    </pre>
  );
};
