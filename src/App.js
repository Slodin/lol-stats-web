import React, { Component } from 'react';
import Matchlist from './components/Match/Matchlist.js';
import Search from './components/Match/Search.js';

const apiServerPro = process.env.REACT_APP_SERVER_PRO;
const apiServerAddress = process.env.REACT_APP_SERVER;
const apiServerPort = process.env.REACT_APP_SERVER_PORT;

class App extends Component {
  constructor(props) {
    super(props)
    this.searchHandler=this.searchHandler.bind(this);
    this.state = {summoner: {},matchList: [], searchName: "", loaded: false,error: false}
  }

  async searchHandler(){
    this.setState({error: false});
    try{
      let data = await fetch(apiServerPro + apiServerAddress + ":" + apiServerPort + "/getplayerstats/"+this.state.searchName+"/0/5");
      let matchlist = await data.json();
      this.setState({
        summoner: {
            name: matchlist.summonername,
            summonerlevel: matchlist.summonerlevel
        },
        matchlist: matchlist.matches
      });
      this.setState({loaded: true});
    }catch(e){
      console.log(e);
      this.setState({error: true});
    }
  }

  render() {
    return (
      <div className="App">
        <div class="Search">
          <input type="text" onChange={(evt) => {this.setState({searchName: evt.target.value})}} />
          <input type="button" value="Search" onClick={this.searchHandler}/>
        </div>
        <div class="Summoner">
          <div class="SummonerName">Summoner Name: {this.state.summoner.name}</div>
          <div class="SummonerName">Summoner Level:{this.state.summoner.summonerlevel}</div>
        </div>
        {this.state.loaded?(
          <Matchlist matchlist={this.state.matchlist}/>
        ):(
          <div class="NotLoaded">No Data Loaded Yet!</div>)
        }
      </div>
    );
  }
}

export default App;
