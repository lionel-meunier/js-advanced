import { HelloButton } from "./components/HelloButton.js";
import { Users } from "./components/Users.js";

/**
 * REACT PART
 */
const domContainer = document.querySelector("#root");

const hello = (
  <div className="card" key={0}>
    <div className="card-body">
      <HelloButton key={0} initCount={0}></HelloButton>
      <HelloButton key={1} initCount={2}></HelloButton>
      <HelloButton key={2} initCount={3}></HelloButton>
    </div>
  </div>
);

const usersArray = (
  <div className="card" key={1}>
    <div className="card-body">
      <Users></Users>
    </div>
  </div>
);

ReactDOM.render([hello, usersArray], domContainer);
