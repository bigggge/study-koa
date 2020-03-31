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

CREATE TABLE `user` (
  userid INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '用户ID',
  username VARCHAR(20) NOT NULL COMMENT '用户登录名',
  password CHAR(60) NOT NULL COMMENT '密码',
  userstatus TINYINT NOT NULL DEFAULT 1 COMMENT '用户状态',
  updatetime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  PRIMARY KEY (userid)
) ENGINE = InnoDB COMMENT '用户表'
