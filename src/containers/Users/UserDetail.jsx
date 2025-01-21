import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetail() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const { slug } = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + slug)
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        setLoading(false);
      });
  }, [slug]);

  return (
    <div className="UserDetail">
      <Link to={-1}>Back</Link>
      <h2>User Details</h2>
      {loading && <h3>Loading...</h3>}
      {!loading && <p>Username: {user && user.name}</p>}
    </div>
  );
}

export default UserDetail;
