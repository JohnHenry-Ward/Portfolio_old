<?php
    $connection = mysqli_connect('localhost', 'root', '');

    mysqli_select_db($connection, 'jhportfoliocontact');

    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $insert = "INSERT INTO contacttable(name, subject, email, message)values('$name', '$subject', '$email', '$message')";

    $to = 'johnhenry514@gmail.com';
    


    if(mysqli_query($connection, $insert)){
      $message = "Success!";
      //mail('johnhenry514@gmail.com', $subject, $message);
      echo "<script type='text/javascript'>alert('$message');</script>";
    }
    else{
      $message = "Failed!";
      echo "<script type='text/javascript'>alert('$message');</script>";
    }

    // mysqli_close($connection);
?>