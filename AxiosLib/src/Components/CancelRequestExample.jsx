import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CancelRequestExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          signal: controller.signal,
        });
        setData(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else {
          console.error('Error fetching posts:', error.message);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort(); // Cancel the request on component unmount
    };
  }, []);

  return (
    <div>
      {data.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CancelRequestExample;