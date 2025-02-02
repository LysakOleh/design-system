import React from 'react'
import tokens from '@baloise/design-system-tokens/dist/tokens.docs.json'

export const TokensBorderRadius = ({ overview }) => {
  const radius = tokens.radius as any
  const sizes = []
  for (const k in radius) {
    if (radius[k].deprecated !== true) {
      sizes.push({
        name: k,
        value: radius[k],
      })
    }
  }
  return (
    <table className="sb-unstyled my-x-large table tokens" style={{ width: '100%' }}>
      <thead>
        <tr>
          <th style={{ minWidth: '120px' }}>Example</th>
          <th>Name</th>
          <th style={{ minWidth: '230px' }}>Token</th>
          <th style={{ minWidth: '80px' }}>Value</th>
        </tr>
      </thead>
      <tbody>
        {sizes.map((c: any) => (
          <tr key={c.name}>
            <td style={{ verticalAlign: 'top' }}>
              <div
                style={{ height: '48px', width: '80px' }}
                className={`has-radius${`-${c.name}`} mt-x-small has-background-purple`}
              ></div>
            </td>
            <td style={{ verticalAlign: 'top' }}>
              <p className="has-text-weight-bold is-size-normal mt-none mb-x-small">{c.name}</p>
              <p className="m-none is-size-small">{c.value.description}</p>
            </td>
            <td style={{ verticalAlign: 'top' }}>
              <p className="mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold">
                var(--bal-radius{`-${c.name}`})
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
