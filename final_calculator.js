<!DOCTYPE html>
<html>
<head>
<title>My Calculator</title>	
</head>
<body bgcolor="aliceblue">
<center><!-- #BeginDate format:fcAm1m -->Friday, December 28, 2018  21:38<!-- #EndDate --></center>
<center><br>
<h1><b><font color="lightblue" style= "Font-size:70">Relax and calculate!</font></b></h1>
<div style = "width:261px"; background:"FFF8DC">
<form name ="Calculator">
<input name ="display" placeholder = "0" style ="width:254px; height:60px; text-align:right; font-size:30; border-radius:8px; margin:auto"/>
<br>
<input type="button" value="7" onClick="document.Calculator.display.value +='7'" style ="width:60px; height:60px; font-size:30; border-radius:8px; margin:3px"/>
<input type="button" value="8" onClick="document.Calculator.display.value +='8'" style ="width:60px; height:60px; font-size:30; border-radius:8px"/>
<input type="button" value="9" onClick="document.Calculator.display.value +='9'" style ="width:60px; height:60px; font-size:30; border-radius:8px"/>
<input type="button" value="+" onClick="btnplus()" style ="width:60px; height:60px; font-size:30; border-radius:8px"/>
<br>
<input type="button" value="4" onClick="document.Calculator.display.value +='4'" style ="width:60px; height:60px; font-size:30; border-radius:8px; margin:3px"/>
<input type="button" value="5" onClick="document.Calculator.display.value +='5'" style ="width:60px; height:60px; font-size:30; border-radius:8px"/>
<input type="button" value="6" onClick="document.Calculator.display.value +='6'" style ="width:60px; height:60px; font-size:30; border-radius:8px"/>
<input type="button" value="+" onClick="btnplus()" style ="width:60px; height:60px; font-size:30; border-radius:8px"/>
<br>
<input type="button" value="1" onClick="document.Calculator.display.value +='1'" style ="width:60px; height:60px; font-size:30; border-radius:8px; margin:3px"/>
<input type="button" value="2" onClick="document.Calculator.display.value +='2'" style ="width:60px; height:60px; font-size:30; border-radius:8px"/>
<input type="button" value="3" onClick="document.Calculator.display.value +='3'" style ="width:60px; height:60px; font-size:30; border-radius:8px"/>
<input type="button" value="*" onClick="btnmult()" style ="width:60px; height:60px; font-size:30; border-radius:8px"/>
<br>
<input type="button" value="0" onClick="document.Calculator.display.value +='0'" style ="width:60px; height:60px; font-size:30; border-radius:8px; margin:3px"/>
<input type="button" value="%" onClick="btnMod()" style ="width:60px; height:60px; font-size:30; border-radius:8px"/>
<input type="button" value="." onClick="btndot()" style ="width:60px; height:60px; font-size:30; border-radius:8px"/>
<input type="button" value="/" onClick="btndiv()" style ="width:60px; height:60px; font-size:30; border-radius:8px"/>
<br>
	
</form>
</div>	
</center>