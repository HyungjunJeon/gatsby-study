import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

const CategoryListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 768px;
    margin: 100px auto 0;
`

const CategoryItem = styled(Link)`
    margin-right: 20px;
    padding: 5px 0;
    font-size: 10px;
    cursor: pointer;

    &:last-of-type {
        margin-right: 0;
    }
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
      <CategoryListWrapper>
          {Object.entries(categoryList).map([name, count]) => {
              <div key={name}>
                  #{name}({count})
              </div>
          }}
      </CategoryListWrapper>
  )
}

export default CategoryList
