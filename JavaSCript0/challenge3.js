function dateRange(startDate, endDate, steps = 1) {
    const dateArray = [];
    let currentDate = new Date(startDate);
  
    while (currentDate <= new Date(endDate)) {
      dateArray.push(new Date(currentDate));
      // Use UTC date to prevent problems with time zones and DST
      currentDate.setUTCDate(currentDate.getUTCDate() + steps);
    }
  
    return dateArray;
  }
  
  const dates = dateRange('2023-01-01', '2024-01-01');
  console.log(dates);


  //************** Second solution ********************** */

  function getDateRange(startDate, endDate, dateFormat) {
    var dates = [],
        end = moment(endDate),
        diff = endDate.diff(startDate, 'days');

    if(!startDate.isValid() || !endDate.isValid() || diff <= 0) {
        return;
    }

    for(var i = 0; i < diff; i++) {
        dates.push(end.subtract(1,'d').format(dateFormat));
    }

    return dates;
};
console.log(getDateRange(startDate, endDate, dateFormat));

