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
    props.onButtonClick()
  }

  const constructFinalPoemRendering = (buttonClicked) => {
    if (props.showFinalPoem) {
      return (
        <div className="FinalPoem">
          <section className="FinalPoem__poem">
            <h3>Final Poem</h3>
            <h4> {displayFinalPoem()} </h4>
          </section>
        </div>
      );
    } else {
        return (
          <div className="FinalPoem__reveal-btn-container">
            <input 
            type="button" 
            value="We are finished: Reveal the Poem" 
            className="FinalPoem__reveal-btn" 
            onClick={onButtonClick}/>
          </div>
        );
    }         
  }

  return (
    <div>
      {constructFinalPoemRendering()}
    </div>
  );
}

export default FinalPoem;
