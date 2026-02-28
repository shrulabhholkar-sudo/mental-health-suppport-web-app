
<?php
echo "<pre>";
print_r($_POST);
echo "</pre>";
?>
<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    echo "POST received <br>";

    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $stmt = $conn->prepare("INSERT INTO contact_messages (fullname, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)");

    if (!$stmt) {
        die("Prepare failed: " . $conn->error);
    }

    $stmt->bind_param("sssis", $fullname, $email, $phone, $subject, $message);

    if ($stmt->execute()) {
        echo "Data inserted successfully!";
    } else {
        echo "Insert failed: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>