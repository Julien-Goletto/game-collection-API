-- Deploy ludotheque:version_1 to pg

BEGIN;

ALTER SCHEMA "public" OWNER TO "ludotheque";
CREATE TABLE "genre" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ
);
CREATE TABLE "platform" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ
);
CREATE TABLE "user" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "pseudo" TEXT NOT NULL UNIQUE,
  "password" TEXT NOT NULL,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ
);
CREATE TABLE "game" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE,
  "released_on" TIMESTAMPTZ NOT NULL,
  "background_image" TEXT NOT NULL,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ
);
CREATE TABLE "game_has_platform" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY,
  "game_id" INTEGER NOT NULL REFERENCES "game"("id") ON DELETE CASCADE,
  "platform_id" INTEGER NOT NULL REFERENCES "platform"("id") ON DELETE CASCADE,
  PRIMARY KEY ("game_id","platform_id"),
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ
);
CREATE TABLE "game_has_genre" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY,
  "game_id" INTEGER NOT NULL REFERENCES "game"("id") ON DELETE CASCADE,
  "genre_id" INTEGER NOT NULL REFERENCES "genre"("id") ON DELETE CASCADE,
  PRIMARY KEY ("game_id","genre_id"),
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ
);
CREATE TABLE "game_has_user" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY,
  "game_id" INTEGER NOT NULL REFERENCES "game"("id") ON DELETE CASCADE,
  "user_id" INTEGER NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
  PRIMARY KEY ("game_id","user_id"),
  "is_finished" BOOLEAN NOT NULL DEFAULT 'false',
  "is_prioritized" BOOLEAN NOT NULL DEFAULT 'false',
  "score" INTEGER,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ
);

COMMIT;
