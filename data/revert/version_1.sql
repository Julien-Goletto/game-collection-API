-- Revert ludotheque:version_1 from pg

BEGIN;

ALTER SCHEMA "public" OWNER TO julien_goletto;

DROP TABLE "genre","platform","user","game","game_has_platform","game_has_genre","game_has_user";

COMMIT;
