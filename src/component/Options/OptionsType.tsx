import { Field } from "formik";
import optionsData from "../../mockData/options";
import { generateString } from "../../specialFunction/specialFunction";

const optionsForTest = (values: any) => {
  return (
    <div className="options__content__list">
      { 
        optionsData.map((item) => (
          <li key={generateString()}>     
            <div className="group-type__options">
              <h3 className="start-title">{item.title}</h3>
              <div className="group-type__option-content">
                {
                  item.options.map((option: string | number) => (
                    <div className="group-type__option-content-inner" key={generateString()}>
                      <div>{option}</div>
                      <div className={`input-checkbox ${option === values[item.title] && "active"}`} />
                      <Field name={item.title} value={option} type="radio" className="filed-checkbox" />
                    </div>
                  ))
                }
              </div>
            </div>
          </li>
        ))
      } 
    </div>
  )
};

export {
  optionsForTest,
};
