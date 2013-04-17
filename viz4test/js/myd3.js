/**
 * @author yanzq1
 */
 function init(){
 	canvas=d3.select("body").append("div").style("class","canvas").style("height","1000px").style("width","1500px");
 
 }
 
function d3_changeColorForP(){
	           canvas.append("p")
	 				 .text("hello world")
	 				 .style("font-family","H")
	                 .style("color",
						    function(){
							    return "hsl("+Math.random()*360+",100%,50%)";//动态随机的改变字体的颜色
						    });
}

function d3_data(){	
	canvas.selectAll("p").data([10,12,20,100]).text(function(d){return d});
}

function d3_data2(){	
	canvas.selectAll("p").data([{"name":"kate"},{"name":"demi"},{"name":"myra"},{"name":"eve"}])
	                     .text(function(d){return d.name}
	                     );
}

function d3_dataAll(){
	
	var matrix=[
	[1,2,3],
	[4,5,6]
	];
	var tr=canvas.append("table").selectAll("tr")
											.data(matrix)
											.enter().append("tr");
	
	var td=tr.selectAll("td")
				.data(function(d){return d})
				.enter().append("td")
				.text(function(d){return d});
			
}

function d3_scale(){
	
	var scale=d3.scale.linear()
	    .domain([10,100])
	    .range([0,10]);
	alert(scale(90));
	
}
function d3_plot(){
	
	//var jsonString = '{"title":"","ticks":["Oct-12","Nov-12","Dec-12","Jan-13","Feb-13","Mar-13","Apr-13"],"data1":[],"data2":[],"dataNames":[],"yBarData":"[[2.30450467,3.25233535,3.40465933,3.52791476,5.00874680,5.29645633,3.19074659]]","expInfo":null}';
	  var startDate=new Date("Jan 1,2012");
	  var endDate=new Date("May 1,2012"); 
    var time_scale=d3.time.scale()
                     .domain([startDate,endDate])
                     .range([0,500]);
                     
                     
    var value_scale=d3.scale.linear()
     				 .domain([1,3])
     				 .range([0,500]);
 
   var xAxis=d3.svg.axis()
   				   .scale(time_scale)
   				   .orient("bottom")
   				   .ticks(5);
   				   
   	var yAxis=d3.svg.axis()
			   	.scale(value_scale)
			   	.orient("left")
			   	.ticks(5);
			   	
			   	
			   	
   var svg= canvas.append("svg");
                svg.attr("width",500).attr("height",500);

                            svg.append("g")
								 .attr("class", "axis")
								 .attr("transform", "translate(" + 50 + ",0)")
								 .call(yAxis);
   							svg.append("g")
								 .attr("class", "axis")
								 .attr("transform", "translate(0," +450 + ")")
								 .call(xAxis);
}

function d3_circle(){
	
	 var h=500;
	 var w=500;
	 var dataset = [5, 10, 15, 20, 25];
	 
	 var svg= canvas.append("svg");
                svg.attr("width",w).attr("height",h);
                
	 var circles = svg.selectAll("circle")
	 				.data(dataset)
					.enter()
					.append("circle");
					
	    circles.attr("cx", function(d, i) {
						return (i * 50) + 25;
						})
				.attr("cy", h/2)
				.attr("r", function(d) {
				return d;
				})
				.attr("fill", "yellow")
                .attr("stroke", "orange")
                .attr("stroke-width", function(d) {
					return d/2;
});;
}
