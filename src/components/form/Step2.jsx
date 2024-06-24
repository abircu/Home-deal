/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import PropTypes from 'prop-types';
import CommonRequestRadio from './CommonRequestRadio';
// import DatePickerIcon from '@/assets/icons/icon-datepicker.svg';

const Step2 = ({ step, setStep, setFormData }) => {
  const [categoryIndex, setCategoryIndex] = useState('');
  const [typeIndex, setTypeIndex] = useState('');
  const [requestType, setRequestType] = useState('');
  const [demolitionType, setDemolitionType] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [year, setYear] = useState('');
  const [projectDate, setProjectDate] = useState(null);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [demolition, setDemolition] = useState('');
  const [permitType, setPermitType] = useState('');
  const [permitAvailable, setPermitAvailable] = useState('');
  const [constructionDrawingAvailable, setConstructionDrawingAvailable] = useState('');
  const [materialAvailable, setMaterialAvailable] = useState('');
  const [executionDate, setExecutionDate] = useState(null);
  const [addPhoto, setAddPhoto] = useState(false);
  const [projectDescription, setProjectDescription] = useState('');
  const [buyerIntention, setBuyerIntention] = useState('');
  const [buyingIntentionDecisions, setBuyingIntentionDecisions] = useState([]);

  const handleCategoryChange = (e) => setCategoryIndex(e.target.value);
  const handleTypeChange = (e) => setTypeIndex(e.target.value);
  const handleRequestTypeChange = (e) => setRequestType(e.target.value);
  const handleDemolitionTypeChange = (e) => setDemolitionType(e.target.value);
  const handlePermitTypeChange = (e) => setPermitType(e.target.value);
  const handlePermitAvailableChange = (e) => setPermitAvailable(e.target.value);
  const handleConstructionDrawingAvailableChange = (e) => setConstructionDrawingAvailable(e.target.value);
  const handleYearChange = (e) => setYear(e.target.value);
  const handleMaterialAvailable = (e) => setMaterialAvailable(e.target.value);
  const handleAddPhoto = (e) => setAddPhoto(e.target.value);

  const handleExecutionDate = (e) => setExecutionDate(e.target.value);
  const handleProjectDescriptionChange = (e) => setProjectDescription(e.target.value);
  const handleBuyerIntentionChange = (e) => setBuyerIntention(e.target.value);
  const handleBuyingIntentionDecisionsChange = (e) => {
    const { value, checked } = e.target;
    setBuyingIntentionDecisions(prev =>
      checked ? [...prev, value] : prev.filter(v => v !== value)
    );
  };
  

  const handleSubmit = () => {
    setSubmitted(true);
    if (categoryIndex && typeIndex && projectDescription) {
        setFormData((prev) => ({...prev, categoryIndex, typeIndex, year, projectDescription, requestType, demolitionType, permitType, permitAvailable, constructionDrawingAvailable, materialAvailable, executionDate, buyerIntention, buyingIntentionDecisions, addPhoto, projectDate, demolition }));
        setStep(step + 1);
      }
  };

  const getCategoryError = () => (submitted && !categoryIndex ? 'Kies a.u.b. een van bovenstaande opties' : '');
  const getTypeError = () => (submitted && !typeIndex ? 'Kies a.u.b. een van bovenstaande opties' : '');
  const getYearError = () => {
    if(categoryIndex === 'contractors' && typeIndex !== 'building_house') {
      return ''
    }
  return    submitted && !year ? 'Dit veld is verplicht' : ''};
  const getRequestTypeError = () => {
    if(categoryIndex === 'contractors' || categoryIndex === 'plumbers') {
      return ''
    }
    return submitted && !requestType ? 'Dit veld is verplicht' : ''}
    ;
  const getDemolitionTypeError = () => (submitted && !demolitionType ? 'Kies alstublieft één van de mogelijkheden' : '');
  const getPermitTypeError = () => (submitted && !permitType ? 'Kies alstublieft één van de mogelijkheden' : '');
  const getPermitAvailableError = () => (submitted && !permitAvailable ? 'Kies alstublieft één van de mogelijkheden' : '');
  const getConstructionDrawingAvailableError = () =>{ 
    if(categoryIndex === 'contractors') {
      return ''
    }
    
    return submitted && !constructionDrawingAvailable ? 'Kies alstublieft één van de mogelijkheden' : ''};
  const getMaterialAvailableError = () => (submitted && !materialAvailable ? 'Kies alstublieft één van de mogelijkheden' : '');

  const getExecutionDateError = () => (submitted && !executionDate ? 'Dit veld is verplicht' : '');
  const getAddPhotoError = () => (submitted && !addPhoto ? 'Dit veld is verplicht' : '');
  const getProjectDescriptionError = () => (submitted && !projectDescription.length ? 'Dit veld is verplicht' : '');

  const getBuyerIntentionError = () => (submitted && !buyerIntention ? 'Dit veld is verplicht' : '');

  const categoryOptions = [
    { id: 'contractors', value: 'contractors', label: 'Verbouwen en renoveren' },
    { id: 'kitchen', value: 'kitchen', label: 'Keuken' },
    { id: 'plumbers', value: 'plumbers', label: 'Badkamer en toilet' },
  ];

  const typeOptions = [
    { id: 'house_expansion_installation', value: 'house_expansion_installation', label: 'Aanbouw plaatsen' },
    { id: 'building_house', value: 'building_house', label: 'Nieuw huis bouwen' },
    { id: 'attic_renovation', value: 'attic_renovation', label: 'Zolder verbouwen' },
    { id: 'garage_renovation', value: 'garage_renovation', label: 'Garage verbouwen' },
    { id: 'cellar_renovation', value: 'cellar_renovation', label: 'Kelder verbouwen' },
    { id: 'new_storey_installation', value: 'new_storey_installation', label: 'Opbouw plaatsen' },
    { id: 'renovation_general', value: 'renovation_general', label: 'Verbouwen en renoveren - algemeen' },
  ];

  const typeOptionsKitchen = [
    { id: 'kitchen_remodeling', value: 'kitchen_remodeling', label: 'Keuken verbouwen' },
  ];

  const typeOptionsPlumber = [
    { id: 'bathroom_installation_renovation', value: 'bathroom_installation_renovation', label: 'Badkamer plaatsen of verbouwen' },
    { id: 'toilet_renovation', value: 'toilet_renovation', label: 'Toilet verbouwen' },
  ];

  const requestTypeOptions = [
    { id: 'private1009125047', value: 'private', label: 'Particulier' },
    { id: 'commercial1558862516', value: 'commercial', label: 'Zakelijk' },
  ];

  const demolitionTypeOptions = [
    { id: 'yes1', value: 'yes', label: 'Ja' },
    { id: 'no2', value: 'no', label: 'Nee' },
    { id: 'idk3', value: 'idk', label: 'Weet ik niet' },
  ];

  const permitAvalabilityOptions = [
    { id: 'yes4', value: 'yes', label: 'Ja' },
    { id: 'no5', value: 'no', label: 'Nee' },
  ];

  const constructionDrawingAvailableOptions = [
    { id: 'yes6', value: 'yes', label: 'Ja' },
    { id: 'no7', value: 'no', label: 'Nee' },
  ];

  const materialAvailabilityOptions = [
    { id: 'yes8', value: 'yes', label: 'Ja' },
    { id: 'no8', value: 'no', label: 'Nee' },
    { id: 'partially10', value: 'partially', label: 'Gedeeltelijk' },
  ];

  const executionDateOptions = [
    { id: '0-1_month', value: '0-1_month', label: 'Binnen 1 maand' },
    { id: '1-3_month', value: '1-3_month', label: 'Over 1 tot 3 maanden' },
    { id: 'unknown', value: 'unknown', label: 'Geen voorkeur' },
    
  ]

  const addPhotoOptions = [
    { id: 'yes11', value: 'yes', label: 'Ja' },
    { id: 'no12', value: 'no', label: 'Nee' },
  ];

  const buyerIntentionOptions = [
    { id: 'yes134', value: 'yes', label: 'Ja, na het vergelijken van de vakmensen' },
    { id: 'unknown2', value: 'unknown', label: 'Ik weet het nog niet, afhankelijk van de informatie' },
    { id: 'no645', value: 'no', label: 'Nee, ik ben alleen op zoek naar informatie' },

  ]

  const permitTypeOptions = demolitionTypeOptions;
 

  console.log(typeIndex);

  return (
    <fieldset disabled={step !== 2}>
      {step === 2 && (
        <div>
          <div className={`form-row ${submitted && !categoryIndex ? 'sd-form-row-invalid' : ''}`}>
            <div className="form-group col-11 col-md-7">
              <label htmlFor="categoryIndex">Categorie</label>
              <CommonRequestRadio
                name="categoryIndex"
                value={categoryIndex}
                onChange={handleCategoryChange}
                options={categoryOptions}
                submitted={submitted}
                error={getCategoryError()}
              />
            </div>
          </div>

          {categoryIndex === 'contractors' && (
            <div className={`form-row ${submitted && !typeIndex ? 'sd-form-row-invalid' : ''}`}>
              <div className="form-group col-11 col-md-7">
                <label htmlFor="typeIndex">Type opdracht</label>
                <CommonRequestRadio
                  name="typeIndex"
                  value={typeIndex}
                  onChange={handleTypeChange}
                  options={typeOptions}
                  submitted={submitted}
                  error={getTypeError()}
                />
              </div>
            </div>
          )}

          {categoryIndex === 'kitchen' && (
            <div className={`form-row ${submitted && !typeIndex ? 'sd-form-row-invalid' : ''}`}>
              <div className="form-group col-11 col-md-7">
                <label htmlFor="typeIndex">Type opdracht</label>
                <CommonRequestRadio
                  name="typeIndex"
                  value={typeIndex}
                  onChange={handleTypeChange}
                  options={typeOptionsKitchen}
                  submitted={submitted}
                  error={getTypeError()}
                />
              </div>
            </div>
          )}

          {categoryIndex === 'plumbers' && (
            <div className={`form-row ${submitted && !typeIndex ? 'sd-form-row-invalid' : ''}`}>
              <div className="form-group col-11 col-md-7">
                <label htmlFor="typeIndex">Type opdracht</label>
                <CommonRequestRadio
                  name="typeIndex"
                  value={typeIndex}
                  onChange={handleTypeChange}
                  options={typeOptionsPlumber}
                  submitted={submitted}
                  error={getTypeError()}
                />
              </div>
            </div>
          )}

          {(categoryIndex === 'contractors' || categoryIndex === 'plumbers') ? (
            <div className={`form-row ${submitted && (categoryIndex === 'contractors' || categoryIndex === 'plumbers') && !requestType ? 'sd-form-row-invalid' : ''}`}>
              <div className="form-group col-11 col-md-7">
                <label htmlFor="requestType">Soort aanvraag</label>
                <CommonRequestRadio
                  name="requestType"
                  value={requestType}
                  onChange={handleRequestTypeChange}
                  options={requestTypeOptions}
                  submitted={submitted}
                  error={getRequestTypeError()}
                />
              </div>
            </div>
          ) : null}
        {(categoryIndex === 'contractors' && typeIndex !== 'building_house')&& (
            <div className={`form-row ${submitted &&  (categoryIndex === 'contractors' && typeIndex !== 'building_house') && !year ? 'sd-form-row-invalid' : ''}`}>
                    <div className="form-group col-11 col-md-7">
                        <div className="position-relative input-number">
                            <input
                                type="number"
                                className="form-control"
                                name="year"
                                placeholder="Bouwjaar woning"
                                value={year}
                                onChange={handleYearChange}
                                // required
                            />
                            <span className={`input-icon ${submitted && !year ? 'icon-invalid' : year ? 'icon-valid' : ''}`}></span>
                        </div>
                        {submitted && !year && (
                            <div className="text-danger">
                                <div className="sd-mt-0_5 p-small">{getYearError()}</div>
                            </div>
                        )}
                    </div>
                </div>)}

          {(categoryIndex === 'contractors' && typeIndex !== 'building_house' && typeIndex !== 'house_expansion_installation') && (
            <div className={`form-row ${submitted &&(categoryIndex === 'contractors' && typeIndex !== 'building_house' && typeIndex !== 'house_expansion_installation') && !demolitionType ? 'sd-form-row-invalid' : ''}`}>
              <div className="form-group col-11 col-md-7">
                <label htmlFor="demolitionType">Sloopwerkzaamheden</label>
                <CommonRequestRadio
                  name="demolitionType"
                  value={demolitionType}
                  onChange={handleDemolitionTypeChange}
                  options={demolitionTypeOptions}
                  submitted={submitted}
                  error={getDemolitionTypeError()}
                />
              </div>
            </div>
          )}

          {(categoryIndex === 'contractors' && (typeIndex === 'building_house' || typeIndex === 'house_expansion_installation')) && (
            <div className={`form-row ${submitted && !permitType ? 'sd-form-row-invalid' : ''}`}>
              <div className="form-group col-11 col-md-7">
                <label htmlFor="permitType">Vergunning nodig</label>
                <CommonRequestRadio
                  name="permitType"
                  value={permitType}
                  onChange={handlePermitTypeChange}
                  options={permitTypeOptions}
                  submitted={submitted}
                  error={getPermitTypeError()}
                />
              </div>
            </div>
          )}

          {(categoryIndex === 'contractors' && permitType === 'yes') && (
             <div className={`form-row ${submitted && !permitAvailable ? 'sd-form-row-invalid' : ''}`}>
             <div className="form-group col-11 col-md-7">
               <label htmlFor="permitAvailable">Vergunning al beschikbaar</label>
               <CommonRequestRadio
                 name="permitAvailable"
                 value={permitAvailable}
                 onChange={handlePermitAvailableChange}
                 options={permitAvalabilityOptions}
                 submitted={submitted}
                 error={getPermitAvailableError()}
               />
             </div>
           </div>
          )}

        {categoryIndex === 'contractors' && (
             <div className={`form-row ${submitted && !constructionDrawingAvailable ? 'sd-form-row-invalid' : ''}`}>
             <div className="form-group col-11 col-md-7">
               <label htmlFor="constructionDrawingAvailable">Bouwtekening beschikbaar</label>
               <CommonRequestRadio
                 name="constructionDrawingAvailable"
                 value={constructionDrawingAvailable}
                 onChange={handleConstructionDrawingAvailableChange}
                 options={constructionDrawingAvailableOptions}
                 submitted={submitted}
                 error={getConstructionDrawingAvailableError()}
               />
             </div>
           </div>
          )}

        { !(typeIndex === 'house_expansion_installation' || typeIndex === 'building_house') && categoryIndex === 'contractors' && (
             <div className={`form-row ${submitted && !materialAvailable ? 'sd-form-row-invalid' : ''}`}>
             <div className="form-group col-11 col-md-7">
               <label htmlFor="materialAvailable">Materiaal al aanwezig</label>
               <CommonRequestRadio
                 name="materialAvailable"
                 value={materialAvailable}
                 onChange={handleMaterialAvailable}
                 options={materialAvailabilityOptions}
                 submitted={submitted}
                 error={getMaterialAvailableError()}
               />
             </div>
           </div>
          )}

          
        {(categoryIndex === 'contractors' || categoryIndex === 'kitchen' || categoryIndex === 'plumbers') && (
             <div className={`form-row ${submitted && !executionDate ? 'sd-form-row-invalid' : ''}`}>
             <div className="form-group col-11 col-md-7">
               <label htmlFor="executionDate">Uitvoerdatum</label>
               <CommonRequestRadio
                 name="executionDate"
                 value={executionDate}
                 onChange={handleExecutionDate}
                 options={executionDateOptions}
                 submitted={submitted}
                 error={getExecutionDateError()}
               />
             </div>
           </div>
          )}

{/* {(categoryIndex === 'contractors' || categoryIndex === 'plumbers') && (
             <div className={`form-row ${submitted && !addPhoto ? 'sd-form-row-invalid' : ''}`}>
             <div className="form-group col-11 col-md-7">
               <label htmlFor="addPhoto">Wilt u foto’s toevoegen?</label>
               <p className="form-help-text">Geen foto's bij de hand? Geen probleem</p>
               <CommonRequestRadio
                 name="addPhoto"
                 value={addPhoto}
                 onChange={handleAddPhoto}
                 options={addPhotoOptions}
                 submitted={submitted}
                 error={getAddPhotoError()}
               />
             </div>
           </div>
          )} */}

        {(categoryIndex === 'contractors' || categoryIndex === 'kitchen' || categoryIndex === 'plumbers') && (
             <div className={`form-row ${submitted && !buyerIntention ? 'sd-form-row-invalid' : ''}`}>
             <div className="form-group col-11 col-md-7">
               <label htmlFor="buyerIntention">Bent u van plan dit project te laten uitvoeren?</label>
              
               <CommonRequestRadio
                 name="buyerIntention"
                 value={buyerIntention}
                 onChange={handleBuyerIntentionChange}
                 options={buyerIntentionOptions}
                 submitted={submitted}
                 error={getBuyerIntentionError()}
               />
             </div>
           </div>
          )}

{buyerIntention === 'unknown' && (
            <div className="form-row">
              <div className="form-group col-11 col-md-7">
                <label htmlFor="buyingIntentionDecisions">Wat zal uw uiteindelijke beslissing beïnvloeden?</label>
                <div className="sd-checkbox-list">
                  <div className="sd-checkbox-row">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="feasible"
                        name="buyingIntentionDecisions"
                        value="feasible"
                        checked={buyingIntentionDecisions.includes('feasible')}
                        onChange={handleBuyingIntentionDecisionsChange}
                      />
                      <label className="custom-control-label" htmlFor="feasible">
                        Advies over de haalbaarheid van mijn project
                      </label>
                    </div>
                  </div>
                  <div className="sd-checkbox-row">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="availability"
                        name="buyingIntentionDecisions"
                        value="availability"
                        checked={buyingIntentionDecisions.includes('availability')}
                        onChange={handleBuyingIntentionDecisionsChange}
                      />
                      <label className="custom-control-label" htmlFor="availability">
                        Beschikbaarheid van de vakmensen
                      </label>
                    </div>
                  </div>
                  <div className="sd-checkbox-row">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="specificPrice"
                        name="buyingIntentionDecisions"
                        value="specificPrice"
                        checked={buyingIntentionDecisions.includes('specificPrice')}
                        onChange={handleBuyingIntentionDecisionsChange}
                      />
                      <label className="custom-control-label" htmlFor="specificPrice">
                        Prijs van mijn specifieke project
                      </label>
                    </div>
                  </div>
                  <div className="sd-checkbox-row">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="genericPrice"
                        name="buyingIntentionDecisions"
                        value="genericPrice"
                        checked={buyingIntentionDecisions.includes('genericPrice')}
                        onChange={handleBuyingIntentionDecisionsChange}
                      />
                      <label className="custom-control-label" htmlFor="genericPrice">
                        Algemene prijsindicatie
                      </label>
                    </div>
                  </div>
                  <div className="sd-checkbox-row">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="self"
                        name="buyingIntentionDecisions"
                        value="self"
                        checked={buyingIntentionDecisions.includes('self')}
                        onChange={handleBuyingIntentionDecisionsChange}
                      />
                      <label className="custom-control-label" htmlFor="self">
                        Ik wil het project misschien zelf uitvoeren
                      </label>
                    </div>
                  </div>
                  <div className="sd-checkbox-row">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="_other"
                        name="buyingIntentionDecisions"
                        value="_other"
                        checked={buyingIntentionDecisions.includes('_other')}
                        onChange={handleBuyingIntentionDecisionsChange}
                      />
                      <label className="custom-control-label" htmlFor="_other">
                        Anders, namelijk:
                      </label>
                    </div>
                  </div>
                </div>
                {submitted && buyingIntentionDecisions.length === 0 && (
                  <div className="text-danger">
                    <div className="sd-mt-0_5 p-small">Geef één of meerdere opties aan.</div>
                  </div>
                )}
              </div>
            </div>
          )}

        <div className={`form-row ${submitted && !projectDescription.length ? 'sd-form-row-invalid' : ''}`}>
            <div className="form-group col-md-12">
              <label htmlFor="projectDescription">Projectomschrijving?</label>
              <p className="form-help-text">Beschrijf in het kort uw project en ontvang specifiekere offertes</p>
              <div>
                <textarea
                  className="form-control"
                  placeholder="Bijvoorbeeld ruimte(s) waar werkzaamheden plaats vinden, staat van onderhoud en oppervlakte."
                  name="project_description"
                  rows="5"
                  id="project_description"
                  value={projectDescription}
                  onChange={handleProjectDescriptionChange}
                  required=""
                ></textarea>
                <div className="text-danger sd-mt-0_5 p-small">{getProjectDescriptionError()}</div>
              </div>
            </div>
          </div>

          

          

          <div className="form-row">
            <div className="col-md-7">
              <button
                type="button"
                className="btn btn-arrow btn-primary w-100"
                onClick={handleSubmit}
              >
                Ga naar de laatste stap
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

Step2.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
};

export default Step2;
