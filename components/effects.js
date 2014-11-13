//
// meta_value := the sum of changes to the base emotions.
//
// base emotion values:
//   happy :   10,
//   love  :   10,
//   sad   :  -10,
//   anger :  -10,
//   nervous: -10
//
// A positive number means that Happy and Love increased while while Sad, Anger
// and Nervous decreased, or that the "Positive" emotions increased more than 
// the negative emotions; and vice versa
//
// Changes applied to emotion values CANNOT exceed a collective total of 1.0
//
// meta_vaules range from -10 to 10 based on the above rules and initial vals
// 
module.exports = [
  {
    meta_value : 9.4,
    fn : function(state) {
      state.happy += (state.happy * 0.28);
      state.love += (state.love * 0.21);
      state.sad += (state.sad * -0.20);
      state.anger += (state.anger * -0.28);
      state.nervous += (state.nervous * 0.03);
    }
  },
  {
    meta_value : -10,
    fn : function(state) {
      state.happy += (state.happy * -0.15);
      state.love += (state.love * -0.33);
      state.sad += (state.sad * 0.22);
      state.anger += (state.anger * 0.28);
      state.nervous += (state.nervous * 0.02);
    }
  },
  {
    meta_value : -0.9,
    fn : function(state) {
      state.happy += (state.happy * -0.20);
      state.love += (state.love * 0.22);
      state.sad += (state.sad * 0.33);
      state.anger += (state.anger * -0.23);
      state.nervous += (state.nervous * 0.02);
    }
  },
  {
    meta_value : 1.8,
    fn : function(state) {
      state.happy += (state.happy * 0.42);
      state.love += (state.love * -0.22);
      state.sad += (state.sad * 0.17);
      state.anger += (state.anger * -0.17);
      state.nervous += (state.nervous * 0.02);
    }
  },
  {
    meta_value : 5.4,
    fn : function(state) {
      state.happy += (state.happy * -0.15);
      state.love += (state.love * 0.65);
      state.sad += (state.sad * -0.07);
      state.anger += (state.anger * 0.08);
      state.nervous += (state.nervous * -0.05);
    }
  },
  {
    meta_value : -4.4,
    fn : function(state) {
      state.happy += (state.happy * 0.15);
      state.love += (state.love * -0.65);
      state.sad += (state.sad * 0.07);
      state.anger += (state.anger * -0.08);
      state.nervous += (state.nervous * -0.05);
    }
  }
];