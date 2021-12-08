<?php
					$name = $_POST['name'];
					$email = $_POST['email'];
					$tel = $_POST['tel'];
					$subject = $_POST['subject'];
					$name = htmlspecialchars($name);
					$email = htmlspecialchars($email);
					$tel = htmlspecialchars($tel);
					$subject = htmlspecialchars($subject);
					$to = "dita@dita-group.com";
					$header = "От motionlight.io";
					$message = $name. "\n" .$email."\n".$tel."\n".$subject;

					

					if(mail($to, $header, $message)){     echo "сообщение успешно отправлено";
					header("Location: https://motionlight.io/thankyou.html");
					} else {
						echo "при отправке сообщения возникли ошибки";
					};
					?>