var builder = require('./builder'),
    state = {
      happy : 10,
      love : 10,
      sad : -10,
      anger: -10,
      nervous: -10,
      active_events : [],
      resolved_events : {}
    };

function update() {
  for (var i = 0, ev; i < state.active_events.length; i++) {
    ev = state.active_events[i];

    if (ev.duration === "instant") {
      ev.effect(state);
      ev.outcome(state);
      console.log(ev.name,"happened.");
      //console.log(state);

      state.resolved_events[ev.name] = true;
      state.active_events.splice(i,1);
      continue;
    }
    else if (ev.duration === "endure") {
      if (ev.life <= 0) {
        ev.outcome(state);
        console.log(ev.name,"finally resolves:");
        //console.log(state);        

        state.resolved_events[ev.name] = true;
        state.active_events.splice(i,1);
        continue;
      }
      else {
        ev.life -= 1000;
        ev.effect(state);
        console.log(ev.name,"continues...");
        //console.log(state);
        continue;
      }
    }
    else if (ev.duration === "delay") {
      if (ev.life <= 0) {
        ev.effect(state);
        ev.outcome(state);
        console.log("Suddenly:",ev.name + "!");
        //console.log(state);

        state.resolved_events[ev.name] = true;
        state.active_events.splice(i, 1);
        continue;
      }
      else {
        ev.life -= 1000;
      }
    }
  }
}

function newEvent() {
  var event = builder.build(state);
  state.active_events.push(event);
}
setInterval(newEvent, 6500);
setInterval(update, 1500);