<?php

$data = json_decode(file_get_contents('php://input'), true);

$dateAT = strtotime($_GET["startDate"]);

$lenght = $_GET["term"];

$summ =  $_GET["sum"];

$stav = $_GET["percent"];

$popolnenie = $_GET["sumAdd"];

$daysYears= 365;



for($i=0; $i<$lenght; $i++)
{
    $date = strtotime('+1 MONTH', strtotime($dateAT));
    if(date("Y",$date)%4==0)
    {
        $daysYears= 366;
    }
    else
    {
        $daysYears= 365;
    }
    $number = cal_days_in_month(CAL_GREGORIAN, date("m",$date), date("Y",$date));
    $summ = $summ + $popolnenie + ($summ + $popolnenie) * $number * ($stav / $daysYears);
}

echo json_encode(array("sum" => $summ));
?>