import { UserRow } from "./UserRow.js";
import { UsersApi } from "../services/users-api.js";

export class Users extends React.Component {
  constructor(props) {
    super(props);
    this.api = new UsersApi();
    this.state = { users: [] };
    this.api.getUsers().then((users) => {
      this.setState({ users });
    });
  }

  render() {
    const html = this.state.users.map((user, index) => (
      <UserRow key={index} user={user}></UserRow>
    ));
    return <div>{html}</div>;
  }
}
