import _ from "lodash";
import { image, helpers } from "faker";
import { Meteor } from "meteor/meteor";
import { Employees } from "../imports/collections/employees";


Meteor.startup(() => {
  const numberRecords = Employees.find({}).count();

  if (!numberRecords) {
    // Generate fake data
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();

      Employees.insert({
        name,
        email,
        phone,
        avatar: image.avatar()
      });
    });
  }

  Meteor.publish("employees", (perPage) => {
    return Employees.find({}, { limit: perPage });
  });
});