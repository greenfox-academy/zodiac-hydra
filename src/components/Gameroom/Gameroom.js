import React from 'react';
import {connect} from 'react-redux';
import Table from '../Table/Table';
import Header from '../Header/Header';

export class GameRoomComp extends React.Component {

  constructor(props) {
    super(props);
    this.roomID = window.location.pathname.slice(10);
  }

  render() {
    return(
      <section>
        <Header table_name={this.props.tables[this.roomID-1].name} big_blind={this.props.tables[this.roomID-1].big_blind} gameID={this.roomID}/>
        <Table/>
        <RoundEnd/>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    tables: state.tables.tables
  }
}

let gameRoom = connect(mapStateToProps)(GameRoomComp);

export default gameRoom;
