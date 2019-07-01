import { useState, useEffect } from 'react'
import { useAmp } from 'next/amp'
import { useRouter } from 'next/router'
import Link from 'next/link'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, Configure } from 'react-instantsearch-dom'

import Fitt from '~/components/icons/fitt'
import Box from '~/components/icons/box'
import Message from '~/components/icons/message'
import GitHub from '~/components/icons/github-no-fill'
import Community from '~/components/icons/community'
import CaseStudyCard from '~/components/docs/case-study-card'
import CaseStudyList from '~/components/docs/case-study-list'
import CheckmarkInCircle from '~/components/icons/checkmark-in-circle'
import DocsNavbarDesktop from '~/components/layout/navbar/desktop'
import AutoComplete from '~/components/search'
import { InternalLink } from '~/components/text/link'
import Layout from '~/components/layout/layout'
import Button from '~/components/buttons'
import data from '~/lib/data/v2/docs'

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
  const router = useRouter()
  const [searchState, setSearchState] = useState({})
  return (
    <Layout>
      <main>
        <section className="hero-section">
          <h1>Docs</h1>
          <div className="desktop-search">
            <InstantSearch
              indexName="prod_docs"
              searchClient={searchClient}
              searchState={searchState}
              onSearchStateChange={newSearchState =>
                setSearchState(newSearchState)
              }
            >
              <Configure hitsPerPage={8} />
              <AutoComplete
                onSuggestionSelected={console.log}
                onSuggestionCleared={console.log}
              />
            </InstantSearch>
          </div>
        </section>
        <section className="docs-navigation-section">
          <div className="docs-navigation-wrapper mobile-only">
            <DocsNavbarDesktop
              data={data}
              url={router}
              scrollSelectedIntoView={true}
            />
          </div>
          <div className="docs-navigation-wrapper desktop-only">
            {data.map(d => (
              <div>
                <h4>{d.name}</h4>
                {d.posts.map(p => (
                  <Link href={p.href}>
                    <InternalLink
                      key={p.name}
                      display="block"
                      color="#444444"
                      hover="#000000"
                    >
                      {p.name}
                    </InternalLink>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </section>
        <section className="case-studies-section">
          <h2 className="subheading">
            Helping Out Customers Be the Best
            <br className="desktop-only" /> at What They Do.
          </h2>
          <div className="case-study-cards">
            <CaseStudyList
              caseStudies={[
                {
                  icon: Fitt,
                  description:
                    'Fitt cut their cloud services costs by 96% while doubling their page load speeds.',
                  href: ''
                },
                {
                  icon: Fitt,
                  description:
                    'Fitt cut their cloud services costs by 96% while doubling their page load speeds.',
                  href: ''
                },
                {
                  icon: Fitt,
                  description:
                    'Fitt cut their cloud services costs by 96% while doubling their page load speeds.',
                  href: ''
                }
              ]}
            />
          </div>
        </section>
        <section className="support-section">
          <div className="priority-support-card">
            <Community animate={true} />
            <h2>Priority Support</h2>
            <p>
              Whether you are just getting started or operating at scale, our
              plans include options to help you make the most of our platform
            </p>
          </div>
          <div className="support-check-list">
            <h4>All support plans include</h4>
            <ul>
              <li>
                <div className="bullet-container">
                  <CheckmarkInCircle />
                  <span>Live Chat</span>
                </div>
              </li>
              <li>
                <div className="bullet-container">
                  <CheckmarkInCircle />
                  <span>Priority Queuing</span>
                </div>
              </li>
              <li>
                <div className="bullet-container">
                  <CheckmarkInCircle />
                  <span>Urgent Tickets</span>
                </div>
              </li>
            </ul>
            <Button bgColor="#007aff" width="fit-content">
              View Plans
            </Button>
          </div>
        </section>
        <section className="extra-resources-section">
          <div>
            <div className="icon-with-header">
              <Box />
              <h4>Resources</h4>
            </div>
            <p>
              Explore our docs and step-by-step guides to get familiar with our
              products and their features. Learn More.
            </p>
          </div>
          <div>
            <div className="icon-with-header">
              <Message />
              <h4>Community</h4>
            </div>
            <p>
              Tap into a wealth of knowledge with thousands of community members
              contributing. Join us on Spectrum.
            </p>
          </div>
          <div>
            <div className="icon-with-header">
              <GitHub />
              <h4>Open Source</h4>
            </div>
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
          background: linear-gradient(
            360deg,
            #fafbfc 0%,
            rgba(250, 251, 252, 0) 100%
          );
          border-bottom: 1px solid #eaeaea;
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
        .docs-navigation-wrapper .link {
          color: #444444;
          cursor: pointer;
        }
        .docs-navigation-wrapper .link:hover {
          color: #000000;
        }
        .docs-navigation-wrapper > .navigation-left {
          display: flex;
          flex-wrap: wrap;
        }
        .navigation-left > * {
          margin-left: 60px;
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
          justify-content: space-between;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto;
          padding: 150px 0;
          border-bottom: 1px solid #eaeaea;
        }
        .priority-support-card {
          padding: 50px;
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
        }
        .support-check-list h4 {
          margin: 0;
        }
        .bullet-container {
          display: flex;
          align-items: center;
        }
        .support-check-list li {
          list-style: none;
          margin-left: -20px;
          margin-bottom: 15px;
        }
        .support-check-list li:last-child {
          margin-bottom: 0;
        }
        .support-check-list span {
          margin-left: 15px;
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
        .mobile-only {
          display: none;
        }
        .icon-with-header {
          display: flex;
          align-items: center;
        }
        .icon-with-header h4 {
          margin-left: 15px;
        }
        @media (max-width: 640px) {
          .mobile-only {
            display: block;
          }
          .desktop-only {
            display: none;
          }
          .docs-navigation-section {
            min-height: 400px;
            padding-bottom: 50px;
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
