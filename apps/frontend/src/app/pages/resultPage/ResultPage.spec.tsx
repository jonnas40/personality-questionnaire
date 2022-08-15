import { act, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { fetchQuestions } from '../../services/apiFetch.service';
import { mockQuestion, mockResult } from '../../mocks/testMocks'


import ResultPage from './ResultPage';

jest.mock('../../services/apiFetch.service');

const fetchMock = fetchQuestions as jest.Mock

fetchMock.mockResolvedValue(mockQuestion)


function renderResultPage() {
  return render(<MemoryRouter initialEntries={[{ state: mockResult }]}><ResultPage /></MemoryRouter>);
}

describe('ResultPage', () => {
  it('should render successfully', async () => {
    await act(async () => {
      const { baseElement } = renderResultPage();
      expect(baseElement).toBeTruthy();
    });
  });
  
  it('should fade in text', () => {
    act(() => {renderResultPage()})
    expect(screen.getByText(/The results are in!/)).toBeTruthy();
    expect(screen.getByText(/And it looks like you're an.../)).toBeTruthy();
    expect(screen.getByText(/introvert!/)).toBeTruthy();
    expect(screen.getByText(/Back to the home page/)).toBeTruthy();
    expect(screen.getByText(/Restart test/)).toBeTruthy();
  });
});
