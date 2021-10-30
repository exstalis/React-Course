function getRndIndex () {
  let randomHeartArray = []
  for (let i=0; i<3; i++) {
    randomHeartArray[i] = Math.floor(Math.random() * 3)
  }
  return randomHeartArray;
}



class Machine extends React.Component {


  render (){

    console.log(randomHeartArray2)
    let msg;
    let randomHeartArray2 = getRndIndex();
      if (randomHeartArray2[0] == randomHeartArray2 [1] == randomHeartArray2 [2]) {
        msg = this.props.winner
      }
      else {
        msg = this.props.loser
      }
    return (
      <div>
        <h2>This is Exstalis' Slot Machine</h2>

        <p>{this.props.slotArray[randomHeartArray2[0]]},
          {this.props.slotArray[randomHeartArray2[1]]},
          {this.props.slotArray[randomHeartArray2[2]]}
        </p>
        <p>{msg}</p>
      </div>
    )
  }
}
