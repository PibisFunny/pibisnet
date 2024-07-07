document.addEventListener('DOMContentLoaded', function() {
      const sayings = [

"Welcome to Pibis.net!",
"Feed me weird things!",
"i have a BIG problem",
"Are these fries? Let's find out.",
"I'll have what I'm having.",
"Full of Gunk!",
"FIVE seconds guys",
"Exploding with Power",
"THERE'S A BOMB STRAPPED TO MY CHEST",
"blaugh",
"titties whoreible!!",
"death surgery",
"SAY PIZZA TO DRUGS",
"Borb is he",
"slurpee",
"Who's there, Wrighto?",
"Right behind you",
"I'm sure you are!~ How's that?",
"Open on nessdog!",
"IM COME YOU",
"He did what in his cup?",
"Look guys look,",
"My skeleton popped out!",
"heavy can believe eyes",
"BALLS THROTTLED",
"here pass me the You"

      ];

  const splashtexts = document.getElementsByClassName('splashtext');
  for (let i = 0; i < splashtexts.length; i++) {
    splashtexts[i].textContent = sayings[Math.floor(Math.random() * sayings.length)];
  }
});