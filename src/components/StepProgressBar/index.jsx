import PropTypes from "prop-types";

const StepProgressBar = ({ step, setStep }) => {
  const toStep = (stepNumber) => {
    setStep(stepNumber);
  };

  return (
    <div className="lead-step-progress-bar">
      <div
        className={`step sd-mr-1 sd-mr-lg-2 ${step === 1 ? "active" : ""} ${
          step > 1 ? "completed" : ""
        }`}
        onClick={() => toStep(1)}
      >
        <div className="step-circle rounded-circle">1</div>
        <span className="step-label sd-ml-0_5">Regio</span>
      </div>
      <div
        className={`step sd-mr-1 sd-mr-lg-2 ${step === 2 ? "active" : ""} ${
          step > 2 ? "completed" : ""
        }`}
        onClick={() => toStep(2)}
      >
        <div className="step-circle rounded-circle">2</div>
        <span className="step-label sd-ml-0_5">Opdracht</span>
      </div>
      <div
        className={`step ${step === 3 ? "active" : ""} ${
          step > 3 ? "completed" : ""
        }`}
        onClick={() => toStep(3)}
      >
        <div className="step-circle rounded-circle">3</div>
        <span className="step-label sd-ml-0_5">Ontvang offertes</span>
      </div>
    </div>
  );
};

StepProgressBar.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
};

export default StepProgressBar;
