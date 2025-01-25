import React, { useState } from 'react';
import axios from 'axios';

const PostDataComponent = () => {
  const [formData, setFormData] = useState({ title: '', body: '' });
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://jsonplaceholder.typicode.com/posts', formData)
      .then(res => setResponse(res.data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <textarea
          placeholder="Body"
          value={formData.body}
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
      {response && <p>Response: {JSON.stringify(response)}</p>}
    </div>
  );
};

export default PostDataComponent;
