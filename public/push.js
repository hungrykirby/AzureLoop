window.onload = function(){
  var socket = io.connect();
  const btn = document.getElementById('btn');
  console.log(socket);
  btn.addEventListener( 'click' , function() {
      socket.emit('btn', true);
  } );
};

/*document.querySelector('#btn').onclick = function () {
  //socket.emit('btn', true);
}*/
