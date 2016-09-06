<?php 
use Cake\Core\Configure;
$FleetClass = (isset($this->request->params['action']) && ($this->request->params['controller']=='Users') && in_array($this->request->params['action'],array('inxex','price_list','select_car','pre_payment')))? 'active' : '';
$SpecialEventsClass = (isset($this->request->params['action']) && ($this->request->params['controller']=='Users') && in_array($this->request->params['action'],array('specialEvents')))? 'active' : '';
$HIWClass = (isset($this->request->params['action']) && ($this->request->params['controller']=='Users') && in_array($this->request->params['action'],array('howItWork')))? 'active' : '';
$CitiesClass = (isset($this->request->params['action']) && ($this->request->params['controller']=='Users') && in_array($this->request->params['action'],array('cities')))? 'active' : '';
$contactusClass = (isset($this->request->params['action']) && ($this->request->params['controller']=='Users') && in_array($this->request->params['action'],array('contactUs')))? 'active' : '';
?>
<header class="header_inner">
			<div class="container">
				<div class="call_us_top">Call Us Toll Free:<br>
					<a href="#">1-800-234-5677</a>
				</div>
				<div class="clearfix"></div>
				<nav>
					<a href="<?php echo Configure::read('Site.url');?>" class="logo">
						<img src="<?php echo $this->request->webroot . 'img/logo.png'; ?>">
					</a>
					<ul class="menu">
						<li><?php echo $this->Html->link('Fleet',array('controller' => 'Users','action' => 'index'),array('class' => $FleetClass)); ?></li>
						<li><?php echo $this->Html->link('Special Events',array('controller' => 'Users','action' => 'specialEvents'),array('class' => $SpecialEventsClass)); ?></li>
						<li><?php echo $this->Html->link('How it works',array('controller' => 'Users','action' => 'howItWork'),array('class' => $HIWClass)); ?></li>
						<li><?php echo $this->Html->link('Cities',array('controller' => 'Users','action' => 'cities'),array('class' => $CitiesClass)); ?></li>
						<li><?php echo $this->Html->link('Contact Us',array('controller' => 'Users','action' => 'contactUs'),array('class' => $contactusClass)); ?></li>
					</ul>
				</nav>
			</div>
		</header>