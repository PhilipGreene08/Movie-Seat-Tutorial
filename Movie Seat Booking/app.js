const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occuppied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

//+ turns the value from a string into a number instead of using parse
let ticketPrice = +movieSelect.value

//update total count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    console.log(selectedSeats);

    const selectedSeatCount = selectedSeats.length
    console.log(selectedSeatCount);

    count.innerText = selectedSeatCount
    total.innerText = selectedSeatCount * ticketPrice
}

//novie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value

    updateSelectedCount()
})


//select or unselect a seat
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        console.log(e.target);
        e.target.classList.toggle('selected')

        updateSelectedCount()
    };
})




console.log(typeof seats);