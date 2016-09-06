<?php
error_reporting(E_ALL);
ini_set('display_errors', TRUE);
session_start();
include('inc/connection.php');

if(!$_SESSION['sess_uid']) {
	header("Location: /checkout");
	exit();
}

$do = filter_input(INPUT_GET, 'do', FILTER_SANITIZE_STRING,FILTER_FLAG_NO_ENCODE_QUOTES);
$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_STRING,FILTER_FLAG_NO_ENCODE_QUOTES);
$process = filter_input(INPUT_POST, 'process', FILTER_SANITIZE_STRING,FILTER_FLAG_NO_ENCODE_QUOTES);
$delivery = filter_input(INPUT_POST, 'delivery', FILTER_SANITIZE_STRING,FILTER_FLAG_NO_ENCODE_QUOTES);
$del_addr = filter_input(INPUT_POST, 'del_addr', FILTER_SANITIZE_STRING,FILTER_FLAG_NO_ENCODE_QUOTES);
$pay_addr = filter_input(INPUT_POST, 'pay_addr', FILTER_SANITIZE_STRING,FILTER_FLAG_NO_ENCODE_QUOTES);
$comments = filter_input(INPUT_POST, 'comments', FILTER_SANITIZE_STRING,FILTER_FLAG_NO_ENCODE_QUOTES);
$disc_rate = $_REQUEST['disc_curr'];
$disc_amt = $_REQUEST['disc_amt'];
$total_amt = $_REQUEST['total_amt'];

if($del_addr != '') {
	$_SESSION['del_addr'] = $del_addr;
	$_SESSION['pay_addr'] = $pay_addr;
	$_SESSION['comments'] = $comments;

	$sql = "SELECT * FROM op_address WHERE address_id = $del_addr";
	$result = $conn->query($sql);
	$row = $result->fetch_object();

	$sql = "SELECT * FROM op_country WHERE country_id = $row->country_id";
	$result = $conn->query($sql);
	$row = $result->fetch_object();

	$_SESSION['sess_zone'] = $row->zone;

}
	$sql_payment = "
		  SELECT op_address.*, op_country.*, op_zone.*, op_country.name AS countryName, op_zone.name AS regionName, op_address.zone_id AS zid, op_customer.*, op_customer.address_id as caid, op_address.address_id as aaid, op_address.firstname as first, op_address.lastname as surname
				   FROM op_address
				   LEFT JOIN op_country
				   ON op_address.country_id = op_country.country_id
				   LEFT JOIN op_zone
				   ON op_address.zone_id = op_zone.zone_id
				   LEFT JOIN op_customer
				   ON op_address.customer_id = op_customer.customer_id
		   WHERE op_address.address_id = '".$_SESSION['pay_addr']."'";

	$result_payment = $conn->query($sql_payment);
	$row_payment = $result_payment->fetch_object();





