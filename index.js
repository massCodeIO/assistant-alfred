import alfy from 'alfy'

const data = await alfy.fetch('http://localhost:3033/snippets/embed-folder')

const items = alfy.inputMatches(data, 'name').map((element) => ({
  title: element.name,
  subtitle: element.folder?.name || 'Inbox',
  arg: element.content[0].value
}))

alfy.output(items)
