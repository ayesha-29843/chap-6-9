 document.write("<h1>Result</h1>");

 var a = 10;
  document.write("the value of a is:" + a );

 document.write("<br><br> the value of a is:" + ++a);
 document.write("<br> the value of a is:" + a);

 document.write("<br><br>the value of a is:" + a++);
 document.write("<br>the value of a is:" + a--);

 document.write("<br><br>the value of a is:" + a--);
 document.write("<br>the value of a is:"+ ++a);

 document.write("<br><br>the value of a is:"+ a--);
 document.write("<br>the value of a is:"+ a--);

 var a=2 , b=1
 var result= --a - --b + ++b + b--
 document.write("<br><br> a is :" + a 
    + 
   "<br> b is :" + b
    +
    "<br>RESULT:<br> --a(1) <br> --a --b + ++b(2) <br> --a - --b + ++b +b b--(3)")
    document.write("<br> the result is: " + result)

    var userName = prompt ("enter your name");
    var welcome = "Hi" + userName + "It's great to have you here. Let us know if you need any help getting started.";
    document.write ("<br><br><br><h1> Hi " + userName +  "  It's great to have you here. Let us know if you need any help getting started.</h1>");

    var num = prompt("type a number" , " 5 ")
    document.write("<br> <h1> table of" + num + ":</h1>")
    document.write(num + "x 1 =" +num *1 + "<br>" +num + "x 2 =" +num * 2 + "<br>" +num + "x 3 =" +num *3 +"<br>"
        +num + "x 4 =" +num * 4 + "<br>" +num + "x 5 =" +num * 5 + "<br>" +num + "x 6 =" +num * 6 + "<br>" +num + "x 7 =" +num * 7 + "<br>" +num + "x 8 =" +num * 8+ "<br>" +num + "x 9 =" +num * 9 + "<br>"+num + "x 10 =" +num * 10 + "<br>" 
    )

    var sub1= prompt("write your 1st favourite subject name");
    var obtainSub1 = prompt("write the obtained marks of " + sub1 + " subject:" );
    var sub2= prompt("write your 2nd favourite subject name");
    var obtainSub2 = prompt("write the obtained marks of " + sub2 + " subject:" );
    var sub3= prompt("write your 3rd favourite subject name");
    var obtainSub3 = prompt("write the obtained marks of " + sub3 + " subject:" );

    var totalMarks = 100;

    var totalObtained = obtainSub1 + obtainSub2 + obtainSub3;

    var percentage = (totalObtained / (totalMarks * 3)) * 100;

    document.write("<table style: cellpadding ='10' , cellspacing='10'>  <tr style: cellpadding='10', cellspacing='10'> <th> Subject </th> <th> Total marks </th> <th> Obtained Marks </th> <th> Percentage </th></tr>  <tr><td> "+sub1+" </td><td> "+totalMarks+" </td> <td> "+obtainSub1+" </td>  <td> "+obtainSub1/totalMarks*100+"%  </td> <tr style: cellpadding='10', cellspacing='10'> <th> Subject </th> <th> Total marks </th> <th> Obtained Marks </th> <th> Percentage </th></tr>  <tr><td> "+sub2+" </td><td> "+totalMarks+" </td> <td> "+obtainSub2+" </td>  <td> "+obtainSub2/totalMarks*100+"%  </td> <tr style: cellpadding='10', cellspacing='10'> <th> Subject </th> <th> Total marks </th> <th> Obtained Marks </th> <th> Percentage </th></tr>  <tr><td> "+sub3+" </td><td> "+totalMarks+" </td> <td> "+obtainSub3+" </td>  <td> "+obtainSub3/totalMarks*100+"%  </td></tr> <tr><td>  </td> <td> "+ totalMarks*3 + " </td> <td> "+ totalObtained+" </td> <td> "+ percentage.toFixed(2) + "% </td> </tr></table>" );