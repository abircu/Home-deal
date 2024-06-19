import Header from '@/components/Header';
import FormComponent from '@/components/form/FormComponent';
import Footer from '@/components/Footer';
import SidePanel from '../components/SidePanel';
import StepProgressBar from '../components/StepProgressBar';
import { useState } from 'react';

const LandingPage = () => {
    const [step, setStep] = useState(1);
    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <div className="form-container">
                        <div className="flex-grow-1">
                            {/* steps */}
                            <StepProgressBar step={step} setStep={setStep} />
                        </div>
                        <div className="content-slab">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div
                                        id="b2c-form"
                                        className="panel panel-bordered position-relative"
                                    >
                                        <FormComponent step={step} setStep={setStep}/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="mt-4 mt-lg-0">
                                        <SidePanel />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default LandingPage;
