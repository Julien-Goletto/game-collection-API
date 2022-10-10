# MCD

[Mocodo](http://mocodo.wingi.net/)

```mocodo
:
Has, 0N GAME, 11 REVIEW
REVIEW: _is_finished, is_priotized, score
WROTE, 0N USER, 11 REVIEW

:
GAME: _name, released, background_image
Belongs to, 1N GAME, 0N GENRE
USER: _pseudo, mail, password

PLATFORM: _name
Released on, 1N GAME, 0N PLATFORM
GENRE: _name
:
```