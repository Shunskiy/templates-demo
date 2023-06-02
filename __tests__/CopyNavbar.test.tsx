import { render } from "@testing-library/react";
import CopyNavbar from "@/components/CopyNavbar/CopyNavbar";
import { expect } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';

describe('CopyNavbar Component', () => {
  it('should render navbar items properly', () => {
      const content = [
          { title: 'Home', href: '/home' },
          { title: 'About', href: '/about' },
          { title: 'Contact', href: '/contact' }
      ]
      const { getByText } = render(<CopyNavbar content={content} />)
      
      expect(getByText('Home')).toBeInTheDocument()
      expect(getByText('About')).toBeInTheDocument()
      expect(getByText('Contact')).toBeInTheDocument()
  })

  it('should apply column direction style when direction prop is set to "column"', () => {
      const content = [{ title: 'Home', href: '/home' }]
      const { container } = render(<CopyNavbar content={content} direction="column" />)
      
      expect(container.firstChild).toHaveClass('navbar--flex')
  })
})