import React, { useEffect, useState } from 'react';
import CustomStepper from '../components/CustomStepper';
import { useForm } from 'react-hook-form';
import data from '../constants/data.json';
import { axiosOpen } from '../utils/axios';
import CustomForm from '../components/form/CustomForm';

const Formpage = () => {
  const { register, handleSubmit, control } = useForm();
  const [questionList, setQuestionList] = useState();
  const [currentStep, setCurrentStep] = useState(2);

  useEffect(() => {
    setQuestionList(data);
  }, []);
  const onSubmit = async (data) => {
    console.log(data);

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
    if (currentStep === 3) {
      //   try {
      //     const response = await axiosOpen.post('/', data);
      //     console.log(response);
      //   } catch (error) {
      //     console.log(error);
      //   }
    }
  };

  console.log(currentStep);
  return (
    <div className="px-4 pb-[50px]">
      <h2 className="headline-small mt-[40px]">Add a new capacity </h2>
      <CustomStepper currentStep={currentStep} />
      <div
        className={`step-container ${currentStep === 1 ? 'active-step' : ''}`}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomForm
            register={register}
            questionList={questionList}
            currentStep={currentStep}
            control={control}
          />
          <div className="flex justify-end gap-3">
            <button className="main-btn">Close</button>
            {currentStep > 0 && (
              <div
                onClick={() => setCurrentStep(currentStep - 1)}
                className="main-btn "
              >
                Prev
              </div>
            )}

            <button type="submit" className="main-btn">
              {currentStep === 3 ? 'submit ' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formpage;
