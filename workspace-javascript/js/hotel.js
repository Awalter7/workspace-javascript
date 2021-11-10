//event saves room booking
var guestList = new Array();

function booking(){
    var guest={
        name: $('#name').val(),
        numberofGuests: $('#num').val(),
        checkin: $('#checkin').val(),
        checkout: $('#checkout').val(),
        room: $('#room').val(),
        display: function(){
            return this.name+" reserved "+ this.room+ " from "+ this.checkin +" till "+ this.checkout;
        }
    };
    guestList.push(guest);
    console.log(guest.display());
}
//register event
$('#submit').click(booking);




//display guests bookings
function displayRes(){
    for(i in guestList){
        var guest = guestList[i];
        console.log(guest.display());
    }
}
//register event
$('#lists').click(displayRes);