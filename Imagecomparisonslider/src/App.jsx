import React from "react";
import "./App.css";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const App = () => {
  return (
    <>
      <h1>Slide images to see the changes</h1>
      <div id="sliderContainer">
        <div className="content">
          <h3>before</h3>
          <h3>after</h3>
        </div>
        <ReactCompareSlider 
          id="one"
          itemOne={
            <ReactCompareSliderImage
              src="https://e0.pxfuel.com/wallpapers/84/195/desktop-wallpaper-yash-rocking-star-yash.jpg"
              srcSet="https://e0.pxfuel.com/wallpapers/84/195/desktop-wallpaper-yash-rocking-star-yash.jpg"
              alt="Image one"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0bdLM9aw9v4_0jZqaYIWY-EpXFPhjTfoRdccWtBLmUap8kWvuQM2DokPWjdCU8OlN5g4&usqp=CAU"
              srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0bdLM9aw9v4_0jZqaYIWY-EpXFPhjTfoRdccWtBLmUap8kWvuQM2DokPWjdCU8OlN5g4&usqp=CAU"
              alt="Image two"
            />
          }
        />
      </div>
    </>
  );
};

export default App;
