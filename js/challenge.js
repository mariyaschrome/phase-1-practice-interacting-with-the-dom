document.addEventListener('DOMContentLoaded', function() {
    // Timer incrementation
    let timer = document.getElementById('timer');
    let timerValue = 0;
    let timerInterval;

    function startTimer() {
        timerInterval = setInterval(function() {
            timerValue++;
            timer.textContent = timerValue;
        }, 1000);
    }

    startTimer();

    // Counter incrementation and decrementation
    let counter = document.getElementById('counter');
    let plusButton = document.getElementById('plus');
    let minusButton = document.getElementById('minus');

    plusButton.addEventListener('click', function() {
        // Increment counter
        counter.textContent = parseInt(counter.textContent) + 1;
    });

    minusButton.addEventListener('click', function() {
        // Decrement counter
        let currentCount = parseInt(counter.textContent);
        if (currentCount > 0) {
            counter.textContent = currentCount - 1;
        }
    });

    // Like button functionality
    let likeButton = document.getElementById('like');
    let likeCount = {};

    likeButton.addEventListener('click', function() {
        // Increment like count for current timer value
        let currentTimerValue = timer.textContent;
        if (!likeCount[currentTimerValue]) {
            likeCount[currentTimerValue] = 1;
        } else {
            likeCount[currentTimerValue]++;
        }
        let likeDisplay = document.getElementById('like-display');
        likeDisplay.textContent = `${currentTimerValue} has ${likeCount[currentTimerValue]} like(s)`;
    });

    // Pause button functionality
    let pauseButton = document.getElementById('pause');
    let isPaused = false;

    pauseButton.addEventListener('click', function() {
        // Pause or resume timer and update button label
        if (isPaused) {
            startTimer();
            plusButton.disabled = false;
            minusButton.disabled = false;
            likeButton.disabled = false;
            pauseButton.textContent = 'Pause';
            isPaused = false;
        } else {
            clearInterval(timerInterval);
            plusButton.disabled = true;
            minusButton.disabled = true;
            likeButton.disabled = true;
            pauseButton.textContent = 'Resume';
            isPaused = true;
        }
    });

    // Comment box functionality
    let commentForm = document.getElementById('comment-form');
    let commentInput = document.getElementById('comment-input');
    let commentList = document.getElementById('comments');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Add comment to comment list
        let commentText = commentInput.value;
        if (commentText.trim() !== '') {
            let commentItem = document.createElement('li');
            commentItem.textContent = commentText;
            commentList.appendChild(commentItem);
            commentInput.value = '';
        }
    });
});
