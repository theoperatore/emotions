var effects = require('./components/effects'),
    names = require('./components/names'),
    outcomes = require('./components/outcomes'),
    durations = [ "instant", "endure", "delay" ],
    bias_meta_value = 0;

// compiles an event
exports.build = function(state) {
  var name, effect, outcome, duration, life, meta_value, 
      _n = Math.round(Math.random() * (names.length - 1)),
      _e = Math.round(Math.random() * (effects.length - 1)),
      _o = Math.round(Math.random() * (outcomes.length - 1)),
      _d = Math.round(Math.random() * (durations.length - 1));

  var unique = false;
  while (!unique) {
    _n = Math.round(Math.random() * (names.length - 1));
    name = names[_n].name;

    // if this name doesn't have any reqs, use it
    if (names[_n].reqs.length === 0) {
      unique = true;
    }
    else {
      // if it does have requirements, make sure they are 
      // fullfilled.
      for (var i = 0, req; i < names[_n].reqs.length; i++) {
        req = names[_n].reqs[i];

        if (req.event) {
          if (state.resolved_events[req.event]) {
            unique = true;
          }
        }
      }
    }
  }

  effect = effects[_e].fn;
  outcome = outcomes[_o].fn;
  duration = durations[_d];
  meta_value = ( effect.meta_value + outcome.meta_value ) / 2;

  switch (duration) {
    case 'instant': life = 0; break;
    case 'endure' : life = Math.round(Math.random() * 10000); break;
    case 'delay'  : life = Math.round(Math.random() * 4500);  break;
    default : life = 0; break;
  }

  return ({
    name : name,
    effect : effect,
    outcome : outcome,
    duration : duration,
    life : life,
    meta_value : meta_value
  });
}

// set the bias for the next event.
exports.nextEventBias = function(b) {
  bias_meta_value = b;
}