import { useParams } from "react-router-dom";

const Profile = () => {
  const params = useParams(); // Accessing the URL parameters
  return (
    <div>
      <h1>I am user {params.username}</h1>
    </div>
  );
};

export default Profile;
