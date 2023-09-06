import Form from "react-bootstrap/Form"

const SympstomCheck = ({handleNextStep} : any) => {
  return (
    <div className="symptomContainer">
      <div className="symptom_child_container">
        <h4 className="h4_child mb-2">
          Check any symptom that is a concern. How long has it been a problem?
        </h4>
        <hr className="form_separator" />
        <div className="d-flex justify-content-between fl-dr">
          <div className="checkboxContainer">
            <Form.Check
              inline
              label="Sleep Problems"
              name="group1"
              type={"checkbox"}
              id={`inline-checkbox-1`}
            />
            <Form.Check
              inline
              label="Lack of interest in activities"
              name="group1"
              type={"checkbox"}
              id={`inline-checkbox-1`}
            />
            <Form.Check
              inline
              label="Unassertive"
              name="group1"
              type={"checkbox"}
              id={`inline-checkbox-1`}
            />
            <Form.Check
              inline
              label="Fatigue/low energy"
              name="group1"
              type={"checkbox"}
              id={`inline-checkbox-1`}
            />
            <Form.Check
              inline
              label="Concentration problems"
              name="group1"
              type={"checkbox"}
              id={`inline-checkbox-1`}
            />
            <Form.Check
              inline
              label="Appetite/weight changes"
              name="group1"
              type={"checkbox"}
              id={`inline-checkbox-1`}
            />
            <Form.Check
              inline
              label="Withdrawal"
              name="group1"
              type={"checkbox"}
              id={`inline-checkbox-1`}
            />
          </div>
          <div className="checkboxContainer">
            <Form.Check
              inline
              label="Morbid thoughts"
              name="group1"
              type={"checkbox"}
              id={`inline-checkbox-1`}
            />
            <Form.Check
              inline
              label="Suicidal thoughts or threats"
              name="group1"
              type={"checkbox"}
              id={`inline-checkbox-1`}
            />
            <Form.Check
              inline
              label="Suicidal plans / attempts"
              name="group1"
              type={"checkbox"}
              id={`inline-checkbox-1`}
            />
            <Form.Check
              inline
              label="Mood swings"
              name="group1"
              type={"checkbox"}
              id={`inline-checkbox-1`}
            />
            <Form.Check
              inline
              label="Depression"
              name="group1"
              type={"checkbox"}
              id={`inline-checkbox-1`}
            />
            <Form.Check
              inline
              label="Changed level of activity"
              name="group1"
              type={"checkbox"}
              id={`inline-checkbox-1`}
            />
            <Form.Check
              inline
              label="Cries easily"
              name="group1"
              type={"checkbox"}
              id={`inline-checkbox-1`}
            />
          </div>
        </div>
        <button className="form_submit_btn mt-4" onClick={() => handleNextStep()}>
          {" "}
          Next{" "}
        </button>
      </div>
    </div>
  )
}

export default SympstomCheck