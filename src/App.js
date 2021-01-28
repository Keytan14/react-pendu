import { Component } from 'react';
import './App.css';

import Letter from './Letter'
import Button from './Button'
import Info from './Info'
import Count from './Count'

const MOT = 'CACA'
const KEY = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'] 
const TRIES = 10
const MOTS = ['GLAND','AVENIR','JUGE','ONCLE','IMMOBILE','COMTE','PITIE','DESSINER',
'VERDICT','LAMPE','PAIEMENT','VERT','TOUCHER','BANDEAU','HYDROGÈNE','TOME',
'PRODUIRE','AGITER','RESPIRER','TORPILLE'] 


class App extends Component{
  constructor(props){
    super(props)
    this.state = this.initState();
  }

  initState = () => ({
      word: this.generateWord(),
      mask: this.generateMask(),
      keyboard: this.generateKeyboard(),
      tries: TRIES,
      usedLetters: [],  
      gameState:'PLAY',
    }
  )

  generateWord(){
    const motIdx = Math.floor(Math.random() * Math.floor(MOTS.length))
    const word = MOTS[motIdx].split('')
    console.log(word)
    return word
  }

  generateMask(){
    var mask = []
    while (mask.length < MOT.length) {
      mask.push('0')
    }
    console.log(mask)
    return mask
  }

  generateKeyboard(){
    return KEY
  }

  getFeedBack(mask, index){
    if(mask[index] === '1'){
      return 'visible'
    }
    return 'hidden'
  }
  

  // Arrow fx for binding
  handleClick = (button) => {
    const { word, tries, usedLetters } = this.state

    const matched = word.includes(button) 

    const newtries = tries-1

    this.setState({usedLetters: [...usedLetters, ...button], tries: newtries })

    if (matched) {
        this.updateLetters(button)
    }
    this.changeState()
    console.log(this)
  }

updateLetters(button){
  const { word, mask } = this.state

  var idx = word.indexOf(button)
  var newMask = mask

  while (idx !== -1) {
    newMask[idx] = '1'
    idx = word.indexOf(button, idx + 1);
  }
  this.setState({ mask: newMask })
  
}


  isUsed(button){
    const {usedLetters} = this.state

    const letterIsUsed = usedLetters.includes(button)

    return letterIsUsed
  }

  restart = () => {
    console.log("RESTART")
    this.setState(this.initState())
  }

  changeState(){
      const {mask, tries} = this.state

      if(tries <= 1){
        const newGameState = 'LOST'
        this.setState({gameState: newGameState})
        return 'LOST'
      }
  
      if(mask.every(letterfinded => letterfinded === '1' )){
        const newGameState = 'WIN'
        this.setState({gameState: newGameState})
        return 'WIN'
      } else {
        const newGameState = 'PLAY'
        this.setState({gameState: newGameState})
        return 'PLAY'
      }

  
  }



  counter(){
    const {tries} = this.state
    return tries
  }

  render(){
    const {word, mask, keyboard, gameState} = this.state

    return (
      <div className="hanged">

        <div className="haut">
          {word.map( (letter, index) => 
            <Letter 
              letter = {letter}
              feedback={this.getFeedBack(mask, index)}
            />
          )}

          <Count count={this.counter()}/>
        </div>
        

        { gameState === 'PLAY' &&
          <div className="keyboard">
            {keyboard.map( (button, index) => (
                <Button 
                button={button}
                isUsed={this.isUsed(button)}
                key={index}
                onClick={this.handleClick}
                />
              ))}
          </div>
        }
        
        
        {gameState !== 'PLAY' && <Info info={gameState} onClick={this.restart}/>}
        

      </div>
    )
  }

}

export default App;
