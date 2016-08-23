/* js for check-boxes*/
  $(document).ready(function(){
    $('.submit').click(function(){
      // to do - removing old table

      //adding new table
      var x = $('#number').val();
      var content = "<table>"
      for(var i=0; i<x; i++){
        content+='<tr>';
            for(var j=0; j<x; j++){
              content += '<td>' +  '</td>';
              }
            content+='</tr>';
            }
      content += "</table>"

      $('#here_table').append(content);

    });

    $(document).on('mouseover' , 'td' , function(){
      $(this).css('background-color' , 'black');
    });
  });
