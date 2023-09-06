import Input from "./Common/Input";
import Select from "./Common/Select";
import Form from "react-bootstrap/esm/Form";
import { useNavigate } from "react-router-dom";

const ChildIntakeForm = () => {
  const options = [
    { value: "option1", label: "Male" },
    { value: "option2", label: "Female" },
    { value: "option3", label: "Others" },
  ];
  const navigate = useNavigate();
  return (
    <div style={{ width: "660px" }}>
      <h4 className="h4_child">Child Information</h4>
      <Input label="Child's Name" placeholder="Child's Name" />
      <div className="d-flex justify-content-between fl-dr">
        <div className="sm_form_w">
          <Input label="Age" placeholder="Age" />
        </div>
        <div className="sm_form_w">
          <Select options={options} label="Gender" />
        </div>
      </div>
      <Input
        label="Date of Birth"
        placeholder="Date of Birth"
        className={"calendar_input"}
      />
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="h4_child">Natural Child</h4>
        <div>
          <Form.Check
            inline
            label="yes"
            name="group1"
            type={"radio"}
            id={`inline-radio-1`}
          />
          <Form.Check
            inline
            label="No"
            name="group1"
            type={"radio"}
            id={`inline-radio-1`}
          />
        </div>
      </div>
      <hr className="form_separator" />
      <h4 className="h4_child">Parents Information</h4>
      <Input label="Name of Father" placeholder="Name of Father" />
      <Input label="Name of Mother" placeholder="Name of Mother" />
      <Input label="Phone Number" placeholder="Phone Number" />
      <Input label="Street Address" placeholder="Street Address" />
      <Input label="Child's Name" placeholder="Child's Name" />
      <div className="d-flex justify-content-between fl-dr">
        <div className="sm_form_w">
          <Input label="State" placeholder="State" />
        </div>
        <div className="sm_form_w">
          <Input label="Zip Code" placeholder="Zip Code" />
        </div>
      </div>
      <Input label="Country" placeholder="Country" />
      <hr className="form_separator" />
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="h4_child">if Adopted</h4>
        <Form.Check
          inline
          checked
          name="group1"
          type={"checkbox"}
          id={`inline-checkbox-1`}
        />
      </div>
      <Input label="At what Age" placeholder="At what Age" />
      <Input label="Foster since" placeholder="Foster since" />
      <hr className="form_separator" />
      <h4 className="h4_child">Steps Parents Information</h4>
      <Input label="Name of Father" placeholder="Name of Father" />
      <Input label="Name of Mother" placeholder="Name of Mother" />
      <Input label="Phone Number" placeholder="Phone Number" />
      <Input label="Street Address  " placeholder="Street Addres  " />
      <Input label="City" placeholder="City" />
      <div className="d-flex justify-content-between fl-dr">
        <div className="sm_form_w">
          <Input label="State" placeholder="State" />
        </div>
        <div className="sm_form_w">
          <Input label="Zip Code" placeholder="Zip Code" />
        </div>
      </div>
      <Input label="Country" placeholder="Country" />
      <button
        className="form_submit_btn"
        onClick={() => navigate("/child-intake-steper")}
      >
        Submit
      </button>
    </div>
  );
};

export default ChildIntakeForm;
