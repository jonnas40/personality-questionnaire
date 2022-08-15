import { act, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { fetchQuestions } from '../../services/apiFetch.service';
import { mockQuestion } from '../../mocks/testMocks'


import TestPage from './TestPage';

jest.mock('../../services/apiFetch.service');

const fetchMock = fetchQuestions as jest.Mock

fetchMock.mockResolvedValue(mockQuestion)

function renderTestPage() {
  return render(<BrowserRouter><TestPage /></BrowserRouter>);
}

describe('TestPage', () => {
  it('should render successfully and to call fetch', async () => {
    await act(async () => {
      const { baseElement } = renderTestPage();
    
      expect(baseElement).toBeTruthy();
      });  
  });
  it('should fetch questions', async () => {
    expect(fetchMock).toBeCalledTimes(1);
  });
});
