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
  `eventId` INTEGER NULL DEFAULT NULL,
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
  `eventId` INTEGER NULL DEFAULT NULL,
  `createdAt` VARCHAR(40) NULL DEFAULT NULL,
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
  `eventId` INTEGER NULL DEFAULT NULL,
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
  `email` VARCHAR(40) NULL DEFAULT NULL,
  `userName` VARCHAR(30) NULL DEFAULT NULL,
  `phoneNumber` VARCHAR(20) NULL DEFAULT NULL,
  `password` VARCHAR(40) NULL DEFAULT NULL,
  `createdAt` VARCHAR(60) NULL DEFAULT NULL,
  `updatedAt` VARCHAR(60) NULL DEFAULT NULL,
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
  `createdAt` VARCHAR(60) NULL DEFAULT NULL,
  `updatedAt` VARCHAR(60) NULL DEFAULT NULL,
  `eventId` INTEGER NULL DEFAULT NULL,
  `userId` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users_events'
-- Joint table
-- ---

DROP TABLE IF EXISTS `invites`;

CREATE TABLE `invites` (
  `id` INTEGER AUTO_INCREMENT,
  `userId` INTEGER NULL DEFAULT NULL,
  `eventId` INTEGER NULL DEFAULT NULL,
  `admin` BOOLEAN NOT NULL DEFAULT 0,
  `invitePermission` BOOLEAN NOT NULL DEFAULT 0,
  `interested` BOOLEAN NOT NULL DEFAULT 0,
  `interestedResponded` BOOLEAN NOT NULL DEFAULT 0,
  `going` BOOLEAN NOT NULL DEFAULT 0,
  `goingResponded` BOOLEAN NOT NULL DEFAULT 0,
  `createdAt` VARCHAR(60) NULL DEFAULT NULL,
  `updatedAt` VARCHAR(60) NULL DEFAULT NULL,
  UNIQUE `user_event`(`userId`, `eventId`),
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `items` ADD FOREIGN KEY (eventId) REFERENCES `events` (`id`);
ALTER TABLE `reminders` ADD FOREIGN KEY (eventId) REFERENCES `events` (`id`);
ALTER TABLE `photos` ADD FOREIGN KEY (eventId) REFERENCES `events` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (eventId) REFERENCES `events` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (userId) REFERENCES `users` (`id`);
ALTER TABLE `invites` ADD FOREIGN KEY (userId) REFERENCES `users` (`id`);
ALTER TABLE `invites` ADD FOREIGN KEY (eventId) REFERENCES `events` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `events` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `items` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `reminders` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `invites` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `events` (`id`,`name`,`where`,`when`,`createdAt`,`updatedAt`) VALUES
-- ('','','','','','');
-- INSERT INTO `items` (`id`,`item`,`owner`,`cost`,`createdAt`,`updatedAt`,`eventId`) VALUES
-- ('','','','','','','');
-- INSERT INTO `reminders` (`id`,`phoneNumber`,`msg`,`when`,`updatedAt`,`eventId`,`createdAt`) VALUES
-- ('','','','','','','');
-- INSERT INTO `photos` (`id`,`url `,`createdAt`,`updatedAt`,`eventId`) VALUES
-- ('','','','','');
-- INSERT INTO `users` (`id`,`name`,`email`,`userName`,`phoneNumber`,`password`) VALUES
-- ('','','','','','');
-- INSERT INTO `messages` (`id`,`message`,`eventId`,`userId`) VALUES
-- ('','','','');
-- INSERT INTO `users_events` (`id`,`userId`,`eventId`) VALUES
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