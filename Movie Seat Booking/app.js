const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occuppied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

//+ turns the value from a string into a number instead of using parse
let ticketPrice = +movieSelect.value

//save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex)
    localStorage.setItem('selectedMoviePrice', moviePrice)
}

//update total count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')

    const seatsIndex = [...selectedSeats].map(function (seat) {
        return [...seats].indexOf(seat)
    })
    //copy selected seats into array
    //map through
    //return new array of index

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

    const selectedSeatCount = selectedSeats.length


    count.innerText = selectedSeatCount
    total.innerText = selectedSeatCount * ticketPrice
}

//novie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value

    setMovieData()

    updateSelectedCount()
})


//select or unselect a seat
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {

        e.target.classList.toggle('selected')
        console.log(e.target.selectedIndex)
        updateSelectedCount(e.target.selectedIndex, e.target.value)
    };
})


