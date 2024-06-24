/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import FormTitle from './FormTitle';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import emailjs from '@emailjs/browser';

const FormComponent = ({ step, setStep }) => {
    const form = useRef();

    const [formData, setFormData] = useState({
        postcode: '',
        city: '',
        address: '',
        address_number: '',
        company_name: '',
        gender: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
    });
    const [formErrors, setFormErrors] = useState({
        postcode: '',
        city: '',
        address: '',
        address_number: '',
        company_name: '',
        gendder: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
    });
    const [touched, setTouched] = useState({
        postcode: false,
        city: false,
        address: false,
        address_number: false,
        company_name: false,
        gender: false,
        first_name: false,
        last_name: false,
        phone_number: false,
        email: false,
    });

    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setTouched({
            ...touched,
            [name]: true,
        });
        validateField(name, value);
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched({
            ...touched,
            [name]: true,
        });
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let errorMessage = '';

        if (!value) {
            switch (name) {
                case 'postcode':
                    errorMessage = 'Vul a.u.b. uw postcode in';
                    break;
                case 'city':
                    errorMessage = 'Vul a.u.b. uw plaats in';
                    break;
                case 'address':
                    errorMessage = 'Vul a.u.b. uw straatnaam in';
                    break;
                case 'address_number':
                    errorMessage = 'Vul uw huisnummer in';
                    break;
                case 'company_name':
                    errorMessage = 'Vul a.u.b. uw bedrijfsnaam in';
                    break;
                case 'gender':
                    errorMessage = 'Kies a.u.b. uw aanhef';
                    break;
                case 'first_name':
                    errorMessage = 'Vul a.u.b. uw voornaam in';
                    break;
                case 'last_name':
                    errorMessage = 'Vul a.u.b. uw achternaam in';
                    break;
                case 'phone_number':
                    errorMessage = 'Vul a.u.b. uw telefoonnummer in';
                    break;
                case 'email':
                    errorMessage = 'Vul a.u.b. uw e-mailadres in';
                    break;
                default:
                    break;
            }
        }

        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
        }));
    };

    const validateForm = () => {
        let valid = true;
        const errors = {
            postcode: '',
            city: '',
            address: '',
            address_number: '',
            company_name: '',
            gender: '',
            first_name: '',
            last_name: '',
            phone_number: '',
            email: '',
        };

        // Validation logic based on current step
        if (step === 1) {
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
        } else if (step === 3) {
            if (!formData.first_name) {
                errors.first_name = 'Vul a.u.b. uw voornaam in';
                valid = false;
            }
            if (!formData.last_name) {
                errors.last_name = 'Vul a.u.b. uw achternaam in';
                valid = false;
            }
            if (!formData.phone_number) {
                errors.phone_number = 'Vul a.u.b. uw telefoonnummer in';
                valid = false;
            }
            if (!formData.email) {
                errors.email = 'Vul a.u.b. uw e-mailadres in';
                valid = false;
            }
        }

        setFormErrors(errors);

        setTouched({
            postcode: true,
            city: true,
            address: true,
            address_number: true,
            // company_name: true,
            // gender: true,
            // first_name: true,
            // last_name: true,
            // phone_number: true,
            // email: true,
        });

        return valid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            setSubmitting(true);
            console.log(formData);
            // console.log(form.current);
            emailjs
                .send('service_7c5xdos', 'template_h64gn2c', formData, {
                    publicKey: 'YREu23x1xOFs_gpxZ',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error);
                    }
                );
        }
    };

    const progress = () => {
        if (validateForm()) {
            setStep(step + 1);
            if (step === 3) {
                handleSubmit();
            }
        }
    };

    return (
        <form ref={form} className="form form-horizontal" noValidate>
            <FormTitle step={step} />

            {/* step1 */}
            <Step1
                step={step}
                touched={touched}
                formErrors={formErrors}
                handleChange={handleChange}
                handleBlur={handleBlur}
                formData={formData}
                submitting={submitting}
                progress={progress}
            />

            <Step2
                step={step}
                setStep={setStep}
                submitting={submitting}
                handleBack={progress}
                setFormData={setFormData}
            />

            <Step3
                step={step}
                touched={touched}
                formErrors={formErrors}
                handleChange={handleChange}
                handleBlur={handleBlur}
                formData={formData}
                submitting={submitting}
                progress={progress}
            />
        </form>
    );
};

FormComponent.propTypes = {
    step: PropTypes.number.isRequired,
    setStep: PropTypes.func.isRequired,
};

export default FormComponent;
