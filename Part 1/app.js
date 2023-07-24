async function getNumberFact(number) {
    let response = await fetch(`http://numbersapi.com/${number}?json`);
    let data = await response.json();
    console.log(data.text);
  }
  
  async function getMultipleNumberFacts(numbers) {
    let response = await fetch(`http://numbersapi.com/${numbers.join(",")}?json`);
    let data = await response.json();
    for (let number in data) {
      console.log(data[number].text);
    }
  }
  
  async function getMultipleFactsAboutNumber(number, count) {
    for(let i=0; i<count; i++) {
      await getNumberFact(number);
    }
  }
  
  getNumberFact(4);  
  getMultipleNumberFacts([4, 8, 12]);  
  getMultipleFactsAboutNumber(4, 2); 
  