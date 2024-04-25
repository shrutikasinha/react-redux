import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./users/userActions";

function UserContainer() {
  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h4>User Container</h4>
      {!userData.loading ? (
        userData?.data.map((user) => {
          return <p>{user.name}</p>;
        })
      ) : (
        <span>Loading....</span>
      )}
    </div>
  );
}

export default UserContainer;

// const mapStateToProps = (state) => {
//   return {
//     userData: state.users,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
