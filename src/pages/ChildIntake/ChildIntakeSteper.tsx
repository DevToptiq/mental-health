import { useState } from "react"
import SympstomCheck from "../../components/SympstomCheck"
import SiblingsInformation from "../../components/SiblingsInformation"
import SchoolHistory from "../../components/SchoolHistory"


const ChildIntakeSteper = () => {
  
  const [activeStep, setActiveStep] = useState(1)

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1)
  }

  return (
    <>
      <div className="d-flex justify-content-center mb-5">
        {activeStep === 1 && <SympstomCheck handleNextStep={handleNextStep} />}
        {activeStep === 2 && (
          <SiblingsInformation handleNextStep={handleNextStep} />
        )}
        {activeStep === 3 && <SchoolHistory />}
      </div>
      <div className="copyright text-center" style={{ borderTop: "0px" }}>
        © 2023 Mental Support. All rights reserved
      </div>
    </>
  )
}

export default ChildIntakeSteper
