import { render } from '@testing-library/react';

import About from '../../src/pages/about';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<About />);
    expect(baseElement).toBeTruthy();
  });
});
