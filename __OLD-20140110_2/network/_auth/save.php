<?php
	if (isset($_POST['stuff']))  {
		$stuff = $_POST['stuff'];

		$fh = fopen($myFile, 'w') or die("can't open file");
		fwrite($fh, $stuff);
		fclose($fh);
	}
?>