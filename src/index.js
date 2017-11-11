'use strict';
const Alexa = require('alexa-sdk');
const APP_ID = undefined;

const SKILL_NAME = "Haiku Reader";
const GET_HAIKU_MESSAGE = "Here's a haiku: ";
const HELP_MESSAGE = "You can say tell me a haiku!";
const HELP_REPROMPT = "I’d love to share poems to enrich and inspire your day! Just ask me to read one to you.";
const STOP_MESSAGE = "Have a wonderful day!";

const data = [
  `In the coolness.
  of the empty sixth-month sky.
  The cuckoos cry.`,

  `The tree cut.
  dawn breaks early.
  at my little window.`,

  `scatter layer.
  by layer, eight layered.
  cherry blossoms.`,

  `At the full moons.
  Rising, the silver plumed.
  reeds tremble.`,

  `Entangled with.
  the scattering cherry blossoms.
  the wings of birds.`,

  `Wheat sowing.
  The mulberry trees.
  lift bunched branches.`,

  `Pine and cypress.
  In a withered field.
  A shrine to fudo.`,

  `In the coolness.
  Gods and buddhas.
  dwell as neighbors.`,

  `I turn my back.
  on buddha and face.
  The cool moon.`,

  `The moon is cool.
  Frogs croaking.
  Wells up.`,

  `Coolness.
  A mountain stream splashes out.
  Between houses.`,

  `Fanning out its tail.
  In the spring breeze.
  See. A peacock.`,

  `I bite into a persimmon.
  And a bell sounds.
  Horijuji.`,

  `Rice flowers.
  Fair weather on.
  Dokanyama.`,

  `Rice reaping.
  No smoke rising from.
  The cremation ground today.`,

  `Old garden. She empties.
  A hot water bottle.
  under the moon.`,

  `Again and again.
  I ask how high.
  The snow is.`,

  `Snow is falling.
  I see it through a hole.
  In the shutter.`,

  `Looking down I see.
  Cool in the moonlight.
  Four thousand houses.`
];


const handlers = {
  'NewSession': function(){
    this.emit('GetHaikuIntent');
  },
  'GetHaikuIntent': function(){
    const randomHaikuIndex = Math.floor(Math.random() * data.length);
    const randomHaiku = data[randomHaikuIndex];
    const speechOutput = GET_HAIKU_MESSAGE + randomHaiku;
    this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomHaiku);
  },
  'AMAZON.HelpIntent': function(){
    this.emit(':ask', HELP_MESSAGE, HELP_REPROMPT);
  },
  'AMAZON.CancelIntent': function(){
    this.emit(':tell', STOP_MESSAGE);
  },
  'AMAZON.StopIntent': function(){
    this.emit(':tell', STOP_MESSAGE);
  },
  'Unhandled': function(){
    this.emit(':tell', HELP_MESSAGE)
  }
};

exports.handler = (event, context, callback) => {
  const alexa = Alexa.handler(event, context);
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};