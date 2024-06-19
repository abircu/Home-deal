import { useState } from 'react';
import PropTypes from 'prop-types';

const FormComponent = ({ step, setStep }) => {
    const [formData, setFormData] = useState({
        postcode: '',
        city: '',
        address: '',
        address_number: '',
    });
    const [formErrors, setFormErrors] = useState({
        postcode: '',
        city: '',
        address: '',
        address_number: '',
    });
    const [submitting, setSubmitting] = useState(false);

    const categories = {
        contractors: {
            name: 'contractors',
            description: 'Verbouwen en renoveren',
            site: 21,
            types: {
                house_expansion_installation: {
                    name: 'house_expansion_installation',
                    description: 'Aanbouw plaatsen',
                },
                building_house: {
                    name: 'building_house',
                    description: 'Nieuw huis bouwen',
                },
                attic_renovation: {
                    name: 'attic_renovation',
                    description: 'Zolder verbouwen',
                },
                garage_renovation: {
                    name: 'garage_renovation',
                    description: 'Garage verbouwen',
                },
                cellar_renovation: {
                    name: 'cellar_renovation',
                    description: 'Kelder verbouwen',
                },
                new_storey_installation: {
                    name: 'new_storey_installation',
                    description: 'Opbouw plaatsen',
                },
                renovation_general: {
                    name: 'renovation_general',
                    description: 'Verbouwen en renoveren - algemeen',
                },
            },
        },
        kitchen: {
            name: 'kitchen',
            description: 'Keuken',
            site: 255,
            types: {
                kitchen_remodeling: {
                    name: 'kitchen_remodeling',
                    description: 'Keuken verbouwen',
                },
            },
        },
        plumbers: {
            name: 'plumbers',
            description: 'Badkamer en toilet',
            site: 239,
            types: {
                bathroom_installation_renovation: {
                    name: 'bathroom_installation_renovation',
                    description: 'Badkamer plaatsen of verbouwen',
                },
                toilet_renovation: {
                    name: 'toilet_renovation',
                    description: 'Toilet verbouwen',
                },
            },
        },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let valid = true;
        const errors = {
            postcode: '',
            city: '',
            address: '',
            address_number: '',
        };

        
        if (!formData.postcode) {
            errors.postcode = 'Vul a.u.b. uw postcode in';
            valid = false;
        }
        if (!formData.city) {
            errors.city = 'Vul a.u.b. uw plaats in';
            valid = false;
        }
        if (!formData.address) {
            errors.address = 'Vul a.u.b. uw straatnaam in';
            valid = false;
        }
        if (!formData.address_number) {
            errors.address_number = 'Vul uw huisnummer in';
            valid = false;
        }

        setFormErrors(errors);
        return valid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            // Proceed to next step or submit form
            setSubmitting(true);
            // Example: submitFormData(formData);
        }
    };

    const progress = () => {
        if (validateForm()) {
            // Proceed to next step
            setStep(step + 1);
        }
    };

    return (
        <form className="form form-horizontal">
            <fieldset disabled={step !== 1}>
                {step === 1 && (
                    <form>
                        <div
                            className={`form-row  ${
                                formErrors.postcode
                                    ? 'sd-form-row-invalid'
                                    : 'sd-form-row-valid'
                            }`}
                        >
                            <div className="form-group col-11 col-md-7">
                                <div className="position-relative input-text">
                                    <input
                                        type="text"
                                        className={`form-control ${
                                            formErrors.postcode
                                                ? 'is-invalid'
                                                : ''
                                        }`}
                                        value={formData.postcode}
                                        onChange={handleChange}
                                        name="postcode"
                                        placeholder="Postcode"
                                        required
                                    />
                                    {formErrors.postcode && (
                                        <div className="text-danger">
                                            <div
                                                className="sd-mt-0_5 p-small"
                                                style={{ display: 'inline' }}
                                            >
                                                {formErrors.postcode}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div
                            className={`form-row  ${
                                formErrors.city
                                    ? 'sd-form-row-invalid'
                                    : 'sd-form-row-valid'
                            }`}
                        >
                            <div className="form-group col-11 col-md-7">
                                <div className="position-relative input-text">
                                    <input
                                        type="text"
                                        className={`form-control ${
                                            formErrors.city ? 'is-invalid' : ''
                                        }`}
                                        value={formData.city}
                                        onChange={handleChange}
                                        name="city"
                                        placeholder="Plaats"
                                        required
                                    />
                                    {formErrors.city && (
                                        <div className="text-danger">
                                            <div
                                                className="sd-mt-0_5 p-small"
                                                style={{ display: 'inline' }}
                                            >
                                                {formErrors.city}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div
                            className={`form-row  ${
                                formErrors.address
                                    ? 'sd-form-row-invalid'
                                    : 'sd-form-row-valid'
                            }`}
                        >
                            <div className="form-group col-11 col-md-7">
                                <div className="position-relative input-text">
                                    <input
                                        type="text"
                                        className={`form-control ${
                                            formErrors.address
                                                ? 'is-invalid'
                                                : ''
                                        }`}
                                        value={formData.address}
                                        onChange={handleChange}
                                        name="address"
                                        placeholder="Straat"
                                        required
                                    />
                                    {formErrors.address && (
                                        <div className="text-danger">
                                            <div
                                                className="sd-mt-0_5 p-small"
                                                style={{ display: 'inline' }}
                                            >
                                                {formErrors.address}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div
                            className={`form-row  ${
                                formErrors.address_number
                                    ? 'sd-form-row-invalid'
                                    : 'sd-form-row-valid'
                            }`}
                        >
                            <div className="form-group col-11 col-md-7">
                                <div className="position-relative input-text">
                                    <input
                                        type="text"
                                        className={`form-control ${
                                            formErrors.address_number
                                                ? 'is-invalid'
                                                : ''
                                        }`}
                                        value={formData.address_number}
                                        onChange={handleChange}
                                        name="address_number"
                                        placeholder="Huisnummer"
                                        required
                                        pattern="^([0-9]){1,}.*$"
                                    />
                                    {formErrors.address_number && (
                                        <div className="text-danger">
                                            <div
                                                className="sd-mt-0_5 p-small"
                                                style={{ display: 'inline' }}
                                            >
                                                {formErrors.address_number}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="step-navigation form-row">
                            <div className="col-md-7">
                                <button
                                    type="button"
                                    className="btn btn-arrow btn-primary w-100"
                                    onClick={progress}
                                    disabled={submitting}
                                >
                                    Ga naar stap 2
                                </button>
                                <div className="d-flex align-items-center justify-content-center sd-mt-0_5">
                                    <span className="check-small sd-mr-0_25"></span>
                                    <span>Gratis - Vrijblijvend</span>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
            </fieldset>
        </form>
    );
};

FormComponent.propTypes = {
    // Define propTypes if any props are passed from parent component

    step: PropTypes.number.isRequired,
    setStep: PropTypes.func.isRequired,
};

export default FormComponent;
