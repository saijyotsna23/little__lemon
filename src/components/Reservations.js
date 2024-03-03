
import React, { useEffect, useReducer, useState } from "react";
import { fetchAPI, submitAPI } from '../api';
import BookingForm from "./BookingForm";

import { useNavigate } from "react-router-dom";

const Reservations = () => {
    const navigate= useNavigate();
    const [formSubmitted, setFormSubmitted] = useState(false);
    // Reducer function to manage available times state
    const [availableTimes, dispatchAvailableTimes] = useReducer(
        (state, action) => action,
        [] // Initialize with an empty array
    );
    // Confirmation state
    

    // Form data state
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: "",
        dateError: "",
        timeError: "",
        guestsError: "",
        occasionError: ""
    });

    // Fetch available times for today's date on component mount
    useEffect(() => {
        const today = new Date();
        fetchAvailableTimes(today);
    }, []);

    // Function to fetch available times based on the selected date
    const fetchAvailableTimes = (date) => {
        const availableTimes = fetchAPI(date); // Use the fetchAPI with the date parameter
        dispatchAvailableTimes(availableTimes); // Update state with fetched times
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        // Validation logic as provided
        if (!formData.date) {
            setFormData(prevState => ({ ...prevState, dateError: "Please choose a date." }));
            isValid = false;
        } else {
            setFormData(prevState => ({ ...prevState, dateError: "" }));
        }

        if (!formData.time) {
            setFormData(prevState => ({ ...prevState, timeError: "Please choose a time." }));
            isValid = false;
        } else {
            setFormData(prevState => ({ ...prevState, timeError: "" }));
        }

        if (!formData.guests) {
            setFormData(prevState => ({ ...prevState, guestsError: "Please enter the number of guests." }));
            isValid = false;
        } else {
            setFormData(prevState => ({ ...prevState, guestsError: "" }));
        }

        if (!formData.occasion) {
            setFormData(prevState => ({ ...prevState, occasionError: "Please select an occasion." }));
            isValid = false;
        } else {
            setFormData(prevState => ({ ...prevState, occasionError: "" }));
        }

        if (isValid) {
            const success = submitAPI(formData); // Use the submitAPI to submit the form data

            if (success) {
                setFormSubmitted(true);
                // Reset form data after successful submission
                setFormData({
                    date: "",
                    time: "",
                    guests: "",
                    occasion: "",
                    dateError: "",
                    timeError: "",
                    guestsError: "",
                    occasionError: ""
                });
                navigate("/confirmed-booking",{state:{formData}});
                console.log("Form submitted successfully with data:", formData);// Optionally, provide feedback to the user
            }
        }
    };

    // Handle form field changes
    const onChange = (field, value) => {
        console.log(`Updating ${field} to ${value}`);
        setFormData(prevState => ({
            
            ...prevState,
            [field]: value,
            [`${field}Error`]: "" // Clear any field-specific error
        }));
    };

    // Handle date change and fetch available times
    const handleDateChange = (dateValue) => {
        const selectedDate = new Date(dateValue);
        const year = selectedDate.getFullYear();
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const day = String(selectedDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        setFormData(prevState => ({ ...prevState, date: formattedDate }));
        fetchAvailableTimes(selectedDate);
    };
    return (
        <div className="container">
            <BookingForm
                formData={formData}
                availableTimes={availableTimes}
                onChange={onChange}
                onSubmit={handleSubmit}
                onDateChange={handleDateChange} // Adjusted to handle fetching times
            />
        {formSubmitted && <p>Form submitted successfully</p>}
        </div>
        
    );
};

export default Reservations;