if($process == 'updateCart') {
	
	$sql = "select * from op_order where order_id = '".$_SESSION['order_id']."'";
	$result = $conn->query($sql);
	$row = $result->fetch_object();
	
	#$sql = "delete from orders_prod where order_id='".$tt['id']."'";
	
	$sql = "delete from op_order where order_id = '".$_SESSION['order_id']."'";
	$result = $conn->query($sql);
	
	$comments = mysqli_real_escape_string($conn, $_SESSION['comments']);
	$uid = $_SESSION['sess_uid'];
	$del_addr = $_SESSION['del_addr'];
	$pay_addr = $_SESSION['pay_addr'];
	
	$sql_user = "select * from op_customer where customer_id = '$uid'";
	$result_user = $conn->query($sql_user);
	$row_user = $result_user->fetch_object();
	
	$firstname = mysqli_real_escape_string($conn, $row_user->firstname);
	$lastname = mysqli_real_escape_string($conn, $row_user->lastname);
	$email = $row_user->email;
	$telephone = $row_user->telephone;
	$fax = $row_user->fax;
	$customer_group_id = $row_user->customer_group_id;
	
	$sql_del = "
		   SELECT op_address.*, op_country.*, op_zone.*, op_country.name AS countryName, op_zone.name AS regionName
		   FROM op_address
		   LEFT JOIN op_country
		   ON op_address.country_id = op_country.country_id
		   LEFT JOIN op_zone
		   ON op_address.zone_id = op_zone.zone_id
		   WHERE address_id = '$del_addr'";
	$result_del = $conn->query($sql_del);
	$row_del = $result_del->fetch_object();
	
	$shipping_firstname = mysqli_real_escape_string($conn, $row_del->firstname);
	$shipping_lastname = mysqli_real_escape_string($conn, $row_del->lastname);
	$shipping_company = $row_del->company;
	$shipping_address_1 = $row_del->address_1;
	$shipping_address_2 = $row_del->address_2;
	$shipping_city = $row_del->city;
	$shipping_postcode = $row_del->postcode;
	$shipping_zone = $row_del->regionName;
	$shipping_zone_id = $row_del->zone_id;
	$shipping_country = $row_del->countryName;
	$shipping_country_id = $row_del->country_id;
	$shipping_method = $delivery == '9.99' ? 'Next Day' : 'UK Shipping';
	
	$sql_pay = "
		   SELECT op_address.*, op_country.*, op_zone.*, op_country.name AS countryName, op_zone.name AS regionName
		   FROM op_address
		   LEFT JOIN op_country
		   ON op_address.country_id = op_country.country_id
		   LEFT JOIN op_zone
		   ON op_address.zone_id = op_zone.zone_id
		   WHERE address_id = '$pay_addr'";
	$result_pay = $conn->query($sql_pay);
	$row_pay = $result_pay->fetch_object();
	
	$payment_firstname = mysqli_real_escape_string($conn, $row_pay->firstname);
	$payment_lastname = mysqli_real_escape_string($conn, $row_pay->lastname);
	$payment_company = $row_pay->company;
	$payment_address_1 = $row_pay->address_1;
	$payment_address_2 = $row_pay->address_2;
	$payment_city = $row_pay->city;
	$payment_postcode = $row_pay->postcode;
	$payment_zone = $row_pay->regionName;
	$payment_zone_id = $row_pay->zone_id;
	$payment_country = $row_pay->countryName;
	$payment_country_id = $row_pay->country_id;
	
	
	$sql = "insert into op_order set customer_id = '$uid', order_status_id = 0, currency = 'GBP', currency_id = 1, language_id = 1, payment_method = 'PayPal', store_name = 'Metalcraft', store_url = 'http://www.metal-craft.co.uk/', firstname = '$firstname', lastname = '$lastname', email = '$email', telephone = '$telephone', fax = '$fax', shipping_firstname = '$shipping_firstname', shipping_lastname = '$shipping_lastname', shipping_company = '$shipping_company', shipping_address_1 = '$shipping_address_1', shipping_address_2 = '$shipping_address_2', shipping_city = '$shipping_city', shipping_postcode = '$shipping_postcode', shipping_zone = '$shipping_zone', shipping_zone_id = '$shipping_zone_id', shipping_country = '$shipping_country', shipping_country_id = '$shipping_country_id', shipping_method = '$shipping_method', payment_firstname = '$payment_firstname', payment_lastname = '$payment_lastname', payment_company = '$payment_company', payment_address_1 = '$payment_address_1', payment_address_2 = '$payment_address_2', payment_city = '$payment_city', payment_postcode = '$payment_postcode', payment_zone = '$payment_zone', payment_zone_id = '$payment_zone_id', payment_country = '$payment_country', payment_country_id = '$payment_country_id', customer_group_id = '$customer_group_id', comment = '$comments', value = '1', ip = '$_SERVER[REMOTE_ADDR]', date_added = now(), date_modified = now()";
	$result = $conn->query($sql);if(!$result) die($conn->error);
	 
	$id = $conn->insert_id;
	$_SESSION['order_id'] = $id;
	
		$total_price = 0;
		
		$sql = "select orders_temp.*, orders_temp.id as eid, orders_temp.price as uprice, op_product.*, op_product_description.*, (orders_temp.price * orders_temp.qty) as multiplePrice from orders_temp LEFT JOIN op_product on (orders_temp.event_id = op_product.product_id) LEFT JOIN op_product_description ON op_product.product_id = op_product_description.product_id where session_id='".session_id()."'";
		$result = $conn->query($sql);
		
		while ($row_prd = $result->fetch_object()) {
			$prod_id = $row_prd->event_id;
			$qty = $row_prd->qty;
			$price = $row_prd->uprice;
			$name = mysqli_real_escape_string($conn, $row_prd->name);
			$code = $row_prd->model;
			$letters = $row_prd->letters;
			$fullprice = $price*$qty;
			$total_price = $total_price+$price*$qty;
			$total_price = $total_price;
			
			$sql1 = "insert into op_order_product set order_id='$id',quantity='$qty',price='$price',total='$fullprice',tax='20',product_id='$prod_id',options='$letters',name='$name',model='$code'";
			$result1 = $conn->query($sql1);
		}
		
		$grandtotal = ($total_amt+$delivery) - $disc_amt;
		$deltext = $delivery == 0 ? '0.00' : $delivery;
		
		$sql2 = "update op_order set total = '" . ($total_amt - $disc_amt) . "' WHERE order_id = $id";
		$result2 = $conn->query($sql2);
		
		$sql3 = "insert into op_order_total set order_id = '$id', title = 'Sub-Total', text = '&pound;$total_amt', value = '$total_amt', sort_order = 1";
		$result3 = $conn->query($sql3);
		
		$sql4 = "insert into op_order_total set order_id = '$id', title = 'Delivery', text = '&pound;$deltext', value = '$delivery', sort_order = 3";
		$result4 = $conn->query($sql4);
		
		$sql5 = "insert into op_order_total set order_id = '$id', title = 'Total', text = '&pound;$grandtotal', value = '$grandtotal', sort_order = 6";
		$result5 = $conn->query($sql5);
		
		if ($disc_amt > 0) {
			$sql6 = "insert into op_order_total set order_id = '$id', title = 'Discount ($disc_rate)', text = '&pound;$disc_amt', value = '$disc_amt', sort_order = 5";
			$result6 = $conn->query($sql6);
		}
		
		$total_price = $total_amt - $disc_amt;

		/*for payment */
		     require_once("paypal_pro.inc.php");

   
$firstName=$_SESSION['firstname'] =urlencode( $_POST['firstName']);
$lastName =urlencode( $_POST['lastName']);
$creditCardType =urlencode( $_POST['creditCardType']);
$creditCardNumber = urlencode($_POST['creditCardNumber']);
$expDateMonth =urlencode( $_POST['expDateMonth']);
$padDateMonth = str_pad($expDateMonth, 2, '0', STR_PAD_LEFT);
$expDateYear =urlencode( $_POST['expDateYear']);
$cvv2Number = urlencode($_POST['cvv2Number']);
$address1 = urlencode($_POST['address1']);
$address2 = urlencode($_POST['address2']);
$city = urlencode($_POST['city']);
$state =urlencode( $_POST['state']);
$country =urlencode( $_POST['country']);
$zip = urlencode($_POST['zip']);
//$amt = urlencode($_SESSION['amount']);
// $oid = urlencode($_REQUEST['order_id']);
$currencyCode="GBP";
$paymentAction = urlencode("Sale");

	$nvpRecurring = '';
	$methodToCall = 'doDirectPayment';


//$nvpstr='&PAYMENTACTION='.$paymentAction.'&AMT='. $grandtotal.'&CREDITCARDTYPE='.$creditCardType.'&ACCT='.$creditCardNumber.'&EXPDATE='.$padDateMonth.$expDateYear.'&CVV2='.$cvv2Number.'&FIRSTNAME='.$firstName.'&LASTNAME='.$lastName.'&STREET='.$address1.'&CITY='.$city.'&STATE='.$state.'&ZIP='.$zip.'&COUNTRYCODE='.$country.'&CURRENCYCODE='.$currencyCode.'&CUSTOM='.$id;

$nvpstr='&PAYMENTACTION='.$paymentAction.'&AMT=0.10&CREDITCARDTYPE='.$creditCardType.'&ACCT='.$creditCardNumber.'&EXPDATE='.$padDateMonth.$expDateYear.'&CVV2='.$cvv2Number.'&FIRSTNAME='.$firstName.'&LASTNAME='.$lastName.'&STREET='.$address1.'&CITY='.$city.'&STATE='.$state.'&ZIP='.$zip.'&COUNTRYCODE='.$country.'&CURRENCYCODE='.$currencyCode.'&CUSTOM='.$id;

$paypalPro = new paypal_pro('barry.wood_api1.jandcrwood.co.uk', '7V8QBYCS8FCU42VT', 'AFcWxV21C7fd0v3bYYYRCpSSRl31A8lmqW27mghaQN-i3-W1nrFEviMa', '', '', TRUE, FALSE );
$resArray = $paypalPro->hash_call($methodToCall,$nvpstr);
print_r($resArray);
exit;
$ack = strtoupper($resArray["ACK"]);
 $this_script = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['PHP_SELF'];
            
            $returnURL = $this_script . '?action=success';
            $cancelURL = $this_script . '?action=cancel';
      if($ack!="SUCCESS")
{
 
 header("Location: /checkout?error=payment&e_msg=".urlencode($resArray['L_LONGMESSAGE0']));

}

else {
                
                $oid = (int)$id;
               
                    
                    
                    if ($oid) {
                        $TRANSACTIONID = $resArray['TRANSACTIONID'];
                        $sql = "delete from orders_temp where session_id = '" . session_id() . "'";
                        $result = $conn->query($sql);
                        $sql = "select * from op_order where order_id = '$oid'";
                        $result = $conn->query($sql);
                        $li = $result->fetch_object();
                        
                        
                        if ($li->order_status_id == 0) {
                            $sql = "update op_order set order_status_id = '1' , transactionid = '$TRANSACTIONID'  where order_id = '$oid'";
                            $result = $conn->query($sql);
                            
                            //exit;
                            ob_start(); ?>
							<style type="text/css">
								body {font-family:Arial, Helvetica, sans-serif;}
								p, td {font-size:12px;}
								h3 {font-size:14px;}
								a {	color:#f27022;}
							</style>
							<table width="550" border="0" align="center" cellpadding="1" cellspacing="0" bgcolor="#CCCCCC">
								<tr>
									<td>
										<table cellspacing="0" cellpadding="0" border="0" width="100%" bgcolor="#FFFFFF">
											<tr>
												<td><img src="http://www.metal-craft.co.uk/images/email-header.jpg" width="548" height="110" /></td>
											</tr>
											<tr>
												<td style="padding:15px 10px;"><p>Hi <?php
                            echo $li->firstname; ?>,</p>
													<p>Thank you for your order from <a href="http://www.metal-craft.co.uk">www.metal-craft.co.uk</a>, your order is currently being processed and you will shortly receive an email with an update. Your order details are below.</p>
													<table width="100%" border="0" cellpadding="2">
														<tr>
															<td colspan="2"><h3 style="margin:0px 0px 3px 0px;font-size:14px;">Contact Details</h3></td>
														</tr>
														<tr>
															<td width="25%">Name</td>
															<td width="75%"><?php
                            echo $li->firstname . ' ' . $li->lastname; ?></td>
														</tr>
														<tr>
															<td>Email Address</td>
															<td><a href="mailto:<?php
                            echo $li->email; ?>"><?php
                            echo $li->email; ?></a></td>
														</tr><?php
                            $payment_address = array(1 => $li->payment_company, $li->payment_address_1, $li->payment_address_2, $li->payment_city . ', ' . $li->payment_postcode, $li->payment_zone, $li->payment_country);
                            $payment_address = implode("<br>", array_filter($payment_address));
                            $shipping_address = array(1 => $li->shipping_company, $li->shipping_address_1, $li->shipping_address_2, $li->shipping_city . ', ' . $li->shipping_postcode, $li->shipping_zone, $li->shipping_country);
                            $shipping_address = implode("<br>", array_filter($shipping_address)); ?>
														<tr>
															<td valign="top">Invoice Address</td>
															<td><?php
                            echo $payment_address; ?></td>
														</tr>
														<tr>
															<td valign="top">Shipping Address</td>
															<td><?php
                            echo $shipping_address; ?></td>
														</tr>
														<tr>
															<td>Telephone</td>
															<td><?php
                            echo $li->telephone; ?></td>
														</tr>
														<tr>
															<td>Order Date</td>
															<td><?php
                            echo date('d/m/Y') ?></td>
														</tr>
														<tr>
															<td>Order Number</td>
															<td><?php
                            echo $oid; ?></td>
														</tr>
													</table>
													<h2 style="margin:15px 0px 10px 0px;font-size:14px;">Order Details</h2>
													<?php
                            $sql_prod = "
													SELECT op_order.*, op_order.total AS bigtotal, op_order_status.*, op_order_product.*, op_order_product.name AS pname
													FROM op_order
													LEFT JOIN op_order_status
													ON op_order.order_status_id = op_order_status.order_status_id
													LEFT JOIN op_order_product
													ON op_order.order_id = op_order_product.order_id
													WHERE op_order.order_id = '$oid'
													";
                            $result_prod = $conn->query($sql_prod);
                            if (!$result_prod) die($conn->error); ?>
													<table width="100%" border="0" cellspacing="0" cellpadding="5">
														<thead>
															<tr>
																<td width="164" bgcolor="#CCCCCC"><strong>Product</strong></td>
																<td width="54" align="center" bgcolor="#CCCCCC"><strong>Code</strong></td>
																<td width="47" align="center" bgcolor="#CCCCCC"><strong>Qty</strong></td>
																<td width="75" align="right" bgcolor="#CCCCCC"><strong>Unit Price</strong></td>
																<td width="75" align="right" bgcolor="#CCCCCC"><strong>Total Price</strong></td>
															</tr>
														</thead>
														<tbody>
															<?php
                            while ($row_prod = $result_prod->fetch_object())
							
							 { ?>
															<tr>
																<td><?php
                                echo $row_prod->pname; ?>
																<?php
                                if ($row_prod->options) {
                                    echo '<br> - <strong>' . $row_prod->options . '</strong>';
                                }
?>
																</td>
																<td align="center"><?php
                                echo $row_prod->model; ?></td>
																<td align="center"><?php
                                echo $row_prod->quantity; ?></td>
																<td align="right"><?php
                                echo '&pound;' . number_format($row_prod->price, 2); ?></td>
																<td align="right"><?php
                                echo '&pound;' . number_format($row_prod->total, 2); ?></td>
																</tr>
																<?php
                            } ?>
															<tr>
																<td colspan="5"><hr size="1" noshade="noshade" /></td>
															</tr>
														</tbody>
														<tbody id="totals">
															<?php
                            $sql_tot = "select * from op_order_total where order_id = '$oid' ORDER BY sort_order ASC";
                            $result_tot = $conn->query($sql_tot);
                            while ($row_tot = $result_tot->fetch_object()) {
?>
															<tr>
																<td></td>
																<td colspan="3" align="right"><strong><?php
                                echo $row_tot->title; ?></strong></td>
																<td align="right"><strong><?php
                                echo '&pound;' . number_format($row_tot->value, 2); ?></strong></td>
															</tr>
															<?php
                            } ?>
														</tbody>
													</table>
													<p>If you wish to contact us regarding your order simply reply to this email.</p>
													<p><strong>Metalcraft</strong><br />
													<a href="http://www.metal-craft.co.uk">www.metal-craft.co.uk</a></p></td>
												</tr>
											</table>
										</td>
									</tr>
								</table><?php
                            $contents = ob_get_contents();
                            ob_end_clean();
                            $sql = "select * from op_order where order_id = '$oid'";
                            $result = $conn->query($sql);
                            $data = $result->fetch_object();
                            @include_once('class.phpmailer.php');
							@include_once('class.smtp.php');
                            $mail = new PHPMailer();
                            $body = $contents;
                            $mail->From = "info@jandcrwood.co.uk";
                            $mail->FromName = "Metalcraft";
                            $mail->Subject = "Thank you for shopping with Metalcraft - Order No: " . $oid;
                            $mail->AltBody = "To view the message, please use an HTML compatible email viewer!";
                            //$mail->MsgHTML($body);
							$mail->MsgHTML('rahul2ricky@gmail.com');
                            $mail->AddAddress($data->email);
                            $mail->AddBCC("info@jandcrwood.co.uk");
                            $mail->AddBCC("bob@princesave.co.uk");
                           
                            $mail->IsSMTP();
                            $mail->SMTPAuth = "true";
                            //$mail->SMTPDebug  = 2;
							
							$mail->Username = "mailer@arrivalbusinessservices.co.uk"; //valid email id of the domain
							$mail->Password = "161HighStreet"; //password for abc@xyz
							$mail->Host 	= "arrivalbusinessservices.co.uk"; //Your SMTP mail server
							$mail->Port = 25; //Your SMTP mail server
							
							if (!$mail->Send()) {
								$mail->Host 	= "mail.princesave.co.uk";
								$mail->Username = "bob@princesave.co.uk";
								$mail->Password = "edward";
								$mail->Send();
							}
							
                            /*$mail->Host = "mail.arrivalbusiness.co.uk";
                            $mail->Username = "postmaster@arrivalbusiness.co.uk";
                            $mail->Password = "edward";
                            $mail->Port = 587;
                            if (!$mail->Send()) {
                                $mail->Host = "mail.princesave.co.uk";
                                $mail->Username = "bob@princesave.co.uk";
                                $mail->Port = 25;
                                $mail->Send();
                            }*/
                        }
                    }
               // exit;
                header("Location: /return");
            }





		#header("Location: /paypal_test.php?ord_id=$id&amount=$total_price&delivery=$delivery");
	//	header("Location: /checkout_process.php?ord_id=$id&amount=$total_price&delivery=$delivery");
		
		exit();
}
/*$where='';
		  if(session_id())
		  {
		  $sess_id=session_id();
		  $where.= " and session_id='$sess_id'";
		  }
		  $order_by='orders_temp.id';
		  if(isset($_GET['$order_by']))
		  {
		  $order_by=$_GET['$order_by'];
		  }
		  $order_by2='desc';
		  if(isset($_GET['$order_by2']))
		  {
		  $order_by2=$_GET['$order_by2'];
		  }
		$query_prodlist=mysql_query("select orders_temp.*,orders_temp.id as eid, product.id as event_id, product.*,(orders_temp.price*orders_temp.qty) as multiplePrice from orders_temp inner join product on (orders_temp.event_id=product.id) where 1=1 $where order by $order_by $order_by2", $conn) or die(mysql_error());
		$row=mysql_num_rows($query_prodlist);
		
	 for($i=1;$prodlist=mysql_fetch_array($query_prodlist);$i++) {
		 $totalPrice2 += number_format($prodlist["multiplePrice"],2);
	 }
	 
if (isset($_POST['add_code'])) {
	$query_disc=mysql_query("select * from codes where ccode = '$_POST[promo]'", $conn) or die(mysql_error());
	$discrow=mysql_fetch_assoc($query_disc);
	$totalRows_discrow = mysql_num_rows($query_disc);
	$_SESSION['del_added'] = $_POST['del_added'];
	if ($totalRows_discrow == 0) {
		$_SESSION['code_message'] = "Invalid Code!";
	}
}*/



if($do == "deleteproducts") {
	$query = "delete from orders_temp where id=".$id;
	$result = $conn->query($query);	
	header("location: /checkout");
	exit();
}
$query_user = "select * from op_customer where customer_id = '$_SESSION[sess_uid]'";
$result = $conn->query($query_user);
$row_user = $result->fetch_object();

$query_country = "select op_address.*, op_country.* FROM op_address LEFT JOIN op_country ON op_address.country_id = op_country.country_id where zone = '$_SESSION[sess_zone]'";
$result = $conn->query($query_country);
$row_country = $result->fetch_object();

$where = '';

if(session_id()) {
	$sess_id = session_id();
	$where.= " and session_id = '$sess_id'";
}

$query_prodlist = "select orders_temp.*, orders_temp.id as eid, orders_temp.price as uprice, op_product.*, (orders_temp.price * orders_temp.qty) as multiplePrice from orders_temp inner join op_product on (orders_temp.event_id = op_product.product_id) $where order by orders_temp.id";
$result_prodlist = $conn->query($query_prodlist);
$num_rows = $result_prodlist->num_rows;
?>
<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if IE 9]>    <html class="no-js ie9" lang="en"> <![endif]-->
<!--[if gt IE 9]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Metalcraft</title>
<meta name="description" content="" />
<?php include('inc/head_assets.php'); ?>
<?php include('inc/google.php'); ?>
</head>

