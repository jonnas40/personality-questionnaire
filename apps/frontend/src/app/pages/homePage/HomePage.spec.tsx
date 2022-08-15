import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';



import HomePage from './HomePage';

function renderHomePage() {
  return render(<BrowserRouter><HomePage /></BrowserRouter>);
}

describe('HomePage', () => {
  it('should render successfully', () => {
    
    const { baseElement } = renderHomePage();
    
    expect(baseElement).toBeTruthy();
  });
  it('should have text on page', () => {
    renderHomePage()
    expect(screen.getByText(/Discover your personality type/)).toBeTruthy();
    expect(screen.getByText(/Are you an extrovert or an introvert?/)).toBeTruthy();
    expect(screen.getByText(/Start test/)).toBeTruthy();
  });
  it('should have button with link', () => {
    renderHomePage()
    const button = screen.getByText(/Start test/)
    expect(button).toHaveProperty('href', 'http://localhost/test')
  });

});
