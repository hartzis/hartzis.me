---
layout: post
title: Charting magic in angular
description: "Fun with charting in angular."
tags: [angular, javascript, directive, highcharts]
comments: false
---

I have data, data that needs proper representation in the online web-o-sphere! This data wants to show the world how gorgeous it is! The data is not simple, it is complex and wants to explore how dynamic it can be.
<br><br>Enter [highcharts](www.highcharts.com) the super duper phenomenally extra awesome graphing/charting all in one library.  

## highcharts and angular

[Highcharts](http://www.highcharts.com) is quite dynamic by default.  With this amazing charting library you can easily manipulate how the data is visually displayed.  

>Found a great directive that encapsulated the usability with watches that update data after ajax requests.

## Highcharts-ng

[Highcharts-ng](https://github.com/pablojim/highcharts-ng) is a directive itself, it has a lot of boilerplate code that has to be attached to the controller's scope. And that is where another wrapper directive comes in handy that isolates the scope.

<figure>
    <a href="/images/highcharts1.png"><img src="/images/highcharts1.png"></a>
    <figcaption>highcharts-ng from client project</figcaption>
</figure>

### Directive Template

We create another directive to wrap the highcharts-ng directive, to contain all the required configuration stuff.

{% highlight html %}
<div class="row">
  <div class="col-xs-12 text-center"></div>
  <highchart config="chartConfig"></highchart>
</div>
{% endhighlight %}

>This directive contains the boilerplate javascript for highcharts-ng. This helps with the modularity, keeping everything associated with the directive together.

{% highlight javascript linenos %}
.directive('dataChart', [
    function() {
      return {
        restrict: 'E',
        scope: {
          chartData: '=chartData'
        },
        templateUrl: '/directiveTemplates/dataChart',
        replace: 'true',
        controller: ['$scope',
          function($scope) {

            // setup chart params
            $scope.chartConfig = {
              options: {
                chart: {
                  backgroundColor: '#f9f9f9',
                  type: 'area'
                }
              },
              xAxis: {
                categories: [],
                tickmarkPlacement: 'on'
              },
              yAxis: {
                title: {
                  text: ''
                }
              },
              series: [],
              title: {
                text: 'Title'
              },
              loading: true
            };
}
{% endhighlight %}

### Final thoughts
I am using this directive exclusively for a current project, and am loving it. Though this is a short post, it is here to remind others and myself in the future to keep things contained and reusable.
