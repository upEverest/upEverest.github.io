<?php
    $pageConfig = [
            'title'=> "Каталог",
            'cssFiles'=>[
                'css/style.css',
                'css/index.css',
                'css/reset.css'
            ],
            'jsFiles' =>[
                'js/script.js'
            ],

    ];

include($_SERVER['DOCUMENT_ROOT']."/shop/includes/header.inc.php");
?>

<div class="wrapper_new">
<h1>Новые поступления весны</h1>
<h3>Мы подготовили для Вас лучшие новинки сезона</h3>
<a href="#"><div class="new">Посмотреть новинки</div></a> 
</div>

<div class="wrapper_foto">
<!-- первая колонка -->
<div class="wrapper_foto__cloumn">

    <div class="wrapper_bg-1">
        <h5>джинсовые <br> куртки</h5>
        <p>New Arrival</p>
    </div>
    <div class="wrapper_bg-2"></div>
</div>

<!-- вторая колонка -->
<div class="wrapperr_foto__cloumn">
    <div class="wrapper_bg-3">
        <div class="exclamation-mark">
        <div class="line-mini"></div>
       <div class="sign"></div>
        <div class="line-mini"></div>
    </div>
            <p>каждый сезон мы подготавливаем для Вас исключительно лучшую модну одежду. Следите за нашими новинками</p>
    </div>
    <div class="wrapper_bg-4">
        <p>ДЖИНСЫ <br><i>от 3200 руб.</i></p>
    </div>
        <div class="wrapper_bg-5">
            <div class="arrow"></div>
            <p>Аксессуары</p>
        </div>
    </div>
    <!-- треья колонка -->
    <div class="wrapper_foto__cloumn">
        <div class="wrapper_bg-6"></div>
    
    <div class="wrapper_bg-7">
        <div class="exclamation-mark">
        <div class="line-mini"></div>
        <div class="sign"></div>
        <div class="line-mini"></div>
        </div>
            <p>Самые низкие цены в Москве. Нашли дешевле? Вернем разницу.</p>
        </div>
        <div class="wrapper_bg-8">
            <div class="bg">
            <p>СПОРТИВНАЯ ОДЕЖДА <br><i> от 590 руб.</i></p>
        </div></div></div>
    <!-- четвертая колонка -->
    <div class="wrapper_foto__cloumn">
    <div class="wrapper_bg-9">
    <div class="arrow"></div>
        <p>Элегантная <br>обувь <br><i>ботинки, кросовки</i></p>
    </div>
    <div class="wrapper_bg-10">
        <p>детская <br>одежда<br> <i>New Arrival</i></p>
    </div>
    </div>
    </div>
<!-- Подписка на новинки -->
<div class="inform">
<h2 class="inform_h2">будь всегда в курсе выгодных предложений</h2>
<h5 class="inform_h5">подписывайся и следи за новинками и выгодными предложениями.</h5>
<form class="form-inform" action="#">
    <input class="email" type="email" name="email" placeholder="e-mail">
    <input class="submit" type="submit" value="записаться">

</form><p class="error">Некорректный e-mail. Попробуйте еще раз.</p></div>
<?php
include($_SERVER['DOCUMENT_ROOT']."/shop/includes/footer.inc.php");
?>