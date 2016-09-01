<?php echo 'sddd'; exit;

$oid = '3903';
						unset($_SESSION['order_id']);
						include('../inc/connection.php');
						
                        $TRANSACTIONID = $resArray["TRANSACTIONID"];
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
								</table><?php                     $contents = ob_get_contents();
                            ob_end_clean();
                            $sql = "select * from op_order where order_id = '$oid'";
                            $result = $conn->query($sql);
                            $data = $result->fetch_object();
                            @include_once('../class.phpmailer.php');
							@include_once('../class.smtp.php');
                            $mail = new PHPMailer();
                            $body = $contents;
                            $mail->From = "info@jandcrwood.co.uk";
                            $mail->FromName = "Metalcraft";
                            $mail->Subject = "Thank you for shopping with Metalcraft - Order No: " . $oid;
                            $mail->AltBody = "To view the message, please use an HTML compatible email viewer!";
                            $mail->MsgHTML($body);
							//$mail->AddAddress('vishwa.vicky@gmail.com');
							$mail->AddAddress("rahul2ricky@gmail.com");
                            //$mail->AddAddress($li->email);
                            $mail->AddBCC('vishwa.vicky@gmail.com');
                            /*$mail->AddBCC("info@jandcrwood.co.uk");
                            $mail->AddBCC("bob@princesave.co.uk");*/
                           
                            $mail->IsSMTP();
                            $mail->SMTPAuth = "true";
							$mail->Username = "mailer@arrivalbusinessservices.co.uk"; //valid email id of the domain
							$mail->Password = "161HighStreet"; //password for abc@xyz
							$mail->Host 	= "arrivalbusinessservices.co.uk"; //Your SMTP mail server
							$mail->Port = 25; //Your SMTP mail server
							
							if (!$mail->Send()) {
								$mail->Username = "shared";
								$mail->Password = "161HighStreet";
								$mail->Host = "mail.smtp2go.com";
								$mail->Send();
								
							}
						}
						exit;
