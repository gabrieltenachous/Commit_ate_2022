 <html>

 <body>
     <table class="table">
         <thead>
             <tr>
                <th> 
                </th>
                 <th>
                     <?php
                        echo $_POST["get_name"];
                        ?>
                 </th>
                 <th>
                     <?php
                        echo $_POST["get_email"];
                        ?>
                 </th>
                 <th>
                    <?php
                    $i = 0;
                       while($i<10){
                           $i++; 
                           
                           echo ' <a href="#"> '.$i.'<a>';
                       }
                    ?>
                 </th>


             </tr>
         </thead>
     </table>




 </body>

 </html>