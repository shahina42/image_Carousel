import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
constructor(){
    super()
    this.state={
        index:0
    }
}

next=()=>{
    this.setState(()=>{
        return{
            index:(this.state.index!=images.length-1)?(this.state.index+1):(0)
        }
    })
}

previous=()=>{
    this.setState(()=>{
        return{
            index:(this.state.index!=0)?(this.state.index-1):(2)
        }
    })
}

    render(){
        return(
            <>
             <div className="body">
                <div className="box">
                    <div className="container">
                        <ArrowBackIosIcon className="left" fontSize="large" onClick={this.previous} />
                            <h1>{images[this.state.index].title}</h1>
                            <h2>{images[this.state.index].subtitle}</h2>
                            <div><img src={images[this.state.index].img} alt="" /></div>
                        <ArrowForwardIosIcon className="right" fontSize="large" onClick={this.next}/>
                    </div>
                </div>
             </div>
            
            
            
            </>
           
        )
    }
  
}

export default Carousel;