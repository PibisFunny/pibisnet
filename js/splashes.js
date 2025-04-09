document.addEventListener('DOMContentLoaded', function() {
      const sayings = [

"Welcome to Pibis.net!",
"Feed me weird things!",
"i have a BIG problem",
"Are these fries? Let's find out.",
"I'll have what I'm having.",
"FIVE seconds guys",
"Exploding with Sand Power!",
"THERE'S A BOMB STRAPPED TO MY CHEST",
"It is horribel!",
"Death surgery!",
"SAY PIZZA TO DRUGS",
"Borb is he!",
"double gulp cup for the",
"frickin slurpee",
"Who's there, Wrighto?",
"Right behind you!",
"Open on Nessdog Day!",
"IM COME YOU",
"He did what in his cup?",
"Look guys, look...",
"My skeleton popped out!",
"Heavy can believe eyes! 👁️👁️",
"BALLS THROTTLED",
"here pass me the You",
"here pass you the Me",

"Don't count on it!",
"There's more!",
"Don't be weird. Only I can do that...",
"KRAKATOA!",
"IT'S HORRIBLE what happened to Pibis.net",
"That Heavy is your mother!",
"That is a diet I call RAINBOWS",
"Fattest man in history of fattest mans!",
"ÜBERCHARGE MY CAR",
"Works best on desktop!",

"I LOOVE caramel...",
"I LOOVE chocolate...",
"I LOOVE butterscotch...",
"I LOOVE fresh fruit...",
"BALLS HAS DESTROYED NUTTY",
"BALLS IS FRIENDS WITH NUTTY",
"IIINCOMIIIIING",

"Ya probably got CHEESE",
"I'm coming for you.",
"Well, here we are on a $20 webpage.",
"It's pronounced ",
"Mmm, burnt toast.",
"EVERYBODY loves gummy bears!!!!",
"I... am Beees.",
"Yeah, I listen to Food Fighters"
      ];

//UNUSED SPLASHES
//"Full of Gunk!", "blaugh", "titties whoreible!!", "I'm sure you are!~ How's that?",

// I was recommended fisher-yates and it seems like it works a lot better
for (let i = sayings.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [sayings[i], sayings[j]] = [sayings[j], sayings[i]];
}

const splashtexts = document.getElementsByClassName('splashtext');
for (let i = 0; i < splashtexts.length; i++) {
  splashtexts[i].textContent = sayings[i % sayings.length];
}
});