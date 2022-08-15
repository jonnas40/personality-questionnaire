import { act, fireEvent, render, screen } from '@testing-library/react';
import TestSlide from './TestSlide';
import { mockQuestion, mockResult } from '../../../mocks/testMocks'
import { BrowserRouter } from 'react-router-dom';
import { postResults } from '../../../services/apiFetch.service';

jest.mock('../../services/apiFetch.service');

const postMock = postResults as jest.Mock

postMock.mockResolvedValue(mockResult)


function renderTestSlide() {
  return render(<BrowserRouter><TestSlide questions={mockQuestion} /></BrowserRouter>);
}

describe('TestSlide', () => {

  it('should render successfully', async () => {
    act(() => {
      const { baseElement } = renderTestSlide();
      expect(baseElement).toBeTruthy();
    })
  });

  it('should have initial text on page', async () => {
    act(() => {
      renderTestSlide()
    })
      expect(screen.getByText(/prompt1/)).toBeTruthy();
      expect(screen.getByText(/text1/)).toBeTruthy();
      expect(screen.getByText(/Next question/)).toBeTruthy();
  });

  it('should have second question text on page', async () => {
    act(() => {
      renderTestSlide()
    })
      fireEvent.click(screen.getByText(/text1/));
      fireEvent.click(screen.getByText(/Next question/));
      expect(screen.getByText(/prompt2/)).toBeTruthy();
      expect(screen.getByText(/text2/)).toBeTruthy();
      expect(screen.getByText(/Previous question/)).toBeTruthy();
      expect(screen.getByText(/Submit/)).toBeTruthy();
      fireEvent.click(screen.getByText(/Previous question/));

  });

  it('should go back to first question', async () => {
    act(() => {
      renderTestSlide()
    })
      fireEvent.click(screen.getByText(/text1/));
      fireEvent.click(screen.getByText(/Next question/));
      expect(screen.getByText(/prompt2/)).toBeTruthy();
      expect(screen.getByText(/text2/)).toBeTruthy();
      expect(screen.getByText(/Previous question/)).toBeTruthy();
      fireEvent.click(screen.getByText(/Previous question/));
      expect(screen.getByText(/prompt1/)).toBeTruthy();
      expect(screen.getByText(/text1/)).toBeTruthy();
  });

});
