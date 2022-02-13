import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMeta = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return site.siteMetadata
}