<body>
<?php include('inc/header.php'); ?>
<section class="content-outer">
  <div class="container">
    <div class="row">
      <article class="twelve columns top_content pos_rel">
     <?php if(isset($_GET['error']) && $_GET['error']!=""){ ?>

      <div class="checkout_error mess_show">
      
   		 Error:<?php echo $_GET['e_msg']; ?>
      </div>
      <?php } ?>
      <h1>Checkout</h1>
      <p class="standout">Please note – those customers (businesses) in EU countries who possess a valid VAT Registration Number should not click on the Payment button below. Instead, please contact us by email to <a href="mailto:info@jandcrwood.co.uk">info@jandcrwood.co.uk</a> so that we can send a Pro-forma Invoice (without VAT added) together with alternative payment method details. </p>
      </article>
      </div>
    <div class="row">
        <article class="twelve columns">
    <?php if ($num_rows > 0) { ?>
    <form name="buy" id="buy" action="3dsecure/test.php" method="post" >
      <input type="hidden" name="process" value="updateCart">
      <table class="basket">
        <thead>
          <tr>
            <th>Product</th>
            <?php /*?><td>Size</td><?php */?>
            <th class="basket-code">Product Code</th>
            <th class="basket-price">Price (£)</th>
            <th class="basket-qty">Quantity</th>
            <th colspan="2">Total (£)</th>
            </tr>
        </thead>
        <tbody>
        <?php 
		 for($i=1; $prodlist = $result_prodlist->fetch_object(); $i++) {
			$img = $prodlist->prodImage1;
			$price = number_format($prodlist->uprice,2);
			
			$sql_pic = "SELECT op_product.*, op_product_description.* FROM (op_product LEFT JOIN op_product_description ON op_product.product_id = op_product_description.product_id) WHERE op_product.product_id = $prodlist->event_id";
			$result_pic = $conn->query($sql_pic);if(!$result_pic) die($conn->error);
			$row_pic = $result_pic->fetch_object();
			
			$pieces = explode(".jpg", $row_pic->image);
			$image = 'uploads/products/' . $pieces[0] . '-75x75.jpg';

			if ($row_country->zone != 4) {
				$prod_price = number_format($row_pic->price_ex_vat,2);
				$total_prod_price = number_format($row_pic->price_ex_vat * $prodlist->qty,2);
				$total_prod_price2 = number_format($row_pic->price_inc_vat * $prodlist->qty,2);
				//$total_prod_price = number_format($prodlist->multiplePrice,2);
			} else {
				//$prod_price = $price;
				$prod_price = number_format($row_pic->price_ex_vat,2);
				$total_prod_price = number_format($row_pic->price_ex_vat * $prodlist->qty,2);
				$total_prod_price2 = number_format($row_pic->price_inc_vat * $prodlist->qty,2);
				//$total_prod_price = number_format($prodlist->multiplePrice,2);
			}
			
		?>
        <input type="hidden" name="id[]" id="id[]" value="<?php echo $prodlist->eid; ?>" >
		<input type="hidden" name="price[]" id="price[]" value="<?php echo $price; ?>" />
        <tr>
          <td class="basket-title">
          <table>
            <tr>
              <td class="basket-img"><img src="/<?php echo $image; ?>" /></td>
              <td class="prod-name" data-code="<?php echo $row_pic->model; ?>" data-price="<?php echo 'Unit Price: £' . $prod_price; ?>"><?php echo $row_pic->name; ?>
              <?php
				  if ($prodlist->letters) {
					  echo '<br> - <strong>' . $prodlist->letters . '</strong>';
				  }
			  ?>
              </td>
            </tr>
          </table>
          </td>
          <?php /*?><td><?php echo $prodlist->size; ?></td><?php */?>
          <td class="basket-code"><?php echo $row_pic->model; ?></td>
          <td class="basket-price">&pound;<?php echo $prod_price; ?></td>
          <td><?php echo $prodlist->qty; ?></td>
          <td>&pound;<?php
			echo $total_prod_price;
			$totalPrice3 += $prodlist->multiplePrice;
			$vatdiff = ($totalPrice3 - $total_prod_price);
			$excTot += $total_prod_price;
			if ($row_pic->price_ex_vat != $row_pic->price_inc_vat) {
				$vatable += $total_prod_price;
				$vatableInc += $total_prod_price2;
			}
			?>
			</td>
          <td><a href="#" class="delete" id="<?php echo $prodlist->eid; ?>"><img src="/images/delete.png" alt="Remove" /></a></td>
        </tr>
        <? } ?>
        <tr>
        <td colspan="100%">
        <table>
        <tr>
          <td class="tcs"><label>
            <input type="checkbox" name="terms" id="terms">
            I agree to the <a href="#" class="icon switch" gumby-trigger="#modal1">terms and conditions</a> of this sale</label></td>
          <td class="thetotal">
            <?php
			  $vatrate = ($totalPrice3/1.2);
              if ($row_country->zone != 4) { 
			?>
            <p><strong>Price Excluding VAT: &pound;<span class="subtotal">
              <?php echo number_format($excTot,2)?>
            </span></strong></p>
            <?php } else { ?>
            <p><strong>Sub Total: &pound;<span class="subtotal">
              <?php echo number_format($excTot,2)?>
            </span></strong></p>
            <?php } ?>
            <p><span class="code-message"></span>Discount Code:
          			<span class="field">
          			<input name="discount" type="text" id="discount" size="8" class="input disc_box" />
                    </span>
                    
                      <a href="#" class="discount">apply</a>
                    <input name="disc_amt" type="hidden" id="disc_amt" />
                    <input name="disc_curr" type="hidden" id="disc_curr" />
                    </p>
            <?php if ($row_country->zone == 1) { ?>
            <?php
            	if ($totalPrice3 < 21) {
					$delrate = '4.50';
					$delnovat = $delrate/1.2;
					$delvat = number_format($delrate - $delnovat,2);
				} else if ($totalPrice3 > 21 && $totalPrice3 <= 100) {
					$delrate = '6.99';
					$delnovat = $delrate/1.2;
					$delvat = number_format($delrate - $delnovat,2);
				} else if ($totalPrice3 > 100) {
					$delrate = '0';
					$delnovat = $delrate;
					$delvat = 0;
				}
				//$delvat = $delrate/100 * 20;
				
			?>
            <div class="field">
            <div class="picker">
              <select name="delivery" id="delivery">
                <option selected="selected" value="">Delivery Type:-</option>
                <option value="<?php echo $delnovat; ?>" data-vat="<?php echo $delvat; ?>">Standard Delivery (<?php echo $delrate == '0' ? 'FREE' : '&pound;' . number_format($delnovat,2); ?>)</option>
                <option value="8.33" data-vat="1.66">Next Day (£8.33)</option>
              </select>
              </div>
              </div>
            <p><strong>Delivery: <span class="del">(select)</span></strong></p>
            <?php
        		} else {
	            	if ($row_country->zone == 2) { // ZONE 2 RATES
		            	if ($totalPrice3 < 21) {
							$delrate = '8.00';
							$delnovat = $delrate/1.2;
						} else if ($totalPrice3 > 21 && $totalPrice3 <= 250) {
							$delrate = '12.50';
							$delnovat = $delrate/1.2;
						} else if ($totalPrice3 > 250) {
							$delrate = '25.00';
							$delnovat = $delrate/1.2;
						}
					} else if ($row_country->zone == 3) { // ZONE 3 RATES
		            	if ($totalPrice3 < 31) {
							$delrate = '12.50';
							$delnovat = $delrate/1.2;
						} else if ($totalPrice3 > 31 && $totalPrice3 <= 500) {
							$delrate = '27.50';
							$delnovat = $delrate/1.2;
						} else if ($totalPrice3 > 500) {
							$delrate = '40.00';
							$delnovat = $delrate/1.2;
						}
					} else if ($row_country->zone == 4) { // ZONE 4 RATES
		            	if ($totalPrice3 <= 36) {
							$delrate = '10.00';
							$delnovat = $delrate;
						} else if ($totalPrice3 > 36 && $totalPrice3 <= 600) {
							$delrate = '40.00';
							$delnovat = $delrate;
							$caveat = '<br><small>*Includes £25 Customs Clearance<br>Note – there may be additional duty to pay (see our <a href="#" class="icon switch" gumby-trigger="#modal1">Terms & Conditions</a>)</small>';
						} else if ($totalPrice3 > 600) {
							$delrate = '60.00';
							$delnovat = $delrate;
							$caveat = '<br><small>*Includes £25 Customs Clearance<br>Note – there may be additional duty to pay (see our <a href="#" class="icon switch" gumby-trigger="#modal1">Terms & Conditions</a>)</small>';
						}
					}
			?>
          	<input name="delivery" type="hidden" id="delivery" value="<?php echo number_format($delnovat,2); ?>" />
            <p><strong>Delivery: <span class="del">(select)</span></strong><?php echo $caveat; ?></p>
            <?php } ?>
              <p class="discount_text"><strong>Discount: -&pound;<span class="disc_num"></span></strong></p>
              <?php
			  $vatrate = $row_country->zone == 1 ? (($excTot + $disc_price)*1.2) : (($vatable + $disc_price + $delnovat)*1.2);
			  $delvatamt = $delrate - $delnovat;
			  $withoutvat = $row_country->zone == 1 ? $excTot + $disc_price : $vatable + $disc_price + $delnovat;
			  $vat = $row_country->zone != 4 ? number_format($vatrate - $withoutvat,2) : 0;
			  ?>
            <?php if ($row_country->zone != 4) { ?>
              <p>VAT at 20%: &pound;<span class="vat_num"><?php echo number_format($vat,2)?></span></strong></p>
			<?php } 
				if ($row_country->zone != 4) {
					$bigtotal = $row_country->zone == 1 ? number_format(($excTot + $vat) - $disc_price,2) : number_format(($excTot + $delnovat + $vat) - $disc_price,2);
					$totally = $totalPrice3;
				} else {
					$bigtotal = number_format(($excTot + $delrate) - $disc_price,2);
					$totally = $vatrate;
				}
			?>
            <p class="total_line">Total: &pound;<span class="total"><?php echo $bigtotal; ?></span></p></td>
            <input name="delivery_amt" type="hidden" id="delivery_amt" value="<?php echo number_format($delrate,2); ?>" />
            <input name="total_amt" type="hidden" id="total_amt" value="<?php echo number_format($excTot + $vat,2); ?>" />
            <input name="vatonload" type="hidden" id="vatonload" value="<?php echo number_format($vat,2); ?>" />
          </tr>
          </table>
        </td>  
        </tr>
          </tbody>
      </table>
      
    <section id="payment_section">
<div class="container">
<div class="row">
<font size=2 color=skyblue face=Verdana><h2 class="titl">Checkout Process</h2></font>
<br><br>

<input type=hidden name=paymentType value="<?=$paymentType?>" />
<input type=hidden name=custom value="<?=$ord_id; ?>"/>
<table width="600"   border="0" cellpadding="10" cellspacing="0" class="frmtbl">
	<tr>
		<td align=right>First Name:</td>
		<td align=left><input type=text size=30 maxlength=32 name=firstName value="<?php echo  mysqli_real_escape_string($conn, $row_payment->firstname); ?>" class="input1  input2"></td>
	</tr>
	<tr>
		<td align=right>Last Name:</td>
		<td align=left><input type=text size=30 maxlength=32 name=lastName value="<?php echo  mysqli_real_escape_string($conn, $row_payment->lastname); ?>" class="input1  input2"></td>
	</tr>
	<tr>
		<td align=right>Card Type:</td>
		<td align=left>
			<select name=creditCardType>
				<option value=Visa selected>Visa</option>
				<option value=MasterCard>MasterCard</option>
				<option value=Discover>Discover</option>
				<option value=Amex>American Express</option>
			</select>
		</td>
	</tr>
	<tr>
		<td align=right>Card Number:</td>
		<td align=left><input type=text size=19 maxlength=19 name=creditCardNumber class="input1  input2 "></td>
	</tr>
	<tr>
		<td align=right>Expiration Date:</td>
		<td align=left><p>
			<select name=expDateMonth>
				<option value=1>01</option>
				<option value=2>02</option>
				<option value=3>03</option>
				<option value=4>04</option>
				<option value=5>05</option>
				<option value=6>06</option>
				<option value=7>07</option>
				<option value=8>08</option>
				<option value=9>09</option>
				<option value=10>10</option>
				<option value=11>11</option>
				<option value=12>12</option>
			</select>
			<select name=expDateYear>
				<option value=2015>2015</option>
				<option value=2016>2016</option>
				<option value=2017>2017</option>
				<option value=2018>2018</option>
				<option value=2019>2019</option>
				<option value=2020 selected>2020</option>
				<option value=2021>2021</option>
				<option value=2022>2022</option>
				<option value=2023>2023</option>
				<option value=2024>2024</option>
				<option value=2025>2025</option>
			</select>
		</p></td>
	</tr>
	<tr>
		<td align=right>Card Verification Number:</td>
		<td align=left><input type=text size=3 maxlength=4 name=cvv2Number value="" class="input1  input2 "></td>
	</tr>
	<tr>
		<td align="right" colspan="2"><br><b>Billing Address:</b></td>
	</tr>
	<tr>
		<td align=right>Address 1:</td>
		<td align=left><input type=text size=25 maxlength=100 name=address1 value="<?php echo  mysqli_real_escape_string($conn, $row_payment->address_1); ?>" class="input1  input2 "></td>
	</tr>
	<tr>
		<td align=right>Address 2:</td>
		<td align=left><input type=text  size=25 maxlength=100 name=address2 class="input1  input2 not_validate " value="<?php echo  mysqli_real_escape_string($conn, $row_payment->address_2); ?>">(optional)</td>
	</tr>
	<tr>
		<td align=right>City:</td>
		<td align=left><input type=text size=25 maxlength=40 name=city value="<?php echo  mysqli_real_escape_string($conn, $row_payment->city); ?>" class="input1  input2 " ></td>
	</tr>
	<tr>
		<?php $zone = is_numeric($row_payment->zid) ? $row_payment->regionName : $row_payment->zid; ?>
		<td align=right>State Code:</td>
		<td align=left><input type=text size=25 maxlength=40 name=State value="<?php echo  mysqli_real_escape_string($conn, $zone); ?>" class="input1  input2 "></td>
	</tr>
	<tr>
		<td align=right>ZIP Code:</td>
		<td align=left><input type=text size=10 maxlength=40 name=zip value="<?php echo  mysqli_real_escape_string($conn, $row_payment->postcode); ?>" class="input1  input2  ">(5 or 9 digits)</td>
	</tr>
	<tr>
		<td align=right>Country:</td>
		<td align=left>

			     <?php
				        $sql_country = "SELECT * FROM op_country WHERE name !='United Kingdom' AND zone > 0 ORDER BY zone ASC, name ASC";
				        $result_country = $conn->query($sql_country);
				        $row_country = $result_country->fetch_object();
				      ?>
		              <select name="country" id="country" class="select-menu required" title="Please select a country">
		                <option value="">Country</option>
		                <optgroup label="Zone 1">
		                  <option value="United Kingdom">United Kingdom</option>
		              </optgroup>
		                <?php
		                  while($row_country = $result_country->fetch_object()){
		                    if ($zone != $row_country->zone) {
		                      echo '<optgroup label="Zone ' . $row_country->zone . '">';
		                    }
		                ?>
		                <option <?php if($row_country->name==$row_payment->countryName) echo "selected='selected'";?> value="<?php echo str_replace('&','&amp;',$row_country->name); ?>"><?php echo str_replace('&','&amp;',$row_country->name); ?></option>
		                <?php
		                  $zone = $row_country->zone;
		                }
		                ?>
		              </select>
		</td>
	</tr>
    <?php 
	      //$amount=$bigtotal;
	      $amount="0.10";
	      ?>
	<tr>
		<td align=right >Amount:</td>
		<td align=left size=4 maxlength=7><?php echo $amount; ?> GBP</td>
	</tr>
   
</table>

</div></div></section>
    <div class="modal" id="modal1">
      <div class="content"> <a class="close switch" gumby-trigger="|#modal1"><img src="/images/x.png" width="25" height="29" alt="" /></a>
        <div class="row">
          <div class="twelve columns">
          <h1>Terms &amp; Conditions</h1>
            <article class="terms-text">
            </article>
          </div>
        </div>
      </div>
    </div>
	<?php
        if ($_SERVER['HTTP_REFERER'] == "http://" . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI']) {
            $back = $_SESSION['back'];
        } else {
            $_SESSION['back'] = $_SERVER['HTTP_REFERER'];
            $back = $_SESSION['back'];
        } 
    ?>
  

</form>
    <div class="row shop_butts">
    <a href="/choose-delivery" class="pull_left nice_btn">&lt; Back</a>
    <a href="javascript:;" class="pull_right nice_btn" id="checkout">Payment &gt;</a>
  
    </div>
    <? } else {?>
    <p>There are no products in the basket.</p>
    <? } ?> 
    <p class="marg_top">* When you click on the above Payment button you will be taken to our Payment processing site. All payments are made through PayPal and are converted to the required GB Pounds (£) total on receipt into our account. However, this does not mean that you need to possess or set up a Paypal account. You can pay directly as a Guest using a wide range of Credit/Debit Cards by clicking on the "Check Out as a Guest button" towards the bottom of the next page.</p>
	<p>Alternatively, Paypal account holders can Log In with Username and Password details as requested at the top half of the next page. </p>       
      </article>
      </div>
	<?php include('inc/offers.php'); ?>
	<?php include('inc/adverts.php'); ?>
  </div>
