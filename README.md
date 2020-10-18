## Day Planner

This day planner uses moment.js and local object storage to allow the user to interact with the DOM and create a daily schedule for themselves.

The first use of moment.js can be seen in the date setting at the top of the screen.

![moment](https://raw.githubusercontent.com/Valborg1/5-day-planner/master/assets/moment.png)

A more complicated use of moment.js can be seen in the color-coded time slots. Time slots change colors depending on if the event is in the past, present, or future. In order to keep this information dynamic, we have also included a function that runs every 30 seconds to update this color coding as necessary. In this way, you can see time slots update in real time as hours pass.

![color coded](https://raw.githubusercontent.com/Valborg1/5-day-planner/master/assets/updater.png)

Lastly, we have also used localstorage not only to save the information connected with the respective time slots, but also as a way to track if the day these events were added is the same day as today. In other words, when a new day starts, the localstorage is cleared so that the user can start planning for a new day without the need to empty and save all time slots.

Live Website
https://valborg1.github.io/5-day-planner/

Github Repository
https://github.com/Valborg1/5-day-planner
