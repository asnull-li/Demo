-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2022-05-16 14:45:44
-- 服务器版本： 5.6.47-log
-- PHP 版本： 7.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `test1`
--

-- --------------------------------------------------------

--
-- 表的结构 `plan`
--

CREATE TABLE `plan` (
  `id` int(11) NOT NULL,
  `project` int(11) NOT NULL,
  `user` text NOT NULL,
  `title` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `plan`
--

INSERT INTO `plan` (`id`, `project`, `user`, `title`) VALUES
(1, 1, '2253162533', '小项目开发计划'),
(2, 1, '2253162533', 'bug修复计划'),
(3, 1, '2253162533', '发布项目'),
(4, 6, '123', '测试'),
(5, 6, '123', '测试2'),
(6, 7, '123456', '测试'),
(7, 7, '123456', '测试2'),
(8, 1, '2253162533', '测试2'),
(9, 8, 'dualseason', '123564'),
(10, 1, '2253162533', 'test');

-- --------------------------------------------------------

--
-- 表的结构 `planstep`
--

CREATE TABLE `planstep` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `user` text NOT NULL,
  `title` text NOT NULL,
  `planStatus` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `planstep`
--

INSERT INTO `planstep` (`id`, `uid`, `user`, `title`, `planStatus`) VALUES
(1, 1, '2253162533', '注册界面', 'checked'),
(2, 1, '2253162533', '登录界面', 'checked'),
(3, 1, '2253162533', '创建项目功能', 'checked'),
(4, 2, '2253162533', '账号注册bug', 'checked'),
(5, 2, '2253162533', '项目排序bug', ''),
(6, 4, '123', 'bug修复', 'checked'),
(7, 4, '123', '发布项目', ''),
(8, 6, '123456', '修复bug', 'checked'),
(9, 6, '123456', '发布项目', ''),
(10, 3, '2253162533', 'lll', ''),
(11, 9, 'dualseason', '13654', 'checked'),
(12, 9, 'dualseason', '1656', ''),
(13, 8, '2253162533', '123', '');

-- --------------------------------------------------------

--
-- 表的结构 `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `user` text NOT NULL,
  `title` text NOT NULL,
  `department` text NOT NULL,
  `rep` text NOT NULL,
  `date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `project`
--

INSERT INTO `project` (`id`, `user`, `title`, `department`, `rep`, `date`) VALUES
(1, '2253162533', '测试项目', '技术部', 'Asnull', '2022-02-22 22:45'),
(2, '2253162533', '百度搜索', '研发部', '李彦宏', '2022-02-22 22:50'),
(3, '2253162533', '骑手管理', '外卖部', '张三', '2022-02-22 22:51'),
(4, '2253162533', '物流管理', '运输部', '李四', '2022-02-22 22:52'),
(5, '2253162533', '小程序开发', '技术部', '小明', '2022-02-22 22:52'),
(6, '123', 'test', '技术部', '张三', '2022-02-22 22:56'),
(7, '123456', '测试项目', '技术部', '张三', '2022-02-22 22:59'),
(8, 'dualseason', '123', '123', '123', '2022-02-26 00:30');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `uname` text NOT NULL,
  `user` text NOT NULL,
  `pw` text NOT NULL,
  `token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `uname`, `user`, `pw`, `token`) VALUES
(1, 'Asnull', '2253162533', '123456', 'd149093064b4b3547466fa8ea2086fd0'),
(2, '李四', '123', '123', '4297f44b13955235245b2497399d7a93'),
(3, '张三', '123456', '123456', 'ea48576f30be1669971699c09ad05c94'),
(4, 'lyh', '0719', '0719', 'f042b665373e3741b775e8c00c0524ca'),
(5, '哈哈', '111', '111', '96e79218965eb72c92a549dd5a330112'),
(6, 'admin', 'admin', 'admin', 'f6fdffe48c908deb0f4c3bd36c032e72'),
(7, '1', '1', '1', '6512bd43d9caa6e02c990b0a82652dca'),
(8, '陈世杰', 'dualseason', '123456', '9d3fe11cfd811b0408dba4adf2c5d46d'),
(9, 'mzl', 'mzl', '12345', '2aac4f11a314ba33b5bd3b82ab57ad7d');

--
-- 转储表的索引
--

--
-- 表的索引 `plan`
--
ALTER TABLE `plan`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `planstep`
--
ALTER TABLE `planstep`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `plan`
--
ALTER TABLE `plan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用表AUTO_INCREMENT `planstep`
--
ALTER TABLE `planstep`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 使用表AUTO_INCREMENT `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
