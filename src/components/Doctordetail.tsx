import doc_img from "../assets/images/Doctor_detail.svg";
import call from "../assets/icons/call.svg";
import location from "../assets/icons/loc.svg";
import Certificate from "../assets/images/certificate.png";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { useState } from "react";
const Doctordetail = () => {
  const navigate = useNavigate();
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const handleCloseOffCanvas = () => setShowOffCanvas(false);
  const handleShowOffCanvas = () => setShowOffCanvas(true);

  return (
    <>
      <div className="doctor_detail_container">
        <div className="detail_header d-flex ">
          <img src={doc_img} alt="" className="doc_detail_img" />
          <div className="header_2nd">
            <div className="header_section_1">
              <div>
                <h4 className="h4_child" style={{ marginBottom: "0px" }}>
                  Richard Muldoone
                </h4>
                <span>Speciality : Heart Surgeon </span>
              </div>
              <button className="detail_btn" onClick={handleShowOffCanvas}>
                Book Appointment
              </button>
            </div>
            <div style={{ paddingLeft: "50px" }}>
              <hr className="form_separator" />
            </div>
            <div className="header_section_2">
              <div className="header_card">
                <p className="b_text">$250</p>
                <span className="n_text">Appointment Fee</span>
              </div>
              <div className="header_card">
                <p className="b_text">10+</p>
                <span className="n_text">Year Experience</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="form_separator" />
        <div className="detail_about">
          <h4 className="box_heading">About Doctor</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
          </p>
        </div>
        <hr className="form_separator" />
        <div className="detail_info">
          <div className="info_box">
            <p className="box_heading">Phone</p>
            <div
              className="d-flex align-items-center justify-content-center _hr"
              style={{ margin: "20px 0px" }}
            >
              <img src={call} alt="" className="info_img" />
              <div>
                <p style={{ fontWeight: "500" }}>Contact Us</p>
                <span className="light_text">+0123456789</span>
              </div>
            </div>
          </div>
          <div className="info_box">
            <p className="box_heading">Location</p>
            <div
              className="d-flex align-items-center justify-content-center _hr"
              style={{ margin: "20px 0px" }}
            >
              <img src={location} alt="" className="info_img" />
              <div>
                <p style={{ fontWeight: "500" }}>Lotus Medical Center</p>
                <span className="light_text">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="form_separator" />
        <div className="detail_certificate">
          <p className="box_heading">Certificates</p>
          <div className="certificate_box">
            <img src={Certificate} alt="" className="cer_img" />
            <img src={Certificate} alt="" className="cer_img" />
            <img src={Certificate} alt="" className="cer_img" />
            <img src={Certificate} alt="" className="cer_img" />
            <img src={Certificate} alt="" className="cer_img" />
            <img src={Certificate} alt="" className="cer_img" />
          </div>
        </div>
      </div>
      <SideBar
        placement={"end"}
        name={"end"}
        show={showOffCanvas}
        onHide={handleCloseOffCanvas}
      />
    </>
  );
};

export default Doctordetail;
