let labels = ['Movie Name', 'Release Year', 'Type']
let movies = [
  {
    'movie name': 'Pirates of the carrabean',
    'release year': '2018',
    type: 'Mystery'
  },
  { 'movie name': 'Oppenheimer', 'release year': '2023', type: 'Drama' },
  { 'movie name': 'Wonka ', 'release year': '2023', type: 'Comedy' },
  { 'movie name': 'Argylle ', 'release year': '2023', type: 'Action' },
  {
    'movie name': 'The Meg 2: The Trench',
    'release year': '2023',
    type: 'Adventure'
  },
  { 'movie name': 'Fast X ', 'release year': '2023', type: 'Action' }
]

function createTable(label, object, container) {
  let table = document.createElement('table')
  let thead = document.createElement('thead')
  let tbody = document.createElement('tbody')
  let theadTr = document.createElement('tr')

  for (let i = 0; i < label.length; i++) {
    let theadTh = document.createElement('th')

    theadTh.innerHTML = label[i]
    theadTr.appendChild(theadTh)
  }

  thead.appendChild(theadTr)
  table.appendChild(thead)

  for (j = 0; j < object.length; j++) {
    let tbodyTr = document.createElement('tr')

    for (k = 0; k < label.length; k++) {
      let tbodyTd = document.createElement('td')

      tbodyTd.innerHTML = object[j][label[k].toLowerCase()]
      tbodyTr.appendChild(tbodyTd)
    }

    tbody.appendChild(tbodyTr)
  }

  table.appendChild(tbody)
  container.appendChild(table)
}

let tableContainer = document.getElementById('table-container')

createTable(labels, movies, tableContainer)
