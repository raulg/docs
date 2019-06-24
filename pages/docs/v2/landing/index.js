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
        <section className="case-studies-section">
          <h2 className="subheading">
            Helping Out Customers Be the Best
            <br className="desktop-only" /> at What They Do.
          </h2>
          <div className="case-study-cards">
            <div className="case-study-card" />
          </div>
        </section>
        <section className="support-section">
          <div className="priority-support-card" />
          <div className="support-check-list">
            <h4>All support plans include</h4>
            <ul>
              <li>Live Chat</li>
              <li>Priority Queuing</li>
              <li>Urgent Tickets</li>
            </ul>
            <Button bgColor="#007aff" width="fit-content">
              View Plans
            </Button>
          </div>
        </section>
        <section className="extra-resources-section">
          <div>
            <h4>Resources</h4>
            <p>
              Explore our docs and step-by-step guides to get familiar with our
              products and their features. Learn More.
            </p>
          </div>
          <div>
            <h4>Community</h4>
            <p>
              Tap into a wealth of knowledge with thousands of community members
              contributing. Join us on Spectrum.
            </p>
          </div>
          <div>
            <h4>Open Source</h4>
            <p>
              Search our repositories, open issues and contribute to our
              documentation. Fork us on GitHub.
            </p>
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
        .case-studies-section {
          margin-top: -150px;
          height: 700px;
          background-color: rgba(250, 250, 250);
        }
        .case-studies-section .subheading {
          text-align: center;
          padding-top: 100px;
        }
        .case-study-cards {
          margin-top: 50px;
          padding-bottom: 200px;
          position: relative;
        }
        .case-study-card {
          width: 530px;
          height: 335px;
          border-radius: 4px;
          box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.12);
          position: absolute;
          left: 50%;
          transform: translate(-50%);
        }
        .support-section {
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto;
          padding: 150px 0;
          border-bottom: 1px solid #eaeaea;
        }
        .priority-support-card {
          width: 528px;
          height: 310px;
          border-radius: 4px;
          background-color: #ffffff;
          box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.12);
        }
        .support-check-list {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 200px;
          margin-left: 100px;
        }
        .extra-resources-section {
          display: flex;
          max-width: 1000px;
          justify-content: space-between;
          margin: 100px auto;
        }
        .extra-resources-section > div {
          width: 300px;
        }
        @media (max-width: 640px) {
          .desktop-only {
            display: none;
          }
          .docs-navigation-wrapper {
            flex-direction: column;
            align-items: flex-start;
            margin-left: 35px;
          }
          .docs-navigation-wrapper > .navigation-left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-right: 0;
          }
          .case-studies-section .subheading {
            padding-left: 50px;
            padding-right: 50px;
          }
          .case-study-card {
            width: 300px;
            height: 250px;
          }
          .support-section {
            flex-direction: column;
          }
          .priority-support-card {
            width: 300px;
            height: 250px;
          }
          .support-check-list {
            margin-left: 0;
            margin-top: 50px;
          }
          .extra-resources-section {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </Layout>
  )
}

export default Landing
