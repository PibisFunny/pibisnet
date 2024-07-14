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
"double gulp cup for the",
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
"here pass me the You",
"here pass you the Me",

"Don't count on it!",
"There's more!",
"Don't be weird. Only I can do that",
"Heavy can believe eyes",
"KRAKATOA!",
"IT'S HORRIBLE what happened to Pibis.net",
"That Heavy is your mother!",
"That is a diet I call RAINBOWS",
"Fattest man in history of fattest mans!",
"ÜBERCHARGE MY CAR",
"Works best on desktop!",

"I LOOVE caramel",
"BALLS HAS DESTROYED NUTTY",
"BALLS IS FRIENDS WITH NUTTY",
"IIINCOMIIIIING"

      ];

  const splashtexts = document.getElementsByClassName('splashtext');
  for (let i = 0; i < splashtexts.length; i++) {
    splashtexts[i].textContent = sayings[Math.floor(Math.random() * sayings.length)];
  }
});