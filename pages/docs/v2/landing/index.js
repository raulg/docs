import { useAmp } from 'next/amp'
import { useRouter } from 'next/amp'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, Configure } from 'react-instantsearch-dom'
import AutoComplete from '../../../../components/search'
import Layout from '../../../../components/layout/layout'
import Button from '../../../../components/buttons'

function getAlgoliaClient() {
  const algoliaClient = algoliasearch(
    'NNTAHQI9C5',
    'ac5d89f9877f9fb09dbdc9a010cca761'
  )

  return {
    async search(requests) {
      if (requests.every(({ params: { query } }) => Boolean(query) === false)) {
        return {
          results: requests.map(() => {
            return {
              processingTimeMS: 0,
              nbHits: 0,
              hits: [],
              facets: {}
            }
          })
        }
      }

      return algoliaClient.search(requests)
    },
    async searchForFacetValues(requests) {
      return algoliaClient.searchForFacetValues(requests)
    }
  }
}

const searchClient = getAlgoliaClient()

function Landing() {
  return (
    <Layout>
      <main>
        <section className="hero-section">
          <h1>Docs</h1>
          <div className="desktop-search">
            <InstantSearch indexName="prod_docs" searchClient={searchClient}>
              <Configure hitsPerPage={8} />
              <AutoComplete />
            </InstantSearch>
          </div>
          <div className="get-started-cta">
            <Button bgColor="#007aff" width="fit-content">
              Get started with our quick introduction
            </Button>
          </div>
        </section>
        <section className="docs-navigation-section">
          <div className="docs-navigation-wrapper">
            <div className="navigation-left">
              <div>
                <h4>Platform</h4>
                <p>Overview</p>
                <p>Overview</p>
                <p>Overview</p>
                <p>Overview</p>
                <p>Overview</p>
                <p>Overview</p>
                <p>Overview</p>
                <p>Overview</p>
              </div>
              <div>
                <h4>Cloud Deployment</h4>
                <p>Overview</p>
                <p>Overview</p>
                <p>Overview</p>
                <p>Overview</p>
                <p>Overview</p>
                <p>Overview</p>
                <p>Overview</p>
                <p>Overview</p>
              </div>
              <div>
                <h4>Routing</h4>
                <p>Overview</p>
                <p>Overview</p>
                <p>Overview</p>
                <p>Overview</p>
                <p>Overview</p>
                <p>Overview</p>
                <p>Overview</p>
                <p>Overview</p>
              </div>
              <div>
                <h4>Getting Started</h4>
                <p>Overview</p>
                <p>Overview</p>
              </div>
              <div>
                <h4>Local Development</h4>
                <p>Overview</p>
                <p>Overview</p>
                <p>Overview</p>
              </div>
              <div>
                <h4>Integrations</h4>
                <p>Overview</p>
                <p>Overview</p>
              </div>
            </div>
            <div className="navigation-right">
              <h4>Domains and Aliases</h4>
              <p>Overview</p>
              <p>Overview</p>
              <p>Overview</p>
              <p>Overview</p>
              <p>Overview</p>
              <p>Overview</p>
              <p>Overview</p>
              <p>Overview</p>
              <p>Overview</p>
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        .hero-section {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 335px;
          background-color: rgba(250, 250, 250);
        }
        .hero-section h1 {
          font-size: 36px;
        }
        .get-started-cta {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translate(-50%);
        }
        .docs-navigation-wrapper {
          display: flex;
          justify-content: center;
          max-width: 1000px;
          margin: 100px auto;
        }
        .docs-navigation-wrapper > .navigation-left {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          grid-column-gap: 100px;
          margin-right: 100px;
        }
        @media (max-width: 640px) {
          .docs-navigation-wrapper {
            flex-direction: column;
            align-items: flex-start;
            margin-left: 100px;
          }
          .docs-navigation-wrapper > .navigation-left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-right: 0;
          }
        }
      `}</style>
    </Layout>
  )
}

export default Landing
