/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Step3 = ({
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
    <fieldset disabled={step !== 3}>
      {step === 3 && (
        <div>
          <div
            className={`form-row  ${
              touched.company_name && formErrors.company_name
                ? "sd-form-row-invalid"
                : touched.company_name && "sd-form-row-valid"
            }`}
          >
            <div className="form-group col-11 col-md-7">
              {/* <div className="position-relative input-text">
                                <input
                                    type="text"
                                    className={`form-control upper `}
                                    value={formData.company_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="company_name"
                                    placeholder="Bedrijfsnaam"
                                    required
                                />

                                {touched.company_name && (
                                    <span
                                        className={`input-icon ${
                                            formErrors.company_name
                                                ? 'icon-invalid'
                                                : 'icon-valid'
                                        }`}
                                    ></span>
                                )}
                            </div> */}
              {formErrors.company_name && touched.company_name && (
                <div className="text-danger">
                  <div
                    className="sd-mt-0_5 p-small"
                    style={{ display: "inline" }}
                  >
                    {formErrors.company_name}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            className={`form-row  ${
              touched.gender && formErrors.gender
                ? "sd-form-row-invalid"
                : touched.gender && "sd-form-row-valid"
            }`}
          >
            <div className="form-group col-11 col-md-7">
              <label htmlFor="data.gender" className="d-none d-md-block">
                Naam en aanhef
              </label>

              <div className="w-100 position-relative">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    id="gender-mr"
                    className="custom-control-input"
                    type="radio"
                    name="gender"
                    value="1"
                    checked={formData.gender === "1"}
                    onChange={handleChange}
                    required
                  />
                  <label className="custom-control-label" htmlFor="gender-mr">
                    Mr.
                  </label>
                </div>

                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    id="gender-mrs"
                    className="custom-control-input"
                    type="radio"
                    name="gender"
                    value="2"
                    checked={formData.gender === "2"}
                    onChange={handleChange}
                    required
                  />
                  <label className="custom-control-label" htmlFor="gender-mrs">
                    Mrs.
                  </label>
                </div>

                <span
                  className={`input-icon ${
                    !formData.gender ? "icon-invalid" : "icon-valid"
                  }`}
                ></span>
              </div>

              {!formData.gender && (
                <div className="text-danger sd-mt-0_5 p-small">
                  Kies a.u.b. uw aanhef.
                </div>
              )}
            </div>
          </div>

          <div
            className={`form-row  ${
              touched.first_name && formErrors.first_name
                ? "sd-form-row-invalid"
                : touched.first_name && "sd-form-row-valid"
            }`}
          >
            <div className="form-group col-11 col-md-7">
              <div className="position-relative input-text">
                <input
                  type="text"
                  className={`form-control upper `}
                  value={formData.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="first_name"
                  placeholder="Voornaam"
                  required
                />

                {touched.first_name && (
                  <span
                    className={`input-icon ${
                      formErrors?.first_name ? "icon-invalid" : "icon-valid"
                    }`}
                  ></span>
                )}
              </div>
              {formErrors.first_name && touched.first_name && (
                <div className="text-danger">
                  <div
                    className="sd-mt-0_5 p-small"
                    style={{ display: "inline" }}
                  >
                    {formErrors.first_name}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            className={`form-row  ${
              touched.last_name && formErrors.last_name
                ? "sd-form-row-invalid"
                : touched.last_name && "sd-form-row-valid"
            }`}
          >
            <div className="form-group col-11 col-md-7">
              <div className="position-relative input-text">
                <input
                  type="text"
                  className={`form-control upper `}
                  value={formData.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="last_name"
                  placeholder="Achternaam"
                  required
                />

                {touched.last_name && (
                  <span
                    className={`input-icon ${
                      formErrors?.last_name ? "icon-invalid" : "icon-valid"
                    }`}
                  ></span>
                )}
              </div>
              {formErrors.last_name && touched.last_name && (
                <div className="text-danger">
                  <div
                    className="sd-mt-0_5 p-small"
                    style={{ display: "inline" }}
                  >
                    {formErrors.last_name}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-12 col-sm-8 col-md-7 col-md-offset-5 col-sm-offset-4">
              <p className="font-sofia-pro font-weight-bold sd-mb-0_25 sd-mb-sm-0_5">
                Contactgegevens
              </p>
              <p className="sd-m-0">
                Onze vakmannen nemen vaak eerst telefonisch contact op om je een
                offerte op maat te kunnen sturen. Dit is vrijblijvend.
              </p>
            </div>
          </div>

          <div
            className={`form-row  ${
              touched.phone_number && formErrors.phone_number
                ? "sd-form-row-invalid"
                : touched.phone_number && "sd-form-row-valid"
            }`}
          >
            <div className="form-group col-11 col-md-7">
              <div className="position-relative input-text">
                <input
                  type="text"
                  className={`form-control upper `}
                  value={formData.phone_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="phone_number"
                  placeholder="Telefoonnummer"
                  required
                />

                {touched.phone_number && (
                  <span
                    className={`input-icon ${
                      formErrors?.phone_number ? "icon-invalid" : "icon-valid"
                    }`}
                  ></span>
                )}
              </div>
              <p className="form-help-text sd-mt-0_5 sd-mb-0">
                Uw telefoonnummer wordt uitsluitend gedeeld met geschikte
                vakmensen. We bellen u of sturen een sms-bericht om uw
                telefoonnummer te verifiëren.
              </p>
              {formErrors.phone_number && touched.phone_number && (
                <div className="text-danger">
                  <div
                    className="sd-mt-0_5 p-small"
                    style={{ display: "inline" }}
                  >
                    {formErrors.phone_number}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            className={`form-row  ${
              touched.email && formErrors.email
                ? "sd-form-row-invalid"
                : touched.email && "sd-form-row-valid"
            }`}
          >
            <div className="form-group col-11 col-md-7">
              <div className="position-relative input-text">
                <input
                  type="text"
                  className={`form-control upper `}
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  placeholder="E-mailadres"
                  required
                />

                {touched.email && (
                  <span
                    className={`input-icon ${
                      formErrors?.email ? "icon-invalid" : "icon-valid"
                    }`}
                  ></span>
                )}
              </div>
              <p className="form-help-text sd-mt-0_5 sd-mb-0">
                Vakmensen zullen hun offertes naar dit e-mailadres sturen
              </p>
              {formErrors.email && touched.email && (
                <div className="text-danger">
                  <div
                    className="sd-mt-0_5 p-small"
                    style={{ display: "inline" }}
                  >
                    {formErrors.email}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="step-navigation form-row">
            <div className="col-md-7">
              <button
                type="button"
                id="request-quotes"
                className="btn btn-primary bg-warning w-100"
                onClick={progress}
                // disabled={submitting}
              >
                Ontvang offertes
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

export default Step3;
