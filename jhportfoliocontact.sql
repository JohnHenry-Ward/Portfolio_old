-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 12, 2019 at 09:22 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jhportfoliocontact`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacttable`
--

CREATE TABLE `contacttable` (
  `name` varchar(20) NOT NULL,
  `subject` varchar(20) NOT NULL,
  `email` varchar(40) NOT NULL,
  `message` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contacttable`
--

INSERT INTO `contacttable` (`name`, `subject`, `email`, `message`) VALUES
('JohnHenry Ward', 'My Subject', 'wardj29@wwu.edu', 'here is my message!'),
('Bobby Smith', 'Meeting', 'bobSmith@gmail.com', 'Meeting today at 4. See you there.'),
('FakeName', 'FakeSubject', 'FakeEmail@email', 'Fake Message!!!!!');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
