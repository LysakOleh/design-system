import React from 'react'
import tokens from '@baloise/design-system-tokens/dist/tokens.docs.json'

export const TokensShadow = ({ overview }) => {
  const boxShadows = tokens.shadow.box as any
  const shadowTokens = [] as any
  for (const k in boxShadows) {
    shadowTokens.push({
      name: k,
      value: boxShadows[k],
    })
  }
  return (
    <table className="sb-unstyled my-x-large table tokens" style={{ width: '100%' }}>
      <thead>
        <tr>
          <th style={{ minWidth: '120px' }}>Example</th>
          <th>Description</th>
          <th style={{ minWidth: '220px' }}>Token</th>
          <th style={{ minWidth: '230px' }}>Value</th>
        </tr>
      </thead>
      <tbody>
        {shadowTokens.map(c => (
          <tr key={c.name}>
            <td style={{ verticalAlign: 'top' }}>
              <div
                style={{ height: '48px', width: '80px' }}
                className={`has-shadow${`-${c.name}`} mt-x-small has-background-purple-2`}
              ></div>
            </td>
            <td style={{ verticalAlign: 'top' }}>
              <p className="has-text-weight-bold is-size-large mt-none mb-x-small">{c.name}</p>
              <p className="m-none is-size-small">{c.value.description}</p>
            </td>
            <td style={{ verticalAlign: 'top' }}>
              <p className="mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold">
                var(--bal-shadow{`-${c.name}`})
              </p>
            </td>
            <td style={{ verticalAlign: 'top' }}>
              <p className="mt-none mb-x-small is-size-small has-text-weight-bold py-xx-small">{c.value.value}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
