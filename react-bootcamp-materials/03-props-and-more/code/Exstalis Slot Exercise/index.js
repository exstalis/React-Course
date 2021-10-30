class App extends React.Component {
  render (){


    return (
      <Machine
        slotArray= {["💜", "💙", "🤍"]}
        winner = "Hooray! You win"
        loser = "Shucks! You lose"
      />
    )
  }
}




ReactDOM.render(<App />, document.getElementById('root'));
