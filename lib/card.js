var Card = function(prompt, response) {
  this.init(prompt, response);
};

Card.prototype.init = function(prompt, response) {
  this.iteration = 1;
  this.setPrompt(prompt);
  this.setResponse(response);
  this.setEasinessFactor();
};


Card.prototype.setPrompt = function(prompt) {
  this.prompt = prompt;
};

Card.prototype.getPrompt = function() {
  return this.prompt;
};

Card.prototype.setResponse = function(response) {
  this.response = response;
};

Card.prototype.getResponse = function() {
  return this.response;
};

Card.prototype.setEasinessFactor = function(grade) {
  var easinessFactor;

  if (this.iteration > 1) {
    easinessFactor = this.easinessFactor + (0.1 - (5 - grade) * (0.08) + (5 - grade) * 0.02);
  } else {
    easinessFactor = 2.5;
  }

  if (easinessFactor < 1.3) {
    easinessFactor = 1.3;
  }

  this.easinessFactor = easinessFactor;
};

Card.prototype.getEasinessFactor = function() {
  return this.easinessFactor;
};

// After second iteration:
// I(n) = I(n-1) * easinessFactor
Card.prototype.setNextRepetitionInterval = function() {
  if (this.iteration === 1) {
    this.nextRepetitionInterval = 1;
  } else if (this.iteration === 2) {
    this.nextRepetitionInterval = 6;
  } else {
    this.nextRepetitionInterval = this.getNextRepetitionInterval() * this.getEasinessFactor();
  }
};

Card.prototype.getNextRepetitionInterval = function() {
  return this.nextRepetitionInterval;
};

Card.prototype.bumpIteration = function() {
  this.iteration++;
};

Card.prototype.iterate = function(grade) {
  this.setEasinessFactor(grade);
  this.setNextRepetitionInterval();
  this.bumpIteration();
};


// If nextRepetitionInterval is a fraction, round it up to the nearest integer.
//
// If the quality response was lower than 3 then start repetitions for the item
// from the beginning without changing the E-Factor (i.e. use intervals I(1),
// I(2) etc. as if the item was memorized anew).
//
// After each repetition session of a given day repeat again all items that
// scored below four in the quality assessment. Continue the repetitions until
// all of these items score at least four.



