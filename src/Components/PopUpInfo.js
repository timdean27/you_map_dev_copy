import React, { useState, useEffect ,useCallback } from "react";
import Dropzone from "react-dropzone";
import {useDropzone} from 'react-dropzone'

const PopUpInfo = ({ selectedTest, selectedMarker }) => {
  const [modelOpening, setModelOpening] = useState(false);
  const [title, setTitle] = useState("Title");
  const AddInformationFunction = () => {
    if (modelOpening) setModelOpening(false);
    else setModelOpening(true);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    alert("A name was submitted: ");
    e.preventDefault();
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
      console.log(file)
    })
    
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})


  return (
    <div>
      <button onClick={AddInformationFunction}>
        {modelOpening ? <div>Close</div> : <div>Edit</div>}
      </button>
      {modelOpening ? (
        <div>
          Model is Open
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                id="Title"
                type="text"
                placeholder={title}
                onChange={handleChange}
              />
            </label>
            <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default PopUpInfo;
