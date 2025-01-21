import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/actions/user.action.js";

function UserList() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);
  const [userlist, setUserlist] = useState([]);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    if (data) setUserlist(data);
    setLoading(false);
  }, [data]);

  return (
    <div className="row">
      <div className="col-md-12">
        <Link to={-1}>Back</Link>
        <h2>User List</h2>
        {loading && <h3>Loading...</h3>}
        {!loading && (
          <>
            <ul className="listing">
              {userlist &&
                userlist.map((user) => (
                  <li key={user.id}>
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                  </li>
                ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

UserList.prototype = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.required,
      name: PropTypes.string.required,
    }),
  ).isRequired,
};
export default UserList;
