import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1 className='yellow'
            style={{
              fontSize: 40,
              marginTop: rhythm(1),
              marginBottom: 0
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              color: '#ccc',
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <section className='blog-post' dangerouslySetInnerHTML={{ __html: post.html }} />
       
        <hr style={{backgroundColor: '#f5ca5a', borderWidth: 2, marginTop: 30 }} />

        <div className="row" style={{ paddingTop: 20, paddingBottom: 10 }}>
          <div className="col-12 col-lg-6">
            <div className="text-center">
              <h4>Get coached through this workout with the <span style={{ color: '#f5ca5a'}}>Start Rowing</span> app</h4>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <p style={{ textAlign: 'center' }}>
              <a className="btn-solid-lg" style={{backgroundColor: '#f5ca5a', color: 'black'}} href="https://apps.apple.com/us/app/start-rowing/id1504306767?ls=1"><i className="fab fa-apple"></i>Download on iOS</a>
            </p>
            <p style={{ textAlign: 'center' }}>
              <a className="btn-solid-lg" style={{backgroundColor: '#f5ca5a', color: 'black'}} href="https://play.google.com/store/apps/details?id=com.simplyfit.rowing"><i className="fab fa-google-play"></i>Download on Android</a>
            </p>
          </div>
        </div>

        <hr style={{backgroundColor: '#f5ca5a', borderWidth: 2 }} />

      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
