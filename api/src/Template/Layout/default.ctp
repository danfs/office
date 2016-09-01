<?php
use Cake\Core\Configure;
$cakeDescription = 'CakePHP: the rapid development php framework';
?>
<!DOCTYPE html>
<html>
<head>
    <?= $this->Html->charset() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?php echo $title_for_layout; ?>
    </title>
    <?= $this->Html->meta('icon') ?>

    <?= $this->Html->css('bootstrap.min.css') ?>
    <?= $this->Html->css('font-awesome.css') ?>
    <?= $this->Html->css('style.css') ?>
    <?= $this->Html->css('animate.css') ?>
    <?= $this->Html->css('jquery-ui.min.css') ?>
    

    <?= $this->fetch('meta') ?>
    <?= $this->fetch('css') ?>
    
</head>
<body>
		<div class="mob_icon">
			<div class="icon__bar"></div>
			<div class="icon__bar"></div>
			<div class="icon__bar"></div>
		</div>
		<div class="mob_menu">
			<ul>
				<li><a href="#" class="active">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="#">Case Studies</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</div>
		<div class="top_line wow slideInDown"></div>
		<?php echo $this->element('header'); ?>
		<?php echo $this->fetch('content'); ?>
        <?php echo $this->element('footer'); ?>
    <?= $this->Html->script('jquery.js')?>
    <?= $this->Html->script('jquery-migrate-1.2.1.min.js')?>
    <?= $this->Html->script('bootstrap.min.js')?>
     <?= $this->Html->script('wow.min.js')?>
    <?= $this->Html->script('jquery-ui.min.js')?>
    
    <script type="text/javascript">
	var ajax_url='<?php echo Configure::read("Site.url")?>';
	</script>
    <?= $this->Html->script('custom.js')?>
    
    <?= $this->fetch('script') ?>
</body>
</html>
