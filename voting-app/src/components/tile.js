/**
 * Created by Hew4803 on 5/31/17.
 */
import React from 'react';
import imgPath from '../img/plus.png';

const tileStyle = {
    display: 'block',
    fontSize: 20,
    color: 'black',
    border: 'solid 2px black'
};
const languageStyle= {
    verticalAlign: 'top',
    width: 300,
    lineHeight: 2,
    display: 'inline-block'};
const votesStyle={
    verticalAlign: 'top',
    borderRadius: '50%',
    border:'solid 2px black',
    lineHeight: 2.5,
    margin: 10,
    textAlign:'center',
    width: 50,
    display: 'inline-block'};
const imgStyle={
    verticalAlign: 'top',
    width: 75,
    display: 'inline-block'};

class Tile extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            votes: 0
        }
    }

    handleClick=()=>{
        this.setState({
            votes: this.state.votes+1
        })
    }

    render(){
        const {language, votes} = this.props;

        return (
            <div className='tile' style={tileStyle}>
                <p style={votesStyle}>{this.state.votes}</p>
                <p style={languageStyle}>{language}</p>
                <img src={imgPath} alt="plus" style={imgStyle} onClick={this.handleClick}/>

            </div>
        )
    }


}

export default Tile;