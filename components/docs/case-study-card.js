import { memo } from 'react'
import { AnchorLink } from '~/components/text/link'

function CaseStudyCard({ children, description, href }) {
  return (
    <div className="case-study-card-container">
      <div className="icon">{children}</div>
      <p>{description}</p>
      <AnchorLink>Read case study</AnchorLink>
      <style jsx>{`
        .case-study-card-container {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          padding: 25px;
          width: 530px;
          height: 335px;
          border-radius: 4px;
          box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.12);
          position: absolute;
          left: 50%;
          transform: translate(-50%);
        }
        .case-study-card-container :global(a) {
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default memo(CaseStudyCard)
