-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 01, 2016 at 07:05 PM
-- Server version: 5.5.34
-- PHP Version: 5.5.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `work_palce`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `category_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE IF NOT EXISTS `locations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lat` float NOT NULL,
  `long` float NOT NULL,
  `name` varchar(45) NOT NULL,
  `capacity` int(11) NOT NULL,
  `remain_capacity` int(11) NOT NULL,
  `wifi` tinyint(1) DEFAULT '0',
  `shower` tinyint(1) DEFAULT '0',
  `kitchen` tinyint(1) DEFAULT '0',
  `bike` tinyint(1) DEFAULT '0',
  `parking` tinyint(1) DEFAULT '0',
  `access` tinyint(1) DEFAULT '0',
  `desk_price` int(11) NOT NULL,
  `lastdate` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`id`, `lat`, `long`, `name`, `capacity`, `remain_capacity`, `wifi`, `shower`, `kitchen`, `bike`, `parking`, `access`, `desk_price`, `lastdate`) VALUES
(1, 26.8531, 75.7981, 'indibni', 20, 16, 1, 0, 1, 1, 1, 1, 282, '09/10/2016'),
(2, 26.8531, 75.7948, 'World Trade Park', 100, 100, 1, 1, 1, 1, 1, 1, 300, '09/13/2016');

-- --------------------------------------------------------

--
-- Table structure for table `location_images`
--

CREATE TABLE IF NOT EXISTS `location_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `locationid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created` datetime NOT NULL,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `location_images`
--

INSERT INTO `location_images` (`id`, `locationid`, `name`, `created`, `modified`) VALUES
(1, 1, 'Bede.png', '2016-08-31 08:19:20', '2016-08-31 12:03:37'),
(2, 1, 'pearlview.jpg', '2016-08-31 09:26:24', '2016-08-31 12:03:37');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE IF NOT EXISTS `members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `linkedinURL` varchar(255) DEFAULT NULL,
  `avatarURL` varchar(45) DEFAULT NULL,
  `address1` varchar(45) DEFAULT NULL,
  `address2` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `county` varchar(45) DEFAULT NULL,
  `postcode` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `profession` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `members_in_location`
--

CREATE TABLE IF NOT EXISTS `members_in_location` (
  `member_id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  `desks` int(11) NOT NULL,
  PRIMARY KEY (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `timestamps`
--

CREATE TABLE IF NOT EXISTS `timestamps` (
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) NOT NULL,
  `industry` varchar(100) NOT NULL,
  `image` varchar(255) NOT NULL,
  `linkedin_id` varchar(50) NOT NULL,
  `address1` varchar(100) NOT NULL,
  `address2` varchar(100) NOT NULL,
  `city` varchar(50) NOT NULL,
  `county` varchar(50) NOT NULL,
  `post_code` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `phone_number` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `industry`, `image`, `linkedin_id`, `address1`, `address2`, `city`, `county`, `post_code`, `country`, `phone_number`, `created`, `modified`) VALUES
(1, 'Rahul Singh', 'rahul2ricky@gmail.com', '', '', '1472206278.jpg', 'HP9hmwPpXK', '', '', '', '', '', '', 0, '2016-08-26 10:11:19', '2016-08-26 10:11:19'),
(11, 'ram jane', 'ramjane11@gmail.com', '$2y$10$NfvciYHng9vBVhINRDebhOPXYli01an40yQCSIgrYzj', 'tester', '', '', 'B-3, 2nd floor, Lal bungalow, ', 'Jai jawan Colony,', 'Jaipur', 'Rajasthan', '302018', 'India', 2147483647, '2016-09-01 10:29:25', '2016-09-01 14:13:20');

-- --------------------------------------------------------

--
-- Table structure for table `users_in_location`
--

CREATE TABLE IF NOT EXISTS `users_in_location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  `desks` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `users_in_location`
--

INSERT INTO `users_in_location` (`id`, `user_id`, `location_id`, `desks`) VALUES
(1, 1, 1, 1),
(5, 11, 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `users_in_locationq`
--

CREATE TABLE IF NOT EXISTS `users_in_locationq` (
  `user_id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  `desks` int(11) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users_in_locationq`
--

INSERT INTO `users_in_locationq` (`user_id`, `location_id`, `desks`) VALUES
(1, 1, 1);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `members_in_location`
--
ALTER TABLE `members_in_location`
  ADD CONSTRAINT `fk_members_in_location_members1` FOREIGN KEY (`member_id`) REFERENCES `members` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
