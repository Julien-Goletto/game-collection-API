-- Deploy ludotheque:version_3 to pg

BEGIN;

-- First the 3 main tables
SELECT add_new_platforms(array['Nintendo Switch','PC','Xbox One','PlayStation 4','macOS','Linux','PS Vita','iOS','Xbox 360','PlayStation 3','Xbox Series S/X','PlayStation 5','Wii U','Android']); 
SELECT add_new_genres(array['Platformer','Action','RPG','Indie','Adventure','Puzzle','Card','Strategy','Casual','Arcade','Fighting']); 
SELECT add_new_games(array[['Metroid Dread','2021-10-08','https://media.rawg.io/media/games/c26/c262f8b54b46edc72594c4a9bb8ee13e.jpg'],['Hollow Knight','2017-02-23','https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg'],['FEZ','2012-04-13','https://media.rawg.io/media/games/4cb/4cb855e8ef1578415a928e53c9f51867.png'],['Undertale','2015-09-14','https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg'],['Hades','2020-09-17','https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg'],['Bayonetta','2009-06-23','https://media.rawg.io/media/games/a49/a4991c35602884e0b0af9c62afb10ff5.jpg'],['The Legend of Zelda: Breath of the Wild','2017-03-03','https://media.rawg.io/media/games/cc1/cc196a5ad763955d6532cdba236f730c.jpg'],['Dark Souls: Remastered','2018-05-23','https://media.rawg.io/media/games/29c/29c6c21cc0c78cff6f45d23631cc82f4.jpg'],['Gris','2018-12-13','https://media.rawg.io/media/games/51c/51c430f1795c79b78f863a9f22dc422d.jpg'],['Slay the Spire','2019-01-22','https://media.rawg.io/media/games/f52/f5206d55f918edf8ee07803101106fa6.jpg'],['Assassin''s Creed Odyssey','2018-10-05','https://media.rawg.io/media/games/c6b/c6bd26767c1053fef2b10bb852943559.jpg'],['Into the Breach','2018-02-26','https://media.rawg.io/media/games/800/800d07ca648a9778a8230f40088e0866.jpg'],['Invisible, Inc.','2015-05-12','https://media.rawg.io/media/games/849/849c187c0b5d4cd1ee3283148f7e4cdb.jpg'],['OKAMI HD / 大神 絶景版','2017-12-12','https://media.rawg.io/media/games/a38/a3857b2445c70ac5dbe73b210a827ad8.jpg'],['Dungeon of the Endless','2014-10-27','https://media.rawg.io/media/games/a0c/a0cb0ac048c75b41d2620d2e6cb6f983.jpg'],['Downwell','2015-10-14','https://media.rawg.io/media/screenshots/e9c/e9ce72a3e2c1ac344e8876d6bb0dcf50.jpeg'],['Streets of Rage 4','2020-04-30','https://media.rawg.io/media/games/e56/e56d74b0a1072662eea7c1a194363884.jpg'],['Kirby and the Forgotten Land','2022-03-25','https://media.rawg.io/media/games/42a/42a71f0cbe23185f778c10462faa12d8.jpg'],['TRIANGLE STRATEGY','2022-03-04','https://media.rawg.io/media/games/334/3340776fc9a78199838c7c1d8ec22bd5.jpg'],['Shin Megami Tensei V','2021-11-12','https://media.rawg.io/media/games/1b6/1b6673b646af55f834938bedebee2a0f.jpg']]);

