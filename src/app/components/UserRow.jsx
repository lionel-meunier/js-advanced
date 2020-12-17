export class UserRow extends React.Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
  }

  showDetail() {}

  render() {
    return (
      <div>
        {this.user.name} <small> {this.user.address.country} </small>
        <button className="btn btn-info" onClick={() => this.showDetail()}>
          Show
        </button>
      </div>
    );
  }
}
