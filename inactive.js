const user = {
  name: "Qasim Asad",
  age: "25",
  city: "san francisco",
  lastActivity: new Date().getTime(),
};

const inactiveFirstStage = () => {
  console.log("User has been inactive for the past 1-2 minutes");
};

const inactiveSecondStage = () => {
  console.log("User has been inactive for the past 3-4 minutes");
};

const inactiveThirdStage = () => {
  console.log("User has been inactive for the past 5-6 minutes");
};

// i am making a function so that
// in if we have to run the same logic to many users it will be reusable.
function trackUserInactivity(user) {
  const currentTimestamp = new Date().getTime();

  let difference = currentTimestamp - user.lastActivity;

  // converting difference to minutes by difference / 60000
  difference = difference / 60000;

  // to consider 6 - 7 mintute as a first cycle.. i am taking modulus with 5
  difference = difference % 5;

  if (difference >= 4 && difference <= 5) {
    inactiveThirdStage();
  } else if (difference > 2 && difference <= 3) {
    inactiveSecondStage();
  } else if (difference >= 1 && difference <= 2) {
    inactiveFirstStage();
  }
}

// this is the main method that acts like a worker and runs every 1 minute
setInterval(function () {
  trackUserInactivity(user);
  // please write your code here
}, 60000 /* 60 * 1000 = 60000 */);
