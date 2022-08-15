import { fireEvent, render } from '@testing-library/react';
import ActionButon from './ActionButon';

const mockAction = jest.fn();

function renderActionButton() {
  return render(<ActionButon action={mockAction}>Test</ActionButon>);
}

describe('ActionButton', () => {

  it('should render successfully', () => {
    
    const { baseElement } = renderActionButton();
    
    expect(baseElement).toBeTruthy();
  });

  it('should call action when clicked', () => {
    const { queryByText } = renderActionButton();
    const button = queryByText("Test");
    if (button) {
      fireEvent.click(button);
    }
    expect(mockAction).toHaveBeenCalled()
  });

});
