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
  if (this.iteration > 1) {
    this.easinessFactor = this.easinessFactor + (0.1 - (5 - grade) * (0.08) + (5 - grade) * 0.02);
  } else {
    this.easinessFactor = 2.5;
  }
};

Card.prototype.getEasinessFactor = function() {
  return this.easinessFactor;
};

Card.prototype.setNextRepetitionInterval = function() {
  if (this.iteration === 1) {
    this.nextRepetitionInterval = 1;
  } else if (this.iteration === 2) {
    this.nextRepetitionInterval = 6;
  } else {
    // Make sure easinessFactor has been updated
    // I(n) = I(n-1)(easinessFactor)
    this.nextRepetitionInterval = this.getNextRepetitionInterval() * this.getEasinessFactor();
  }
};

Card.prototype.getNextRepetitionInterval = function() {
  return this.nextRepetitionInterval;
};
