-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 23, 2019 at 11:24 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inlammning3`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `UserName` varchar(20) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `firstName` text NOT NULL,
  `lastName` text NOT NULL,
  `telenummber` text NOT NULL,
  `birthday` date NOT NULL,
  `customRadioInline` text NOT NULL,
  `adress` text NOT NULL,
  `postCode` text NOT NULL,
  `city` text NOT NULL,
  `textareaInput` text NOT NULL,
  `accept` int(11) NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `UserName`, `email`, `password`, `firstName`, `lastName`, `telenummber`, `birthday`, `customRadioInline`, `adress`, `postCode`, `city`, `textareaInput`, `accept`, `createdAt`) VALUES
(1, 'geco97', 'geco97@gmail.com', '670f8574bd93dd78bd568dab84c6733a', 'jack', 'Jack', '0720370456', '1987-07-09', 'Male', 'Lertagsgatan 53', '70347', '2', 'Hej jklsdj;gldjfg', 1, '2019-01-23 23:17:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UserName` (`UserName`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
