## API Endpoints for ludotheque

method | route | description | returns
-------- | ------ | ---------- | -------
GET | /games | get all games already registered in databse | Array of Objet _game_ (JSON)
GET | /games/{id} | get the game details that has the requested id | Object _game_ (JSON)
GET | /platforms | get all videogames platforms in database | Array of _platform_ Object (JSON)
GET | /games/platforms/{id} | get all videogames from platform requested | Array of Objet _game_ (JSON)
GET | /genres | get all videogames genres in database| Array of _genre_ Object (JSON)
GET | /games/genre/{id} | get all videogames from genre requested | Array of Objet _game_ (JSON)
GET | /users | get all users in database| Array of _user_ Object (JSON)
GET | /games/user/{id} | get all videogames possessed by the requested user | Array of Objet _game_ (JSON)
POST | /games | add a game in database, asking for a string to fetch RAWG API | HTTP redirection
