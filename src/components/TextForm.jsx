import React, { useState } from "react";

const TextForm = (props) => {

  const [text, setText] = useState("")

  const changeTouppercase = function (){
    let newText = text.toUpperCase()
    setText(newText)

  }

  const onChangeText = function (e){
    let text = e.target.value
    setText(text)
  }

  const changeTolowercase = ()=> {
    let NewLower = text.toLowerCase()
    setText(NewLower)
  }
  const clearText = function (){
    let newText = ""
    setText(newText)

  }

  const copyText = ()=> {
    navigator.clipboard.writeText(text).then(()=>{
      alert("Text Copied To ClipBoard")
    }).catch(err =>{
      console.log("error copying text", err)
    })
    
  }

  return (
    <>
    
    <div>

      <h1 style={{color: props.mode === 'dark'?'white':'black'}}>{props.Heading}</h1>

      <div className="mb-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
        </label>
        <textarea onChange={onChangeText} style={{backgroundColor: props.mode === 'dark'?'white':'white'}} 
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          placeholder="Enter Your Text"
          value={text}
        ></textarea>
      </div>
        <button disabled={text.length===0} onClick={changeTouppercase} type="button" className="btn btn-primary my-1">To UPPERCASE</button>
        <button onClick={changeTolowercase} type="button" disabled={text.length===0}  className="btn btn-secondary mx-2 my-1">To LowerCase</button>
        <button onClick={copyText} type="button" disabled={text.length===0}  className="btn btn-secondary mx-2 my-1">Copy To ClipBoard</button>
        <button disabled={text.length===0}  onClick={clearText} type="button" className="btn btn-secondary mx-1 my-1">Clear</button>
    </div>

    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
    <h2 className="my-4">Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and  {text.length} characters</p>
    <p>{0.008 * text.split(" ").length}Minutes To Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing To Preview H"}</p>
    </div>

    </>
  );
};

export default TextForm;
