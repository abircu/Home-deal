import clockIcon from '@/assets/icons/icon-24-recent-blue.svg';
import calendarIcon from '@/assets/icons/icon-24-today-blue.svg';
import peopleIcon from '@/assets/icons/icon-24-people-blue.svg';
import lockIcon from '@/assets/icons/icon-24-lock-red.svg';

const SidePanel = () => {
    return (
        <>
            <div className="panel panel-top panel-bordered panel-md-medium">
                <h4 className="sd-mb-md-1">Vind eenvoudig de juiste vakman</h4>
                <div className="sd-mt-0_75 d-flex align-items-start">
                    <img
                        className="sd-mr-1"
                        src={clockIcon}
                        alt="icon-recent"
                    />
                    <span>
                        De laatste aanvraag was
                        <b> 7 minuten geleden</b>
                    </span>
                </div>
                <div className="sd-mt-0_75 d-flex align-items-start">
                    <img
                        className="sd-mr-1"
                        src={calendarIcon}
                        alt="icon-today"
                    />
                    <span>
                        Er waren vandaag{' '}
                        <span className="font-weight-bold text-primary">
                            201 offerteaanvragen
                        </span>
                    </span>
                </div>
                <div className="sd-mt-0_75 d-flex align-items-start">
                    <img
                        className="sd-mr-1"
                        src={peopleIcon}
                        alt="icon-people"
                    />
                    <span>Duizenden tevreden klanten gingen u voor</span>
                </div>
                <div className="sd-mt-0_75 d-flex align-items-start">
                    <img className="sd-mr-1" src={lockIcon} alt="icon-lock" />
                    <span>
                        De gegevens in uw offerteaanvraag zijn SSL beveiligd
                    </span>
                </div>
            </div>
        </>
    );
};

export default SidePanel;
