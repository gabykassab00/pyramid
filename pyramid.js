function printPattern(floor) {
    for (let q = 0; q < floor; q++) {
      let phrase = "";
      for (let w = 0; w <= q; w++) {
        phrase += (w + 1) + " ";
      }
      console.log(phrase);
    }
  }
  const floor = parseInt(prompt("number of floor that you wish for "));
  printPattern(floor);