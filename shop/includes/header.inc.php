<?php
include($_SERVER['DOCUMENT_ROOT']."/shop/config/config.php");
include($_SERVER['DOCUMENT_ROOT']."/shop/config/function.php");

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> <?=$pageConfig['title']?> </title>
    <?php foreach ($pageConfig['cssFiles'] as $path_css): ?>
    <link rel="stylesheet" href="<?=$path_css?>">
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Pattaya|Playfair+Display|Roboto&display=swap" rel="stylesheet">
<?php endforeach; ?>

</head>
<body>
    <div class="main">
    <div class="main_wrapper">
    <div class="nav_wrapper">
        <img src="img/icons/logo.jpg" alt="">
        <a href="">Женщинам</a>
        <a href="">Мужчинам</a>
        <a href="">Детям</a>
        <a href="">Новинки</a>
        <a href="">О нас</a>
    </div>
    <div class="basket-account_wrapper">
    <h3 class="account"><img src="img/icons/account.png" alt="">Войти</h3>
    <h3><img src="img/icons/bascet.png" alt="">Корзина(0)</h3>
    
    </div>
  
    </div>
    //Форма регистрации
  <div class="registration">
    <div class="container_registration">
  <div class="registration-cross"> <img src="img/icons/cross-symbol_icon-icons.com_74149.png">   </div>
    <form class="form-registr" action="">
    <h4>ВХОД</h4>
    <input type="text" name="login" placeholder="Логин">
    <input type="text" name="password" placeholder="Пароль">
    <input class="regist-submit" type="submit" value="Войти">
    <p><a href="">Регистрация</a></p>
    </form>
</div></div>

