import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CurrencyContext from '../contexts/CurrencyContext';
import CurrencyConverter from '../CurrencyConverter';

describe('Currency Converter', () => {
  it('should render title and not be empty', () => {
    // Arrange: Render the component
    render(<CurrencyContext.Provider
      value={{
        fromCurrency: "USD",
        toCurrency: "EUR",
      }}
      >
        <CurrencyConverter />
      </CurrencyContext.Provider>
    );

    // Assert: Check that the rendered page contains some content
    expect(screen.getByText('Currency Converter')).toBeInTheDocument();
    expect(screen.getByText('USD')).toBeInTheDocument();
    expect(screen.getByText('EUR')).toBeInTheDocument();
  });
});

