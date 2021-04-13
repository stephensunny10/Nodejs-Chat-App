const socket = io();
var userName = '';
userName = user || `User${Math.floor(Math.random() * 1000000)}`;

socket.emit('user',userName);

socket.on('message',function(data){
    var inbox = document.getElementById('inbox').innerHTML = data.msg;
})


 function sendMsg(){

     var inbox = document.getElementById('input').value;
     var msgBody = {
        msg:inbox
     }
     socket.emit('message',msgBody);
    
 }

