
/**
 * @author yanzq1
 */

function init(){
	function sq1(x) {
	  return x * x
	}
	
	var sq2 = function(x) {
	  return x * x
	}
	
	console.log("sq1(4) ==", sq1(4)) // == 16
	console.log("sq2(4) ==", sq2(4)) // == 16
	
	sq1.foo = 8
	sq2.bar = 3
	
	console.log("Trippy:", sq1(sq1.foo + sq2.bar))
	
	
	var formatter = function(prefix, fixed) {
		  if (prefix == null) { prefix = '' }
		  if (fixed == null) { fixed = 2 }
		  return function(number) {
		    return prefix + number.toFixed(fixed)
		  }
	}

	var currency = formatter('$', 2)
	var roughly = formatter('~ ', 1)

	console.log("currency(31/3) ==", currency(31/3))
	
	console.log("roughly(31/3) ==", roughly(31/3))
}