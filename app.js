const express = require('express');
const app = express();
const Genre = require('./app/genre');

app.get('/api/genres', (request, response) => {
  Genre.all().then((genres) => {
    response.json(genres);
  });
});

app.get('/api/genres/:id', (request, response) => {
  let id = request.params.id;
  Genre.find(id).then((genre) => {
    response.json(genre);
  }, () => {
    response.status(404).json({
      error: 'Genre not found'
    });
  });
});

app.listen(process.env.PORT || 8000);
