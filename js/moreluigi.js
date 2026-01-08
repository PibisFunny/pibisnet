    const vowels = 'AEIOU';
    const consonants = 'BCDFGHJKLMNPQRSTVWXYZ';

    function getRandomChar() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const randomIndex = Math.floor(Math.random() * characters.length);
      return characters.charAt(randomIndex);
    }

    function generateCombos() {
      const displayOptions = ['singleCharacter', 'vowelConsonant', 'consonantVowelConsonant', 'vowelConsonantVowelConsonant'];
      const choice = displayOptions[Math.floor(Math.random() * displayOptions.length)];

      let result;
      const character = getRandomChar().toUpperCase();

      switch (choice) {
        case 'singleCharacter':
          result = character;
          break;
        case 'vowelConsonant':
          result = genVC(character);
          break;
        case 'consonantVowelConsonant':
          result = genCVC(character);
          break;
        case 'vowelConsonantVowelConsonant':
          result = genVCVC(character);
          break;
        default:
          result = character;
      }

      const randomCharElement = document.getElementById('randomChar');
      const displayCharElement = document.getElementById('displayChar');

      randomCharElement.textContent = `${result.charAt(0).toUpperCase()}${result.slice(1).toLowerCase()}uigi`;
      displayCharElement.textContent = result.charAt(0);

    }

    function genVC(character) {
      let randomV = vowels.charAt(Math.floor(Math.random() * vowels.length));
      let randomC = consonants.charAt(Math.floor(Math.random() * consonants.length));
      return `${randomV}${randomC}`;
    }

    function genCVC(character) {
      let randomC1 = consonants.charAt(Math.floor(Math.random() * consonants.length));
      let randomV = vowels.charAt(Math.floor(Math.random() * vowels.length));
      let randomC2 = consonants.charAt(Math.floor(Math.random() * consonants.length));
      return `${randomC1}${randomV}${randomC2}`;
    }
    function genVCVC(character) {
      let randomC1 = consonants.charAt(Math.floor(Math.random() * consonants.length));
      let randomV = vowels.charAt(Math.floor(Math.random() * vowels.length));
      let randomC2 = consonants.charAt(Math.floor(Math.random() * consonants.length));
      let randomV2 = vowels.charAt(Math.floor(Math.random() * vowels.length));
      return `${randomV2}${randomC1}${randomV}${randomC2}`;
    }
    
    generateCombos();