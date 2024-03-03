
import React from "react";
import '../Reservations.css';

const BookingForm = ({ formData, availableTimes, onChange, onSubmit, onDateChange }) => {
    return (
        <div className="formstyle">
            <form onSubmit={onSubmit} className="booking-form">
                <div className="form-group">
                    <label htmlFor="res-date">Choose date<sup>*</sup> :</label>
                    <input
                        type="date"
                        id="res-date"
                        value={formData.date}
                        onChange={(e) => { onChange("date", e.target.value); onDateChange(new Date(e.target.value)); }}
                        className={formData.dateError ? "error-border" : ""}
                        aria-label="Choose date"
                        aria-required="true"
                    />
                    {formData.dateError && <p className="error">{formData.dateError}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="res-time">Choose time<sup>*</sup> :</label>
                    <select
                        id="res-time"
                        value={formData.time}
                        onChange={(e) => onChange("time", e.target.value)}
                        className={formData.timeError ? "error-border" : ""}
                        aria-label="Choose time"
                        aria-required="true"
                    >
                        <option value="" disabled hidden>Select time </option>
    {Array.isArray(availableTimes) && availableTimes.map((time, index) => (
        <option key={index}>{time}</option>
    ))}
                    </select>
                    {formData.timeError && <p className="error">{formData.timeError}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="guests">Number of guests<sup>*</sup> :</label>
                    <input
                        type="number"
                        placeholder="0"
                        min="1"
                        max="10"
                        id="guests"
                        value={formData.guests}
                        onChange={(e) => onChange("guests", e.target.value)}
                        className={formData.guestsError ? "error-border" : ""}
                        aria-label="Number of guests"
                        aria-required="true"
                    />
                    {formData.guestsError && <p className="error">{formData.guestsError}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="occasion">Occasion<sup>*</sup> :</label>
                    <select
                        id="occasion"
                        value={formData.occasion}
                        onChange={(e) => onChange("occasion", e.target.value)}
                        className={formData.occasionError ? "error-border" : ""}
                        aria-label="Select occasion"
                        aria-required="true"
                    >
                        <option value="" disabled hidden>Select occasion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Other</option>
                    </select>
                    {formData.occasionError && <p className="error">{formData.occasionError}</p>}
                </div>
                <input type="submit" value="Make Your reservation" className="submit-btn" aria-label="Submit reservation" />
            </form>
        </div>
    );
}

export default BookingForm;
