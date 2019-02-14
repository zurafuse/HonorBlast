-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 14, 2019 at 08:54 PM
-- Server version: 5.7.24
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `honorblast`
--

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

DROP TABLE IF EXISTS `activities`;
CREATE TABLE IF NOT EXISTS `activities` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `studentid` int(11) NOT NULL,
  `description` text NOT NULL,
  `adate` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `studentid` (`studentid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `awards`
--

DROP TABLE IF EXISTS `awards`;
CREATE TABLE IF NOT EXISTS `awards` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `quest` int(11) NOT NULL,
  `awarded` bit(1) NOT NULL,
  `awardlist` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `quest` (`quest`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `prizes`
--

DROP TABLE IF EXISTS `prizes`;
CREATE TABLE IF NOT EXISTS `prizes` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `cost` int(11) NOT NULL,
  `description` varchar(200) NOT NULL,
  `img` mediumblob,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `quests`
--

DROP TABLE IF EXISTS `quests`;
CREATE TABLE IF NOT EXISTS `quests` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `complete` bit(1) NOT NULL,
  `img` mediumblob,
  `studentid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `studentid` (`studentid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `studentprizes`
--

DROP TABLE IF EXISTS `studentprizes`;
CREATE TABLE IF NOT EXISTS `studentprizes` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `student` int(11) NOT NULL,
  `prize` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `student` (`student`),
  KEY `prize` (`prize`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
CREATE TABLE IF NOT EXISTS `students` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `img` text NOT NULL,
  `name` varchar(100) NOT NULL,
  `nickname` varchar(100) NOT NULL,
  `money` int(11) NOT NULL,
  `health` int(3) NOT NULL,
  `demerits` int(2) NOT NULL,
  `stat` varchar(30) NOT NULL,
  `title` varchar(30) NOT NULL,
  `stars` int(5) NOT NULL,
  `xp` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `studenttrophies`
--

DROP TABLE IF EXISTS `studenttrophies`;
CREATE TABLE IF NOT EXISTS `studenttrophies` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `student` int(11) NOT NULL,
  `trophy` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `student` (`student`),
  KEY `trophy` (`trophy`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `trophies`
--

DROP TABLE IF EXISTS `trophies`;
CREATE TABLE IF NOT EXISTS `trophies` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `description` varchar(250) NOT NULL,
  `img` mediumblob,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
