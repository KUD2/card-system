<?php
 namespace Doctrine\Tests\Common\Cache; use Doctrine\Common\Cache\MemcacheCache; use Memcache; class MemcacheCacheTest extends CacheTest { private $memcache; protected function setUp() { $this->memcache = new Memcache(); if (@$this->memcache->connect('localhost', 11211) === false) { unset($this->memcache); $this->markTestSkipped('Cannot connect to Memcache.'); } } protected function tearDown() { if ($this->memcache instanceof Memcache) { $this->memcache->flush(); } } public function provideCacheIds() { $ids = parent::provideCacheIds(); unset($ids[21], $ids[22]); return $ids; } public function testGetMemcacheReturnsInstanceOfMemcache() { $this->assertInstanceOf('Memcache', $this->_getCacheDriver()->getMemcache()); } protected function _getCacheDriver() { $driver = new MemcacheCache(); $driver->setMemcache($this->memcache); return $driver; } } 