import { useContext } from "react";
import { UserContext } from "./UserContext";
import { login } from "./utils/login";

function Home() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>This is the home page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button
          onClick={() => {
            //call logout
            setUser(null);
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          login
        </button>
      )}
    </div>
  );
}
export default Home;
