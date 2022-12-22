import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
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

  render() {
    return(
      <>
        <h2>Kalvium Gallery</h2>
        <div className='images'>
          {this.imageData().map(element => {
            console.log(element);
            return(<img src={element['img']} id={element.id} />)
          })}
        </div>
      </>
    )
  }
}
