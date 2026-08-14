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

  // sort items alphabetically by author
  let itemsByAuthor = records.slice();
  itemsByAuthor.sort((a, b) => {
    let c = a["Author for Author Index"],
      d = b["Author for Author Index"];
    return c.localeCompare(d)
  })

  // sort items alphabetically by title
  let itemsByTitle = records.slice();
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
  })

  // create a genre array within each item
  itemsByTitle.forEach(item => {
    let genreArray = parse(item.Genre, {
      skip_empty_lines: true,
      relax_quotes: true,
      delimiter: ",",
      trim: true
    })

    item.genreArray = genreArray[0]
  })

  // create two arrays of unique genres
  let bookGenres = [],
    audioVisualGenres = [];
  itemsByTitle.forEach(item => {
    if (item.Format === "Book" || item.Format == "Graphic novel" || item.Format == "Audiobook") {
      item.genreArray.forEach(genre => {
        if (!bookGenres.includes(genre)) {
          bookGenres.push(genre)
        }
      })
    } else {
      item.genreArray.forEach(genre => {
        if (!audioVisualGenres.includes(genre)) {
          audioVisualGenres.push(genre)
        }
      })
    }
  })
  bookGenres.sort((a, b) => {
    return a.localeCompare(b)
  })
  audioVisualGenres.sort((a, b) => {
    return a.localeCompare(b)
  })

  return { 
    itemsByTitle,
    itemsByAuthor,
    bookGenres,
    audioVisualGenres
  }
}
