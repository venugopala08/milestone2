import React, { useState } from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { message } from 'antd';

export default function Applyleave() {
    const [leaveType, setLeaveType] = useState('');
    const [selectedStartDate, setSelectedStartDate] = useState('');
    const [selectedStopDate, setSelectedStopDate] = useState('');
    const [disabled, setDisabled] = useState(true);

    const handleStartDateChange = (event) => {
        setSelectedStartDate(event.target.value);
        setDisabled(false);
    };

    const handleStopDateChange = (event) => {
        setSelectedStopDate(event.target.value);
        setDisabled(false);
    };

    const handleLeaveTypeChange = (event) => {
        setLeaveType(event.target.value);
        setDisabled(false);
    };

    const handleSubmit = () => {
        if (!leaveType || !selectedStartDate || !selectedStopDate) {
            message.warning("Please fill out all required fields.");
            return;
        }
        message.success(`Submitted Successfully\nLeave type: ${leaveType}\nFrom: ${selectedStartDate}\nTo: ${selectedStopDate}`);
        setLeaveType('');
        setSelectedStartDate('');
        setSelectedStopDate('');
        setDisabled(true);
    };

    return (
        <>
            <Navbar />
            <h3>Apply Leave</h3>
            <Container>
                <Form.Group>
                    <Form.Label>Select Leave Type</Form.Label>
                    <Form.Select aria-label="Default select leave type" value={leaveType} onChange={handleLeaveTypeChange}>
                        <option>Select Leave Type</option>
                        <option value="Casual Leave">Casual Leave</option>
                        <option value="Sick Leave">Sick Leave</option>
                        <option value="Festival Leave">Festival Leave</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="startDateInput">From:</Form.Label>
                    <Form.Control
                        type="date"
                        id="startDateInput"
                        name="startDateInput"
                        value={selectedStartDate}
                        onChange={handleStartDateChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="stopDateInput">To:</Form.Label>
                    <Form.Control
                        type="date"
                        id="stopDateInput"
                        name="stopDateInput"
                        value={selectedStopDate}
                        onChange={handleStopDateChange}
                    />
                </Form.Group>
                <Button
                    variant="outline-dark"
                    as={Link}
                    to="/leave"
                    disabled={disabled}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Container>
        </>
    );
}
