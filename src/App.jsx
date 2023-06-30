import { useState } from "react";
import { nanoid } from 'nanoid';
import loremPara from "./data";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const id = nanoid();
  const handlerSubmit = (e) => {
    e.preventDefault();
    let amoutof = parseInt(count);
    console.log(amoutof);
    setText(loremPara.slice(0, amoutof));
  };

  return (
    <section className="section-center">
      <h4>tried of Lorem ipsome Pregraphs</h4>
      <form className="lorem-form" onSubmit={handlerSubmit}>
        <label htmlFor="amount">paragraphs : </label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          Genrate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((textData, id) =>{
          console.log('nanoid : ', id);
          return <p key={id}>{textData}</p>
        })}
      </article>
    </section>
  );
}

export default App;
