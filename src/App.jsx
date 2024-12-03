import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setsteps] = useState(1);
  const [isopen, setisopen] = useState(true);

  const nexthandler = () => {
    if (step < 3) {
      // setsteps(step + 1);
      setsteps((s) => step + 1);
    }
  };

  const privioushandler = () => {
    if (step > 1) {
      // setsteps(step - 1);
      setsteps((s) => step - 1);
    }
  };

  const closehandler = () => {
    setisopen(!isopen);
  };
  // const step = 2;

  return (
    <div>
      <button onClick={closehandler} className="close">
        X
      </button>
      {isopen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              onClick={privioushandler}
              style={{ backgroundColor: "#7950f2", color: "#ffff" }}
            >
              Previous
            </button>
            <button
              onClick={nexthandler}
              style={{ backgroundColor: "#7950f2", color: "#ffff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
