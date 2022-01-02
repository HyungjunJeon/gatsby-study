import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import globalStyle from 'components/Common/GlobalStyle'
import ProfileImage from 'components/Main/ProfileImage'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const IndexPage: FunctionComponent = function () {
  return <Link to="/info/">To Info</Link>
}

export default IndexPage
