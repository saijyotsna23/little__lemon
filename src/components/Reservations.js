
import React, { useReducer, useState } from "react";
import BookingForm from "./BookingForm";

const Reservations = () => {
    // Initial available times
    const initialAvailableTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ];

    // Reducer function to manage available times state
    const availableTimesReducer = (state, action) => {
        switch (action.type) {
            case 'UPDATE_TIMES':
                return action.times;
            default:
                return state;
        }
    };

    // Use reducer to manage available times state
    const [availableTimes, dispatchAvailableTimes] = useReducer(
        availableTimesReducer,
        initialAvailableTimes
    );

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

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

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
        }
    };

    const handleChange = (field, value) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: value,
            [`${field}Error`]: "" // Clear the error message for the field
        }));
    };

    // Function to update available times based on the selected date
    const updateAvailableTimes = (selectedDate) => {
        const weekdaysTimes = [
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00"
        ];
    
        const weekendTimes = [
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00"
        ];
        
    
        const isWeekend = selectedDate.getDay() === 5 || selectedDate.getDay() === 6;
        return isWeekend ? weekendTimes : weekdaysTimes;
    };
    
    
    
    // Handle date change and update available times
    const handleDateChange = (selectedDate) => {
        const updatedTimes = updateAvailableTimes(selectedDate);
        dispatchAvailableTimes({ type: 'UPDATE_TIMES', times: updatedTimes });
    };

    return (
        <div className="container">
            <BookingForm
                formData={formData}
                availableTimes={availableTimes}
                onChange={handleChange}
                onSubmit={handleSubmit}
                onDateChange={handleDateChange} // Pass the date change handler
            />
        </div>
    );
};

export default Reservations;
