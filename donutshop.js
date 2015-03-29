  //This generates the total amount of hours that the shops are open for
  function hours(open,close) {
    return close - open;
  }
   
  //This is my object constructor for each Donut shop
  function dShop (name,open,close,minCust,maxCust,dpc) {
    shopNum+= 1;
    this.name = name;
    this.number = shopNum;
    this.open = open;
    this.close = close;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.dpc = dpc;
    this.cph = Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
    this.totalHours = hours(open,close);
    this.dpd = Math.floor(this.totalHours * this.cph * this.dpc) + 1;
    this.dph = this.cph * this.dpc;
    this.hours = this.open + " to " + this.close;
  }
   
  //I create my Donut shops here
  var shopNum = 0;
  var downtown = new dShop("Downtown",7,18,8,43,4.5);
  var capitol = new dShop("Capitol Hill",7,18,4,37,2.0);
  var slu = new dShop("South Lake Union",7,18,9,23,6.33);
  var wedgewood = new dShop("Wedgewood",7,18,2,28,1.25);
  var ballard = new dShop("Ballard",7,18,8,58,3.75);

  var shops = [downtown, capitol, slu, wedgewood, ballard];

  //This is where the values from the object get pushed to the table
  var $table1 = $("#table")
  var $tableRow1 = $('<tr></tr>');
  var $tableRow2 = $('<tr></tr>');
  var $tableRow3 = $('<tr></tr>');
  var $tableRow4 = $('<tr></tr>');
  var $tableRow5 = $('<tr></tr>');
  var properties = ["number", 'name', 'minCust', 'maxCust', 'dpc', "cph", "totalHours", "hours", "dph", "dpd"];

  //table row and data for downtown shop
  properties.forEach(function(property) {
    var $tableData = $('<td></td>').text(downtown[property]);
    $tableData.appendTo($tableRow1);
  });

  //table row and data for capitol shop
  properties.forEach(function(property) {
    var $tableData = $('<td></td>').text(capitol[property]);
    $tableData.appendTo($tableRow2);
  });  

  //table row and data for south lake union shop
  properties.forEach(function(property) {
    var $tableData = $('<td></td>').text(slu[property]);
    $tableData.appendTo($tableRow3);
  }); 

  //table row and data for wedgewood shop
  properties.forEach(function(property) {
    var $tableData = $('<td></td>').text(wedgewood[property]);
    $tableData.appendTo($tableRow4);
  });  

  //table row and data for ballard shop
  properties.forEach(function(property) {
    var $tableData = $('<td></td>').text(ballard[property]);
    $tableData.appendTo($tableRow5);
  }); 

  //This is where I append the row to the table
  $tableRow1.appendTo($table1);
  $tableRow2.appendTo($table1);
  $tableRow3.appendTo($table1);
  $tableRow4.appendTo($table1);
  $tableRow5.appendTo($table1);

  //This does the zoom in animation on my table
  $table1.removeClass("intro");

  $('tr').click(function(){
    $(this).toggleClass('selected');
  });

  var $table2 = $('#table2');

  $('#move').click(function(){
    var selected = $table1.find('.selected').removeClass('selected');
    $table2.append(selected.clone());
  });


  /* misc console log to see if my object was working 
    console.log("Shop: " + shop.name);
    console.log("Shop #: " + shop.number);
    console.log("Hours: " + hours);
    console.log("Minimum customers per hour: " + shop.minCust);
    console.log("Maximum customers per hour: " + shop.maxCust);
    console.log("Doughnuts per customer: " + shop.dpc);
    console.log("Customers per hour: " + shop.cph);
    console.log("Total hours open: " + shop.totalHours);
    console.log("Donuts per day: " + shop.dpd;
    console.log("Donuts per hour: " + shop.dph;
    console.log("---------------------------------------------");
  }
  */