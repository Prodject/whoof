var socket = io();

socket.on('execute', function(data){
  //result object is updated inside attack function
  var result;
  var inputs = data.inputs;

  try{
    //attack instructions are passed in with socket emission
    eval(data.func);
    attack();
  }catch(e){
    result = {
      //default to failed, status is updated when evaluating data.func
      status: 'Failed to execute attack module',
      successful: false,
      err: e
    }
  }

  //data.func updates result which we send back to the admins
  socket.emit('result', result);
});
