-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 20, 2025 at 12:51 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `invoice_wintel`
--

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `id` int NOT NULL,
  `client_id` int DEFAULT NULL,
  `invoice_number` varchar(100) NOT NULL,
  `kam` varchar(255) DEFAULT NULL,
  `prepared_by` varchar(255) DEFAULT NULL,
  `received_by` varchar(255) DEFAULT NULL,
  `company_id` int DEFAULT NULL,
  `billing_date` date DEFAULT NULL,
  `client_name` varchar(255) DEFAULT NULL,
  `client_address` varchar(255) DEFAULT NULL,
  `billing_attention` varchar(255) DEFAULT NULL,
  `billing_attention_phone` varchar(50) DEFAULT NULL,
  `subtotal` decimal(15,2) DEFAULT NULL,
  `total` decimal(15,2) DEFAULT NULL,
  `amount_in_words` varchar(500) DEFAULT NULL,
  `note` text,
  `payment_instructions` text,
  `pmnt_rcv_acc_id` int DEFAULT NULL,
  `pmnt_rcv_bank` varchar(255) DEFAULT NULL,
  `pmnt_rcv_acc` varchar(255) DEFAULT NULL,
  `pmnt_rcv_branch` varchar(255) DEFAULT NULL,
  `pmnt_rcv_rn` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id`),
  ADD KEY `company_id` (`company_id`),
  ADD KEY `pmnt_rcv_acc_id` (`pmnt_rcv_acc_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `invoice`
--
ALTER TABLE `invoice`
  ADD CONSTRAINT `invoice_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company_info` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `invoice_ibfk_2` FOREIGN KEY (`pmnt_rcv_acc_id`) REFERENCES `bank_account` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
