import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const displayFinalPoem = () => {
    return props.allSubmissions.map((line) => {
      return (
        <p>{line}</p>
      )
    })
  }

  const onButtonClick = () => {
    
  }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <h4> {displayFinalPoem()} </h4>
        <h4>HI</h4>

      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input 
          type="button" 
          value="We are finished: Reveal the Poem" 
          className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
