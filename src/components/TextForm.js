import React, { useState } from 'react';

export default function TextForm(props) {
  const HandleupClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  }

  const HandlelowClick = () => {
    let newtext2 = text.toLowerCase();
    setText(newtext2);
  }

  const HandleonChange = (event) => {
    setText(event.target.value);
  }

  const HandleclearClick = () => {
    let newtext3 = " ";
    setText(newtext3);
  }

  const [text, setText] = useState('enter text here');

  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">TextArea</label>
          <textarea className="form-control" value={text}
            style={{
              color: props.mode === 'dark' ? 'white' : 'black',
              backgroundColor: props.mode === 'dark' ? 'black' : 'white'
            }}
            onChange={HandleonChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={HandleupClick}>Convert to upper case</button>
        <button className="btn btn-success mx-2" onClick={HandlelowClick}>Convert to lower case</button>
        <button className="btn btn-danger mx-2" onClick={HandleclearClick}>Clear</button>
      </div>

      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Text Contents</h2>
        <p><b>{text.split(" ").filter(word => word !== "").length} words and {text.length} characters</b></p>
        <p>{0.008 * text.split(" ").filter(word => word !== "").length} mins to read</p>
        <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
