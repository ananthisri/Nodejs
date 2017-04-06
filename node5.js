function placeorder(on)
{
   console.log("Placed order:",on);
   
   deliver(function(){
      console.log("Delivered order:",on);
});
}

function deliver(callback)
{
  setTimeout(callback, 5000);
}

placeorder(1);                           
placeorder(2);
placeorder(3);
placeorder(4);
placeorder(5);
placeorder(6);

var var1={
	firstname:"aanu"
}

var var2=var1;
var2.firstname="sri";
console.log(var1.firstname);
