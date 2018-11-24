import React, { Component } from 'react';
import './styles.css'

const assetVersion = "8.23.1";
const ddragonCDN = process.env.REACT_APP_DDRAGONCDN;

class Match extends Component {
  render(){
    const match = this.props.match;
    return (
      <div class={match.outcome ? "MatchContent Win": "MatchContent Lose"}>
        <div class="GameSettingInfo">
          <div class="ChampionIcon">
            <img src={this.getAssetImage(match.championid, "champion", ".png")} width="100" height="100" alt={match.championname}/>
          </div>
          <div class="ChampionName">{match.championname} ({match.championlevel})</div>
        </div>
        <div class="SummonerSpell">
          {match.summonerspells.map((spell, i)=>{
            return(
              <div class="Spell" key={i}>
                <img src={this.getAssetImage(spell.image.full, "spell")} width="35" height="35" alt={spell.name}/>
              </div>
            )
          })}
        </div>
        <div class="Runes">
          <div class="Primary">
            Primary Paths:
            {match.summonerrunes.primary.map((rune, i)=>{
              return(
                <div class="Rune" key={i}>
                  {rune.name}
                </div>
              )
            })}
          </div>
          <div class="Secondary">
            Secondary Paths:
            {match.summonerrunes.secondary.map((rune, i)=>{
              return(
                <div class="Rune" key={i}>
                  {rune.name}
                </div>
              )
            })}
          </div>
        </div>
        <div class="Items">
          {match.items.map((item, i) =>{
            return(
              <div class="Item" key={i}>
                <img src={this.getAssetImage(item.id, "item", ".png")} width="25" height="25" alt={item.name}/>
              </div>
            )
          })}
        </div>
        <div class="GameStats">
          <div class="Outcome"><b>{match.outcome ? "Victory": "Defeat"}</b></div>
          <div class="KDA">{match.kills} / {match.deaths} / {match.assists}</div>
          <div class="KDARatio">{match.kda >= 0 ? match.kda.toFixed(2): "Perfect"} KDA Ratio</div>
          <div class="TotalCreepScore">TCS: {match.totalcreepscore}</div>
          <div class="CreepScorePerMin">CSPM: {match.creepscorepermin.toFixed(2)}</div>
        </div>
  	  </div>
    )
  }

  getAssetImage(fileName, type, fileType="", version=assetVersion){
    return ddragonCDN + version + "/img/" + type + "/" + fileName + fileType;
  }
}

export default Match;
