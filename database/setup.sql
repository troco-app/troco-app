-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.33 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para troco_base
DROP DATABASE IF EXISTS `troco_base`;
CREATE DATABASE IF NOT EXISTS `troco_base` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `troco_base`;

-- Volcando estructura para tabla troco_base.category
DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(150) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla troco_base.category: ~11 rows (aproximadamente)
DELETE FROM `category`;
INSERT INTO `category` (`id`, `category_name`, `createdAt`, `modified_at`) VALUES
	(1, 'Retro Computers', '2023-06-14 16:47:33', '2023-06-14 16:47:33'),
	(2, 'Vintage Consoles', '2023-06-14 16:47:33', '2023-06-14 16:47:33'),
	(3, 'Retro Televisions', '2023-06-14 16:47:33', '2023-06-14 16:47:33'),
	(4, 'Vintage Audio Equipment', '2023-06-14 16:47:33', '2023-06-14 16:47:33'),
	(5, 'Retro Cameras', '2023-06-14 16:47:33', '2023-06-14 16:47:33'),
	(6, 'Vintage Mobile Phones', '2023-06-14 16:47:33', '2023-06-14 16:47:33'),
	(7, 'Retro Gaming Accessories', '2023-06-14 16:47:33', '2023-06-14 16:47:33'),
	(8, 'Vintage Radios', '2023-06-14 16:47:33', '2023-06-14 16:47:33'),
	(9, 'Retro Calculators', '2023-06-14 16:47:33', '2023-06-14 16:47:33'),
	(10, 'Vintage Watches & Clocks', '2023-06-14 16:47:33', '2023-06-14 16:47:33'),
	(11, 'Retro Office Equipment', '2023-06-14 16:47:33', '2023-06-14 16:47:33');

