import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/actions/userActions";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <div>
      {state.isLoading ? (
        <p>Loading...</p>
      ) : (
        !state.isError && state.users.map((user) => <h3>{user.name}</h3>)
      )}
    </div>
  );
};

export default App;
