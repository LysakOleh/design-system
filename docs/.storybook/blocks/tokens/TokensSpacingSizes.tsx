import React from 'react'
import tokens from '@baloise/design-system-tokens/dist/tokens.docs.json'

export const TokensSpacingSizes = ({ overview }) => {
  const spacing = tokens.spacing as any
  const sizes = [] as any
  const validSizes = [
    'xxxxx-large',
    'xxxx-large',
    'xxx-large',
    'xx-large',
    'x-large',
    'large',
    'medium',
    'normal',
    'small',
    'x-small',
    'xx-small',
  ].reverse()
  for (const k in spacing) {
    if (validSizes.includes(k)) {
      sizes.push({
        name: k,
        value: spacing[k],
      })
    }
  }
  return (
    <table className="sb-unstyled my-x-large table tokens" style={{ width: '100%' }}>
      <thead>
        <tr>
          <th style={{ minWidth: '100px' }}>Example</th>
          <th>Description</th>
          <th style={{ minWidth: '90px' }}>Desktop</th>
        </tr>
      </thead>
      <tbody>
        {sizes.map(c => (
          <tr key={c.name}>
            <td style={{ verticalAlign: 'top' }}>
              <div className={`pt-${c.name} mt-x-small has-background-green`}></div>
            </td>
            <td style={{ verticalAlign: 'top' }}>
              <p className="has-text-weight-bold is-size-large mt-none mb-x-small">{c.name}</p>
              <p className="m-none is-size-small">{c.value.description}</p>
            </td>
            <td style={{ verticalAlign: 'top' }}>
              <span className={`has-text-weight-bold is-size-small`}>
                {parseFloat(c.value.desktop.replace('rem')) * 16}px
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