-- Volcando estructura para tabla troco_base.deals
DROP TABLE IF EXISTS `deals`;
CREATE TABLE IF NOT EXISTS `deals` (
  `id` char(36) NOT NULL,
  `buyer_id` char(36) NOT NULL,
  `seller_id` char(36) NOT NULL,
  `status` enum('pending','accepted','rejected') NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `buyer_id` (`buyer_id`),
  KEY `seller_id` (`seller_id`),
  CONSTRAINT `deals_ibfk_1` FOREIGN KEY (`buyer_id`) REFERENCES `users` (`id`),
  CONSTRAINT `deals_ibfk_2` FOREIGN KEY (`seller_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla troco_base.deals: ~4 rows (aproximadamente)
DELETE FROM `deals`;
INSERT INTO `deals` (`id`, `buyer_id`, `seller_id`, `status`, `createdAt`, `modified_at`) VALUES
	('3f731a16-be7c-4d15-8a7e-2639cb1f01c8', 'f2e1afd4-c264-4126-80bf-f6731e826121', '707a25ee-a49a-4e4f-90df-a19eb3041794', 'accepted', '2023-08-13 15:50:38', '2023-08-13 16:02:33'),
	('4699d6e4-4428-4231-a453-62d1b79b9c0f', 'ec59090e-c881-4c47-ac64-1bca2e448050', '707a25ee-a49a-4e4f-90df-a19eb3041794', 'accepted', '2023-08-12 16:01:05', '2023-08-12 16:05:01'),
	('a69b3080-e614-4eea-9fff-377d20674897', '51ebb75a-7077-446c-8723-872e10a24426', '707a25ee-a49a-4e4f-90df-a19eb3041794', 'rejected', '2023-08-13 18:07:13', '2023-08-13 18:10:03'),
	('c6a4c992-84a1-4ae6-89f4-3ee54d82c792', '51ebb75a-7077-446c-8723-872e10a24426', '707a25ee-a49a-4e4f-90df-a19eb3041794', 'accepted', '2023-08-13 17:52:07', '2023-08-13 17:57:20');

-- Volcando estructura para tabla troco_base.deals_exchange_conditions
DROP TABLE IF EXISTS `deals_exchange_conditions`;
CREATE TABLE IF NOT EXISTS `deals_exchange_conditions` (
  `id` char(36) NOT NULL,
  `deal_id` char(36) NOT NULL,
  `street` varchar(255) NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL,
  `postal_code` varchar(20) NOT NULL,
  `exchange_date_time` timestamp NOT NULL,
  `exchange_comment` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `deal_id` (`deal_id`),
  CONSTRAINT `deals_exchange_conditions_ibfk_1` FOREIGN KEY (`deal_id`) REFERENCES `deals` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla troco_base.deals_exchange_conditions: ~2 rows (aproximadamente)
DELETE FROM `deals_exchange_conditions`;
INSERT INTO `deals_exchange_conditions` (`id`, `deal_id`, `street`, `city`, `state`, `country`, `postal_code`, `exchange_date_time`, `exchange_comment`, `createdAt`, `modified_at`) VALUES
	('b1d9052e-504c-4618-9300-7919c6faaf73', 'c6a4c992-84a1-4ae6-89f4-3ee54d82c792', 'Calle paseo de los tristes', 'Granada', 'Granada', 'España', '18900', '2023-08-13 17:58:00', 'Ire con un clavel en la solapa', '2023-08-13 17:57:20', '2023-08-13 17:57:20'),
	('ff1cf336-8cda-41d8-8f46-2fac9ba34bb4', '3f731a16-be7c-4d15-8a7e-2639cb1f01c8', 'Paseo de Los Tristes 1', 'Granada', 'Andalucia', 'España', '18005', '2023-08-13 16:03:00', 'Iré de rojo', '2023-08-13 16:02:34', '2023-08-13 16:02:34');

-- Volcando estructura para tabla troco_base.deals_ratings
DROP TABLE IF EXISTS `deals_ratings`;
CREATE TABLE IF NOT EXISTS `deals_ratings` (
  `id` char(36) NOT NULL,
  `deal_id` char(36) NOT NULL,
  `userid` char(36) NOT NULL,
  `rating` decimal(10,0) NOT NULL,
  `rating_comment` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `deal_id` (`deal_id`),
  KEY `userid` (`userid`),
  CONSTRAINT `deals_ratings_ibfk_1` FOREIGN KEY (`deal_id`) REFERENCES `deals` (`id`),
  CONSTRAINT `deals_ratings_ibfk_2` FOREIGN KEY (`userid`) REFERENCES `users` (`id`),
  CONSTRAINT `deals_ratings_chk_1` CHECK (((`rating` >= 1) and (`rating` <= 5)))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla troco_base.deals_ratings: ~3 rows (aproximadamente)
DELETE FROM `deals_ratings`;
INSERT INTO `deals_ratings` (`id`, `deal_id`, `userid`, `rating`, `rating_comment`, `createdAt`, `modified_at`) VALUES
	('81f92ef7-86d8-41f5-9116-9d0a10659b72', '3f731a16-be7c-4d15-8a7e-2639cb1f01c8', 'f2e1afd4-c264-4126-80bf-f6731e826121', 4, 'Los productos estaban genial pero Simon de Beauvoir no me quiso firmar un libro. ', '2023-08-13 16:04:25', '2023-08-13 16:04:25'),
	('87f7dc39-bb6f-4095-bfe0-cba4f9413311', 'c6a4c992-84a1-4ae6-89f4-3ee54d82c792', '51ebb75a-7077-446c-8723-872e10a24426', 5, ' Me flipa mi nuevo reloj, Gracias Simon fuiste muy maja en todo momento. ', '2023-08-13 18:14:06', '2023-08-13 18:14:06'),
	('bbd902e6-9f33-4342-be28-221c1849ba54', '3f731a16-be7c-4d15-8a7e-2639cb1f01c8', '707a25ee-a49a-4e4f-90df-a19eb3041794', 2, 'La tele estaba peor de lo que decia en la web', '2023-08-13 16:05:42', '2023-08-13 16:05:42');

-- Volcando estructura para tabla troco_base.deal_items
DROP TABLE IF EXISTS `deal_items`;
CREATE TABLE IF NOT EXISTS `deal_items` (
  `id` char(36) NOT NULL,
  `deal_id` char(36) NOT NULL,
  `item_id` char(36) NOT NULL,
  `owner_id` char(36) NOT NULL,
  `type` enum('offered','requested') NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `deal_id` (`deal_id`),
  KEY `item_id` (`item_id`),
  KEY `owner_id` (`owner_id`),
  CONSTRAINT `deal_items_ibfk_1` FOREIGN KEY (`deal_id`) REFERENCES `deals` (`id`),
  CONSTRAINT `deal_items_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`),
  CONSTRAINT `deal_items_ibfk_3` FOREIGN KEY (`owner_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla troco_base.deal_items: ~6 rows (aproximadamente)
DELETE FROM `deal_items`;
INSERT INTO `deal_items` (`id`, `deal_id`, `item_id`, `owner_id`, `type`, `createdAt`, `modified_at`) VALUES
	('03ad4949-2ceb-471e-8237-9863d71a643c', 'a69b3080-e614-4eea-9fff-377d20674897', '7afaf1ac-0b00-4200-84eb-db3e5b208745', '707a25ee-a49a-4e4f-90df-a19eb3041794', 'requested', '2023-08-13 18:07:13', '2023-08-13 18:07:13'),
	('6e7f6f60-20c8-4a20-b673-14e8f7814502', '3f731a16-be7c-4d15-8a7e-2639cb1f01c8', '57290e97-96fd-4c7b-babb-24f3cc611678', '707a25ee-a49a-4e4f-90df-a19eb3041794', 'requested', '2023-08-13 15:50:38', '2023-08-13 15:50:38'),
	('b1871d09-9ced-435f-8025-0d9b52efecd3', '3f731a16-be7c-4d15-8a7e-2639cb1f01c8', '78347282-8ad8-4b80-bbeb-0d6629402134', 'f2e1afd4-c264-4126-80bf-f6731e826121', 'offered', '2023-08-13 15:50:38', '2023-08-13 15:50:38'),
	('e40bed5d-b61c-482f-acb4-eebd383e3584', 'a69b3080-e614-4eea-9fff-377d20674897', 'beff4aee-469b-4aad-9977-cd4379c0a45e', '51ebb75a-7077-446c-8723-872e10a24426', 'offered', '2023-08-13 18:07:13', '2023-08-13 18:07:13'),
	('edfa0112-40ee-443c-91f7-212545fb3eb1', 'c6a4c992-84a1-4ae6-89f4-3ee54d82c792', '49eb5ef7-756c-4f2d-9570-fb0dbac6d99e', '51ebb75a-7077-446c-8723-872e10a24426', 'offered', '2023-08-13 17:52:07', '2023-08-13 17:52:07'),
	('edff3eeb-5b5e-4c8e-81e9-8a8537115652', 'c6a4c992-84a1-4ae6-89f4-3ee54d82c792', 'd4e89670-f54d-4b10-bd32-fe92fe4a34b2', '707a25ee-a49a-4e4f-90df-a19eb3041794', 'requested', '2023-08-13 17:52:07', '2023-08-13 17:52:07');

-- Volcando estructura para tabla troco_base.items
DROP TABLE IF EXISTS `items`;
CREATE TABLE IF NOT EXISTS `items` (
  `id` char(36) NOT NULL,
  `name` varchar(150) NOT NULL,
  `description` text NOT NULL,
  `estimated_price` decimal(10,0) DEFAULT NULL,
  `item_condition` enum('not_used','good','ok','damaged','malfunctioning') NOT NULL,
  `status` enum('available','sold','reserved') NOT NULL,
  `category_id` int NOT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `user_id` char(36) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `items_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `items_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla troco_base.items: ~27 rows (aproximadamente)
DELETE FROM `items`;
INSERT INTO `items` (`id`, `name`, `description`, `estimated_price`, `item_condition`, `status`, `category_id`, `is_deleted`, `user_id`, `createdAt`, `modified_at`) VALUES
	('179f6bde-36a7-4612-91ee-e4b4d9ec1fb2', 'Amstrad CPC464', 'The Amstrad CPC 464 was a home computer created and marketed by the British company Amstrad Consumer Plc, which was dedicated to the production and sale of television sets, radios and Hi-Fi, and decided to include computers in its product catalog.\nCPUZilog Z80 A a 4 MHz\nArquitectura8 bits\nROM32 KB\nRAM64 KB\nVRAM0 KB\n', 200, 'damaged', 'available', 1, 0, '3633a9e4-1e59-4af5-9cf7-9abfa03cea1b', '2023-08-13 07:50:25', '2023-08-13 07:50:25'),
	('1912e543-c6b0-4111-bca8-81e3261e80c4', 'Hasselblad 500elx ', '120 medium format manual focus Hasselblad V mount SLR camera released by Hasselblad in 1985. Improved version of the 500EL/M. New features include TTL flash metering, a non-vignetting mirror, and a larger shutter release plate. Metal body available in black or silver finish.\n•	Shutter: In-lens leaf\n•	Continuous shooting: 1.2 fps\n•	ISO range: 16 - 1000\n•	Size: 137 x 119 x 100mm\n•	Weight: 988g\n', 200, 'ok', 'available', 5, 0, '0e0d2925-e34f-491d-bced-2afbdc24fd53', '2023-08-13 07:45:03', '2023-08-13 07:45:03'),
	('1bdf8bdf-6086-461f-bba7-ed6766c1386b', 'Casio Pac-Man Vintage Limited Edition', 'Casio Pac-Man digital quartz watch for men is a very elegant and limited edition digital watch series specially designed by Casio brand.\nMovement : digital quartz\nCase Material : Steel\nCase size : approx. 33 mm × 41 mm\nLanyard : Steel approx. 23 cm adjustable\n', 250, 'ok', 'available', 10, 1, '51ebb75a-7077-446c-8723-872e10a24426', '2023-08-13 17:26:37', '2023-08-13 17:28:40'),
	('1d6ae6dc-305d-41a3-a216-3f4f3a036ad1', 'Olivetti, Lettera 32', 'Splendid light green OLIVETTI LETTER 32 dating from the 1960s; fully functional machine, has very minor signs due to its age that do not compromise enjoyment in the least; the original carrying case shows signs of use and age, I would define it as "used".\nThe Lettera 32 is a portable typewriter produced by Olivetti and marketed starting in 1963. Designed by architect and designer Marcello Nizzoli and conceived as the heir to the Lettera 22, the 32 was very popular with journalists and students and was a great commercial success around the world. the world.\n', 750, 'good', 'available', 11, 0, '77f678a2-4985-42e0-9d34-9c05b0512f87', '2023-08-13 07:57:48', '2023-08-13 07:57:48'),
	('2438f384-4794-4cb8-b1e2-e9cee1fde7dc', 'Yamaha - CA 710', 'A very nice and powerful Yamaha CA-710 in perfect working condition with a very nice front end and a wooden case.', 450, 'good', 'available', 4, 1, '0e0d2925-e34f-491d-bced-2afbdc24fd53', '2023-08-13 08:07:51', '2023-08-13 08:08:01'),
	('3659f8d9-9c4e-4c6d-9606-30824a2d3b2b', '*Commodore 64', 'A classic home computer from the 1980s.', 200, 'good', 'available', 1, 1, '06d27949-94fe-4cc1-b7fe-764d68baa0b5', '2023-06-14 16:47:33', '2023-08-13 07:36:01'),
	('3dd3fbf9-012c-4b1d-8227-69ef97ccfa5f', '*Polaroid Land Camera', 'An instant film camera from the 1970s.', 70, 'damaged', 'available', 5, 1, '0e0d2925-e34f-491d-bced-2afbdc24fd53', '2023-06-14 16:47:33', '2023-08-13 07:45:21'),
	('4469297f-0873-4a3e-a21a-40b67f0d9e6a', 'Sega Game Gear', 'Completely reconditioned Sega Game Gear console, replacement of the SMD ceramic capacitors of the main board and sound card (they never break), thanks to the modification of the LCD screen, the batteries last a long time! In the package you will find: - Console with multifunction LCD screen upgrade (it is a new version also compatible with Master Sistem). SMS games loaded on didactic cards (multigame cards) - New glass screen cover (mounted) Press "START + 1 + 2" to turn on or off the VGA output (on this console there is no VGA output on request, I can add it) see the picture for other features.', 500, 'ok', 'available', 2, 0, '43f2ff55-f4de-4f47-bc87-49c8691e5770', '2023-08-13 08:14:32', '2023-08-13 08:14:32'),
	('49eb5ef7-756c-4f2d-9570-fb0dbac6d99e', 'Casio Pac-Man Vintage Limited Edition', 'Casio Pac-Man digital quartz watch for men is a very elegant and limited edition digital watch series specially designed by Casio brand.\nMovement : digital quartz\nCase Material : Steel\nCase size : approx. 33 mm × 41 mm\nLanyard : Steel approx. 23 cm adjustable\n', 250, 'ok', 'sold', 10, 0, '51ebb75a-7077-446c-8723-872e10a24426', '2023-08-13 17:37:39', '2023-08-13 17:57:20'),
	('57290e97-96fd-4c7b-babb-24f3cc611678', ' Casio Databank 150', 'Brand: CASIO\nModel: CASIO DATABANK150\nPart number: DBC-150\nCase size Approx. 34.4 mm x 48.9 mm\nDial color: black\nCase material: stainless steel. Plastic.\nMovement of the watch: QUARTZ (battery)\nFunctions: day/date, alarm, timer, chronograph, memo, calculator, WORLD TIME, backlight.\nGender: Adult unisex.\nCase: No Papers: No\nArm around: maximum size about 19 cm.\n', 50, 'ok', 'sold', 10, 0, '707a25ee-a49a-4e4f-90df-a19eb3041794', '2023-08-13 08:21:00', '2023-08-13 16:02:34'),
	('580ef729-101b-4c61-ad11-a704bf066b2f', 'Nintendo Nes', 'Console Nintendo Nes with controller and gun no brings cable does not work, is not proven\nNintendo Nes complete. With all documents, manual and original packaging. In very good state of conservation, collector\'s item.\n', 100, 'damaged', 'available', 2, 0, '3633a9e4-1e59-4af5-9cf7-9abfa03cea1b', '2023-08-13 08:11:44', '2023-08-13 08:11:44'),
	('5cad02c6-2f96-4f60-8a39-af71f291192f', 'Loewe Opta - ST226 ', 'Loewe opta radio ST226 con 2 parlantes L06 en buen estado. Funciona bien. Gabinete de madera blanco. 220v. Radio 3,2 kg. Altavoces de 1,9 kg cada uno. bonita combinación vintage.', 500, 'not_used', 'available', 4, 0, '06d27949-94fe-4cc1-b7fe-764d68baa0b5', '2023-08-13 08:05:56', '2023-08-13 08:05:56'),
	('5e7829bb-ce45-4e3c-bea6-fc74ce922852', 'Zeiss Ikon Contaflex', '35mm manual focus SLR camera released by Zeiss Ikon in 1963. It added shutter-priority auto exposure to the earlier Super model. It also supports interchangeable film backs that allow switching mid-roll. Metal body available in silver.\n•	Lens: Carl Zeiss 50mm f2.8 Tessar (4 elements, 3 groups)\n•	Shutter: Synchro Compur leaf, 1s - 1/500s + B\n•	ISO range: 5 - 800\n•	Size: 134 x 88 x 76mm\n•	Weight: 712g\n', 300, 'good', 'available', 5, 0, '0e0d2925-e34f-491d-bced-2afbdc24fd53', '2023-08-13 07:46:35', '2023-08-13 07:46:35'),
	('5f3ba78a-e361-4b76-a67f-c92c16d2aee4', 'Yamaha - CA 710', 'A very nice and powerful Yamaha CA-710 in perfect working condition with a very nice front end and a wooden case.', 350, 'good', 'available', 4, 0, '0e0d2925-e34f-491d-bced-2afbdc24fd53', '2023-08-13 08:08:58', '2023-08-13 08:08:58'),
	('68729088-def5-42cd-ad3a-500141acbb1c', 'Mercedes Büromachinen Werke AG', 'Typewriter, 1920. Iron First half of the 20th century', 1000, 'damaged', 'available', 11, 0, '77f678a2-4985-42e0-9d34-9c05b0512f87', '2023-08-13 07:56:25', '2023-08-13 07:56:25'),
	('78347282-8ad8-4b80-bbeb-0d6629402134', 'Emerson', 'Old television Emerson brand, manufactured in Spain. It works well. The casing opens in one of the parts (see 3rd photo). Measures 31x29 cm	', 350, 'good', 'sold', 3, 0, 'f2e1afd4-c264-4126-80bf-f6731e826121', '2023-08-13 08:03:23', '2023-08-13 16:02:34'),
	('7afaf1ac-0b00-4200-84eb-db3e5b208745', 'Phonola - 5556', 'Splendid Phonola tube radio model 5556 from 1953. Radio working on OM and overhauled (antenna cable not included). The chassis has been cleaned and adjusted, the frequency chain changed and registered. The cabinet shows no particular damage or wear, and has been polished, as have the front mask, dial scale and rear scale. The bulbs have been changed and are working. The canvas has been replaced by a new one. Excellent design object made in Italy in the 1950s.', 200, 'good', 'available', 8, 0, '707a25ee-a49a-4e4f-90df-a19eb3041794', '2023-08-13 08:19:37', '2023-08-13 08:19:37'),
	('83819a45-536a-4520-9a5e-38ca7aa21e79', 'Elka', 'One of a series of models manufactured in communist Bulgaria and exported to the west.  Available in several bright colours. Display is 8 digits, red LED.\n4-function, memory.\n6v (4x AA).\nMain integrated circuit - Rockwell A1030ME.\n70 mm x 135 mm x 30 mm (2.75" x 5.3" x 1.25").\n1973. Made in Bulgaria.\n', 50, 'good', 'available', 9, 0, '06d27949-94fe-4cc1-b7fe-764d68baa0b5', '2023-08-13 07:35:33', '2023-08-13 07:35:33'),
	('a0b84ee9-81d3-4ee7-8a2c-306d9ef422c3', 'Elbe', 'Antique ELBE 12 inch TV, ideal for retro vintage decorations', 200, 'malfunctioning', 'available', 1, 0, 'f2e1afd4-c264-4126-80bf-f6731e826121', '2023-08-13 08:01:48', '2023-08-13 08:01:48'),
	('b5028dba-7e4c-4f09-9828-f8d125718967', 'Neo Geo', 'Neo Geo AES console Japanese version. You need a power converter to use it. In very good condition, console and controller with slight marks of use. Tested and checked everything, working perfectly image and sound as well as controller. Serial matching in box, console and warranty card. The console and controller still has the serigraphies and rubber bands. Box without sunfade, or breaks, corks without breaks or dirt. Original plastics included.', 500, 'good', 'available', 2, 0, '707a25ee-a49a-4e4f-90df-a19eb3041794', '2023-08-13 18:25:55', '2023-08-13 18:25:55'),
	('b640ce74-aa88-4a76-8d30-f848b0f50d4b', 'McIntosh', 'Apple Macintosh SE/30 - works fine! with original keyboard and mouse and programs installed on the hard drive', 300, 'good', 'available', 1, 0, '43f2ff55-f4de-4f47-bc87-49c8691e5770', '2023-08-13 07:53:34', '2023-08-13 07:53:34'),
	('beff4aee-469b-4aad-9977-cd4379c0a45e', 'Mega Drive', 'Sega Mega Drive 16-bit with power supply and video cable as the title suggests. Reads cartridges without problems as seen in the picture. Includes joystick.\n', 200, 'good', 'available', 2, 0, '51ebb75a-7077-446c-8723-872e10a24426', '2023-08-13 18:03:30', '2023-08-13 18:10:03'),
	('c11da389-cc48-4612-b2d8-b51c955e1e87', 'Akat 1', 'This is the AKAT-1, a Polish made analog computer from the 1960’s which apparently was rumored to have been used as a synth on Beatles recordings. This approach offered speed and acceptable accuracy without the complexity of digital logic.', 500, 'malfunctioning', 'available', 1, 0, '3633a9e4-1e59-4af5-9cf7-9abfa03cea1b', '2023-08-13 07:48:57', '2023-08-13 07:48:57'),
	('ccc38b2a-48a5-4c81-9a85-d54b7105d541', 'Citizen CX 55', 'Brand new item from the back of a stationery store that closed years ago. Includes the old batteries that as shown are damaged and only serve as a collectible item. There is a roll of printing paper inside the calculator. The calculator has been tested. It may not be functional if the paper roll is not installed, but this is only an assumption, it could also be damaged, buyer assumes such condition.', 30, 'good', 'available', 9, 0, '06d27949-94fe-4cc1-b7fe-764d68baa0b5', '2023-08-13 07:37:24', '2023-08-13 07:37:24'),
	('d4788b72-a1ba-44f5-a961-bbd4f152bf5f', 'Commodore 64', 'Icon of the home computers of the \'80s, the Commodore 64 was the best seller and took a whole generation to their first steps in the world of computers and games. For those who have not experienced it: you are in front of part of history. For the nostalgic: come in and remember.\nManufacturing Period: August 1982- April 1994\nCPU: MOS TEchnology 6510 0.985 MHz (PAL) / 1.023 MHz (NTSC)\nRAM: 64kB RAM+20kb ROM\nVideo system: VIC-II (320 × 200, 16 colors, sprites, raster,switch)\nSound System: SID 6581 (3× Oscillators(voices), 4× Waveforms). Capable of 9 octaves.\nOperating System: Commodore KERNAL/Commodore BASIC 2.0\nKeyboard: 66 Full-stroke keys + 4 special function keys.\nText Modes: 40 columns x 25 lines\nGraphic modes: various, most widely used: 320 x 200\nSize/Weight: 40.4 (W) x 21.6 (D) x 7.5 (H) cm / 1820 g\n', 100, 'not_used', 'available', 1, 0, '43f2ff55-f4de-4f47-bc87-49c8691e5770', '2023-08-13 07:52:52', '2023-08-13 07:52:52'),
	('d4e89670-f54d-4b10-bd32-fe92fe4a34b2', 'Seiko - Calculator - C153-5007 - Man - 1970-1979', 'Seiko Calculator reference C153-5007, everything on the watch is original. The battery is new.\nThe watch measures 35x42 mm and 11 mm thick.\nThe watch is working.\nThe bracelet is 22 cm long.\n', 80, 'not_used', 'sold', 10, 0, '707a25ee-a49a-4e4f-90df-a19eb3041794', '2023-08-13 08:21:39', '2023-08-13 17:57:20'),
	('fd96ceb7-f974-4244-8862-8606278fa7cc', 'Vanguard', 'Retro TV made in the 60\'s. Authentic Vanguard bought by my grandparents. With its original antenna. Ivory and dark red color with gloss effect. It has some age marks (discoloration, small scratches) that contribute to its charm. Well preserved, no major defects. Non-functional, decorative - perfect for retro style lovers: nostalgic decoration, vintage cafe/bar, window display, stage/set design.', 400, 'good', 'available', 3, 0, 'f2e1afd4-c264-4126-80bf-f6731e826121', '2023-08-13 08:00:32', '2023-08-13 08:00:32');

-- Volcando estructura para tabla troco_base.item_images
DROP TABLE IF EXISTS `item_images`;
CREATE TABLE IF NOT EXISTS `item_images` (
  `id` char(36) NOT NULL,
  `imageURL` varchar(300) NOT NULL,
  `item_id` char(36) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `item_id` (`item_id`),
  CONSTRAINT `item_images_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla troco_base.item_images: ~94 rows (aproximadamente)
DELETE FROM `item_images`;
INSERT INTO `item_images` (`id`, `imageURL`, `item_id`, `createdAt`, `modified_at`) VALUES
	('039fbe86-5162-43eb-802b-51e6220c89d7', '/images/580ef729-101b-4c61-ad11-a704bf066b2f/039fbe86-5162-43eb-802b-51e6220c89d7.webp', '580ef729-101b-4c61-ad11-a704bf066b2f', '2023-08-13 08:11:44', '2023-08-13 08:11:44'),
	('08696e1d-1251-4e2c-81f2-11583f1e2a18', '/images/5f3ba78a-e361-4b76-a67f-c92c16d2aee4/08696e1d-1251-4e2c-81f2-11583f1e2a18.webp', '5f3ba78a-e361-4b76-a67f-c92c16d2aee4', '2023-08-13 08:08:58', '2023-08-13 08:08:58'),
	('130e63ab-ee16-42ee-980d-fb6003981cfb', '/images/7afaf1ac-0b00-4200-84eb-db3e5b208745/130e63ab-ee16-42ee-980d-fb6003981cfb.webp', '7afaf1ac-0b00-4200-84eb-db3e5b208745', '2023-08-13 08:19:38', '2023-08-13 08:19:38'),
	('156225be-d9ad-45f2-acff-ec8aaa5c8359', '/images/5e7829bb-ce45-4e3c-bea6-fc74ce922852/156225be-d9ad-45f2-acff-ec8aaa5c8359.webp', '5e7829bb-ce45-4e3c-bea6-fc74ce922852', '2023-08-13 07:46:35', '2023-08-13 07:46:35'),
	('1904d7d9-11ba-4fb0-91be-50dc12bcbf6a', '/images/ccc38b2a-48a5-4c81-9a85-d54b7105d541/1904d7d9-11ba-4fb0-91be-50dc12bcbf6a.webp', 'ccc38b2a-48a5-4c81-9a85-d54b7105d541', '2023-08-13 07:37:24', '2023-08-13 07:37:24'),
	('1c2544a0-2c64-4dc7-8268-1d2e02e77bea', '/images/1912e543-c6b0-4111-bca8-81e3261e80c4/1c2544a0-2c64-4dc7-8268-1d2e02e77bea.webp', '1912e543-c6b0-4111-bca8-81e3261e80c4', '2023-08-13 07:45:03', '2023-08-13 07:45:03'),
	('1f24de8b-6ce9-4522-a681-9df387fed292', '/images/4469297f-0873-4a3e-a21a-40b67f0d9e6a/1f24de8b-6ce9-4522-a681-9df387fed292.webp', '4469297f-0873-4a3e-a21a-40b67f0d9e6a', '2023-08-13 08:14:32', '2023-08-13 08:14:32'),
	('1f4820fe-9381-4ec6-9884-f85b0c40d35f', '/images/57290e97-96fd-4c7b-babb-24f3cc611678/1f4820fe-9381-4ec6-9884-f85b0c40d35f.webp', '57290e97-96fd-4c7b-babb-24f3cc611678', '2023-08-13 08:21:00', '2023-08-13 08:21:00'),
	('2384785e-cbeb-4533-902f-945e435b791f', '/images/5e7829bb-ce45-4e3c-bea6-fc74ce922852/2384785e-cbeb-4533-902f-945e435b791f.webp', '5e7829bb-ce45-4e3c-bea6-fc74ce922852', '2023-08-13 07:46:35', '2023-08-13 07:46:35'),
	('23d6aa52-58de-4824-bd0e-dc9bc441827d', '/images/7afaf1ac-0b00-4200-84eb-db3e5b208745/23d6aa52-58de-4824-bd0e-dc9bc441827d.webp', '7afaf1ac-0b00-4200-84eb-db3e5b208745', '2023-08-13 08:19:38', '2023-08-13 08:19:38'),
	('247e427a-07a2-4836-9f5c-324057724266', '/images/b5028dba-7e4c-4f09-9828-f8d125718967/247e427a-07a2-4836-9f5c-324057724266.webp', 'b5028dba-7e4c-4f09-9828-f8d125718967', '2023-08-13 18:25:55', '2023-08-13 18:25:55'),
	('27a0cc7c-6926-458a-ba76-96941ec3f6ab', '/images/1bdf8bdf-6086-461f-bba7-ed6766c1386b/27a0cc7c-6926-458a-ba76-96941ec3f6ab.webp', '1bdf8bdf-6086-461f-bba7-ed6766c1386b', '2023-08-13 17:26:37', '2023-08-13 17:26:37'),
	('2a71e9b6-0ab9-4603-a8c3-698f970611f4', '/images/b5028dba-7e4c-4f09-9828-f8d125718967/2a71e9b6-0ab9-4603-a8c3-698f970611f4.webp', 'b5028dba-7e4c-4f09-9828-f8d125718967', '2023-08-13 18:25:55', '2023-08-13 18:25:55'),
	('3109c242-ee5b-49f9-8a28-59639537b0fd', '/images/d4788b72-a1ba-44f5-a961-bbd4f152bf5f/3109c242-ee5b-49f9-8a28-59639537b0fd.webp', 'd4788b72-a1ba-44f5-a961-bbd4f152bf5f', '2023-08-13 07:52:53', '2023-08-13 07:52:53'),
	('32069464-0bd9-40c2-bada-58d9241db133', '/images/a0b84ee9-81d3-4ee7-8a2c-306d9ef422c3/32069464-0bd9-40c2-bada-58d9241db133.webp', 'a0b84ee9-81d3-4ee7-8a2c-306d9ef422c3', '2023-08-13 08:01:48', '2023-08-13 08:01:48'),
	('35290883-220e-4515-a45f-5c35bd0beeb6', '/images/83819a45-536a-4520-9a5e-38ca7aa21e79/35290883-220e-4515-a45f-5c35bd0beeb6.webp', '83819a45-536a-4520-9a5e-38ca7aa21e79', '2023-08-13 07:35:34', '2023-08-13 07:35:34'),
	('3623fc25-809c-4d15-a304-08b0923e8efa', '/images/5cad02c6-2f96-4f60-8a39-af71f291192f/3623fc25-809c-4d15-a304-08b0923e8efa.webp', '5cad02c6-2f96-4f60-8a39-af71f291192f', '2023-08-13 08:05:57', '2023-08-13 08:05:57'),
	('392047ae-035b-4e00-b795-1dd707a3043f', '/images/beff4aee-469b-4aad-9977-cd4379c0a45e/392047ae-035b-4e00-b795-1dd707a3043f.webp', 'beff4aee-469b-4aad-9977-cd4379c0a45e', '2023-08-13 18:03:30', '2023-08-13 18:03:30'),
	('3d22a693-5db4-4cb4-83e0-279055b78690', '/images/b5028dba-7e4c-4f09-9828-f8d125718967/3d22a693-5db4-4cb4-83e0-279055b78690.webp', 'b5028dba-7e4c-4f09-9828-f8d125718967', '2023-08-13 18:25:55', '2023-08-13 18:25:55'),
	('3dbcc920-42e8-47b4-9312-8da26d82c526', '/images/49eb5ef7-756c-4f2d-9570-fb0dbac6d99e/3dbcc920-42e8-47b4-9312-8da26d82c526.webp', '49eb5ef7-756c-4f2d-9570-fb0dbac6d99e', '2023-08-13 17:37:39', '2023-08-13 17:37:39'),
	('3eb91061-8685-4c82-80bc-b63b0241ab56', '/images/5cad02c6-2f96-4f60-8a39-af71f291192f/3eb91061-8685-4c82-80bc-b63b0241ab56.webp', '5cad02c6-2f96-4f60-8a39-af71f291192f', '2023-08-13 08:05:56', '2023-08-13 08:05:56'),
	('406a5ed3-4e97-437d-bf7e-345b22043b61', '/images/beff4aee-469b-4aad-9977-cd4379c0a45e/406a5ed3-4e97-437d-bf7e-345b22043b61.webp', 'beff4aee-469b-4aad-9977-cd4379c0a45e', '2023-08-13 18:03:30', '2023-08-13 18:03:30'),
	('42444105-0bc1-4fce-88de-761f75520647', '/images/83819a45-536a-4520-9a5e-38ca7aa21e79/42444105-0bc1-4fce-88de-761f75520647.webp', '83819a45-536a-4520-9a5e-38ca7aa21e79', '2023-08-13 07:35:33', '2023-08-13 07:35:33'),
	('42e88606-7f10-418e-ba5a-64383150d6b9', '/images/580ef729-101b-4c61-ad11-a704bf066b2f/42e88606-7f10-418e-ba5a-64383150d6b9.webp', '580ef729-101b-4c61-ad11-a704bf066b2f', '2023-08-13 08:11:45', '2023-08-13 08:11:45'),
	('46c35601-5137-43a1-9462-1d41de6897fb', '/images/b5028dba-7e4c-4f09-9828-f8d125718967/46c35601-5137-43a1-9462-1d41de6897fb.webp', 'b5028dba-7e4c-4f09-9828-f8d125718967', '2023-08-13 18:25:55', '2023-08-13 18:25:55'),
	('47943211-a822-48a7-823d-ab1232705d47', '/images/1bdf8bdf-6086-461f-bba7-ed6766c1386b/47943211-a822-48a7-823d-ab1232705d47.webp', '1bdf8bdf-6086-461f-bba7-ed6766c1386b', '2023-08-13 17:26:37', '2023-08-13 17:26:37'),
	('496bea36-4b7e-46bf-878e-63edf9ad327d', '/images/d4788b72-a1ba-44f5-a961-bbd4f152bf5f/496bea36-4b7e-46bf-878e-63edf9ad327d.webp', 'd4788b72-a1ba-44f5-a961-bbd4f152bf5f', '2023-08-13 07:52:52', '2023-08-13 07:52:52'),
	('4a0437ac-b3e0-4920-8ee1-d9e42fb9b085', '/images/d4e89670-f54d-4b10-bd32-fe92fe4a34b2/4a0437ac-b3e0-4920-8ee1-d9e42fb9b085.webp', 'd4e89670-f54d-4b10-bd32-fe92fe4a34b2', '2023-08-13 08:21:39', '2023-08-13 08:21:39'),
	('4ac78f91-b772-4fe6-88bc-447c2b878265', '/images/78347282-8ad8-4b80-bbeb-0d6629402134/4ac78f91-b772-4fe6-88bc-447c2b878265.webp', '78347282-8ad8-4b80-bbeb-0d6629402134', '2023-08-13 08:03:23', '2023-08-13 08:03:23'),
	('4c4c9e82-75b2-4875-bbda-71c402c22c42', '/images/d4e89670-f54d-4b10-bd32-fe92fe4a34b2/4c4c9e82-75b2-4875-bbda-71c402c22c42.webp', 'd4e89670-f54d-4b10-bd32-fe92fe4a34b2', '2023-08-13 08:21:39', '2023-08-13 08:21:39'),
	('4e236ca6-b44f-48bb-b7b3-aff6563245cf', '/images/5cad02c6-2f96-4f60-8a39-af71f291192f/4e236ca6-b44f-48bb-b7b3-aff6563245cf.webp', '5cad02c6-2f96-4f60-8a39-af71f291192f', '2023-08-13 08:05:56', '2023-08-13 08:05:56'),
	('50568404-ae29-4a37-87f6-7e7d0c81b077', '/images/1d6ae6dc-305d-41a3-a216-3f4f3a036ad1/50568404-ae29-4a37-87f6-7e7d0c81b077.webp', '1d6ae6dc-305d-41a3-a216-3f4f3a036ad1', '2023-08-13 07:57:48', '2023-08-13 07:57:48'),
	('50f5d08e-90f1-4980-9b57-52ac385e49d5', '/images/179f6bde-36a7-4612-91ee-e4b4d9ec1fb2/50f5d08e-90f1-4980-9b57-52ac385e49d5.webp', '179f6bde-36a7-4612-91ee-e4b4d9ec1fb2', '2023-08-13 07:50:25', '2023-08-13 07:50:25'),
	('521ce70d-280c-48e6-a85f-d4cc8ddcedf9', '/images/5e7829bb-ce45-4e3c-bea6-fc74ce922852/521ce70d-280c-48e6-a85f-d4cc8ddcedf9.webp', '5e7829bb-ce45-4e3c-bea6-fc74ce922852', '2023-08-13 07:46:35', '2023-08-13 07:46:35'),
	('5235e6f0-643e-4383-ab7d-a7fa8f8e6f39', '/images/580ef729-101b-4c61-ad11-a704bf066b2f/5235e6f0-643e-4383-ab7d-a7fa8f8e6f39.webp', '580ef729-101b-4c61-ad11-a704bf066b2f', '2023-08-13 08:11:45', '2023-08-13 08:11:45'),
	('540eaa4e-dc43-4982-a08d-88371f7684fb', '/images/49eb5ef7-756c-4f2d-9570-fb0dbac6d99e/540eaa4e-dc43-4982-a08d-88371f7684fb.webp', '49eb5ef7-756c-4f2d-9570-fb0dbac6d99e', '2023-08-13 17:37:39', '2023-08-13 17:37:39'),
	('54252bf1-0483-4cf6-abb0-9110c5f585c6', '/images/fd96ceb7-f974-4244-8862-8606278fa7cc/54252bf1-0483-4cf6-abb0-9110c5f585c6.webp', 'fd96ceb7-f974-4244-8862-8606278fa7cc', '2023-08-13 08:00:32', '2023-08-13 08:00:32'),
	('571c375b-fe9d-4d7e-9415-3de02ba8cf41', '/images/179f6bde-36a7-4612-91ee-e4b4d9ec1fb2/571c375b-fe9d-4d7e-9415-3de02ba8cf41.webp', '179f6bde-36a7-4612-91ee-e4b4d9ec1fb2', '2023-08-13 07:50:25', '2023-08-13 07:50:25'),
	('5daa6766-c350-4186-b87b-db099c16b5d4', '/images/fd96ceb7-f974-4244-8862-8606278fa7cc/5daa6766-c350-4186-b87b-db099c16b5d4.webp', 'fd96ceb7-f974-4244-8862-8606278fa7cc', '2023-08-13 08:00:33', '2023-08-13 08:00:33'),
	('614432d1-1d81-47c2-846d-a468513949d9', '/images/b640ce74-aa88-4a76-8d30-f848b0f50d4b/614432d1-1d81-47c2-846d-a468513949d9.webp', 'b640ce74-aa88-4a76-8d30-f848b0f50d4b', '2023-08-13 07:53:34', '2023-08-13 07:53:34'),
	('6363634f-9746-4f8d-a7c8-f13bb01e2e72', '/images/ccc38b2a-48a5-4c81-9a85-d54b7105d541/6363634f-9746-4f8d-a7c8-f13bb01e2e72.webp', 'ccc38b2a-48a5-4c81-9a85-d54b7105d541', '2023-08-13 07:37:24', '2023-08-13 07:37:24'),
	('6ccd0429-476d-410f-b75e-da30ff37ee3d', '/images/179f6bde-36a7-4612-91ee-e4b4d9ec1fb2/6ccd0429-476d-410f-b75e-da30ff37ee3d.webp', '179f6bde-36a7-4612-91ee-e4b4d9ec1fb2', '2023-08-13 07:50:25', '2023-08-13 07:50:25'),
	('74213cd6-59ba-4ec9-9ffb-06944f63dbd1', '/images/beff4aee-469b-4aad-9977-cd4379c0a45e/74213cd6-59ba-4ec9-9ffb-06944f63dbd1.webp', 'beff4aee-469b-4aad-9977-cd4379c0a45e', '2023-08-13 18:03:30', '2023-08-13 18:03:30'),
	('749c0864-e706-477c-b442-04a8b9b2bcbd', '/images/beff4aee-469b-4aad-9977-cd4379c0a45e/749c0864-e706-477c-b442-04a8b9b2bcbd.webp', 'beff4aee-469b-4aad-9977-cd4379c0a45e', '2023-08-13 18:03:30', '2023-08-13 18:03:30'),
	('75c00aee-a916-4d7b-ae0a-09b39ba06b1e', '/images/68729088-def5-42cd-ad3a-500141acbb1c/75c00aee-a916-4d7b-ae0a-09b39ba06b1e.webp', '68729088-def5-42cd-ad3a-500141acbb1c', '2023-08-13 07:56:25', '2023-08-13 07:56:25'),
	('7ac054f1-c8be-41b5-a5c4-3d75ca71ecc7', '/images/68729088-def5-42cd-ad3a-500141acbb1c/7ac054f1-c8be-41b5-a5c4-3d75ca71ecc7.webp', '68729088-def5-42cd-ad3a-500141acbb1c', '2023-08-13 07:56:25', '2023-08-13 07:56:25'),
	('7cb63be6-0e05-497c-babd-d0e95b8f5148', '/images/5f3ba78a-e361-4b76-a67f-c92c16d2aee4/7cb63be6-0e05-497c-babd-d0e95b8f5148.webp', '5f3ba78a-e361-4b76-a67f-c92c16d2aee4', '2023-08-13 08:08:58', '2023-08-13 08:08:58'),
	('819a5cb0-f9fe-4bc0-9ebe-724e58095b20', '/images/c11da389-cc48-4612-b2d8-b51c955e1e87/819a5cb0-f9fe-4bc0-9ebe-724e58095b20.webp', 'c11da389-cc48-4612-b2d8-b51c955e1e87', '2023-08-13 07:48:57', '2023-08-13 07:48:57'),
	('83ac45f3-9da3-439b-b704-d238221f2bda', '/images/d4e89670-f54d-4b10-bd32-fe92fe4a34b2/83ac45f3-9da3-439b-b704-d238221f2bda.webp', 'd4e89670-f54d-4b10-bd32-fe92fe4a34b2', '2023-08-13 08:21:39', '2023-08-13 08:21:39'),
	('851b5e04-2302-4869-bf1f-14f6dc7ac1eb', '/images/ccc38b2a-48a5-4c81-9a85-d54b7105d541/851b5e04-2302-4869-bf1f-14f6dc7ac1eb.webp', 'ccc38b2a-48a5-4c81-9a85-d54b7105d541', '2023-08-13 07:37:24', '2023-08-13 07:37:24'),
	('88bee714-1271-4d21-ab5d-f1fbe878e197', '/images/5e7829bb-ce45-4e3c-bea6-fc74ce922852/88bee714-1271-4d21-ab5d-f1fbe878e197.webp', '5e7829bb-ce45-4e3c-bea6-fc74ce922852', '2023-08-13 07:46:35', '2023-08-13 07:46:35'),
	('891ede1a-831e-4c19-af35-ee294af23122', '/images/5f3ba78a-e361-4b76-a67f-c92c16d2aee4/891ede1a-831e-4c19-af35-ee294af23122.webp', '5f3ba78a-e361-4b76-a67f-c92c16d2aee4', '2023-08-13 08:08:59', '2023-08-13 08:08:59'),
	('8c870095-be59-4758-ae3b-006c9962c16e', '/images/a0b84ee9-81d3-4ee7-8a2c-306d9ef422c3/8c870095-be59-4758-ae3b-006c9962c16e.webp', 'a0b84ee9-81d3-4ee7-8a2c-306d9ef422c3', '2023-08-13 08:01:48', '2023-08-13 08:01:48'),
	('8eda1477-2404-4abd-9c70-e7664b3ef904', '/images/4469297f-0873-4a3e-a21a-40b67f0d9e6a/8eda1477-2404-4abd-9c70-e7664b3ef904.webp', '4469297f-0873-4a3e-a21a-40b67f0d9e6a', '2023-08-13 08:14:32', '2023-08-13 08:14:32'),
	('91f473b4-ab59-4090-a0a8-78af5cda2ad4', '/images/b640ce74-aa88-4a76-8d30-f848b0f50d4b/91f473b4-ab59-4090-a0a8-78af5cda2ad4.webp', 'b640ce74-aa88-4a76-8d30-f848b0f50d4b', '2023-08-13 07:53:35', '2023-08-13 07:53:35'),
	('95ea55b2-11f3-4a3b-8190-ba236240df99', '/images/1912e543-c6b0-4111-bca8-81e3261e80c4/95ea55b2-11f3-4a3b-8190-ba236240df99.webp', '1912e543-c6b0-4111-bca8-81e3261e80c4', '2023-08-13 07:45:03', '2023-08-13 07:45:03'),
	('977e3fd8-6d2d-482e-ad26-0e21edc7a016', '/images/d4788b72-a1ba-44f5-a961-bbd4f152bf5f/977e3fd8-6d2d-482e-ad26-0e21edc7a016.webp', 'd4788b72-a1ba-44f5-a961-bbd4f152bf5f', '2023-08-13 07:52:52', '2023-08-13 07:52:52'),
	('9bf855ea-20e0-4b15-9b93-8de470595fe7', '/images/179f6bde-36a7-4612-91ee-e4b4d9ec1fb2/9bf855ea-20e0-4b15-9b93-8de470595fe7.webp', '179f6bde-36a7-4612-91ee-e4b4d9ec1fb2', '2023-08-13 07:50:25', '2023-08-13 07:50:25'),
	('a3fb05f5-b520-4a23-a688-468b6447cb45', '/images/b640ce74-aa88-4a76-8d30-f848b0f50d4b/a3fb05f5-b520-4a23-a688-468b6447cb45.webp', 'b640ce74-aa88-4a76-8d30-f848b0f50d4b', '2023-08-13 07:53:35', '2023-08-13 07:53:35'),
	('a6870283-2bfb-40dd-b010-9372470a44a3', '/images/78347282-8ad8-4b80-bbeb-0d6629402134/a6870283-2bfb-40dd-b010-9372470a44a3.webp', '78347282-8ad8-4b80-bbeb-0d6629402134', '2023-08-13 08:03:23', '2023-08-13 08:03:23'),
	('a81500de-b46a-4b13-b43e-54ea62f1c18d', '/images/580ef729-101b-4c61-ad11-a704bf066b2f/a81500de-b46a-4b13-b43e-54ea62f1c18d.webp', '580ef729-101b-4c61-ad11-a704bf066b2f', '2023-08-13 08:11:45', '2023-08-13 08:11:45'),
	('a91a4d1e-8efb-46cd-b9aa-c9144a0195c5', '/images/7afaf1ac-0b00-4200-84eb-db3e5b208745/a91a4d1e-8efb-46cd-b9aa-c9144a0195c5.webp', '7afaf1ac-0b00-4200-84eb-db3e5b208745', '2023-08-13 08:19:38', '2023-08-13 08:19:38'),
	('ac1ce6e9-7351-42e1-8a37-ab81ac3da1ac', '/images/fd96ceb7-f974-4244-8862-8606278fa7cc/ac1ce6e9-7351-42e1-8a37-ab81ac3da1ac.webp', 'fd96ceb7-f974-4244-8862-8606278fa7cc', '2023-08-13 08:00:32', '2023-08-13 08:00:32'),
	('ae3c10b4-2e1b-4ceb-940f-26139989a80f', '/images/1d6ae6dc-305d-41a3-a216-3f4f3a036ad1/ae3c10b4-2e1b-4ceb-940f-26139989a80f.webp', '1d6ae6dc-305d-41a3-a216-3f4f3a036ad1', '2023-08-13 07:57:48', '2023-08-13 07:57:48'),
	('b4834617-34a1-4741-b546-1069f841bf6c', '/images/78347282-8ad8-4b80-bbeb-0d6629402134/b4834617-34a1-4741-b546-1069f841bf6c.webp', '78347282-8ad8-4b80-bbeb-0d6629402134', '2023-08-13 08:03:23', '2023-08-13 08:03:23'),
	('b4fa5cdd-3c1a-41ce-932e-768b513991bd', '/images/1d6ae6dc-305d-41a3-a216-3f4f3a036ad1/b4fa5cdd-3c1a-41ce-932e-768b513991bd.webp', '1d6ae6dc-305d-41a3-a216-3f4f3a036ad1', '2023-08-13 07:57:48', '2023-08-13 07:57:48'),
	('b6cb66cc-0cac-4a24-a249-5edb2999351a', '/images/68729088-def5-42cd-ad3a-500141acbb1c/b6cb66cc-0cac-4a24-a249-5edb2999351a.webp', '68729088-def5-42cd-ad3a-500141acbb1c', '2023-08-13 07:56:25', '2023-08-13 07:56:25'),
	('bab1f5d2-0ffb-4dd1-a262-8080449920d0', '/images/57290e97-96fd-4c7b-babb-24f3cc611678/bab1f5d2-0ffb-4dd1-a262-8080449920d0.webp', '57290e97-96fd-4c7b-babb-24f3cc611678', '2023-08-13 08:21:00', '2023-08-13 08:21:00'),
	('bd23df48-7451-4b3d-8254-50ca85778e00', '/images/49eb5ef7-756c-4f2d-9570-fb0dbac6d99e/bd23df48-7451-4b3d-8254-50ca85778e00.webp', '49eb5ef7-756c-4f2d-9570-fb0dbac6d99e', '2023-08-13 17:37:39', '2023-08-13 17:37:39'),
	('be40d2c0-b1d4-408c-84a7-ca665448b391', '/images/5cad02c6-2f96-4f60-8a39-af71f291192f/be40d2c0-b1d4-408c-84a7-ca665448b391.webp', '5cad02c6-2f96-4f60-8a39-af71f291192f', '2023-08-13 08:05:57', '2023-08-13 08:05:57'),
	('c6b2c889-d2ee-4c83-8937-f92d3c7a3c53', '/images/4469297f-0873-4a3e-a21a-40b67f0d9e6a/c6b2c889-d2ee-4c83-8937-f92d3c7a3c53.webp', '4469297f-0873-4a3e-a21a-40b67f0d9e6a', '2023-08-13 08:14:32', '2023-08-13 08:14:32'),
	('c6e63a4a-54ab-4b6c-843c-5f9eaabc8808', '/images/ccc38b2a-48a5-4c81-9a85-d54b7105d541/c6e63a4a-54ab-4b6c-843c-5f9eaabc8808.webp', 'ccc38b2a-48a5-4c81-9a85-d54b7105d541', '2023-08-13 07:37:24', '2023-08-13 07:37:24'),
	('cb1ddb7b-2ab4-40e0-b1ef-76c0de18a22c', '/images/7afaf1ac-0b00-4200-84eb-db3e5b208745/cb1ddb7b-2ab4-40e0-b1ef-76c0de18a22c.webp', '7afaf1ac-0b00-4200-84eb-db3e5b208745', '2023-08-13 08:19:38', '2023-08-13 08:19:38'),
	('cbde453a-1d9f-40ab-9db1-eb11c94eca47', '/images/c11da389-cc48-4612-b2d8-b51c955e1e87/cbde453a-1d9f-40ab-9db1-eb11c94eca47.webp', 'c11da389-cc48-4612-b2d8-b51c955e1e87', '2023-08-13 07:48:57', '2023-08-13 07:48:57'),
	('cce3fa63-70c4-4d1e-be6f-4c01e55cf8d7', '/images/1912e543-c6b0-4111-bca8-81e3261e80c4/cce3fa63-70c4-4d1e-be6f-4c01e55cf8d7.webp', '1912e543-c6b0-4111-bca8-81e3261e80c4', '2023-08-13 07:45:03', '2023-08-13 07:45:03'),
	('cd48b187-7fbc-45c6-8c25-0b8765f41c6c', '/images/1bdf8bdf-6086-461f-bba7-ed6766c1386b/cd48b187-7fbc-45c6-8c25-0b8765f41c6c.webp', '1bdf8bdf-6086-461f-bba7-ed6766c1386b', '2023-08-13 17:26:37', '2023-08-13 17:26:37'),
	('ce8bb11f-10d3-4842-ba52-8e083c8786ad', '/images/68729088-def5-42cd-ad3a-500141acbb1c/ce8bb11f-10d3-4842-ba52-8e083c8786ad.webp', '68729088-def5-42cd-ad3a-500141acbb1c', '2023-08-13 07:56:25', '2023-08-13 07:56:25'),
	('ce8f9479-afef-43e0-816c-20456be975a9', '/images/49eb5ef7-756c-4f2d-9570-fb0dbac6d99e/ce8f9479-afef-43e0-816c-20456be975a9.webp', '49eb5ef7-756c-4f2d-9570-fb0dbac6d99e', '2023-08-13 17:37:39', '2023-08-13 17:37:39'),
	('d567241f-7b94-478a-b2cb-0fff63117593', '/images/57290e97-96fd-4c7b-babb-24f3cc611678/d567241f-7b94-478a-b2cb-0fff63117593.webp', '57290e97-96fd-4c7b-babb-24f3cc611678', '2023-08-13 08:21:00', '2023-08-13 08:21:00'),
	('d87c9f1b-2216-438a-b150-883e862eaa3d', '/images/1912e543-c6b0-4111-bca8-81e3261e80c4/d87c9f1b-2216-438a-b150-883e862eaa3d.webp', '1912e543-c6b0-4111-bca8-81e3261e80c4', '2023-08-13 07:45:03', '2023-08-13 07:45:03'),
	('db5584c1-5aa4-4b9b-b25a-0706758d83a1', '/images/d4788b72-a1ba-44f5-a961-bbd4f152bf5f/db5584c1-5aa4-4b9b-b25a-0706758d83a1.webp', 'd4788b72-a1ba-44f5-a961-bbd4f152bf5f', '2023-08-13 07:52:52', '2023-08-13 07:52:52'),
	('dc34018e-bc67-4fbd-a100-7f65cfb3aee2', '/images/57290e97-96fd-4c7b-babb-24f3cc611678/dc34018e-bc67-4fbd-a100-7f65cfb3aee2.webp', '57290e97-96fd-4c7b-babb-24f3cc611678', '2023-08-13 08:21:00', '2023-08-13 08:21:00'),
	('e032d165-4631-46ef-a857-5590bc02e8a5', '/images/83819a45-536a-4520-9a5e-38ca7aa21e79/e032d165-4631-46ef-a857-5590bc02e8a5.webp', '83819a45-536a-4520-9a5e-38ca7aa21e79', '2023-08-13 07:35:34', '2023-08-13 07:35:34'),
	('e4fd55cc-bf12-4c21-a9c1-3612bc4b098e', '/images/c11da389-cc48-4612-b2d8-b51c955e1e87/e4fd55cc-bf12-4c21-a9c1-3612bc4b098e.webp', 'c11da389-cc48-4612-b2d8-b51c955e1e87', '2023-08-13 07:48:57', '2023-08-13 07:48:57'),
	('e7f3be59-56dd-4dd2-b461-54b1c73489d3', '/images/5f3ba78a-e361-4b76-a67f-c92c16d2aee4/e7f3be59-56dd-4dd2-b461-54b1c73489d3.webp', '5f3ba78a-e361-4b76-a67f-c92c16d2aee4', '2023-08-13 08:08:58', '2023-08-13 08:08:58'),
	('ed9c5454-9547-4263-83f9-17ad2a1ac6ef', '/images/b640ce74-aa88-4a76-8d30-f848b0f50d4b/ed9c5454-9547-4263-83f9-17ad2a1ac6ef.webp', 'b640ce74-aa88-4a76-8d30-f848b0f50d4b', '2023-08-13 07:53:35', '2023-08-13 07:53:35'),
	('eeb83612-d658-473d-8aa6-c192fd4f7f07', '/images/a0b84ee9-81d3-4ee7-8a2c-306d9ef422c3/eeb83612-d658-473d-8aa6-c192fd4f7f07.webp', 'a0b84ee9-81d3-4ee7-8a2c-306d9ef422c3', '2023-08-13 08:01:48', '2023-08-13 08:01:48'),
	('f412f908-5793-45d1-bb89-407024e36bc0', '/images/4469297f-0873-4a3e-a21a-40b67f0d9e6a/f412f908-5793-45d1-bb89-407024e36bc0.webp', '4469297f-0873-4a3e-a21a-40b67f0d9e6a', '2023-08-13 08:14:32', '2023-08-13 08:14:32'),
	('f592b9ea-80c9-4b48-b99e-478994c31002', '/images/1bdf8bdf-6086-461f-bba7-ed6766c1386b/f592b9ea-80c9-4b48-b99e-478994c31002.webp', '1bdf8bdf-6086-461f-bba7-ed6766c1386b', '2023-08-13 17:26:37', '2023-08-13 17:26:37'),
	('f78a3529-7fde-49ab-af32-e02e6e609486', '/images/d4e89670-f54d-4b10-bd32-fe92fe4a34b2/f78a3529-7fde-49ab-af32-e02e6e609486.webp', 'd4e89670-f54d-4b10-bd32-fe92fe4a34b2', '2023-08-13 08:21:39', '2023-08-13 08:21:39'),
	('fc128955-ec76-4ef8-9a95-ddb22c400ab7', '/images/83819a45-536a-4520-9a5e-38ca7aa21e79/fc128955-ec76-4ef8-9a95-ddb22c400ab7.webp', '83819a45-536a-4520-9a5e-38ca7aa21e79', '2023-08-13 07:35:34', '2023-08-13 07:35:34'),
	('fc74b37e-ee06-47ae-9e5d-dd891378292a', '/images/a0b84ee9-81d3-4ee7-8a2c-306d9ef422c3/fc74b37e-ee06-47ae-9e5d-dd891378292a.webp', 'a0b84ee9-81d3-4ee7-8a2c-306d9ef422c3', '2023-08-13 08:01:48', '2023-08-13 08:01:48'),
	('fe9314ee-a163-497f-82ce-5fb033ba92a0', '/images/c11da389-cc48-4612-b2d8-b51c955e1e87/fe9314ee-a163-497f-82ce-5fb033ba92a0.webp', 'c11da389-cc48-4612-b2d8-b51c955e1e87', '2023-08-13 07:48:57', '2023-08-13 07:48:57'),
	('ffe528bc-392a-4801-8762-d9eb13206f02', '/images/fd96ceb7-f974-4244-8862-8606278fa7cc/ffe528bc-392a-4801-8762-d9eb13206f02.webp', 'fd96ceb7-f974-4244-8862-8606278fa7cc', '2023-08-13 08:00:32', '2023-08-13 08:00:32');

-- Volcando estructura para tabla troco_base.rejection_reasons
DROP TABLE IF EXISTS `rejection_reasons`;
CREATE TABLE IF NOT EXISTS `rejection_reasons` (
  `id` char(36) NOT NULL,
  `deal_id` char(36) NOT NULL,
  `user_id` char(36) NOT NULL,
  `rejection_comment` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `deal_id` (`deal_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `rejection_reasons_ibfk_1` FOREIGN KEY (`deal_id`) REFERENCES `deals` (`id`),
  CONSTRAINT `rejection_reasons_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla troco_base.rejection_reasons: ~0 rows (aproximadamente)
DELETE FROM `rejection_reasons`;
INSERT INTO `rejection_reasons` (`id`, `deal_id`, `user_id`, `rejection_comment`, `createdAt`, `modified_at`) VALUES
	('250e3e9a-178f-4f02-89f5-1384454e6c68', 'a69b3080-e614-4eea-9fff-377d20674897', '51ebb75a-7077-446c-8723-872e10a24426', 'Me quiero quedar la Mega Drive para jugar al Altered Beast', '2023-08-13 18:10:03', '2023-08-13 18:10:03');

-- Volcando estructura para tabla troco_base.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` char(36) NOT NULL,
  `username` varchar(20) NOT NULL,
  `email` varchar(320) NOT NULL,
  `emailValidated` tinyint(1) DEFAULT '0',
  `password` varchar(128) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `city` varchar(200) DEFAULT NULL,
  `profile_img` varchar(255) DEFAULT NULL,
  `bio_summary` varchar(255) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla troco_base.users: ~17 rows (aproximadamente)
DELETE FROM `users`;
INSERT INTO `users` (`id`, `username`, `email`, `emailValidated`, `password`, `first_name`, `last_name`, `city`, `profile_img`, `bio_summary`, `is_deleted`, `createdAt`, `modified_at`) VALUES
	('06d27949-94fe-4cc1-b7fe-764d68baa0b5', 'descartes', 'descartes@example.com', 1, '$2y$12$etXEQTvRSgKrHu7qUNAlHuF6bRLl5g9sTPXO03Ul16dAm.bZWZoXC', 'Rene', 'Descartes', 'Soria', 'https://www.biografiasyvidas.com/biografia/d/fotos/descartes.jpg', '17th-century philosopher, René Descartes. Exploring beyond \'Cogito, ergo sum\' to vintage treasures. Swapping Cartesian meditations for timeless relics. Dive into my collection and let\'s trade thoughts and antiquities!', 0, '2023-06-14 16:47:33', '2023-08-13 07:29:40'),
	('0e0d2925-e34f-491d-bced-2afbdc24fd53', 'nietzsche', 'nietzsche@example.com', 1, '$2y$12$etXEQTvRSgKrHu7qUNAlHuF6bRLl5g9sTPXO03Ul16dAm.bZWZoXC', 'Friedrich', 'Nietzsche', 'Teruel', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9e7EJRJFS-9F1M0XsFpmyyJmA8eTNortoAqHg0Xwij6zwN2XTdOt-T4bFFItylHskVk&usqp=CAU', 'Beyond good and evil, into vintage treasures. Friedrich\'s collection transcends the ordinary. Exchange with me and embrace the Übermensch in retro style.', 0, '2023-06-14 16:47:33', '2023-08-13 07:29:40'),
	('19125902-f918-473b-a8f9-fe0252327106', 'Lithuniel', 'jorgecidrefdez@gmail.com', 1, '$2a$12$T.v1mNw6CpMba68XJ2nbs.Ybfxnj5Xdu/fhLFcG5q0wensg3.lgFi', 'Jorge', 'cidre fernandez', 'Pontevedra', 'https://www.lavanguardia.com/andro4all/hero/2021/10/8-mejores-webs-para-aprender-a-tocar-la-guitarra-tabs-acordes-y-mas.jpg?width=768&aspect_ratio=16:9&format=nowebp', 'Sexy', 0, '2023-08-30 10:26:15', '2023-08-30 10:26:41'),
	('3633a9e4-1e59-4af5-9cf7-9abfa03cea1b', 'kant', 'kant@example.com', 1, '$2y$12$etXEQTvRSgKrHu7qUNAlHuF6bRLl5g9sTPXO03Ul16dAm.bZWZoXC', 'Immanuel', 'Kant', 'Teruel', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXCcD5DlSJlaxFpDm2qBUo8ctUmUx8-B3HrEXoKuQZg&s', 'Immanuel Kant - navigating the realms of reason and retro. Seek the categorical imperative of timeless artifacts in my collection. Let\'s trade with pure reason!', 0, '2023-06-14 16:47:33', '2023-08-13 07:29:40'),
	('43f2ff55-f4de-4f47-bc87-49c8691e5770', 'hume', 'hume@example.com', 1, '$2y$12$etXEQTvRSgKrHu7qUNAlHuF6bRLl5g9sTPXO03Ul16dAm.bZWZoXC', 'David', 'Hume', 'Pontevedra', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Allan_Ramsay_-_David_Hume%2C_1711_-_1776._Historian_and_philosopher_-_Google_Art_Project.jpg/220px-Allan_Ramsay_-_David_Hume%2C_1711_-_1776._Historian_and_philosopher_-_Google_Art_Project.jpg', 'David Hume, empiricist of old, now curator of ageless wonders. Experience my collection firsthand and let\'s indulge in a sensible trade.', 0, '2023-06-14 16:47:33', '2023-08-13 07:29:40'),
	('51ebb75a-7077-446c-8723-872e10a24426', 'jorge', 'coordinacion@grupoalquila.com', 1, '$2y$12$etXEQTvRSgKrHu7qUNAlHuF6bRLl5g9sTPXO03Ul16dAm.bZWZoXC', 'Jorge A.', 'Garcia', 'Granada', 'https://gravatar.com/avatar/262cc4cd5e67f3cf10f89fbcf1da7728?s=400&d=robohash&r=x', 'I\'m here because I love Retro Stuff.', 0, '2023-08-13 17:06:04', '2023-08-13 18:01:38'),
	('707a25ee-a49a-4e4f-90df-a19eb3041794', 'Beauvoir', 'jgarcia@yo-soy.pro', 1, '$2y$12$etXEQTvRSgKrHu7qUNAlHuF6bRLl5g9sTPXO03Ul16dAm.bZWZoXC', 'Simone', 'de Beauvoir', 'Castellón', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Simone_de_Beauvoir2.png/220px-Simone_de_Beauvoir2.png', 'Philosopher of existentialism, feminist icon, now retro relic curator. De Beauvoir\'s collection goes beyond gender, into timeless treasures. Trade with me, and let\'s transcend the given.', 0, '2023-06-14 16:47:58', '2023-08-13 12:04:32'),
	('77f678a2-4985-42e0-9d34-9c05b0512f87', 'kierkegaard', 'kierkegaard@example.com', 1, '$2y$12$etXEQTvRSgKrHu7qUNAlHuF6bRLl5g9sTPXO03Ul16dAm.bZWZoXC', 'Søren', 'Kierkegaard', 'Jaén', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSG1YJF9xZtszACMeZDonJhjuz9HE_ao0c81MEy6EYa-OxdUJI4', 'Søren Kierkegaard, existentialist at heart, retro enthusiast by choice. Dive into my existential collection and make a leap of faith in trading.', 0, '2023-06-14 16:47:33', '2023-08-13 07:29:40'),
	('af9d24e4-7edf-4db2-9e74-4e6ef48e9c62', 'plutarch', 'plutarch@example.com', 1, '$2y$12$etXEQTvRSgKrHu7qUNAlHuF6bRLl5g9sTPXO03Ul16dAm.bZWZoXC', 'Plutarch', 'Epictetus', 'Granada', 'https://static.ffx.io/images/$zoom_1%2C$multiply_1%2C$ratio_1.777778%2C$width_1177%2C$x_244%2C$y_75/t_crop_custom/c_scale%2Cw_620%2Cq_88%2Cf_auto/9cfda287946579971f54636b87fb06c1b8559209', 'Ancient biographer Plutarch, now trading tales and trinkets. From Parallel Lives to parallel universes of retro treasures. Join me in this historical exchange.', 0, '2023-06-14 16:47:33', '2023-08-13 07:29:40'),
	('b22f20ef-128f-4a07-8329-f5c7fba4b9b1', 'thomas', 'thomas@example.com', 1, '$2y$12$etXEQTvRSgKrHu7qUNAlHuF6bRLl5g9sTPXO03Ul16dAm.bZWZoXC', 'Thomas', 'Aquinas', 'Granada', 'https://ceasefiremagazine.co.uk/wp-content/uploads/Thomas-Aquinas-Ceasefire-640.png', 'Thomas Aquinas, theologian turned vintage virtuoso. My Summa of collectibles awaits. Let\'s trade and achieve the greatest good.', 0, '2023-06-14 16:47:33', '2023-08-13 07:29:40'),
	('c1834d47-ae85-477a-8ebf-8d8a2d8c61cc', 'spinoza', 'spinoza@example.com', 1, '$2y$12$etXEQTvRSgKrHu7qUNAlHuF6bRLl5g9sTPXO03Ul16dAm.bZWZoXC', 'Baruch', 'Spinoza', 'Cantabria', 'https://www.biografiasyvidas.com/biografia/s/fotos/spinoza.jpg', 'Benedict de Spinoza, blending pantheism with passion for the past. Discover the substance of my collection and unite in an ethereal exchange.', 0, '2023-06-14 16:47:33', '2023-08-13 07:29:40'),
	('d84f709f-4dd1-4785-8a1c-14f62735df0b', 'plato', 'plato@example.com', 1, '$2y$12$etXEQTvRSgKrHu7qUNAlHuF6bRLl5g9sTPXO03Ul16dAm.bZWZoXC', 'Plato', 'Aristocles', 'Albacete', 'https://ichef.bbci.co.uk/images/ic/1200x675/p056m1mw.jpg', 'From the realm of Forms to the form of retro relics. Plato\'s allegorical collection invites you to trade beyond the shadows.', 0, '2023-06-14 16:47:33', '2023-08-13 07:29:40'),
	('dcbc0d07-1889-46d5-a44f-89e6df34dc0b', 'locke', 'locke@example.com', 1, '$2y$12$etXEQTvRSgKrHu7qUNAlHuF6bRLl5g9sTPXO03Ul16dAm.bZWZoXC', 'John', 'Locke', 'Soria', 'https://filco.es/uploads/2018/03/Locke.png', 'John Locke, unlocking the treasures of empiricism and vintage. Tabula rasa your collection and start anew with my timeless pieces.', 0, '2023-06-14 16:47:33', '2023-08-13 07:29:40'),
	('ea59600b-23c9-41fc-9ab2-d886e348f5f1', 'rousseau', 'rousseau@example.com', 1, '$2y$12$etXEQTvRSgKrHu7qUNAlHuF6bRLl5g9sTPXO03Ul16dAm.bZWZoXC', 'Jean-Jacques', 'Rousseau', 'Albacete', 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Jean-Jacques_Rousseau_%28painted_portrait%29.jpg', 'Jean-Jacques Rousseau, from social contracts to vintage compact treasures. Explore the state of nature in my collection and find your noble trade.', 0, '2023-06-14 16:47:33', '2023-08-13 07:29:40'),
	('ec59090e-c881-4c47-ac64-1bca2e448050', 'Greatest', 'gsgm1985@gmail.com', 1, '$2a$12$VueTu/cDNqJThloap1I8ZecpQqpnPwsaBiSqe2.PXMRF0d5XUQlVm', 'Arataka', 'Reigen', 'Albacete', 'https://i.scdn.co/image/ab67616d0000b2731e19900d1481726947030946', 'Mob\'s mentor and boss. He is the self-proclaimed Greatest Psychic of the 21st Century .', 0, '2023-06-14 16:47:54', '2023-08-30 09:49:05'),
	('f2e1afd4-c264-4126-80bf-f6731e826121', 'Butler', 'Butler@example.com', 1, '$2y$12$etXEQTvRSgKrHu7qUNAlHuF6bRLl5g9sTPXO03Ul16dAm.bZWZoXC', 'Judith', 'Butler', 'Cantabria', 'https://daily.jstor.org/wp-content/uploads/2019/06/judith_butler_the_early_years_alt_1050x700.jpg', 'Challenging norms in gender and collectibles. Butler\'s trove defies conventional categories. Performatively engage with my collection and let\'s redefine retro trading.', 0, '2023-06-14 16:47:33', '2023-08-13 12:04:32'),
	('fc7c8f59-22e7-4a18-9c96-aa1668d4d3b1', 'Žižek', 'Žižek@example.com', 1, '$2y$12$etXEQTvRSgKrHu7qUNAlHuF6bRLl5g9sTPXO03Ul16dAm.bZWZoXC', 'Slavoj ', 'Žižek', 'Jaén', 'https://www.anagrama-ed.es/uploads/media/autores/0001/24/thumb_23940_autores_ficha.jpeg', 'From Lacanian lenses to vintage treasures, Žižek\'s collection is as eclectic as his thoughts. Dive into the dialectic of my items and let\'s engage in a sublime exchange.', 0, '2023-06-14 16:47:33', '2023-08-13 07:29:40');

-- Volcando estructura para tabla troco_base.validation_codes
DROP TABLE IF EXISTS `validation_codes`;
CREATE TABLE IF NOT EXISTS `validation_codes` (
  `id` char(36) NOT NULL,
  `user_id` char(36) NOT NULL,
  `code` char(8) NOT NULL,
  `expiration_date` timestamp NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `validation_codes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla troco_base.validation_codes: ~2 rows (aproximadamente)
DELETE FROM `validation_codes`;
INSERT INTO `validation_codes` (`id`, `user_id`, `code`, `expiration_date`, `createdAt`, `modified_at`) VALUES
	('2da19b0b-10db-4465-ac76-7bae71495102', 'ec59090e-c881-4c47-ac64-1bca2e448050', 'jS8O2jao', '2023-06-14 16:52:54', '2023-06-14 16:47:54', '2023-06-14 16:47:54'),
	('edae0bce-eac5-4b6e-8356-449f394aedc8', '707a25ee-a49a-4e4f-90df-a19eb3041794', 'T1sCknxd', '2023-06-14 16:52:58', '2023-06-14 16:47:58', '2023-06-14 16:47:58');

-- Volcando estructura para tabla troco_base.wishlist
DROP TABLE IF EXISTS `wishlist`;
CREATE TABLE IF NOT EXISTS `wishlist` (
  `id` char(36) NOT NULL,
  `userid` char(36) NOT NULL,
  `item_id` char(36) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`),
  KEY `item_id` (`item_id`),
  CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`),
  CONSTRAINT `wishlist_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla troco_base.wishlist: ~1 rows (aproximadamente)
DELETE FROM `wishlist`;
INSERT INTO `wishlist` (`id`, `userid`, `item_id`, `createdAt`, `modified_at`) VALUES
	('be0f3400-2b78-46a3-b1a8-2f1f0afb4c6f', '51ebb75a-7077-446c-8723-872e10a24426', 'c11da389-cc48-4612-b2d8-b51c955e1e87', '2023-08-13 17:40:39', '2023-08-13 17:40:39');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
