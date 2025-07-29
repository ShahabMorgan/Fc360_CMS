export default {
  beforeCreate(event) {
    let {state} = event.params.data;

    if (state == "PAST") {
      event.params.data.register = null;
      event.params.data.registerForm = null;
    } else {
      event.params.data.surveyForm = null;
    }
  },
};
