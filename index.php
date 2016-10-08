<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Titre de la page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<audio id="example" src="2.mp3"></audio>
<button id="start">Start</button>
<div class="bar-container">
    <?php for($i=0;$i<100;$i++) : ?>
        <div class="bar bar<?php echo $i;?>" style="left : <?php echo ($i * 11); ?>px"></div>
    <?php endfor;?>
</div>
</body>
</html>

<script src="jquery.min.js  "></script>
<script src="script.js"></script>