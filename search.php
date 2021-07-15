<?php
$name = $_REQUEST['name'];
$subject = $_REQUEST['subject'];
$message = $_REQUEST['message'];
// $date = new DateTime().getdate();
$date = '2021-07-15';
echo "Welcome, " . $name . " \n";
// echo "Your email address is " . $_REQUEST['email'] . " \n";


$mysqli = mysqli_connect("localhost", "root", "", "website");
$emailAdd = mysqli_real_escape_string($mysqli, $_REQUEST['email']);
echo "Your email address after real escape " . $emailAdd . " \n";

// checking connection
if ($mysqli === false) {
        die("Cannot connect to the database, kindl wait for sometime and try again " . mysqli_connect_error());
}

$sqlquery = "INSERT INTO contact (name, email_address , subject, message, time) VALUES ($name, $emailAdd , $subject, $message, $date) ";

if (mysqli_query($mysqli, $sqlquery)) {
        echo "Your query has been submitted, kindly wait and we will get back to you.";
} else {
        echo "Error : Cannot post , please try again. " . mysqli_error($mysqli);
}

mysqli_close($mysqli);
