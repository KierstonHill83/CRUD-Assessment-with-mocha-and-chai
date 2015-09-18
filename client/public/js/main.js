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
      $('#all-exercises').append('<tr><td>' + data[i].name + '</td><td>' + data[i].description + '</td><td>' + data[i].tags + '</td><td id="edit" class="btn btn-success">' + "Edit" + '</td><td id="delete" class="btn btn-danger">' + "Delete" + '</td></tr>');
    }
    $('form input').val('');
  });
}

function deleteButton() {
  $('#delete').on('click', function() {
    console.log('test');
    $.ajax ({
      method: "DELETE",
      url: '/exercise/' + $(this).attr('id')}).done(function(data) {
        $('#results').html('Success!');
        getExercises();
      });
  });
}
