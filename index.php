<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="js/jquery.min.js"></script>
    <script src="js/main.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
</head>
<body>
<h1>Mein Viertel</h1>
<section class="postal-code">
    <p><label for="postal-code">Postleitzahl eingeben<br>
            <input type="text" name="postalCode" id="postal-code" class="js-postal-code" maxlength="5"></label></p>
</section>
<section class="district-list">
    <p>In welchem Viertel wohnst Du?</p>
    <div class="js-district-list">
    </div>
</section>
<section class="population-list">
    <p class="js-population-list"></p>
</section>
</body>
</html>