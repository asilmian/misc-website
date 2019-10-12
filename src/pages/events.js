import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/events.sass'

const EventsPage = ({ data }) => {
    const { edges: events } = data.allMarkdownRemark
    const past_events = events.filter(({ node: e }) => new Date() > new Date(e.frontmatter.date))
    const curr_events = events.filter(({node: e}) => new Date() <= new Date(e.frontmatter.date))
    return (
        <Layout>
            <SEO title="MISC - Events" />
            <div className="events-page-container">
                <h1>Upcoming Events</h1>
                {curr_events.length == 0 ? <div className="no-events">Nothing yet... Check back later this month!</div> : 
                <div className="events-items-container">
                    {curr_events.map(({ node: e }) => EventsPageItem(e.frontmatter))}
                </div>
                }
                <h1>Past Events</h1>
                <div className="events-items-container">
                    {past_events.map(({ node: e }) => EventsPageItem(e.frontmatter))}
                </div>
            </div>
        </Layout>
    )
}

const EventsPageItem = ({ path, image: { childImageSharp: { fluid } }, title, date }) => {
    return (
        <div className="events-page-item" key={path}>
            <Link to={path}>
                <div className="image-container">
                    <Img fluid={fluid} />
                </div>
                <div className="text">
                    <span className="title">{title}</span>
                    <br/>
                    <span className="details">{date}</span>
                </div>
            </Link>
        </div>
    )
}

export const pageQuery = graphql`
    query EventsQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "\/events\/" } },
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        image {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export default EventsPage