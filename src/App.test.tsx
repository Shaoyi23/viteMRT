// App.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import ExampleWithLocalizationProvider from './App';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('ExampleWithLocalizationProvider', () => {
  it('renders the table', () => {
    render(<ExampleWithLocalizationProvider />);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('renders the table with correct columns', () => {
    render(<ExampleWithLocalizationProvider />);

    // Check if the columns are rendered
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Salary')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('City')).toBeInTheDocument();
    expect(screen.getByText('State')).toBeInTheDocument();
    expect(screen.getByText('Hire Date')).toBeInTheDocument();
    expect(screen.getByText('Arrival Time')).toBeInTheDocument();
    expect(screen.getByText('Departure Time')).toBeInTheDocument();
  });

  it('filters rows based on text input', async () => {
    render(<ExampleWithLocalizationProvider />);

    // Find the filter input for the 'Name' column
    const nameFilterInput = screen.getByPlaceholderText('Filter by Name');

    // Simulate user typing in the filter input
    fireEvent.change(nameFilterInput, { target: { value: 'John' } });

    // Check if the filtered rows are displayed
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.queryByText('Jane')).not.toBeInTheDocument();
  });

  // it('filters rows based on salary range', async () => {
  //   render(<ExampleWithLocalizationProvider />);

  //   // Find the filter input for the 'Salary' column
  //   const salaryFilterInput = screen.getByRole('range-slider');

  //   // Simulate user adjusting the salary range
  //   fireEvent.change(salaryFilterInput, { target: { value: 50000 } });

  //   // Check if the filtered rows are displayed
  //   expect(screen.getByText('$50,000.00')).toBeInTheDocument();
  //   expect(screen.queryByText('$30,000.00')).not.toBeInTheDocument();
  // });
});