import React from "react";
import Link from "gatsby-link";
import { css } from 'glamor'


let project_conteiner = css({
    padding: 10,
    border:'solid black',
    marginBottom: 5,
    position: 'relative',
    transition: 'all 200ms ease-in',
    ':hover': {
      transition: 'all 200ms ease-in',
      transform: 'scale(1.015)',
    } 
})


export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>
        Recent Projects
      </h1>

      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} {...project_conteiner}>
          <Link
            to={node.fields.slug}
            
          >
          <h3>
            {node.frontmatter.title}
          </h3>
          <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }

  
  }
`;
