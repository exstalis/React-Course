class Hello extends React.Component{
  render() {
    console.log(this.props);
    return (
      <div>
        <p> Hi Everyone! Pardon my coding skills!</p>
        <p> Hello from {this.props.from} to {this.props.to} </p>
      </div>
    )

  }
}
