import React from "react";
import { Container, Col, Row } from 'react-bootstrap'; 
import { atcb_action } from 'add-to-calendar-button';
import 'add-to-calendar-button/assets/css/atcb.css';



const Calendar = ({start, end, setStart, setEnd, location, setLocation}) => {

    return (
        <Container style={{ height: '100vh', width: '100%' }} className="overflow-scroll">
            <Row>
                <Col>
                    <p>My next trip</p>
                </Col>
            </Row>
            <Row>
                <form  onSubmit={e => {
                    e.preventDefault();
                    atcb_action({
                        name: 'My holiday',
                        startDate: start,
                        endDate: end,
                        location: location,
                        options: ['Apple', 'Google', 'Outlook.com', 'Yahoo'],
                        timeZone: "Europe/Berlin",
                        iCalFileName: "Reminder-Event",
                    });
                    }}>

                    <input type="search" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)}></input>
                    <label>From:</label>
                    <input type='date' value={start} onChange={(e) => setStart(e.target.value)} />
                    <label>TO:</label>
                    <input type='date' value={end} onChange={(e) => setEnd(e.target.value)} />
                    <input type="submit" value="Add to Calendar" />
                </form>
            </Row>
        </Container>
)}

export default Calendar;