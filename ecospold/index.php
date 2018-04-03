<!doctype html>
<h2>Generating ecospold file...</h2>

<?php
  //receive OS command from POST[input] to invoke python
  $cmd=isset($_POST['input']) ? $_POST['input'] : 'python test.py a b c d';
?>

<!--shell prompt-->
<form method=POST>$
<input name=input id=input value="<?php echo $cmd?>" placeholder="write command here" style="width:50%">
</form>

<!--show cmd-->
<?php
  $formatted_cmd = strlen($cmd)>140 ? substr($cmd,0,140)."..." : $cmd;
  echo "<b><code>&gt; $formatted_cmd</code></b>";
?>

<!--cmd output generated by shell-->
<pre style="max-width:500px"><code><?php
  //$result=shell_exec($cmd." 2>&1");
  //echo $result;
  //var_dump(shell_exec($cmd." 2>&1"));
  var_dump(shell_exec($cmd));
?>
</code></pre><hr>

<!--list of ecospold files-->
<div style='font-size:20px'>
  Ecospold file generated:
  <ul>
  <?php
    $folder="wastewater_treatment_tool/output";
    $ls=scandir($folder);
    //loop all files in $folder
    foreach($ls as $file){
      //omit folders
      if(is_dir($file))continue;
      //print the link to the json file
      echo "<li>
        <a href='$folder/$file' target=_blank>$file</a>
        |
        <a href='$folder/$file' download>download</a>
      ";
    }
  ?>
  </ul>
</div>

<!--focus on cmd prompt-->
<script>document.querySelector('#input').select();</script>
