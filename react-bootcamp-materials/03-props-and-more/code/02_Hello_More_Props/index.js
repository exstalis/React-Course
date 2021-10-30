class App extends React.Component {
	render() {
		return (
			<div>
				<Hello
					to="Atomsk"
					from="Exstalis"
					bigBangs={11}
					myArray = {[1,2,3,5,8,13]}
					img="galaxy.jpg"
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
