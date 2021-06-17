// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = (drivers) => {let d1 = drivers.slice(0,2)
return d1};
const returnLastTwoDrivers = (drivers) => {let d2 = drivers.slice(2)
return d2} ;
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (fare) => {
    const fareQuintupler = () => fare * fare;
    if (fare) {
        return fareQuintupler;
    };
}
const fareDoubler = (num) => num * 2;
const fareTripler = (num) => num * 3;

function selectDifferentDrivers (drivers, returnLastTwoDrivers)
{if (drivers, returnLastTwoDrivers) {
    return returnFirstTwoDrivers(drivers), returnLastTwoDrivers(drivers);}
    //else if (returnLastTwoDrivers ) {
        //return returnLastTwoDrivers(drivers);
    //}
}