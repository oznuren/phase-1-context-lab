/* Your Code Here */

const createEmployeeRecord = ([firstName, familyName, title, payPerHour]) => {
  const employeeObj = {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
  };
  return employeeObj;
};

const createEmployeeRecords = (arr) => {
  return arr.map(createEmployeeRecord);
};

function createTimeInEvent(dateStamp) {
  let obj = {
    type: "TimeIn",
    hour: parseInt(dateStamp.slice(-4), 10),
    date: dateStamp.slice(0, 10),
  };
  this.timeInEvents.push(obj);
  return this;
}

function createTimeOutEvent(dateStamp) {
  let obj = {
    type: "TimeOut",
    hour: parseInt(dateStamp.slice(-4), 10),
    date: dateStamp.slice(0, 10),
  };
  this.timeOutEvents.push(obj);
  return this;
}

function hoursWorkedOnDate(dateStamp) {
  let hourIn, hourOut;
  hourIn = this.timeInEvents.find((event) => event["date"] === dateStamp);
  hourOut = this.timeOutEvents.find((event) => event["date"] === dateStamp);
  return (hourOut.hour - hourIn.hour) / 100;
}

function wagesEarnedOnDate(dateStamp) {
  return hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour;
}
function findEmployeeByFirstName(arr, firstName) {
  return arr.find((record) => record.firstName === firstName);
}

function calculatePayroll(arr) {
  const total = arr.reduce((acc, emp) => {
    return acc + allWagesFor.call(emp);
  }, 0);
  return total;
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
