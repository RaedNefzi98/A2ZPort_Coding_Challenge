function findLongestWord(sentence) {
    // Split the sentence into words using space as a separator
    const words = sentence.split(' ');
  
    // Initialize variables to keep track of the longest word and its vowel count
    let longestWord = '';
    let maxVowelCount = 0;
  
    // Iterate through each word in the sentence
    for (const word of words) {
      // Remove non-alphabetic characters and convert to lowercase
      const cleanedWord = word.replace(/[^a-z]/gi, '').toLowerCase();
  
      // Calculate the vowel count in the cleaned word
      const vowelCount = cleanedWord.split('').filter(char => 'aeiou'.includes(char)).length;
  
      // Check if the current word is longer than the previously longest word
      // or if it has the same length but more vowels
      if (cleanedWord.length > longestWord.length || (cleanedWord.length === longestWord.length && vowelCount > maxVowelCount)) {
        longestWord = cleanedWord;
        maxVowelCount = vowelCount;
      }
    }
  
    return longestWord;
  }
  
  const sentence = "Enter you sentence here : ";
  const longestWord = findLongestWord(sentence);
  console.log(longestWord); // theOutput
  