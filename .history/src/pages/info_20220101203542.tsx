import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Text from 'components/Text'

type InfoPageProps = {}

const Infopage: FunctionComponent<InfoPageProps> = function () {
  return (
    <div>
      <Text text="Hello" />
    </div>
  )
}

export default Infopage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
