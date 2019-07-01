import Wrapper from '../wrapper'
import { HEADER_HEIGHT } from '~/lib/constants'

const Header = ({
  className,
  hideHeader,
  dynamicSearch,
  prevScrollPos = 0,
  children
}) => (
  <header className={className}>
    <Wrapper className="content">{children}</Wrapper>
    <style jsx>{`
      header {
        height: ${HEADER_HEIGHT}px;
        position: fixed;
        width: 100%;
        z-index: 1000;
        transition: all 150ms ease-in-out;
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
        background: ${prevScrollPos < 256 && dynamicSearch
          ? 'transparent'
          : '#fff'};
        border-bottom: ${prevScrollPos < 256 && dynamicSearch
          ? ''
          : '1px solid #eaeaea'};
      }
    `}</style>
  </header>
)

export default Header
