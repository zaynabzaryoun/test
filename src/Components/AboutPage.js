
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
function AboutPage(){
    const [inputText, setInputText] = useState("");
    const [handleParallelInput, setHandleParallelInput] = useState("");

    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setText(inputText);
    };

    return(
        <div>
            <h1>about</h1>
            <Link to="/">go to home page</Link>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="parallel">type and see the change online:</label>
                    <input
                        type="text"
                        name="parallel"
                        id="parallel"
                        value={handleParallelInput}
                        onChange={(e) => setHandleParallelInput(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="describe">type and submit to see the changes:</label>
                    <input
                        type="text"
                        name="describe"
                        id="describe"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                </div>
                <Button type="submit">submit</Button> 
            </form>
            {text && <p>{text}</p>}
            {handleParallelInput && <p>{handleParallelInput}</p>}
        </div>
    );
}
export default AboutPage;