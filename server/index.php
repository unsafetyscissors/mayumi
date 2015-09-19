<?php
	$router = require('../library/router.php');
	$dbService = require('./services/dbService.php');


	function mainTest($res){
		$res->data='maintest';
	}
	function thingTest($res){
		$res->data='thingTest';
	}

	$router->get('thing', 'thingTest');
	$router->get('test', 'mainTest');
	$router->route();


	$resul=$dbService->query("INSERT INTO words (word, frequency) VALUES('test',2)", []);
	$resul2=$dbService->query("SELECT * FROM words", []);
	echo($resul2);

	//cleaning up
	$dbService->close();
?>