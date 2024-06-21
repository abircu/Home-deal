/* eslint-disable react/prop-types */

const Step1 = ({
    step,
    touched,
    formErrors,
    handleChange,
    handleBlur,
    formData,
    submitting,
    progress,

}) => {
    return (
        <fieldset disabled={step !== 1}>
            {step === 1 && (
                <div>
                    <div
                        className={`form-row  ${
                            touched.postcode && formErrors.postcode
                                ? 'sd-form-row-invalid'
                                : touched.postcode && 'sd-form-row-valid'
                        }`}
                    >
                        <div className="form-group col-11 col-md-7">
                            <div className="position-relative input-text">
                                <input
                                    type="text"
                                    className={`form-control upper `}
                                    value={formData.postcode}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="postcode"
                                    placeholder="Postcode"
                                    required
                                />

                                {touched.postcode && (
                                    <span
                                        className={`input-icon ${
                                            formErrors?.postcode
                                                ? 'icon-invalid'
                                                : 'icon-valid'
                                        }`}
                                    ></span>
                                )}
                            </div>
                            {formErrors.postcode && touched.postcode && (
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

                    <div
                        className={`form-row  ${
                            touched.city && formErrors.city
                                ? 'sd-form-row-invalid'
                                : touched.city && 'sd-form-row-valid'
                        }`}
                    >
                        <div className="form-group col-11 col-md-7">
                            <div className="position-relative input-text">
                                <input
                                    type="text"
                                    className={`form-control`}
                                    value={formData.city}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="city"
                                    placeholder="Plaats"
                                    required
                                />
                                {touched.city && (
                                    <span
                                        className={`input-icon ${
                                            formErrors.city
                                                ? 'icon-invalid'
                                                : 'icon-valid'
                                        }`}
                                    ></span>
                                )}
                            </div>
                            {formErrors.city && touched.city && (
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

                    <div
                        className={`form-row  ${
                            touched.address && formErrors.address
                                ? 'sd-form-row-invalid'
                                : touched.address && 'sd-form-row-valid'
                        }`}
                    >
                        <div className="form-group col-11 col-md-7">
                            <div className="position-relative input-text">
                                <input
                                    type="text"
                                    className={`form-control`}
                                    value={formData.address}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="address"
                                    placeholder="Straat"
                                    required
                                />
                                {touched.address && (
                                    <span
                                        className={`input-icon ${
                                            formErrors.address
                                                ? 'icon-invalid'
                                                : 'icon-valid'
                                        }`}
                                    ></span>
                                )}
                            </div>
                            {formErrors.address && touched.address && (
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

                    <div
                        className={`form-row  ${
                            touched.address_number && formErrors.address_number
                                ? 'sd-form-row-invalid'
                                : touched.address_number && 'sd-form-row-valid'
                        }`}
                    >
                        <div className="form-group col-11 col-md-7">
                            <div className="position-relative input-text">
                                <input
                                    type="text"
                                    className={`form-control`}
                                    value={formData.address_number}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="address_number"
                                    placeholder="Huisnummer"
                                    required
                                    pattern="^([0-9]){1,}.*$"
                                />
                                {touched.address_number && (
                                    <span
                                        className={`input-icon ${
                                            formErrors.address_number
                                                ? 'icon-invalid'
                                                : 'icon-valid'
                                        }`}
                                    ></span>
                                )}
                            </div>
                            {formErrors.address_number &&
                                touched.address_number && (
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
                </div>
            )}
        </fieldset>
    );
};

export default Step1;
