/* eslint-disable react/prop-types */
import "../assets/css/ProgressBar.css";

export function ProgressBar({ currentStep }) {
  return (
    <div className="progress-bar">
      <div className="step">
        <div className={`circle ${currentStep === 1 ? "active" : ""}`}>1</div>
        <div className="label">Select Item</div>
      </div>
      <div className="step">
        <div className={`circle ${currentStep === 2 ? "active" : ""}`}>2</div>
        <div className="label">Propose something to exchange</div>
      </div>
      <div className="step">
        <div className={`circle ${currentStep === 3 ? "active" : ""}`}>3</div>
        <div className="label">Summary</div>
      </div>
    </div>
  );
}
