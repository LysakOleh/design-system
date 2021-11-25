const table = require('markdown-table')
const { printCode, printBold } = require('./markdown.util')

const NEWLINE = '\n'

const printComponentProps = component => {
  const lines = []

  if (component.props && component.props.length > 0) {
    lines.push('')
    table(
      [
        ['Attribute', 'Description', 'Type', 'Default'],
        ...component.props
          .filter(prop => !!prop.docs)
          .map(prop => [
            printBold(prop.attr || prop.name),
            prop.docs.replace(/(?:\r\n|\r|\n)/g, ' ').trim(),
            printCode(prop.type ? prop.type.split('|').join(',') : ''),
            printCode(prop.default),
          ]),
      ],
      { align: ['l', 'l', 'l', 'l'] },
    )
      .split(NEWLINE)
      .forEach(l => lines.push(l))
  }

  return lines.join(NEWLINE)
}

const printComponentEvents = component => {
  const lines = []

  if (component.events && component.events.length > 0) {
    lines.push('')
    table(
      [
        ['Event', 'Description', 'Type'],
        ...component.events.filter(eventItem => !!eventItem.docs).map(eventItem => [printBold(eventItem.event), eventItem.docs.trim(), printCode(eventItem.detail)]),
      ],
      { align: ['l', 'l', 'l'] },
    )
      .split(NEWLINE)
      .forEach(l => lines.push(l))
  }

  return lines.join(NEWLINE)
}

const printComponentMethods = component => {
  const lines = []

  if (component.methods && component.methods.length > 0) {
    lines.push('')
    table(
      [
        ['Method', 'Description', 'Signature'],
        ...component.methods.filter(method => !!method.docs).map(method => [printBold(method.name), method.docs.trim(), printCode(method.signature)]),
      ],
      { align: ['l', 'l', 'l'] },
    )
      .split(NEWLINE)
      .forEach(l => lines.push(l))
  }

  return lines.join(NEWLINE)
}

module.exports = {
  printProp: printComponentProps,
  printEvents: printComponentEvents,
  printMethods: printComponentMethods,
}
