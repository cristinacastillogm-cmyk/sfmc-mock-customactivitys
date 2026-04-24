var connection = new Postmonger.Session();

connection.trigger('ready');

connection.on('clickedNext', function () {
    connection.trigger('updateActivity');
});
