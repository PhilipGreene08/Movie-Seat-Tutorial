const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occuppied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

populateUI()

let ticketPrice = +movieSelect.value

//get data from local storage and display it
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex
    }
}

//save movie index price
function setMovieData(movie, price) {
    localStorage.setItem('selectedMovieIndex', movie)
    localStorage.setItem('selectedMoviePrice', price)
}

//update total seats selected
function updateSeletedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')

    //copy selected seats into array map through return new array
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

    const selectedSeatsCount = selectedSeats.length

    count.innerText = selectedSeatsCount

    total.innerText = selectedSeatsCount * ticketPrice
}

//change movie
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value
    console.log(e.target.selectedIndex, e.target.value);
    setMovieData(e.target.selectedIndex, e.target.value)
    e.preventDefault()
})

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
    }
    updateSeletedCount()
    e.preventDefault()
})

//initial count and total
updateSeletedCount()