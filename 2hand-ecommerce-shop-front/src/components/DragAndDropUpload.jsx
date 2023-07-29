/* eslint-disable react/prop-types */
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "../assets/css/DragAndDropUpload.css";

export function DragAndDropUpload(props) {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    props.handleFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        // eslint-disable-next-line react/no-unescaped-entities
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}
