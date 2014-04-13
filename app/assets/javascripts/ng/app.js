'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('charleses', [
  'charleses.services',
  'charleses.controllers',
  'mgcrea.ngStrap',
  'ui.router'
]);

angular.module('charleses.services', [
  'charleses.user'
]);

angular.module('charleses.controllers', [
  'charleses.usersController'
]);

function configureApp ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'ng/users/welcome',
    controller: 'usersController'
  })


  $stateProvider
  .state('user', {
    url: '/users/:userId',
    templateUrl: 'ng/users/home',
    controller: 'usersController'
  })
  .state('user.interview', {
    url: '/interview',
    templateUrl: 'ng/interviews/show'
  })
  .state('user.appointment', {
    url: '/appointment',
    templateUrl: 'ng/appointments/show'
  })
  .state('user.info', {
    url: '/info',
    templateUrl: 'ng/info'
  })
  .state('user.library', {
    url: '/library',
    templateUrl: 'ng/library/show'
  })
  .state('user.medication', {
    url: '/medication',
    templateUrl: 'ng/medication/show'
  })
  .state('user.team', {
    url: '/team',
    templateUrl: 'ng/team/show'
  })

}

app.config(['$stateProvider', '$urlRouterProvider', configureApp]).run(function(){
  gapi.hangout.render('createhangout-div', { 'render': 'createhangout' });
  var data = [{
      "date": "20111001",
          "New York": "63.4",
          "San Francisco": "62.7",
          "Austin": "72.2"
  }, {
      "date": "20111002",
          "New York": "58.0",
          "San Francisco": "59.9",
          "Austin": "67.7"
  }, {
      "date": "20111003",
          "New York": "53.3",
          "San Francisco": "59.1",
          "Austin": "69.4"
  }];
  var margin = {
      top: 20,
      right: 80,
      bottom: 30,
      left: 50
  },
  width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

  var parseDate = d3.time.format("%Y%m%d").parse;

  var x = d3.time.scale()
      .range([0, width]);

  var y = d3.scale.linear()
      .range([height, 0]);

  var color = d3.scale.category10();

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

  var line = d3.svg.line()
      .interpolate("basis")
      .x(function (d) {
      return x(d.date);
  })
      .y(function (d) {
      return y(d.temperature);
  });

  var svg = d3.select("#medication_chart").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  color.domain(d3.keys(data[0]).filter(function (key) {
      return key !== "date";
  }));

  data.forEach(function (d) {
      d.date = parseDate(d.date);
  });

  var cities = color.domain().map(function (name) {
      return {
          name: name,
          values: data.map(function (d) {
              return {
                  date: d.date,
                  temperature: +d[name]
              };
          })
      };
  });

  x.domain(d3.extent(data, function (d) {
      return d.date;
  }));

  y.domain([
  d3.min(cities, function (c) {
      return d3.min(c.values, function (v) {
          return v.temperature;
      });
  }),
  d3.max(cities, function (c) {
      return d3.max(c.values, function (v) {
          return v.temperature;
      });
  })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Temperature (ºF)");

  var city = svg.selectAll(".city")
      .data(cities)
      .enter().append("g")
      .attr("class", "city");

  city.append("path")
      .attr("class", "line")
      .attr("d", function (d) {
      return line(d.values);
  })
      .style("stroke", function (d) {
      return color(d.name);
  });

  city.append("text")
      .datum(function (d) {
      return {
          name: d.name,
          value: d.values[d.values.length - 1]
      };
  })
      .attr("transform", function (d) {
      return "translate(" + x(d.value.date) + "," + y(d.value.temperature) + ")";
  })
      .attr("x", 3)
      .attr("dy", ".35em")
      .text(function (d) {
      return d.name;
  });
});
