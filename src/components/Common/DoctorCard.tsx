import { useState } from "react";
import SideBar from "../SideBar";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({ img }: any) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/doctor-detail");
  };
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const handleCloseOffCanvas = () => setShowOffCanvas(false);
  return (
    <div className="select_doctor_card">
      <div className="doctor_img" onClick={handleClick}>
        <img src={img} alt="doctor" />
      </div>
      <div className="info_container">
        <p className="doctor_name">Dr. Bessie Cooper</p>
        <p className="doctor_designation">Psychiatrist</p>
      </div>
      <hr className="form_separator" style={{ margin: "10px 0px" }} />
      <button className="doctor_card_btn" onClick={handleClick}>
        {" "}
        View Profile{" "}
      </button>
      <SideBar
        placement={"end"}
        name={"end"}
        show={showOffCanvas}
        onHide={handleCloseOffCanvas}
      />
    </div>
  );
};

export default DoctorCard;
