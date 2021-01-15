The users in your system have a lastActivity prop associated with them which gets updated everytime user performs some activity into the system.
In the file `inactive.js` we're sampling a single user. When the program starts, the user's lastActivity time is set to latest.

In the code we also start an interval that runs every minute. You have to write an algorithm that classifies users according to inactivity as follows:

1-2 minutes of inactivity => call inactiveFirstStage()
2-3 minutes of inactivity => call inactiveSecondStage()
4-5 minutes of inactivity => call inactiveThirdStage()

After 5 minutes, and if the user is still inactive, the cycle starts repeating itself. So if the user has been inactive for 6-7 minutes, it is considered as 1-2 minutes of inactivity and inactiveFirstStage() is invoked. This is an important point to consider.

** Important **

- Fork this repo before you do anything
- Make all the commits in your forked repo
- Submit link to your forked repo that has all the code.

** Solved **

- run node inactive.js
