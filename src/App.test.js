// Reservations.test.js

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import BookingForm from './components/BookingForm';
import Reservations from './components/Reservations';
describe('Reservations component', () => {
  it('updates available times based on the selected date', () => {
    const { getByLabelText, getByText } = render(<Reservations />);
    const dateInput = getByLabelText('Choose date');

    // Choose a date
    fireEvent.change(dateInput, { target: { value: '2024-03-01' } });

    // Check if the available times are updated
    expect(getByText('09:00')).toBeInTheDocument();
    expect(getByText('10:00')).toBeInTheDocument();
    expect(getByText('11:00')).toBeInTheDocument();
    expect(getByText('12:00')).toBeInTheDocument();
    expect(getByText('13:00')).toBeInTheDocument();
  });

  it('updates available times when no date selected', () => {
    const { getByLabelText, getByText } = render(<Reservations />);
    const dateInput = getByLabelText('Choose date');

    // Choose a date
    fireEvent.change(dateInput, { target: { value: '' } });

    // Check if the available times are updated
    expect(getByText('17:00')).toBeInTheDocument();
    expect(getByText('18:00')).toBeInTheDocument();
    expect(getByText('19:00')).toBeInTheDocument();
    expect(getByText('20:00')).toBeInTheDocument();
    expect(getByText('21:00')).toBeInTheDocument();
    expect(getByText('22:00')).toBeInTheDocument();
  });

  

  it('displays error messages for empty fields on form submission', () => {
    const { getByLabelText, getByText } = render(<Reservations />);
    const submitButton = getByLabelText('Submit reservation');

    // Submit the form without filling out any fields
    fireEvent.click(submitButton);

    // Check if error messages are displayed for empty fields
    expect(getByText('Please choose a date.')).toBeInTheDocument();
    expect(getByText('Please choose a time.')).toBeInTheDocument();
    expect(getByText('Please enter the number of guests.')).toBeInTheDocument();
    expect(getByText('Please select an occasion.')).toBeInTheDocument();
  });

  
});
describe('BookingForm Component', () => {
  test('Renders the "Choose date" label', () => {
    // Define initial formData state
    const initialFormData = {
      date: '', // Set date to empty string or any initial value you need for the test
      time: '',
      guests: '',
      occasion: '',
      dateError: '',
      timeError: '',
      guestsError: '',
      occasionError: ''
    };

    // Render BookingForm with initialFormData
    render(<BookingForm formData={initialFormData} />);

    // Check if the "Choose date" label is rendered
    const element = screen.getByLabelText('Choose date');
    expect(element).toBeInTheDocument();
  });

  describe('BookingForm Component', () => {
    test('Allows the user to submit the form', () => {
      // Define initial formData state
      const initialFormData = {
        date: '2024-03-01', // Set an initial date value for testing
        time: '17:00', // Set an initial time value for testing
        guests: '2', // Set an initial number of guests value for testing
        occasion: 'Birthday', // Set an initial occasion value for testing
        dateError: '',
        timeError: '',
        guestsError: '',
        occasionError: ''
      };
  
      // Mock handleSubmit function
      const handleSubmit = jest.fn();
  
      // Render BookingForm with initialFormData and handleSubmit function
      render(<BookingForm formData={initialFormData} onSubmit={handleSubmit} />);
  
      // Find and click the submit button
      const submitButton = screen.getByLabelText('Submit reservation');
      fireEvent.click(submitButton);
  
      // Check if handleSubmit function is called when the form is submitted
      expect(handleSubmit).toHaveBeenCalled();
    });
  });
  

  
});