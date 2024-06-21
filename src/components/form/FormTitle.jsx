/* eslint-disable react/prop-types */

const FormTitle = ({ step }) => {
    return (
        <div id="formTitle">
            {step === 1 && (
                <h2 className="form-headline">
                    Wat is de locatie van uw project?
                </h2>
            )}
            {step === 2 && (
                <h2 className="form-headline ng-hide">
                    Wat zijn de details van uw project?
                </h2>
            )}
            {step === 3 && (
                <h2 className="form-headline ng-hide">
                    Ontvang gratis offertes van aannemers
                </h2>
            )}
        </div>
    );
};

export default FormTitle;
