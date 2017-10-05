import React, { Component } from 'react';



class EvenAndOdd extends Component {
constructor(){
    super();
    this.state = {
        evenArray:[],
        oddArray: [],
        userInput:'',
    }
}

    updateUser(val){
        this.setState({userInput:val})
    }

    toyProblem(userInput) {
        const arr =userInput.split(',');
        const evens = [];
        const odds = [];
    
            for ( var i = 0; i < arr.length; i++ ) {
            if ( arr[i] % 2 === 0 ) {
                evens.push( parseInt(arr[i], 10) );
            } else {
                odds.push( parseInt(arr[i], 10) );
            }
        }
        this.setState({ evenArray: evens, oddArray: odds });
    }

    
  render() {
      return(
        <div className="puzzleBox evenAndOdd">
            <h1>Evens and Odds</h1>
            <input className="inputLine" type="text" onChange={ (e) => {this.updateUser(e.target.value); }}/>
            <button className="confirmationButton" onClick={ () => { this.toyProblem(this.state.userInput); } }>Seperate Evens and Odds</button>
            <span className="resultsBox">{JSON.stringify(this.state.evenArray)}</span>
            <span className="resultsBox">{JSON.stringify(this.state.oddArray)}</span>
        </div>
       )
    }
}

export default EvenAndOdd;

// Create an onChange prop for the input element that updates the value of userInput on state.

// Create an onClick prop for the button element that calls a method on the class:
// This method should solve the toy problem.
// This method should update the value of evenArray and oddArray on state.



// Assign one span element to display the value of evenArray.
// Assign the other span element to display the value of oddArray.
