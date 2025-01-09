
<?php 

                    $firstname=$_POST['firstname'];
                     $lastname=$_POST['lastname'];
                     $email=$_POST['email'];
                   $address=$_POST['address'];
                    
                    $conn=mysqli_connect("localhost", "root" ,"", "blood_bank") or die("unsucessful");
                    $sql= "INSERT INTO user_info (First_name,Last_name,Email,Address) VALUES('{$firstname}','{$lastname}','{$email}','$address}')";
                    $result=mysqli_query($conn,$sql) or die("unsucessfull");
                    
                    header("Location: http://localhost/bloodbank/index.html");
                    
                    mysqli_close($conn);

                    ?>  