import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.requestVerify.onCreated(function requestVerifyOnCreated() {

});

Template.requestVerify.events({
  'submit form': function(event, instance) {

  },
});
