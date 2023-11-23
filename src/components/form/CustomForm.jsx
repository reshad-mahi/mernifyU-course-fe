import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import CustomInput from './CustomInput';
const CustomForm = ({ currentStep, questionList, register }) => {
  const [values, setValues] = useState({});

  const handleRangeChange = (event, rangeName) => {
    const newValue = parseInt(event.target.value, 10);
    setValues({ ...values, [rangeName]: newValue });
  };

  return (
    questionList?.length > 0 &&
    questionList[currentStep].questions.map((question) => (
      <div key={question.Variable} className="mb-[30px]">
        <div className="grid w-full items-center gap-2">
          <label className="label-large text-left" htmlFor="email">
            {question.Question}
          </label>
          {question.response_Type === 'Short Answer' ? (
            <CustomInput register={register} question={question} />
          ) : question.response_Type === 'Drop Down' ? (
            <CustomSelect register={register} question={question} />
          ) : question.response_Type === 'radio' ? (
            <div className="flex">
              <div className="flex items-center space-x-2 w-[60px]">
                <input
                  {...register(question.Variable)}
                  type="radio"
                  value="Yes"
                />
                <label htmlFor="r1" className="me-4">
                  yes
                </label>
              </div>
              <div className="flex items-center space-x-2 w-[60px]">
                <input
                  {...register(question.Variable)}
                  type="radio"
                  value="No"
                />
                <label htmlFor="r2">No</label>
              </div>
            </div>
          ) : question.response_Type === 'Integer' ? (
            <div className="h-[40px] rounded-md border border-input   bg-[#F6F2F7] px-3 flex gap-4 items-center">
              <span>0</span>

              <input
                type="range"
                min={0}
                max={100}
                {...register(question.Variable, { required: true })}
                value={values[question.Variable] || 0}
                onChange={(e) => handleRangeChange(e, question.Variable)}
              />

              <output>{values[question.Variable]}</output>
              <span>100</span>
            </div>
          ) : question.response_Type === 'Attachment' ? (
            <input
              className="body-large mb-0"
              {...register(question.Variable, { required: true })}
              id="picture"
              type="file"
            />
          ) : question.response_Type === 'URL Link' ? (
            <CustomInput register={register} question={question} />
          ) : (
            ''
          )}
        </div>
      </div>
    ))
  );
};

export default CustomForm;
