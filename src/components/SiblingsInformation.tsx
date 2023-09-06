import Input from './Common/Input'
import Select from './Common/Select'
import add_icon from '../assets/icons/add.svg'

const SiblingsInformation = ({ handleNextStep } : any) => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ]
  return (
    <div className="SiblingsInformationContainer">
      <div className="Siblings_child_container">
        <h4 className="h4_child">Siblings Information</h4>
        <Input label="First Name" placeholder="First Name" />
        <Input label="Last Name" placeholder="Last Name" />
        <div className="d-flex justify-content-between fl-dr">
          <div className="sm_form_w">
            <Input label="Age" placeholder="Age" />
          </div>
          <div className="sm_form_w">
            <Select options={options} label="Gender" />
          </div>
        </div>
        <Input label="Last Name" placeholder="Last Name" />
        <Select options={options} label="Relationship to child" />
        <button className="add_siblings">
          <div>
            <img src={add_icon} alt="add" style={{ marginRight: "4px" }} />
            <span>Add Siblings</span>
          </div>{" "}
        </button>
        <button className="form_submit_btn" onClick={handleNextStep}>
          {" "}
          Submit{" "}
        </button>
      </div>
    </div>
  )
}

export default SiblingsInformation