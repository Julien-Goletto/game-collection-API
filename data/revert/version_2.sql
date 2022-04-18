-- Revert ludotheque:version_2 from pg

BEGIN;

DROP FUNCTION add_new_genres, add_new_platforms, add_new_games, game_to_platforms, game_to_genres;

COMMIT;
