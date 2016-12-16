DROP DATABASE IF EXISTS `gitgreat`;
CREATE DATABASE `gitgreat`;
USE `gitgreat`;
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'events'
--
-- ---

DROP TABLE IF EXISTS `events`;

CREATE TABLE `events` (
  `id` INTEGER AUTO_INCREMENT,
  `name` VARCHAR(60) NULL DEFAULT NULL,
  `where` VARCHAR(60) NULL DEFAULT NULL,
  `when` VARCHAR(60) NULL DEFAULT NULL,
  `createdAt` VARCHAR(60) NULL DEFAULT NULL,
  `updatedAt` VARCHAR(60) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'items'
--
-- ---

DROP TABLE IF EXISTS `items`;

CREATE TABLE `items` (
  `id` INTEGER AUTO_INCREMENT,
  `item` VARCHAR(60) NULL DEFAULT NULL,
  `owner` VARCHAR(60) NULL DEFAULT NULL,
  `cost` VARCHAR(60) NULL DEFAULT NULL,
  `createdAt` VARCHAR(60) NULL DEFAULT NULL,
  `updatedAt` VARCHAR(60) NULL DEFAULT NULL,
  `id_events` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'reminders'
--
-- ---

DROP TABLE IF EXISTS `reminders`;

CREATE TABLE `reminders` (
  `id` INTEGER AUTO_INCREMENT,
  `phoneNumber` VARCHAR(15) NULL DEFAULT NULL,
  `msg` VARCHAR(200) NULL DEFAULT NULL,
  `when` VARCHAR(60) NULL DEFAULT NULL,
  `updatedAt` VARCHAR(60) NULL DEFAULT NULL,
  `id_events` INTEGER NULL DEFAULT NULL,
  `created_at` VARCHAR(40) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'photos'
--
-- ---

DROP TABLE IF EXISTS `photos`;

CREATE TABLE `photos` (
  `id` INTEGER AUTO_INCREMENT,
  `url` VARCHAR(250) NULL DEFAULT NULL,
  `createdAt` VARCHAR(60) NULL DEFAULT NULL,
  `updatedAt` VARCHAR(60) NULL DEFAULT NULL,
  `id_events` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER AUTO_INCREMENT,
  `name` VARCHAR(40) NULL DEFAULT NULL,
  `e_mail` VARCHAR(40) NULL DEFAULT NULL,
  `userName` VARCHAR(30) NULL DEFAULT NULL,
  `phoneNumber` VARCHAR(20) NULL DEFAULT NULL,
  `password` VARCHAR(40) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'messages'
--
-- ---

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` INTEGER AUTO_INCREMENT,
  `message` VARCHAR(300) NULL DEFAULT NULL,
  `id_event` INTEGER NULL DEFAULT NULL,
  `id_users` INTEGER NULL DEFAULT NULL,
  `createdAt` VARCHAR(60) NULL DEFAULT NULL,
  `updatedAt` VARCHAR(60) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users_events'
-- Joint table
-- ---

DROP TABLE IF EXISTS `users_events`;

CREATE TABLE `users_events` (
  `id` INTEGER AUTO_INCREMENT,
  `id_users` INTEGER NULL DEFAULT NULL,
  `id_event` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) COMMENT 'Joint table';

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `items` ADD FOREIGN KEY (id_events) REFERENCES `events` (`id`);
ALTER TABLE `reminders` ADD FOREIGN KEY (id_events) REFERENCES `events` (`id`);
ALTER TABLE `photos` ADD FOREIGN KEY (id_events) REFERENCES `events` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (id_event) REFERENCES `events` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
ALTER TABLE `users_events` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
ALTER TABLE `users_events` ADD FOREIGN KEY (id_event) REFERENCES `events` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `events` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `items` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `reminders` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users_events` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `events` (`id`,`name`,`where`,`when`,`createdAt`,`updatedAt`) VALUES
-- ('','','','','','');
-- INSERT INTO `items` (`id`,`item`,`owner`,`cost`,`createdAt`,`updatedAt`,`id_events`) VALUES
-- ('','','','','','','');
-- INSERT INTO `reminders` (`id`,`phoneNumber`,`msg`,`when`,`updatedAt`,`id_events`,`created_at`) VALUES
-- ('','','','','','','');
-- INSERT INTO `photos` (`id`,`url `,`createdAt`,`updatedAt`,`id_events`) VALUES
-- ('','','','','');
-- INSERT INTO `users` (`id`,`name`,`e_mail`,`userName`,`phoneNumber`,`password`) VALUES
-- ('','','','','','');
-- INSERT INTO `messages` (`id`,`message`,`id_event`,`id_users`) VALUES
-- ('','','','');
-- INSERT INTO `users_events` (`id`,`id_users`,`id_event`) VALUES
-- ('','','');





-- ******************************* Old Code *****************************************

-- CREATE DATABASE gitgreat;

-- USE gitgreat;

-- -- ---
-- -- Table 'events'
-- --
-- -- ---

-- DROP TABLE IF EXISTS `events`;

-- CREATE TABLE `events` (
--   `id` INTEGER AUTO_INCREMENT,
--   `name` VARCHAR(60),
--   `where` VARCHAR(60),
--   `when` VARCHAR(60),
--   `createdAt` VARCHAR(60),
--   `updatedAt` VARCHAR(60),
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'itemlists'
-- --
-- -- ---

-- DROP TABLE IF EXISTS `itemlists`;

-- CREATE TABLE `itemlists` (
--   `id` INTEGER AUTO_INCREMENT,
--   `item` VARCHAR(60),
--   `owner` VARCHAR(60),
--   `cost` VARCHAR(60),
--   `eventId` INTEGER,
--   `createdAt` VARCHAR(60),
--   `updatedAt` VARCHAR(60),
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'reminders'
-- --
-- -- ---

-- DROP TABLE IF EXISTS `reminders`;

-- CREATE TABLE `reminders` (
--   `id` INTEGER AUTO_INCREMENT,
--   `phoneNumber` VARCHAR(15),
--   `msg` VARCHAR(200),
--   `when` VARCHAR(60),
--   `eventId` INTEGER,
--   `createdAt` VARCHAR(60),
--   `updatedAt` VARCHAR(60),
--   PRIMARY KEY (`id`)
-- );


-- -- ---
-- -- Table 'Photos'
-- --
-- -- ---

-- DROP TABLE IF EXISTS `photos`;

-- CREATE TABLE `photos` (
--  `id` INTEGER AUTO_INCREMENT,
--  `url` VARCHAR(250),
--  `event` INTEGER,
--  `createdAt` VARCHAR(60),
--  `updatedAt` VARCHAR(60),
--  PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Foreign Keys
-- -- ---

-- ALTER TABLE `itemlists` ADD FOREIGN KEY (eventId) REFERENCES `events` (`id`);
-- ALTER TABLE `reminders` ADD FOREIGN KEY (eventId) REFERENCES `events` (`id`);
-- ALTER TABLE `photos` ADD FOREIGN KEY (event) REFERENCES `events` (`id`);

-- -- ---
-- -- Table Properties
-- -- ---

-- -- ALTER TABLE `events` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- -- ALTER TABLE `itemlists` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- -- ---
-- -- Test Data
-- -- ---

-- -- INSERT INTO `events` (`id`,`name`,`where`,`when`,`createdAt`,`updatedAt`) VALUES
-- -- ('','','','','','');
-- -- INSERT INTO `itemlists` (`id`,`item`,`owner`,`cost`,`event`,`createdAt`,`updatedAt`) VALUES
-- -- ('','','','','','','');