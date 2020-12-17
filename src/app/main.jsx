import { HelloButton } from "./components/HelloButton.js";
import { Users } from "./components/Users.js";

/**
 * REACT PART
 */
const domContainer = document.querySelector("#root");

const hello = (
  <div className="card">
    <div className="card-body">
      <HelloButton initCount={0}></HelloButton>
      <HelloButton initCount={2}></HelloButton>
      <HelloButton initCount={3}></HelloButton>
    </div>
  </div>
);

const usersArray = (
  <div className="card">
    <div className="card-body">
      <Users></Users>
    </div>
  </div>
);

ReactDOM.render([hello, usersArray], domContainer);
