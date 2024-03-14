let allBooks = [ 
    {
      title:"The Last Vampire",
      author:"Christopher Pike", 
      image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cc5f63f4-ff37-424e-88c4-54a5749e1a70/d3kmu4c-cf72d3d3-1333-4cee-a52f-1045c11fc011.jpg/v1/fit/w_412,h_652,q_70,strp/the_last_vampire_covers_by_vamp214_d3kmu4c-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjUyIiwicGF0aCI6IlwvZlwvY2M1ZjYzZjQtZmYzNy00MjRlLTg4YzQtNTRhNTc0OWUxYTcwXC9kM2ttdTRjLWNmNzJkM2QzLTEzMzMtNGNlZS1hNTJmLTEwNDVjMTFmYzAxMS5qcGciLCJ3aWR0aCI6Ijw9NDEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.TpaSE-h93cLIA2E7y2bGtRaMZhbsxVQFkSoHuySg2ok", 
      alreadyRead:"true"
    },
    {
      title:"Fallen",
      author:"Lauren Kate", 
      image:"https://static.wikia.nocookie.net/fallenbylaurenkate/images/1/1b/FALLEN_-_Dutch1.jpg/revision/latest/scale-to-width-down/250?cb=20160602140315", 
      alreadyRead:"true"
    }
  ];
  
  const bookList = document.querySelector('.listBooks');
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  
  allBooks.forEach(book => {
      const tr = document.createElement('tr');
  
      const titleAuthorCell = document.createElement('td');
      titleAuthorCell.textContent = ${book.title} written by ${book.author};
      
      const imageCell = document.createElement('td');
      const image = document.createElement('img');
      image.src = book.image;
      image.width = 100;
      imageCell.appendChild(image);
      
      if (book.alreadyRead) {
          titleAuthorCell.style.color = 'red';
          imageCell.style.color = 'red';
      }
      
      tr.appendChild(titleAuthorCell);
      tr.appendChild(imageCell);
      tbody.appendChild(tr);
  });
  
  table.appendChild(tbody);
  bookList.appendChild(table);