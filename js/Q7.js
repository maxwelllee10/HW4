let randomNum = Math.floor(Math.random() * 100 + 1);

      let totalGuess = 1;
    

      document.getElementById("button") = function () {
        let userEnteredValue = document.getElementById("userInput").value;

        if (userEnteredValue == randomNum) {
          alert(
            " Correct! It took you " +
              totalGuess +
              " attempts to guess the correct number. "
          );
        } else if (userEnteredValue > randomNum){
          alert("Too high,guess again");
        } else if (userEnteredValue <= 0) {
          alert("Enter the number between 1 and 100");
        } else {
          totalGuess++;
          alert("Too low,guess again");
        }
      };