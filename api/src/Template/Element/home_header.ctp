<?php 
use Cake\Core\Configure;
$FleetClass = (isset($this->request->params['action']) && ($this->request->params['controller']=='Users') && in_array($this->request->params['action'],array('inxex','price_list','select_car','pre_payment')))? 'active' : '';
$SpecialEventsClass = (isset($this->request->params['action']) && ($this->request->params['controller']=='Users') && in_array($this->request->params['action'],array('specialEvents')))? 'active' : '';
$HIWClass = (isset($this->request->params['action']) && ($this->request->params['controller']=='Users') && in_array($this->request->params['action'],array('HowItWork')))? 'active' : '';
$CitiesClass = (isset($this->request->params['action']) && ($this->request->params['controller']=='Users') && in_array($this->request->params['action'],array('cities')))? 'active' : '';
$contactusClass = (isset($this->request->params['action']) && ($this->request->params['controller']=='Users') && in_array($this->request->params['action'],array('contactUs')))? 'active' : '';
?>
<div class="home_page_banner">
			<header>
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
						<li><?php echo $this->Html->link('How it works',array('controller' => 'Users','action' => 'HowItWork'),array('class' => $HIWClass)); ?></li>
						<li><?php echo $this->Html->link('Cities',array('controller' => 'Users','action' => 'cities'),array('class' => $CitiesClass)); ?></li>
						<li><?php echo $this->Html->link('Contact Us',array('controller' => 'Users','action' => 'contactUs'),array('class' => $contactusClass)); ?></li>
					</ul>
					</nav>
				</div>
			</header>
			<div class="container">
            <?php echo $this->Form->create('Product', array('id' =>'calculate_frm','class' => '','url' => array('controller' => 'users', 'action' => 'calculateDistance'))); ?>
				<div class="home_ser wow slideInUp">
					<div class="half1">
						<label>From</label>
						<input type="text" placeholder="Starting Place" id="starting_place" class="in1 validation" name="start_place">
                        <input type="hidden" value="0" id="frm" />
						<span class="error_text">No starting place found</span>
					</div>
					<div class="half2">
						<label>To</label>
						<input type="text" placeholder="Destination" id="destination_place" class="in1 validation" name="destination_place">
                        <input type="hidden" value="0" id="desti" />
                        <span class="error_text">No starting place found</span>
					</div>
					<label>Date &amp; Time</label>
					<div class="line_2_inputs">
						<input class="in2 validation" type="text" id="trip_date" placeholder="DD/MM/YY"  name="date">-
						<select class="validation"  name="hour">
                        <?php for($i=0;$i<24;$i++){
							if($i>12){
								$k=$i-12;
								if($k<10){
									$hour='<option value="'.$i.'">'.sprintf("%02d", $k).'&nbsp;PM</option>';
									}
								else{
								$hour='<option value="'.$i.'">'.sprintf("%02d", $k).'&nbsp;PM</option>';
								}
								}else{
								if($i<10){
									$hour='<option value="'.$i.'">'.sprintf("%02d", $i).'&nbsp;AM</option>';
									}
								else{
								$hour='<option value="'.$i.'">'.sprintf("%02d", $i).'&nbsp;AM</option>';
								}
								}
								
							echo $hour;
							}?>
                        </select>:
						<select class="validation"  name="minute"><?php for($i=0;$i<60;$i++){
							if($i<10){
									$minute='<option value="'.$i.'">'.sprintf("%02d", $i).'</option>';
									}
								else{
								$minute='<option value="'.$i.'">'.sprintf("%02d", $i).'</option>';
								}
								echo $minute;
							
							}?></select>
						<input type="submit" class="sub_ser hvr-shutter-out-vertical" value="Book Your Journey">
                        <span class="error_text">No starting place found</span>
					</div>
				</div>
                <?php echo $this->Form->end(); ?>
			</div>
		</div>