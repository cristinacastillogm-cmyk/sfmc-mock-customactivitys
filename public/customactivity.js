var connection = new Postmonger.Session();
var activity = {};

connection.on('initActivity', function (payload) {
  if (payload) {
    activity = payload;
  }
  // Notificar a SFMC que la actividad está lista
  connection.trigger('ready');
});

connection.on('requestedTokens', function (tokens) {
  // Tokens JWT de SFMC disponibles aquí si los necesitas
  console.log('Tokens recibidos:', tokens);
});

connection.on('clickedNext', function () {
  // Al pulsar "Siguiente/Done" en el modal, guardamos la actividad
  connection.trigger('updateActivity', activity);
});

connection.on('clickedBack', function () {
  connection.trigger('ready');
});