-- Then the pivot tables
SELECT game_to_platforms('Metroid Dread', array['Nintendo Switch']);
SELECT game_to_platforms('Hollow Knight', array['PC','Xbox One','PlayStation 4','Nintendo Switch','macOS','Linux','PS Vita']);
SELECT game_to_platforms('FEZ', array['PC','PlayStation 4','Nintendo Switch','iOS','macOS','Linux','Xbox 360','PlayStation 3','PS Vita']);
SELECT game_to_platforms('Undertale', array['PC','PlayStation 4','Xbox One','Xbox Series S/X','Nintendo Switch','macOS','Linux','PS Vita']);
SELECT game_to_platforms('Hades', array['PC','PlayStation 5','Xbox One','PlayStation 4','Xbox Series S/X','Nintendo Switch']);
SELECT game_to_platforms('Bayonetta', array['PC','Xbox One','Nintendo Switch','Xbox 360','PlayStation 3','Wii U']);
SELECT game_to_platforms('The Legend of Zelda: Breath of the Wild', array['Nintendo Switch','Wii U']);
SELECT game_to_platforms('Dark Souls: Remastered', array['PC','PlayStation 4','Xbox One','Nintendo Switch']);
SELECT game_to_platforms('Gris', array['PC','PlayStation 4','Nintendo Switch','iOS','macOS']);
SELECT game_to_platforms('Slay the Spire', array['PC','Xbox One','PlayStation 4','Nintendo Switch','iOS','Android','macOS','Linux']);
SELECT game_to_platforms('Assassin''s Creed Odyssey', array['PC','Xbox One','PlayStation 4','Nintendo Switch']);
SELECT game_to_platforms('Into the Breach', array['PC','Nintendo Switch','macOS']);
SELECT game_to_platforms('Invisible, Inc.', array['PC','PlayStation 4','Nintendo Switch','iOS','macOS','Linux']);
SELECT game_to_platforms('OKAMI HD / 大神 絶景版', array['PC','Xbox One','PlayStation 4','Nintendo Switch','PlayStation 3']);
SELECT game_to_platforms('Dungeon of the Endless', array['PC','Xbox One','PlayStation 4','Nintendo Switch','iOS','macOS']);
SELECT game_to_platforms('Downwell', array['PC','PlayStation 4','Nintendo Switch','iOS','Android','PS Vita']);
SELECT game_to_platforms('Streets of Rage 4', array['PC','Xbox One','PlayStation 4','Nintendo Switch']);
SELECT game_to_platforms('Kirby and the Forgotten Land', array['Nintendo Switch']);
SELECT game_to_platforms('TRIANGLE STRATEGY', array['Nintendo Switch']);
SELECT game_to_platforms('Shin Megami Tensei V', array['Nintendo Switch']);

SELECT game_to_genres('Metroid Dread', array['Platformer','Action','RPG']);
SELECT game_to_genres('Hollow Knight', array['Platformer','Indie','Action']);
SELECT game_to_genres('FEZ', array['Adventure','Action','Puzzle','Indie','Platformer']);
SELECT game_to_genres('Undertale', array['Indie','RPG']);
SELECT game_to_genres('Hades', array['Indie','Adventure','Action','RPG']);
SELECT game_to_genres('Bayonetta', array['Action']);
SELECT game_to_genres('The Legend of Zelda: Breath of the Wild', array['Adventure','Action','RPG']);
SELECT game_to_genres('Dark Souls: Remastered', array['Action']);
SELECT game_to_genres('Gris', array['Indie','Platformer','Adventure','Puzzle']);
SELECT game_to_genres('Slay the Spire', array['Card','Strategy','Indie','RPG']);
SELECT game_to_genres('Assassin''s Creed Odyssey', array['Action','RPG']);
SELECT game_to_genres('Into the Breach', array['Strategy','Indie','RPG']);
SELECT game_to_genres('Invisible, Inc.', array['Strategy','Adventure']);
SELECT game_to_genres('OKAMI HD / 大神 絶景版', array['Adventure','Action']);
SELECT game_to_genres('Dungeon of the Endless', array['Indie','Strategy','Adventure','RPG']);
SELECT game_to_genres('Downwell', array['Adventure','Action','Casual','Arcade','Indie','Platformer']);
SELECT game_to_genres('Streets of Rage 4', array['Indie','Action','Fighting']);
SELECT game_to_genres('Kirby and the Forgotten Land', array['Action']);
SELECT game_to_genres('TRIANGLE STRATEGY', array['Strategy','Adventure','RPG']);
SELECT game_to_genres('Shin Megami Tensei V', array['Adventure','Action','RPG']);
COMMIT;
