/* eslint-disable react/prop-types */
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "../assets/css/DragAndDropUpload.css";
import upload from "../assets/img/upload.png";

export function DragAndDropUpload(props) {
  const onDrop = useCallback((acceptedFiles) => {
    props.handleFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <div {...getRootProps()} className="dropzone">
      <div
        className="upload"
        style={{ backgroundImage: `url(${upload})` }}
        alt="Imagen of upload"
      ></div>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="pDrop">Drop the files here ...</p>
      ) : (
        <p className="pUpload">Browse Files to Upload</p>
      )}
    </div>
  );
}
