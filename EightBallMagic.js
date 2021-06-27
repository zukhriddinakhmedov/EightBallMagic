let userName = ''
userName ? console.log('Hello, Jane!') :
console.log('Hello!')
let userQuestion = 'Will I become a werewolf tonight?'
console.log( userName + userQuestion )
const randomNumber = 
Math.floor(Math.random() *8)
let eightBall = 3
console.log(randomNumber)
switch(eightBall){
  case 0 :
  eightBall = 'It is certain'
  break;
  case 1 :
  eightBall = 'It is decidedly so'
  break;
  case 2:
  eightBall = 'Reply hazy try again'
  break;
  case 3 :
  eightBall = 'Can not predict now'
  break;
  case 4 :
  eightBall = 'Do not count on it'
  break;
  case 5 :
  eightBall = 'My sources say no'
  break;
  case 6 :
  eightball = 'Outlook not so good'
  break;
  case 7 :
  eightBall = 'Signs point to yes'
  break;
}
console.log(eightBall)
