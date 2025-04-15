import React, { useEffect } from 'react';
import './StepByStep.css';
import { Link } from 'react-router-dom';

function StepByStep() {
    useEffect(() => {
        const navigateToFormStep = (stepNumber) => {
            document.querySelectorAll('.form-step').forEach((formStepElement) => {
                formStepElement.classList.add('d-none');
            });

            document.querySelectorAll('.form-stepper-list').forEach((formStepHeader) => {
                formStepHeader.classList.add('form-stepper-unfinished');
                formStepHeader.classList.remove('form-stepper-active', 'form-stepper-completed');
            });

            document.querySelector('#step-' + stepNumber).classList.remove('d-none');
            const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');
            if (formStepCircle) {
                formStepCircle.classList.remove('form-stepper-unfinished', 'form-stepper-completed');
                formStepCircle.classList.add('form-stepper-active');
            }

            for (let index = 1; index < stepNumber; index++) {
                const previousStepCircle = document.querySelector('li[step="' + index + '"]');
                if (previousStepCircle) {
                    previousStepCircle.classList.remove('form-stepper-unfinished', 'form-stepper-active');
                    previousStepCircle.classList.add('form-stepper-completed');
                }
            }
        };

        const buttons = document.querySelectorAll('.btn-navigate-form-step');
        buttons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const stepNumber = parseInt(btn.getAttribute('step_number'));
                navigateToFormStep(stepNumber);
            });
        });

        return () => {
            buttons.forEach((btn) => {
                btn.removeEventListener('click', () => { });
            });
        };
    }, []);

    return (
        <div>
            <div id="multi-step-form-container">
                <ul className="form-stepper form-stepper-horizontal text-center mx-auto p-3 m-0 mb-4 ">
                    <li className="form-stepper-active text-center form-stepper-list" step="1">
                        <Link className="mx-2 text-decoration-none">
                            <span className="form-stepper-circle">
                                <span>1</span>
                            </span>
                            <div className="label">Detaylar</div>
                        </Link>
                    </li>
                    <li className="form-stepper-unfinished text-center form-stepper-list" step="2">
                        <Link className="mx-2 text-decoration-none">
                            <span className="form-stepper-circle text-muted">
                                <span>2</span>
                            </span>
                            <div className="label text-muted">Onayla</div>
                        </Link>
                    </li>
                    <li className="form-stepper-unfinished text-center form-stepper-list" step="3">
                        <Link className="mx-2 text-decoration-none">
                            <span className="form-stepper-circle text-muted">
                                <span>3</span>
                            </span>
                            <div className="label text-muted">Tamamla</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default StepByStep;
