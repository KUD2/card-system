<?php
 namespace Predis; use Predis\Command\CommandInterface; use Predis\Configuration\OptionsInterface; use Predis\Connection\ConnectionInterface; use Predis\Profile\ProfileInterface; interface ClientInterface { public function getProfile(); public function getOptions(); public function connect(); public function disconnect(); public function getConnection(); public function createCommand($method, $arguments = array()); public function executeCommand(CommandInterface $command); public function __call($method, $arguments); } 