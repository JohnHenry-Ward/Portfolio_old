<?php
    include("include/config.php");

    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $insert = "INSERT INTO contacttable(name, subject, email, message)values('$name', '$subject', '$email', '$message')";

    $to = 'johnhenry514@gmail.com';
    
    if(mysqli_query($connection, $insert)){
      //mail('johnhenry514@gmail.com', $subject, $message);
      ?>
      <script>
        alert("Info added to database, email functionality will soon be added!")
        window.location = "index.php";
      </script>
      <?php
    }
    else{
      ?>
      <script>
        alert("Sorry that didn't seem to work. Try again later");
        window.location = "index.php";
      </script>
      <?php
    }

    // mysqli_close($connection);
?>