function getRndIndex () {
  let randomHeartArray = []
  for (let i=0; i<3; i++) {
    randomHeartArray[i] = Math.floor(Math.random() * 3)
  }
  return randomHeartArray;
}



class Machine extends React.Component {

  // const titleColor = {fonSize:'52px', color:'lilac'};

  render (){

    console.log(randomHeartArray2)
    let msg;
    let randomHeartArray2 = getRndIndex();
    const winner = randomHeartArray2[0] == randomHeartArray2[1] && randomHeartArray2[1] == randomHeartArray2 [2];
    const exstalisTitleStyle = {fontSize:'52px'};
    return (
      <div className= "Machine">
        <h2 style= {exstalisTitleStyle}>This is Exstalis' Slot Machine</h2>
        <p>{this.props.slotArray[randomHeartArray2[0]]},
          {this.props.slotArray[randomHeartArray2[1]]},
          {this.props.slotArray[randomHeartArray2[2]]}
        </p>
        <p className={ winner ? 'Winner-Style' : 'Loser-Style'}>{winner ? this.props.winner : this.props.loser}</p>
      </div>
    )
  }
}
