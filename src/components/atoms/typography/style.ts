import { createElement } from 'react'

import styled from 'styled-components'

export const DynamicTypography = styled(({ tag, children, ...props }) =>
  // A prop 'tag' define qual elemento HTML será criado (h1, p, etc.)
  createElement(tag, props, children)
)`
  font-family: ${({ theme }) => theme.font.family};
  font-style: normal;
  margin: 0; 

 
  font-size: ${({ theme, size = 'sm' }) => theme.font.sizes[size]};
  font-weight: ${({ theme, weight = 'regular' }) => theme.font.weights[weight]};
  color: ${({ theme, color = 'primaryText' }) => theme.colors[color]};
  
  ${({ theme, lineHeight }) => 
    lineHeight && `line-height: ${theme.font.lineHeights[lineHeight]};`
  }
`;