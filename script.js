const timeTravelFacts = [
    "Einstein's Theory of Relativity suggests that time travel is theoretically possible by traveling at the speed of light.",
    "The concept of wormholes, or 'Einstein-Rosen bridges', could potentially allow for shortcuts through space-time.",
    "Time dilation, a consequence of Einstein's theory, means time moves slower for objects moving at high speeds compared to those at rest.",
    "The grandfather paradox is a famous time travel paradox that questions the consequences of altering the past.",
    "Some physicists propose that parallel universes could resolve time travel paradoxes by creating alternate timelines.",
    "Stephen Hawking suggested that time travel might be possible, but only into the future, not the past.",
    "Quantum mechanics introduces the idea of 'quantum time travel', where particles can exist in multiple states at once.",
    "The Novikov self-consistency principle suggests that any actions taken by a time traveler were always part of history.",
    "Kip Thorne, a theoretical physicist, proposed using rotating black holes as a means of time travel.",
    "The idea of a 'time machine' was popularized by H.G. Wells in his 1895 novel, 'The Time Machine'."
];

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * timeTravelFacts.length);
    document.getElementById('fact-container').innerText = timeTravelFacts[randomIndex];
}