</section>
<?php include('inc/footer.php'); ?>
<?php include('inc/foot_assets.php'); ?>
<script>
$(document).ready(function(){
	if ($("#delivery").val() == "") {
		$(".del").text("(select)");
	} else {
		$(".del").text("£" + $("#delivery").val());
	}
		
	tot = parseFloat( $(".subtotal").text().replace(/[^\d\.]/g,'') );
	discount = parseFloat( $(".discprice").text().replace(/[^\d\.]/g,'') );
	del = parseFloat($(".del").text());
	vat = parseFloat($(".vat_num").text());
	vatonload = parseFloat($("#vatonload").val());
	<?php if ($row_country->zone == 1) { ?>
	$(".total").text(String(parseFloat(tot + vat).toFixed(2)).replace(/(\d)(?=(\d{3})+(\.\d+)?$)/g,"$1,") );
	<?php } ?>	
	$("#theprice").val(parseFloat(tot).toFixed(2));
	$("#disc_rate").val(parseFloat(discount).toFixed(2));
	$("#del_rate").val(parseFloat(del).toFixed(2));
	
	
	function round(value, decimals) {
	    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
	}
		
	$("#delivery").change(function() {
		del = parseFloat(this.value);
		tot = parseFloat($(".subtotal").text().replace(/[^\d\.]/g,''));
		vat = parseFloat($(".vat_num").text());
		delvat = parseFloat($(this).find(':selected').data("vat"));
		discount = $("#disc_amt").val();
		$(".del").text("£" + parseFloat(del).toFixed(2));

		if ($(".discount_text").is(':visible')) { // DISCOUNT HAS BEEN ADDED
			$(".vat_num").text(String(parseFloat(newvat + delvat).toFixed(2)).replace(/(\d)(?=(\d{3})+(\.\d+)?$)/g,"$1,"));
			$(".total").text(String(parseFloat(round(del + tot + newvat - discount,2))).replace(/(\d)(?=(\d{3})+(\.\d+)?$)/g,"$1,"));
			
			if (this.value == "") {
				$(".del").text("(select)");
				$(".vat_num").text(String(parseFloat(vatonload).toFixed(2)).replace(/(\d)(?=(\d{3})+(\.\d+)?$)/g,"$1,"));
				$(".total").text(String(parseFloat(tot + vatonload - discount).toFixed(2)).replace(/(\d)(?=(\d{3})+(\.\d+)?$)/g,"$1,"));
			}
			if (this.value == 0) {
				$(".vat_num").text(String(parseFloat(vatonload).toFixed(2)).replace(/(\d)(?=(\d{3})+(\.\d+)?$)/g,"$1,"));
				$(".total").text(String(parseFloat(tot + vatonload - discount).toFixed(2)).replace(/(\d)(?=(\d{3})+(\.\d+)?$)/g,"$1,"));
			}
		} else { // NO DISCOUNT
			$(".vat_num").text(String(parseFloat(vatonload + delvat).toFixed(2)).replace(/(\d)(?=(\d{3})+(\.\d+)?$)/g,"$1,"));
			vat = parseFloat($(".vat_num").text());
			$(".total").text(String(parseFloat(round(del + tot + vat - discount,2))).replace(/(\d)(?=(\d{3})+(\.\d+)?$)/g,"$1,"));
			
			if (this.value == "") {
				$(".del").text("(select)");
				$(".vat_num").text(String(parseFloat(vatonload).toFixed(2)).replace(/(\d)(?=(\d{3})+(\.\d+)?$)/g,"$1,"));
				$(".total").text(String(parseFloat(tot + vatonload - discount).toFixed(2)).replace(/(\d)(?=(\d{3})+(\.\d+)?$)/g,"$1,"));
			}
			if (this.value == 0) {
				$(".vat_num").text(String(parseFloat(vatonload).toFixed(2)).replace(/(\d)(?=(\d{3})+(\.\d+)?$)/g,"$1,"));
				$(".total").text(String(parseFloat(tot + vatonload - discount).toFixed(2)).replace(/(\d)(?=(\d{3})+(\.\d+)?$)/g,"$1,"));
			}
		}
		$("#del_added").val(this.value);
	});
	
	var newvat = '';

	$('.discount').click(function(e) {
		$(".code-message").html('Checking <img src="/images/load.gif" style="vertical-align:middle; margin-left:5px;">');
		$.ajax({
		   type: "POST",
		   url: "/inc/discount_codes.php",
		   data: { code: $("#discount").val() },
		   datatype: 'json',
		   cache: false,
		   success: function(data){
			  var del = $("#delivery").val() != "" ? parseFloat($("#delivery").val()) : 0;
			  var totprice = "<?php echo number_format($excTot,2)?>";
			  var totprice = parseFloat(totprice.replace(',',''));
			  var totcost = del !="" ? (del + totprice) : totprice;
			  var totamt = parseFloat($("#total_amt").val());
			  var totamt = del !="" ? (del + totamt) : totamt;
			  var oldvat = parseFloat($(".vat_num").val());
			  var delvat = parseFloat($("#delivery").find(':selected').data("vat"));
			  if ($("#disc_curr").val() != data.ccode) {
				  var perc = parseFloat(totprice/100 * data.cdiscount);
				  var discamt = data.ctype == 'F' ? data.cdiscount : perc;
			  	  var totaftdisc = parseFloat(totprice - discamt);
				  newvat = parseFloat(totaftdisc/100 * 20);
				  if(data.num == 1){
					  $(".code-message").html('<strong class="green">' + data.cname + '</strong>');
					  $("#disc_amt").val(discamt);
					  $(".disc_num").text(discamt);
					  <?php if ($row_country->zone != 4) { ?>
					  $(".total").text(String(parseFloat(totaftdisc + newvat + del).toFixed(2)));
					  <?php } else { ?>
					  $(".total").text(String(parseFloat(totamt - discamt).toFixed(2)));
					  <?php } ?>
					  if ($("#delivery").val() != "") {
					  	$(".vat_num").text(String(parseFloat(newvat + delvat).toFixed(2)));
					  } else {
					  	$(".vat_num").text(String(parseFloat(newvat).toFixed(2)));
					  }
					  $("#disc_curr").val(data.cname);
					  $(".discount_text").show();
				  } else {
					  $(".code-message").html('<strong class="redtext">This code is invalid!</strong>');
					  if ($("#disc_amt").val() !="") {
					  	$(".total").text(String(parseFloat(totcost).toFixed(2)));
					  }
					  $("#disc_amt").val("");
					  $("#disc_curr").val("");
					  $(".discount_text").hide();
					  $(".vat_num").text(String(parseFloat(vat).toFixed(2)));
					  $(".total").text(String(parseFloat(tot + vat + del).toFixed(2)));
				  }
			  }
		   }
		});
		return false;
	});
	

 
  
});
</script>


</body>
</html>
