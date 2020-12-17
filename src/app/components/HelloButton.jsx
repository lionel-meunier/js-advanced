export class HelloButton extends React.Component {


  constructor(props) {
    super(props);
    this.state = {count: this.props.initCount};
  }

  sayHello() {
    let count = this.state.count + 1;
    this.setState({ count });
    alert("Bonjour");
  }

  render() {

    let say = `Say hello !!`;
    if(this.state.count) {
      say = `Say hello ${this.state.count} !`;
    }
    return (
      <button className="btn btn-secondary" onClick={() => this.sayHello()}>
        {say}
      </button>
    );
  }
}
