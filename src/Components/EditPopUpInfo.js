import React, { useState, useEffect, useCallback } from "react";
import Dropzone from "react-dropzone";
import { useDropzone } from "react-dropzone";

const EditPopUpInfo = ({ selectedMarker , locationsMarked , setLocationsMarked, setEditPopupInfo}) => {
  const [title, setTitle] = useState("Title");

  const handleChange = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("A name was submitted: ");
    e.preventDefault();
    setEditPopupInfo(false)
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
      console.log(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (

     
 
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

  );
};

export default EditPopUpInfo;
