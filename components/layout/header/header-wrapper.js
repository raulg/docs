import Wrapper from '../wrapper'
import { HEADER_HEIGHT } from '~/lib/constants'

const Header = ({ className, hideHeader, children }) => (
  <header className={className}>
    <Wrapper className="content">{children}</Wrapper>
    <style jsx>{`
      header {
        background: #fff;
        border-bottom: 1px solid #eaeaea;
        height: ${HEADER_HEIGHT}px;
        position: fixed;
        width: 100%;
        z-index: 1000;
        transition: top 150ms ease-in-out;
      }

      header > :global(.content) {
        align-items: center;
        display: flex;
        height: 100%;
      }
    `}</style>
    <style jsx>{`
      header {
        top: ${hideHeader ? '-80px' : '0'};
      }
    `}</style>
  </header>
)

export default Header
