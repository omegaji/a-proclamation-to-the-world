import './App.css';
import scroll from '../src/images/purple-scroll3.png'
const A_POEM_FOR_MY_LOVE_JINU = {
  0: [
    'A proclamation to the world',
    'Needs to be made today',
    'In my heart she nestled',
    'A woman beautiful in every way.❤️'
  ],
  1: [
    'An introduction is in order',
    'But for someone so great',
    'Compliments fall short and meager',
    'So a poem is all I can create.✍️'
  ],
  2: [
    'A noteworthy fool engulfed with anger',
    'Approaches her feeling so lame',
    'He gets lucky avoiding danger',
    `As She's always quenching flame.🔥` 
  ],
  3: [
    'A book with pages barely made to bind',
    'Words are messy and not so grand',
    'Written by his heart, his mind',
    'How she quickly learns and understands🤓'
  ]
  ,
  4: [
    'The world leaves incomplete',
    `A plenty of important pursuits`,
    `But not her, as she's known for a feat`,
    `That finishes all, harvesting fruits🍎`
  ],
  5: [
    `A greiving world we all know today`,
    `pain that is plenty and kindness scant`,
    `But he still moves fearlessly on his way`,
    `It's because of her, as beside him she sat💺`
  ],
  6: [
    `Whenever the sun goes dark`,
    `It doesn't affect one lucky guy`,
    `For he looks at his heart's mark`,
    `And She's just like a star in the sky🌟`
  ]

}


function PoemOverlay({text}) {
  return <p className="overlay-text poem">{text}</p>;
}
function Poem({text}) {
  return <p className="poem">
    <span>
    <img src = "/butterfly.png" alt="butterfly" className = "butterfly"></img>

    </span>
    {text}
    <img src = "/butterfly.png" alt="butterfly" className = "butterfly"></img>
    </p>;
}

function App() {
  return (
    <div className="App">
       <Poem text = "A proclamation to the world"/>
       <div className ="overlay-poem">
       {
       Object.keys(A_POEM_FOR_MY_LOVE_JINU).map((_,index) => {
        let para = A_POEM_FOR_MY_LOVE_JINU[index]
        
        return <>
          {
            para.map((element,_) => {
              return <PoemOverlay text = {element}/>
            })
          }
          <p className = "para-spacing"></p>
          </>
       
       })
       }
       </div>
      <img src = {scroll} alt="My scroll" className= "scroll"
      ></img>
    </div>
  );
}

export default App;
