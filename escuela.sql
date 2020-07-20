-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-07-2020 a las 18:10:39
-- Versión del servidor: 10.1.32-MariaDB
-- Versión de PHP: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `escuela`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `Matricula` mediumint(10) NOT NULL,
  `Nombres` varchar(50) NOT NULL,
  `Apellido_Paterno` varchar(20) NOT NULL,
  `Apellido_Materno` varchar(20) NOT NULL,
  `Edad` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`Matricula`, `Nombres`, `Apellido_Paterno`, `Apellido_Materno`, `Edad`) VALUES
(0, 'Luis Francisco', 'Reyes', 'Pachecoo', 22),
(22522, 'Ana Maria', 'Suarez', 'Luis', 22),
(351217, 'Eney', 'Pineda', 'Ramirez', 18),
(461615, 'Perla Masiel', 'Romualdo', 'Lopez', 20),
(963214, 'Karla Sofia', 'Lezama', 'Patjane', 18),
(3516110, 'Arlet Daria', 'Perez', 'Barragan', 21);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`Matricula`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
