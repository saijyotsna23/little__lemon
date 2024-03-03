import React from "react";
import { useLocation } from "react-router-dom";
import '../ConfirmationMessage.css';
const ConfirmedBooking = () => {
    const location=useLocation();
    console.log(location);
    return (
    <div className="container">
        <h2>Booking Confirmation</h2>
        <table>
        <tbody>
            <tr>
            <td>Thank you for your booking!</td>
           
            </tr>
            <tr><td>Your Booking Details</td></tr>
            <tr>
                        <td>Date:</td>
                        <td>{location.state.formData.date}</td>
                    </tr>
                    <tr>
                        <td>Time:</td>
                        <td>{location.state.formData.time}</td>
                    </tr>
                    <tr>
                        <td>Guests:</td>
                        <td>{location.state.formData.guests}</td>
                    </tr>
                    <tr>
                        <td>Occasion:</td>
                        <td>{location.state.formData.occasion}</td>
                    </tr>
            
        </tbody>
        </table>
    </div>
    );
};

export default ConfirmedBooking;