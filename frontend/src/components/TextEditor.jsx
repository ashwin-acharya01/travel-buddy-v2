import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({onTextChangeFunction}) => {
  const [value, setValue] = useState('');
  function handleOnChange(val){
    setValue(val);
    onTextChangeFunction(val);
  }

  return <ReactQuill theme="snow" value={value} onChange={handleOnChange} />;
}

export default TextEditor;