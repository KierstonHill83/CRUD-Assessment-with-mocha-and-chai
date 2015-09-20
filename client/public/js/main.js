// add scripts

$(document).on('ready', function() {
  getExercises();
});

$('form').on('submit', function(e) {
  e.preventDefault();
  var payload = {
    name: $('#name').val(),
    description: $('#description').val(),
    tags: $('#tags').val()
  };

  $.post('/api/v1/exercises', payload, function(data) {
    $('.message-section').show();
    $('#success-message').html('Success! Exercise was added.');
    getExercises();
  });
});

function getExercises() {
  $('#all-exercises').html('');
  $.get('/api/v1/exercises', function(data) {
    for (var i = 0; i < data.length; i++) {
      $('#all-exercises').append('<tr><td>' + data[i].name + '</td><td>' + data[i].description + '</td><td>' + data[i].tags + '</td><td class="btn btn-success edit-button" id="'+ data[i]._id +'">' + "Edit" + '</td><td class="btn btn-danger delete-button" id="'+ data[i]._id +'">' + "Delete" + '</td></tr>');
    }
    $('form input').val('');
  });
}


  $(document).on('click', '.delete-button', function() {
    console.log('delete');
    $.ajax ({
      method: 'DELETE',
      url: '/api/v1/exercise/' + $(this).attr('id')
    }).done(function(data) {
        console.log(data);
        getExercises();
    });
  });

 $(document).on('click', '.edit-button', function() {
    console.log('edit');
    $.ajax ({
      method: 'PUT',
      url: '/api/v1/exercise/' + $(this).attr('id')
    }).done(function(data) {
        console.log(data);
        getExercises();
    });
  });

