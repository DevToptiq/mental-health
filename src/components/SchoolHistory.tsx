import React from 'react'
import Input from './Common/Input'
import AppointmentSuccessfulModal from './AppointmentSuccesfulModal'
const SchoolHistory = () => {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <div className="SchoolHistoryContainer">
      <div className="SchoolHistory_child_container">
        <h4 className="h4_child"> School History</h4>
        <Input label="Present Class" placeholder="Present Class" />
        <Input label="Grade" placeholder="Grade" />
        <Input label="Teacher Name" placeholder="Teacher Name" />
        <h4 className="h4_child">Has child ever repeated any grade?</h4>
        <Input label="Teacher Name" placeholder="Teacher Name" />
        <h4 className="h4_child">Is child in special education services?</h4>
        <h4 className="h4_child">
          Please describe academic or other problems your child has had in
          school
        </h4>
        <textarea className="textArea" placeholder="describe"></textarea>
        <button className="form_submit_btn" onClick={() => setModalShow(true)}>
          Confirm Appointment
        </button>
        <AppointmentSuccessfulModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  )
}

export default SchoolHistory