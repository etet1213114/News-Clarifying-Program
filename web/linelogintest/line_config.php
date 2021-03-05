<?php
//設定值
define("CLIENT_ID", '1655211951');  //從這取得 https://developers.line.biz/console/channel/
define("CLIENT_SECRET", '353711a66ce06be33195817d937e275e');  //從這取得 https://developers.line.biz/console/channel/
define("REDIRECT_URI", 'http://120.126.19.100/linelogintest/callback.php');//登入後返回位置，須設定去 https://developers.line.biz/console/channel/
//define("REDIRECT_URI2", 'http://120.126.19.100/home-grid.php');
define("SCOPE", 'profile%20openid%20email');//授權範圍以%20分隔 可以有3項openid，profile，email ， email部分要這邊也要設定  https://developers.line.biz/console/channel/
//email%20openid%20profile