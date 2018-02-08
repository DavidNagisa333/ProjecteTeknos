-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-02-2018 a las 09:00:03
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mydb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employees`
--

CREATE TABLE `employees` (
  `_id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `position` varchar(50) NOT NULL,
  `department` varchar(50) NOT NULL,
  `salary` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `employees`
--

INSERT INTO `employees` (`_id`, `name`, `position`, `department`, `salary`) VALUES
(1, 'Jaume', 'Desenvolupador', 'Blizzard', '100'),
(2, 'David', 'Programador', 'Itteria', '100'),
(3, 'Sergi', 'Programador', 'Seidor', '100'),
(4, 'Jaume', 'Modelador', 'Blizzard', '100');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pressupost`
--

CREATE TABLE `pressupost` (
  `id` int(11) NOT NULL,
  `nomPersona` varchar(45) NOT NULL,
  `cognomPersona` varchar(45) NOT NULL,
  `situacioLaboral` varchar(45) NOT NULL,
  `ingressos` varchar(45) NOT NULL,
  `demanda` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pressupost`
--

INSERT INTO `pressupost` (`id`, `nomPersona`, `cognomPersona`, `situacioLaboral`, `ingressos`, `demanda`) VALUES
(1, 'David', 'Caceres Gonzalez', 'empleat', '1200', '4000'),
(2, 'Sergi', 'Sales Vila', 'auxiliar', '1000', '3000'),
(3, 'Jaume', 'Malagarriga', 'autonom', '1800', '4000'),
(4, 'Jaume', 'Calle', 'cooperatiu', '900', '6000'),
(7, 'David', 'Caceresss', 'empleat', '1200', '2000');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`_id`);

--
-- Indices de la tabla `pressupost`
--
ALTER TABLE `pressupost`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `employees`
--
ALTER TABLE `employees`
  MODIFY `_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `pressupost`
--
ALTER TABLE `pressupost`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
