import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  return(
    <>
      <h2>Kalvium Gallery</h2>
      <div className='images'>
        {imageData().map(element => {
          console.log(element);
          return(<img src={element['img']} id={element.id} />)
        })}
      </div>
    </>
  )
}

export default App;
