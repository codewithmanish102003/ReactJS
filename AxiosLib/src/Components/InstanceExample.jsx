import React, { useEffect, useState } from 'react';
import api from '../api/api';

const InstanceExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/posts')
      .then(response => setData(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default InstanceExample;
