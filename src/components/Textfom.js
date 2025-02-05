import React, { useState, useEffect } from 'react';

export default function Textfom(props) {
    const [text, setText] = useState("");

    useEffect(() => {
        document.body.style.backgroundColor = props.mode === 'dark' ? '#1e272e' : 'white';
        document.body.style.color = props.mode === 'dark' ? '#d2dae2' : 'black';
    }, [props.mode]);

    const handleUpClick = () => {
        setText(text.toUpperCase());
    };

    const handleLoClick = () => {
        setText(text.toLowerCase());
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    };

    const handleClear = () => {
        setText("");
    };

    const handleRemoveSpaces = () => {
        setText(text.replace(/\s+/g, ' ').trim());
    };

    return (
        <div className={`container my-3 ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}> 
            <h1>{props.heading}</h1>
            <textarea 
                className="form-control my-3" 
                value={text} 
                onChange={handleOnChange} 
                id="exampleFormControlTextarea1" 
                rows="12" 
                style={{ 
                    backgroundColor: props.mode === 'dark' ? '#2f3640' : 'white', 
                    color: props.mode === 'dark' ? '#dcdde1' : 'black',
                    border: props.mode === 'dark' ? '1px solid #718093' : '1px solid #ced4da'
                }}
            ></textarea>

            <button className="btn btn-success mx-2" onClick={handleUpClick} style={{ backgroundColor: '#28a745', color: 'white' }}>Uppercase</button>
            <button className="btn btn-info mx-2" onClick={handleLoClick} style={{ backgroundColor: '#17a2b8', color: 'white' }}>Lowercase</button>
            <button className="btn btn-warning mx-2" onClick={handleCopy} style={{ backgroundColor: '#ffc107', color: 'black' }}>Copy Text</button>
            <button className="btn btn-danger mx-2" onClick={handleClear} style={{ backgroundColor: '#dc3545', color: 'white' }}>Clear Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleRemoveSpaces} style={{ backgroundColor: '#007bff', color: 'white' }}>Remove Extra Spaces</button>

            <div className="my-3">
                <h2>Text Summary</h2>
                <p>{text.split(/\s+/).filter(word => word !== "").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter(word => word !== "").length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </div>
    );
}
