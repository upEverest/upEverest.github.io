-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июн 11 2019 г., 09:51
-- Версия сервера: 10.1.38-MariaDB
-- Версия PHP: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `06.05.2019`
--

-- --------------------------------------------------------

--
-- Структура таблицы `catalogs_27`
--

CREATE TABLE `catalogs_27` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `catalogs_27`
--

INSERT INTO `catalogs_27` (`id`, `name`) VALUES
(1, 'Мужчинам');

-- --------------------------------------------------------

--
-- Структура таблицы `categories_27`
--

CREATE TABLE `categories_27` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `communic`
--

CREATE TABLE `communic` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `phone` int(11) NOT NULL,
  `text` text NOT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `communic`
--

INSERT INTO `communic` (`id`, `name`, `email`, `phone`, `text`, `file`) VALUES
(44, 'Алексей Кубитович', 'a.kubitovich@mail.ru', 2147483647, 'ghbftn', ''),
(45, '', '', 0, '', ''),
(46, '', '', 0, '', ''),
(47, '', '', 0, '', ''),
(48, '', '', 0, '', ''),
(49, '', '', 0, '', ''),
(50, '', '', 0, '', ''),
(51, 'Алексей Кубитович', 'a.kubitovich@mail.ru', 2147483647, '', '');

-- --------------------------------------------------------

--
-- Структура таблицы `people`
--

CREATE TABLE `people` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `age` int(11) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `city` varchar(20) NOT NULL,
  `phone` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `people`
--

INSERT INTO `people` (`id`, `name`, `surname`, `age`, `sex`, `city`, `phone`) VALUES
(14, '89031446952', '', 0, 'undefined', 'люберцы', 0),
(15, 'Светлана', 'Кубитович', 23, 'undefined', 'люберцы', 2147483647),
(16, '89031446952', '', 0, 'undefined', 'люберцы', 0),
(17, 'Светлана', 'Кубитович', 22, 'undefined', 'люберцы', 2147483647),
(18, '', '', 0, 'undefined', '', 0),
(19, '89031446952', 'Кубитович', 0, 'undefined', 'люберцы', 0),
(20, 'Светлана', 'Кубитович', 33, 'undefined', 'люберцы', 2147483647),
(21, '89031446952', '', 0, 'undefined', 'люберцы', 0),
(22, '89031446952', 'Кубитович', 22, 'undefined', 'люберцы', 2147483647);

-- --------------------------------------------------------

--
-- Структура таблицы `products_27`
--

CREATE TABLE `products_27` (
  `id` int(11) NOT NULL,
  `img_src` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `sku` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `products_27`
--

INSERT INTO `products_27` (`id`, `img_src`, `name`, `title`, `sku`, `price`, `description`) VALUES
(1, 'img/products/1.jpg', 'Куртка мужская', 'Куртка мужская осенняя', '10000', 4500, 'Куртка мужская осенняя. отлично подходит на дождливую холодную осенную погоду'),
(2, 'img/products/2.jpg', 'Куртка мужская зеленая', 'Куртка мужская осенняя', '10002', 4000, 'Куртка мужская осенняя. отлично подходит на дождливую холодную осенную погоду'),
(3, 'img/products/7.jpg', 'Кеды крутые', 'Кеды мужские', '10003', 7000, 'Хорошие кеды');

-- --------------------------------------------------------

--
-- Структура таблицы `product_catalog_27`
--

CREATE TABLE `product_catalog_27` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `catalog_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `product_catalog_27`
--

INSERT INTO `product_catalog_27` (`id`, `product_id`, `catalog_id`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `sizes`
--

CREATE TABLE `sizes` (
  `id` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `subs`
--

CREATE TABLE `subs` (
  `id` int(11) NOT NULL,
  `Email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `treval`
--

CREATE TABLE `treval` (
  `id` int(11) NOT NULL,
  `Image` varchar(255) NOT NULL,
  `Heading` varchar(50) NOT NULL,
  `Description` text NOT NULL,
  `Price` varchar(50) NOT NULL,
  `Prioritet` int(11) NOT NULL,
  `Activiti` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `treval`
--

INSERT INTO `treval` (`id`, `Image`, `Heading`, `Description`, `Price`, `Prioritet`, `Activiti`) VALUES
(57, 'eg.jpg', 'Египет', 'Страна пирамид', '56 823 руб.', 100, 1),
(58, 'fran.jpg', 'Франция', 'Страна любви', '76 000 руб.', 90, 1),
(59, 'gr.jpg', 'Греция', 'Страна героев и богов', '75 362 руб.', 80, 1),
(60, 'ital.jpg', 'Италия ', 'Страна моды', '96 500 руб.', 60, 1),
(61, 'kip.jpg', 'Кипр', 'Остров счастья', '86 423 руб.', 60, 1),
(62, 'mar.jpg', 'Марокко', 'Королевство таин', '78 900 руб.', 50, 1),
(63, '', '', '', '', 0, 0),
(64, '', '', '', '', 0, 0),
(65, '271.jpg', 'Кошки', 'Пушыстые', '100', 100, 1),
(66, '271.jpg', '', '', '', 0, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `words`
--

CREATE TABLE `words` (
  `id` int(11) NOT NULL,
  `word` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `words`
--

INSERT INTO `words` (`id`, `word`) VALUES
(1, ''),
(2, ''),
(3, 'здоровье'),
(4, ''),
(5, ''),
(6, 'здоровье'),
(7, 'уют'),
(8, 'здоровье'),
(9, 'здоровье'),
(10, 'здоровье'),
(11, 'здоровье'),
(12, 'дружок'),
(13, 'земле'),
(14, 'земле'),
(15, 'земле'),
(16, 'дружок'),
(17, 'дружок'),
(18, 'февраля'),
(19, 'здоровье');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `catalogs_27`
--
ALTER TABLE `catalogs_27`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `categories_27`
--
ALTER TABLE `categories_27`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `communic`
--
ALTER TABLE `communic`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `people`
--
ALTER TABLE `people`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `products_27`
--
ALTER TABLE `products_27`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `product_catalog_27`
--
ALTER TABLE `product_catalog_27`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `subs`
--
ALTER TABLE `subs`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `treval`
--
ALTER TABLE `treval`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `words`
--
ALTER TABLE `words`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `catalogs_27`
--
ALTER TABLE `catalogs_27`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `categories_27`
--
ALTER TABLE `categories_27`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `communic`
--
ALTER TABLE `communic`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT для таблицы `people`
--
ALTER TABLE `people`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT для таблицы `products_27`
--
ALTER TABLE `products_27`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `product_catalog_27`
--
ALTER TABLE `product_catalog_27`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `subs`
--
ALTER TABLE `subs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `treval`
--
ALTER TABLE `treval`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT для таблицы `words`
--
ALTER TABLE `words`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
