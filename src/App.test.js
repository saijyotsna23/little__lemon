import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { fetchAPI } from './api';
import BookingForm from './components/BookingForm';
import Reservations from './components/Reservations';
jest.mock('./api', () => ({
  fetchAPI: jest.fn(),
}));

describe('Reservations Component', () => {
  test('fetches available times and initializes state correctly', async () => {
    // Mock fetchAPI to return undefined
    fetchAPI.mockResolvedValueOnce(undefined);

    render(
      <Router>
        <Reservations />
      </Router>
    );

    // Check if select element is present
    const timeSelect = screen.getByLabelText('Choose time');
    expect(timeSelect).toBeInTheDocument();

    // Ensure that the select element contains the default option
    expect(screen.getByDisplayValue('Select time')).toBeInTheDocument();
  });

  test('updateTimes dispatches action to update available times', async () => {
    // Mock fetchAPI to return a non-empty array
    const availableTimes = ['09:00 AM', '10:00 AM', '11:00 AM'];
    fetchAPI.mockResolvedValueOnce(availableTimes);

    const dispatch = jest.fn(); // Mock dispatch function

    render(
      <Router>
        <Reservations dispatch={dispatch} />
      </Router>
    );

    // Wait for the select element to be rendered
    const timeSelect = await screen.findByLabelText('Choose time');

    // Check if each time option is present in the select element
    availableTimes.forEach(async time => {
      // Wait for the option to appear
      const option = await screen.findByRole('option', { name: time });
      expect(option).toBeInTheDocument();
    });

    
   
  });

  it('displays error messages for empty fields on form submission', () => {
    const { getByLabelText, getByText } = render(<Router>
      <Reservations />
    </Router>);
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



