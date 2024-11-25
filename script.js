const spaceFacts = [
    "The Universe is Expanding: The universe has been expanding since the Big Bang, and it's doing so at an accelerating rate.",
    "Neutron Stars are Incredibly Dense: A sugar-cube-sized amount of neutron-star material would weigh about 6 billion tons on Earth.",
    "There are More Stars in the Universe than Grains of Sand on Earth: It's estimated that there are about 100 billion galaxies.",
    "A Day on Venus is Longer than a Year: Venus rotates on its axis very slowly, taking about 243 Earth days to complete one rotation.",
    "Space is Completely Silent: Sound waves need a medium to travel through, and since space is a vacuum, there is no sound.",
    "The Largest Volcano in the Solar System is on Mars: Olympus Mons is about 13.6 miles high, nearly three times the height of Mount Everest.",
    "Jupiter's Great Red Spot is a Giant Storm: This storm has been raging for at least 350 years and is so large that three Earths could fit inside it.",
    "A Year on Mercury is Just 88 Days: Mercury is the closest planet to the Sun and has the shortest orbit in the solar system.",
    "There Could be Life on Other Planets: Scientists are constantly searching for signs of life beyond Earth.",
    "The Moon is Moving Away from Earth: The Moon is gradually drifting away from Earth at a rate of about 1.5 inches per year."
];

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * spaceFacts.length);
    document.getElementById('fact-container').innerText = spaceFacts[randomIndex];
}
