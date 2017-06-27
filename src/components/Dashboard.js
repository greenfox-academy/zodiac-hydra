import React from "react";
import { Tables } from "./Tables";
import { Leaderboard } from "./Leaderboard";
import Nav2 from './Nav2';
import Ajax from './Ajax';

let ajax = new Ajax();

export class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      games: [],
      leaderBoard: [],
      user: {}
    };

    ajax.loadData('/user/' + window.sessionStorage.userID)
      .then((data) => {
        this.setState({
          user: data
        })
      });

    ajax.loadData('/games')
      .then((data) => {
        this.setState({
          games: data
        })
      });

    ajax.loadData('/leaderboard')
      .then((data) => {
        this.setState({
          leaderBoard: data
        })
      });
  }

  render() {

    let cols = [
        { key: 'name', label: 'Table name' },
        { key: 'big_blind', label: 'Big blind' },
        { key: 'max_players', label: 'Max players' },
    ];

    return (
      <div>
        <Nav2 user={this.state.user}/>
        <div className="dashboard">
          <Tables cols={cols} data={this.state.games}/>
          <Leaderboard leaders={this.state.leaderBoard}/>
        </div>
      </div>
    );
  }
}

export default Dashboard;
