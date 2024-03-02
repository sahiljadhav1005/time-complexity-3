var i = 0;
var n = 10;
var speed = 1000;

// Update the value of n
document.getElementById('value-of-n').innerText = n;

function runLoop() {
    if (i < n) {
        document.querySelector('.table').innerText = 'Current Value of i: ' + i;

        setTimeout(function () {
            console.log('i =', i);

            i++;

            runLoop();
        }, speed);
    } else {
        document.querySelector('.time-complexity').innerText = 'Time Complexity: O(n)';
    }
}

runLoop();