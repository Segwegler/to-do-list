function newItem(){
  let li = $("<li></li>");
  
  let inputText = $('#input').val()
  
  
  li.text(inputText);
  li.on('dblclick',crossOut);
  
  function crossOut(){
    li.toggleClass('strike');
  }
  
  
  let crossoutButton = $("<crossOutButton></crossOutButton>")
  crossoutButton.text("X");
  crossoutButton.on('click',remove);
  
  function remove(){
    li.addClass('delete');
  }
  
  li.append(crossoutButton);
  
  
  
  if(inputText === ''){
    alert("You must write somthing!");
  }else{
    $('#list').append(li);
    $('#input').val("");
  }
  $('#list').sortable();
}