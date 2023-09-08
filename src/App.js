import './App.css';
import Bg from './bg.jpg'
import {useEffect,react, useState} from 'react';
function App() {
  const [points, setpoints] = useState(0);
  const [time, settime] = useState(0);
  const [maxScore, setmaxScore] = useState(localStorage.getItem("prevmax"));

  function startGame()
  {
    setpoints(0);
    let i=0;
    let s1=setInterval(() => {
      settime(Math.ceil(5-(i)/5));
      if(i==25)
      { 
        clearInterval(s1);
      }
      i++;

      //wacks
      let random=(Math.random()*100)%18 + 1;
      // console.log(Math.floor(random));
      document.getElementById(Math.floor(random)).style.color='red';
      document.getElementById(Math.floor(random)).innerText='🐸';

      setTimeout(() => {
        document.getElementById(Math.floor(random)).style.color='blue';
        document.getElementById(Math.floor(random)).innerText='🕳️';

      }, 700);
  
    }, 200);

  



  }

  function handleClick(num)
  {
    // console.log(document.getElementById(num).style.color);
    if(document.getElementById(num).style.color=='red')
    {
      document.getElementById(num).style.color='blue';
      let temp=points;
      setpoints(temp+1);
        if(temp+1>maxScore)
        { 
          setmaxScore(temp+1);
          localStorage.setItem("prevmax",temp+1);
        }
    }
  }


  return (
    <div className='container' >
      <img src={Bg} className='bgImg' />
        <div className='points'>
          <p>
             Points: {points}
            </p>
        </div>
        <div className='board'>
            <div className="row">
                <div className="mole" id='1' style={{color:'blue'}} onClick={()=>handleClick(1)}>🕳️</div>
                <div className="mole" id='2'  style={{color:'blue'}} onClick={()=>handleClick(2)}>🕳️</div>
                <div className="mole" id='3'  style={{color:'blue'}} onClick={()=>handleClick(3)}>🕳️</div>
                <div className="mole" id='4'  style={{color:'blue'}} onClick={()=>handleClick(4)}>🕳️</div>
                <div className="mole" id='5'  style={{color:'blue'}} onClick={()=>handleClick(5)}>🕳️</div>
                <div className="mole" id='6'  style={{color:'blue'}} onClick={()=>handleClick(6)}>🕳️</div>
            </div>
            <div className="row">
                <div className="mole" id='7' style={{color:'blue'}}  onClick={()=>handleClick(7)}>🕳️</div>
                <div className="mole" id='8' style={{color:'blue'}}  onClick={()=>handleClick(8)}>🕳️</div>
                <div className="mole" id='9' style={{color:'blue'}}  onClick={()=>handleClick(9)}>🕳️</div>
                <div className="mole" id='10' style={{color:'blue'}}  onClick={()=>handleClick(10)}>🕳️</div>
                <div className="mole" id='11' style={{color:'blue'}}  onClick={()=>handleClick(11)}>🕳️</div>
                <div className="mole" id='12' style={{color:'blue'}}  onClick={()=>handleClick(12)}>🕳️</div>
            </div>
            <div className="row">
                <div className="mole" id='13' style={{color:'blue'}} onClick={()=>handleClick(13)}>🕳️</div>
                <div className="mole" id='14' style={{color:'blue'}} onClick={()=>handleClick(14)}>🕳️</div>
                <div className="mole" id='15' style={{color:'blue'}} onClick={()=>handleClick(15)}>🕳️</div>
                <div className="mole" id='16' style={{color:'blue'}} onClick={()=>handleClick(16)}>🕳️</div>
                <div className="mole" id='17' style={{color:'blue'}} onClick={()=>handleClick(17)}>🕳️</div>
                <div className="mole" id='18' style={{color:'blue'}} onClick={()=>handleClick(18)}>🕳️</div>
            </div>
            
        
        </div>
    <div className='detials'>
        <h1>
          Timer: <strong>{time}</strong>
        </h1>
        <p>

          MaxScore: <strong>{maxScore}</strong>
        </p>
    
          <button className="play" onClick={startGame}>
          Play
        </button>
    </div>
    </div>
  );
}

export default App;
