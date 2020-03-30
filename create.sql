CREATE TABLE `blog` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `time` datetime NOT NULL,
  `path` longtext,
  `visit` int(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `title_UNIQUE` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8;
