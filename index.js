// Function to generate thank-you messages using a for loop
function writeCards(names, event) {
    let messages = []; // Create an empty array to store messages
  
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  
    return messages;
  }
  
  // Function to count down from a given number using a while loop
  function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--; // Decrease the number each iteration
    }
  }
  
  // ✅ Example Usage:
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
  countDown(10);
  