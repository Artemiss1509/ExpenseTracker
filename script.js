document.addEventListener("DOMContentLoaded", () => {

  const bookingForm = document.getElementById('expense-form');

  bookingForm.addEventListener('submit', handleFormSubmit);

  axios.get('http://localhost:3000/expense')
    .then(res => {
      for (let i = 0; i < res.data.length; i++) {
        display(res.data[i]);
      }
    })
    .catch(err => console.log(err));
});


function handleFormSubmit(event) {
    event.preventDefault();

    const data = {
        name: event.target.expenseName.value,
        amount: event.target.expenseAmount.value,
        category: event.target.expenseCat.value
    };

    axios.post('http://localhost:3000/expense', data).then(res=>display(res.data)).catch(err=>console.log(err))

    document.getElementById('expense-form').reset();

}

function display(data) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const beak = document.createElement('br')

    li.innerHTML = `Paid ${data.amount} for ${data.name}. Comes under the category: ${data.category}`

    delBtn.textContent = 'Delete'
    delBtn.addEventListener('click', () => deleteData(li,data.id));

    li.appendChild(beak)
    li.appendChild(delBtn)

    ul.appendChild(li);
    
}

function deleteData(li,id) {
    axios.delete(`http://localhost:3000/expense/${id}`).then(res=>li.remove()).catch(err=>console.log(err))
}