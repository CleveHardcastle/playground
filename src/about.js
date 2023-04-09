import { useContext } from "react";
import { UserContext } from "./UserContext";

function About() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>This an about page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
export default About;
