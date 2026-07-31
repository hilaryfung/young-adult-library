// parse CSV - https://www.maxkohler.com/posts/eleventy-csv/

const { parse } = require('csv-parse/sync')
const fs = require('fs')

module.exports = () => {
  const input = fs.readFileSync('./src/_data/catalog.csv')
  let records = parse(input, {
    columns: true, 
    skip_empty_lines: true,
    relax_quotes: true,
    delimiter: ",",
    trim: true
  })

  let itemsByTitle = records;
  itemsByTitle.sort((a, b) => {
    let c = a.Title,
      d = b.Title;
    if (c.startsWith("The ")) {
      c = c.split("The ").pop()
    } else if (c.startsWith("A ")) {
      c = c.split("A ").pop()
    }
    if (d.startsWith("The ")) {
      d = d.split("The ").pop()
    } else if (d.startsWith("A ")) {
      d = d.split("A ").pop()
    }
    return c.localeCompare(d)
  });

  let itemsByAuthor = records;
  itemsByAuthor.sort((a, b) => {
    let c = a["Author for Author Index"],
      d = b["Author for Author Index"];
    return c.localeCompare(d)
  })

  return { 
    itemsByTitle,
    itemsByAuthor
  }
}
