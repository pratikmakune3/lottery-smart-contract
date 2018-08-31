import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import lottery from './lottery.js';

import web3 from './web3';

class App extends Component {


  constructor(props) {
    // Inside the constructor, we're initializing the state obj.
    super(props);

    this.state = { 
      manager : '',
      balance : '',
      players : [],
      value : '',
      message : '' 
    };
  }

  // With ES6,we can use the following syntax also
    
    /*
      state = {
        manager : ''
      }
    */

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    const players = await lottery.methods.getPlayers().call();
    this.setState({ manager, players, balance });
  };

  // onSubmit requires to submit the transaction. Enter function.
  onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({ message : 'Waiting on transaction success...' });

    await lottery.methods.enter().send({
      from : accounts[0],
      value : web3.utils.toWei(this.state.value, 'ether')
    });

    this.setState({ message : 'Successfully Entered !' });

  };

  onClick = async () => {
    const accounts = await web3.eth.getAccounts();

    this.setState({ message : 'Waiting on picking winner...' });

    await lottery.methods.pickWinner().send({
      from : accounts[0]
    });

    this.setState({ message : 'Picked the winner...' });

  };

  render() {
    web3.eth.getAccounts()
      .then(console.log);

    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by {this.state.manager}.
          There are currently {this.state.players.length} people entered,
          competing to win {web3.utils.fromWei(this.state.balance, 'ether')} ethers! 
        </p>
        
        <hr />

       <form onSubmit={this.onSubmit}>
        <h4>Want to try your luck ?</h4>
        <label>Amount of ether to enter : </label>
        <input
          value = {this.state.value}
          onChange = { event => this.setState({ value : event.target.value })}
         />
        <br />
        <button>Enter</button>
        </form>

        <h2>{this.state.message}</h2>

        <hr />
        <h4>Ready to pick a winner ?</h4> 
        <button onClick={this.onClick}>Pick a winner!</button> 
        <hr />

        <h2>{this.state.message}</h2>

      </div>  
    );
  }
}

export default App;
