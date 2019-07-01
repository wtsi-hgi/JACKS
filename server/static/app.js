$(document).ready(function () {
    $('#reference-lib-block').hide();
});

$(document).ready(function () {
    $(document).on('change', '#use_reference_lib', function () {
        if ($(this).is(':checked')) {
            $('#reference-lib-block').show();
        }
        else {
            $('#reference-lib-block').hide();
        }
    });
});

$(document).ready(function () {
    $('#results-table').DataTable();
});

$(document).ready(function () {
    $(document.body).on("click", ".download-btn", function () {
        window.open(window.location.pathname + "download/" + $(this).val());
    });
});


$(document).ready(function(){
    // var socket = io.connect('http://' + document.domain + ':' + location.port);
    // var socket = io.connect('http://' + document.domain + ':' + location.port);
    var socket = io.connect() 
    socket.on('run jack event 2', function(msg) {
        $('#log').append('<p>app.js ready function: ' + msg.data + '</p>');
        socket.emit('event', {data: 'log appended from app.js doc ready'});
        console.log('log1');
    });
});
