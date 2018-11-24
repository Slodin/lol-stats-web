import React, { Component } from 'react';
import Match from './Match.js';

class Matchlist extends Component {
  render() {
    let matchlist = this.props.matchlist
    return (
      <div class="Matchlist">
        {matchlist.map((match, i)=>{
          return <Match match={match} key={i}/>
        })}
      </div>
    );
  }
}

export default Matchlist;
