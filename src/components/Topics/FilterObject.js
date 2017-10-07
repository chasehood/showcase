import React, { Component } from 'react';



class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
                  employees: [{name: 'Jimmy Joe',
                                title: 'Hack0r',
                                age: 12, },
                                {name: 'Jeremy Schrader',
                                age: 24,
                                hairColor: 'brown'},
                                {name: 'Carly Armstrong',
                                title: 'CEO',}],
            userInput: '',
            filteredEmployees: [],
        }
    }
        updateUserInput(val){
        this.setState({ userInput: val })
    };
    toyProblem(prop){

        var filteredEmployees = [];
        var employees = this.state.employees;

        for ( var i=0; i<employees.length; i++) {
            if(employees[i].hasOwnProperty(prop)) {
            filteredEmployees.push(employees[i]);
            }
        }
            this.setState({ filteredEmployees: filteredEmployees });
        }

  render() {
      return(
        <div className="puzzleBox filterPbjectPB">
            <h1>Filter Object</h1>
            <span className="puzzleText">{JSON.stringify(this.state.employees)}</span>
            <input type="text" className="inputLine" onChange={ (e) => {this.updateUserinput(e.target.value); }}/>
            <button className="confirmationButton" onClick={ () => { this.toyProblem(this.state.userInput); } }>Filter</button>
            <span className="resultsBox filterObjectRB">{this.state.filteredEmployees}</span>
        </div>
       )
    }
}

export default FilterObject;



// Assign the first span element the value of unFilteredArray.
// Assign the last span element the value of filteredArray.
