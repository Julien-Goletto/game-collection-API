-- Deploy ludotheque:version_2 to pg

BEGIN;

CREATE FUNCTION add_new_genres(arr TEXT[]) RETURNS void AS $$
		DECLARE
			m TEXT;
		BEGIN
			FOREACH m IN ARRAY arr
			LOOP
			  INSERT INTO genre(name)
			  SELECT m
			  WHERE NOT EXISTS (SELECT id from genre WHERE name=m);
			END LOOP;
    	END
$$ LANGUAGE plpgsql;

CREATE FUNCTION add_new_platforms(arr TEXT[]) RETURNS void AS $$
		DECLARE
			m TEXT;
		BEGIN
			FOREACH m IN ARRAY arr
			LOOP
			  INSERT INTO platform(name)
			  SELECT m
			  WHERE NOT EXISTS (SELECT id from platform WHERE name=m);
			END LOOP;
    	END
$$ LANGUAGE plpgsql;

CREATE FUNCTION add_new_games(arr TEXT[]) RETURNS void AS $$
DECLARE
	m TEXT[];
  BEGIN
    FOREACH m SLICE 1 IN ARRAY arr
    LOOP
      INSERT INTO game(name,released_on,background_image)
      SELECT m[1], m[2]::TIMESTAMPTZ, m[3]
      WHERE NOT EXISTS (SELECT id from game WHERE name=m[1]);
    END LOOP;
    END
$$ LANGUAGE plpgsql;
CREATE FUNCTION game_to_platforms(game_title TEXT,platforms_list TEXT[]) RETURNS void AS $$
DECLARE
	m TEXT;
  BEGIN
    FOREACH m IN ARRAY platforms_list
    LOOP
      INSERT INTO game_has_platform(game_id,platform_id)
      SELECT
      (SELECT id from game WHERE game.name = game_title) as game_id,
      (SELECT id from platform WHERE platform.name = m) as platform_id;
    END LOOP;
    END
$$ LANGUAGE plpgsql;
CREATE FUNCTION game_to_genres(game_title TEXT,genres_list TEXT[]) RETURNS void AS $$
DECLARE
	m TEXT;
  BEGIN
    FOREACH m IN ARRAY genres_list
    LOOP
      INSERT INTO game_has_genre(game_id,genre_id)
      SELECT
      (SELECT id from game WHERE game.name = game_title) as game_id,
      (SELECT id from genre WHERE genre.name = m) as genre_id;
    END LOOP;
    END
$$ LANGUAGE plpgsql;

COMMIT;
