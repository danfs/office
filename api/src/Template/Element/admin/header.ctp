<?php
//pr($this->request->params); 
	$dashClass = (isset($this->request->params['action']) && $this->request->params['action']=='dashboard') ? 'active' : '';
	$rateClass = (isset($this->request->params['action']) && ($this->request->params['controller']=='Rates') && in_array($this->request->params['action'],array('index','add','edit')))? 'active' : '';
	$PageClass = (isset($this->request->params['action']) && ($this->request->params['controller']=='Pages') && in_array($this->request->params['action'],array('index','add','edit')))? 'active' : '';
	$cityClass = (isset($this->request->params['action']) && ($this->request->params['controller']=='Admin') && in_array($this->request->params['action'],array('addCity','city','editcity')))? 'active' : '';
	$airportClass = (isset($this->request->params['action']) && ($this->request->params['controller']=='Admin') && in_array($this->request->params['action'],array('addAirport','airport','editAirport')))? 'active' : '';
?>
<header id="page-header">
            <div class="wrapper">
                <div id="util-nav">
                    <ul>
                        <li>Logged in as admin:</li>
                        <?php /*?><li><?php echo $this->Html->link('Account',array('controller' => 'users','action' => 'account'),array('class' => '')); ?></li><?php */?>
                        <li><?php echo $this->Html->link('Logout',array('controller' => 'admin','action' => 'logout'),array('class' => '')); ?></li>
                    </ul>
                </div>
                <h1>Risat Chauffeurs Backend System</h1>
                <div id="main-nav">
                    <ul class="clearfix">
                        <li class="<?php echo ($dashClass); ?>">
							<?php echo $this->Html->link('Dashboard',array('controller' => 'admin','action' => 'dashboard'),array('class' => '')); ?>
                       	</li>
                        <li class="<?php echo ($cityClass); ?>">
							<?php echo $this->Html->link('City',array('controller' => 'admin','action' => 'city'),array('class' => '')); ?>
                        </li>
                        <li class="<?php echo ($airportClass); ?>">
							<?php echo $this->Html->link('Airport',array('controller' => 'admin','action' => 'airport'),array('class' => '')); ?>
                        </li>
                        <li class="<?php echo ($rateClass); ?>">
							<?php echo $this->Html->link('Rates',array('controller' => 'rates','action' => 'index'),array('class' => '')); ?>
                        </li>
                         <li class="<?php echo ($PageClass); ?>">
							<?php echo $this->Html->link('Page',array('controller' => 'pages','action' => 'index'),array('class' => '')); ?>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="page-subheader">
                <div class="wrapper">
                    <h2></h2>
                    <!--<input placeholder="Search..." type="text" name="q" value="" />-->
                </div>
            </div>
        </header>