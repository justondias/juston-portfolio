import React from "react";
import Link from "gatsby-link";
import { css } from 'glamor'


let project_container = css({
    background:'#f1f1f1',
    border:'solid black',
    marginBottom: 10,
    position: 'relative',
    borderRadius: '1%',
    transition: 'all 200ms ease-in',
    ':hover': {
      transition: 'all 200ms ease-in',
      transform: 'scale(1.015)',
    } 
})

let desc_container = css({
  padding: 10,
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
        <div key={node.id} {...project_container}>
          <img src="http://via.placeholder.com/160x90" css={{width:'100%',height:'auto'}} />
          <div {...desc_container}>
              <Link
                to={node.fields.slug}
                
              >
              <h3 css={{textShadow: 'none', margin:0}}>
                {node.frontmatter.title}
              </h3>
              <p css={{textShadow: 'none', color:'#444444'}}>{node.excerpt}</p>
              </Link>
          </div>
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
