<?php
$email = $_POST['email'];
$username = "User";
file_put_contents("mailinglist.txt", $email . ", \n", FILE_APPEND);
// initiate a new connection
$mysqli = mysqli_connect("localhost","root","","mailing_list");
$emailAdd = mysqli_real_escape_string($mysqli,$_REQUEST['email']);
// checking connection
if($mysqli === false){
    die("Cannot connect to the database, kindl wait for sometime and try again " . mysqli_connect_error());
}

$sqlquery = "INSERT INTO emails (email_id, email_name, date) VALUES ($emailAdd , $username) ";

if(mysqli_query($mysqli,$sqlquery)){
    echo "Subscribed Successfully";
}
else{
    echo "Error : Cannot subscribe, please try again. " . mysqli_error($mysqli); 
}

mysqli_close($mysqli);

?>

<!-- <script>
    window.location.href = 'index.php';
</script> -->