const stars = document.querySelectorAll('.star');
const averageRating = document.getElementById('average');

let ratings = [];

// Add click event listeners to each star
stars.forEach(star => {
  star.addEventListener('click', () => {
    const rating = parseInt(star.getAttribute('data-rating'));

    ratings.push(rating);

    // Reset all stars to their default color
    stars.forEach(s => {
      s.style.color = 'black';
    });

    // Color the selected stars
    for (let i = 0; i < rating; i++) {
      stars[i].style.color = 'gold';
    }

    currentRating = rating;
    updateAverageRating();
  });
});

function updateAverageRating() {
  // Calculate the average rating and update the display
  const totalRatings = stars.length;
  let sum = 0;
  stars.forEach(star => {
    sum += parseInt(star.getAttribute('data-rating'));
  });

  const average = sum / totalRatings;
  averageRating.textContent = average.toFixed(2);
}
