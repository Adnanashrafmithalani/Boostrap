import React, {useState} from 'react'
   


export default function TextForm(props) {

    const handleLoClick= () =>{
        console.log('Upper was Clicked' + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }    
    const handleUpClick= () =>{
        console.log('Upper was Clicked' + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleClearClick= () =>{
        console.log('Upper was Clicked' + text);
        let newText = '';
        setText(newText)
        props.showAlert("Converted to clear text!", "success");
    }
    const handleonChange= (event) =>{
        console.log('On Change');
        setText(event.target.value);
    }
    const handleCopy = () =>{
        console.log('i am copy');
        var text= document.getElementById('MyBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Converted to copy text!", "success");
    }

    const handleextraspace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        props.showAlert("Converted to Extraspace!", "success");

    } 
    const [text, setText] = useState('Enter text here');
    return (
        <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#003E59'}}>
        <h1 >{props.heading}</h1>
<div class="mb-3">
<textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode==='dark'?'#003E59':'white', color:  props.mode==='dark'?'white':'black'}} id="MyBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleextraspace}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length}characters</p>
        <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length }Minustes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter somthing preview it here"}</p>
    </div>
    </>
  )
}
