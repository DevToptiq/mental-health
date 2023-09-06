import React, { useState } from "react";
import { CalendarComponent } from "./Calendar";
import { MediaTypeSelection } from "./MediaTypeSelection";
import { TimeSelection } from "./TimeSelection";
import { Confirmation } from "./Confirmation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scheduleAppointment.css";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../components/Common/Buttons/Button";
import BackButton from "../../components/Common/Buttons/BackButton";
import SideBar from "../../components/SideBar";
import { useNavigate } from "react-router-dom";

const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const navigate = useNavigate();
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const handleClick = () => {
    navigate("/select-doctor");
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleMediaChange = (media: string) => {
    setSelectedMedia(media);
  };

  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <Container>
      <div className="m-3">
        <Row className="flex-nowrap align-items-center my-4">
          <BackButton />
          <span className="vl"></span>
          <h5>Schedule Appointment</h5>
        </Row>
      </div>
      <Row className="">
        <Col md={12} lg={6} sm={12}>
          <CalendarComponent onDateChange={handleDateChange} />
        </Col>
        <Col
          md={12}
          lg={6}
          sm={12}
          className="bg-white py-4 px-4"
          style={{ borderRadius: "24px" }}
        >
          {/* <MediaTypeSelection onMediaChange={handleMediaChange} /> */}
          <TimeSelection onTimeChange={handleTimeChange} />
          <Confirmation
            selectedDate={selectedDate}
            selectedMedia={selectedMedia}
            selectedTime={selectedTime}
          />
        </Col>
      </Row>

      <div className="mt-4">
        <Row className="text-end justify-content-end">
          <Button
            variant="primary"
            className="schedule-btn"
            title="Schedule Appointment"
            onClick={handleClick}
          />
        </Row>
      </div>
    </Container>
  );
};

export default AppointmentScheduler;
