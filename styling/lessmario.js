      function getRandomChar() {
        const characters = 'ABCDEFGHIJKLNOPQRSTUVWXYZ';
        const randomIndex = Math.floor(Math.random() * characters.length);
        return characters.charAt(randomIndex);
      }

      const randomCharElement = document.getElementById('randomChar');
      const displayCharElement = document.getElementById('displayChar');

      const randomCharacter = getRandomChar();

      randomCharElement.textContent = `${randomCharacter}ario`;

      displayCharElement.textContent = randomCharacter;