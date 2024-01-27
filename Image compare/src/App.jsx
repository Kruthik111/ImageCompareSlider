import { useEffect, useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import "./App.css";

function App() {
  const [img1Url, setimg1Url] = useState("/src/assets/image1.jpg");
  const [img2Url, setimg2Url] = useState("/src/assets/image2.jpg");

  const handleFile1Change = (e) => {
    alert("fff");
    if (e.target.files && e.target.files.length > 0) {
      setimg1Url(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleFile2Change = (e) => {
    alert("f2f");
    if (e.target.files && e.target.files.length > 0) {
      setimg2Url(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold">Slide images to see the changes</h1>
      <div>
        <div className=" flex justify-between my-5">
          <h3 className=" bg-gray-600 rounded-md p-2">before</h3>
          <h3 className="bg-gray-600 rounded-md p-2  ">after</h3>
        </div>
        <ReactCompareSlider
          className="h-4/5 min-h-96"
          itemOne={
            <ReactCompareSliderImage
              className="min-h-96 max-h-96"
              src={img1Url}
              srcSet={img1Url}
              alt="Image one"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={img2Url}
              srcSet={img2Url}
              alt="Image two"
            />
          }
        />
      </div>
      <div className="flex justify-around my-3 gap-x-2.5">
        <div className="flex rounded-md items-center hover:bg-red-400  p-1  bg-red-500 max-w-72">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            className=" h-9 w-7 "
          >
            <path d="M13 19c0 .7.13 1.37.35 2H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2h14a2 2 0 012 2v8.35c-.63-.22-1.3-.35-2-.35V5H5v14h8m.96-6.71l-2.75 3.54-1.96-2.36L6.5 17h6.85c.4-1.12 1.12-2.09 2.05-2.79l-1.44-1.92M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
          </svg>
          <label className="px-2" htmlFor="file2">
            Use your image
          </label>

          <input
            className="hidden"
            id="file1"
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            // this onchange event is not getting executed
            onChange={handleFile1Change}
          />
        </div>
        <div className="flex rounded-md items-center border-2 border-red-500 hover:bg-red-500  p-1  bg-transparent  gap-x-2.5">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="100%"
            width="1em"
            className=" h-9 w-7 "
          >
            <path d="M13 19c0 .7.13 1.37.35 2H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2h14a2 2 0 012 2v8.35c-.63-.22-1.3-.35-2-.35V5H5v14h8m.96-6.71l-2.75 3.54-1.96-2.36L6.5 17h6.85c.4-1.12 1.12-2.09 2.05-2.79l-1.44-1.92M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
          </svg>
          <label className="px-2" htmlFor="file2">
            Use your image
          </label>
          <input
            className="hidden"
            id="file2"
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            onChange={handleFile2Change}
          />
        </div>
      </div>
    </>
  );
}

export default App;
