/* js for check-boxes*/
  $(document).ready(function(){
    $('.submit').click(function(){
      var x = $('#number').val();
      var content = "<table>"
      for(var i=0; i<x; i++){
          content += '<tr><td>' + 'result ' +  i + '</td></tr>';
      }
      content += "</table>"

      $('#here_table').append(content);

    });
  });
