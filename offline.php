<?php

require("settings.php");

?>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <title>Is it up? - Offline</title>

    <!-- Meta Info -->
    <meta name="description" content="We're currently offline for maintenance, please give us a couple of minutes to finish." />
    <meta name="msapplication-TileImage" content="<?php echo $setting["static"]; ?>/static/img/icon.png">
    <meta name="msapplication-TileColor" content="#ECECEC">
    
    <!-- Author -->
    <meta name="author" content="Samuel Parkinson" />
    
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/png" href="<?php echo $setting["static"]; ?>/img/small-icon.png" />
    
    <!-- Prevent Crawlers from Indexing -->
    <meta name="robots" content="noindex" />

    <!-- Stylesheets -->
    <link rel="stylesheet" type="text/css" media="all" href="<?php echo $setting["static"]; ?>/css/reset.css" />
    <link href='//fonts.googleapis.com/css?family=PT+Sans' rel='stylesheet' type='text/css' />
    
    <!-- Mobile Browser Stuff -->
    <meta name="viewport" content="width=520" />
    
    <meta http-equiv="refresh" content="30; url=http://<?php echo $setting["host"]; ?>/" />
    
    <style type="text/css">
        body {
        color: #36393D;
        font-family: 'PT Sans', Helvetica, Arial, Verdana, sans-serif;
        font-size: 100%; }
    
        #container {
            width: 500px;
            margin: 10px auto;
            text-align: left; }

            a,
            a:visited,
            a:active {
                color: #369;
                text-decoration: none; }

            a:hover { color: #4096EE; }

            h1 {
                font-size: 140%;
                color: #369;
                margin-top: 2em; }

            p {
                color: #36393D;
                text-align: justify;
                line-height: 1.5em; }
    </style>
</head>
<body>
<div id="container">
    <center><img src="<?php echo $setting["static"]; ?>/img/ajax-loader.gif" alt="Checking..." width="48px" height="48px" style="margin-top:3em;" /></center>
    
    <h1>Is it up? is offline.</h1>
    
    <p>We are currently making improvments to the site. Please give us a few minutes to do so, we promise it'll be better than when you last used it.</p>
    
    <p>This page will automatically load the homepage once the site is back online.</p>
</div>
</body>
</html>