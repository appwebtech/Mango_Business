<?php
//get the form fields, removes html tags and whitespace.
$name = strip_tags(trim($POST["name"]));
$name = str_replace(array("\r","\n"),array(" "," "),$name);
$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
$message = trim($_POST["message"]);
//check the data.
if(empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: http://www.theappwebtech.com/projects/2016018/index/php?success=-1#form");
    exit;
}
//set the recipient email address. Update this to YOUR desired email address.
$recipient = "josembi.gmail.com";
//set the email subject.
$subject = "New contact from $name";

//build the email content.
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Message:\n$message\n";

//build the email headers.
$email_headers = "From: $name <$email>";

//send the email.
mail($recipient, $subject, $email_content, $email_headers)
    
// redirect to the index.html page with success code
header("Location: http://www.theappwebtech.com/projects/2016018/index.php?success=1#form");
    
    ?>