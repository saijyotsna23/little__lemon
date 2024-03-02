import React from "react";
import '../ConfirmationMessage.css';
const ConfirmationMessage = ({ bookingDetails }) => {
    return (
        <div className="confirmation-modal">
            <h2>Booking Confirmation</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Thank you for your booking!</td>
                    </tr>
                    <tr>
                        <td>Date:</td>
                        <td>{bookingDetails.date}</td>
                    </tr>
                    <tr>
                        <td>Time:</td>
                        <td>{bookingDetails.time}</td>
                    </tr>
                    <tr>
                        <td>Guests:</td>
                        <td>{bookingDetails.guests}</td>
                    </tr>
                    <tr>
                        <td>Occasion:</td>
                        <td>{bookingDetails.occasion}</td>
                    </tr>
                </tbody>
            </table>
        
        </div>
    );
};

export default ConfirmationMessage;