<?php 
namespace App\Controller;

use App\Controller\AppController;
use Cake\Event\Event;
use Cake\Core\Configure;
use Cake\ORM\TableRegistry;
use Cake\Auth\DefaultPasswordHasher;
use Cake\Error\Debugger;

/**
 * Users Controller
 *
 * @property \App\Model\Table\UsersTable $Users
 */
class UsersController extends AppController
{

    /**
     * Index method
     *
     * @return \Cake\Network\Response|null
     */
    public function index()
    {
       $this->set('title_for_layout','City:Risat Chauffeurs');
	   $this->viewBuilder()->layout('home');
	   echo 'hi'; exit;
    }
	
	
	
	public function login()
    {
		if( $this->request->is('post')){
			$countuser=$this->Users->find('all', array('conditions'=>array('OR'=>array('Users.email'=>$this->request->data['email']))));
			$number = $countuser->count();
			if($number>0){
			$results = $countuser->first();
			//$tester=new DefaultPasswordHasher();
			//$verify = $tester->check($this->request->data['password'], $results->password);	
			if(md5($this->request->data['password'])==$results->password){
				$json = json_encode(array('status' => 'success','act'=>'index','user' =>$results));
				
				}else{$json = json_encode(array('status' => 'error','mssg' =>'* Username or password not match...'));}
			}else{$json = json_encode(array('status' => 'error','mssg' =>'* Username not found match...'));}
			echo ($json); 
		exit;
		}
		}
	public function signup()
    {
		
		$base_url=Configure::read('Site.baseurl');
		$locationTable = TableRegistry::get('Locations');
		$UsersInLocationTable = TableRegistry::get('UsersInLocation');
		if($this->request->data['location']!=''){
		$location_gets = $locationTable->find('all',array('fields' => array('remain_capacity'), 'conditions' => array('Locations.id' =>$this->request->data['location'])));
		$location_get=$location_gets->toarray();
		$seat_remain=$location_get['0']['remain_capacity']-$this->request->data['desk'];
		}
		$this->viewBuilder()->layout(false);
		$userTable = TableRegistry::get('Users');
		$user_vals = $userTable->find('all', array('fields' => array('email') ,'conditions' => array('Users.email' =>$this->request->data['email'])));
		$user_val=$user_vals->toarray();
		if(count($user_val)>0){
			 $json = json_encode(array('status' =>'avail'));
				echo ($json); 
		}else{
			$user = $userTable->newEntity();
			
			//pr($this->request->data); exit;
				$email=$this->request->data['email'];	
				$size='75';
				$defaultImg=$base_url.'src/img/small_no-image.jpg';
				$gravatarImage='http://www.gravatar.com/avatar/'.md5($email).'?=' . $size . '&default=' . $defaultImg . '&r=G';
						$url=$gravatarImage;
						 $filename=time().".jpg";
						 $path=ROOT .DS. 'webroot'.DS. 'user_image'.DS ;
						 $handle = fopen($url, 'r');
						 file_put_contents($path.$filename, $handle);
						 $this->request->data['image']=$filename;
			
            $user = $userTable->patchEntity($user, $this->request->data);
            if ($userTable->save($user)) {
				if($this->request->data['location']!=''){
						$usertable_sv = $UsersInLocationTable->newEntity();
						$usertable_sv->user_id = $user->id;
						$usertable_sv->location_id = $this->request->data['location'];
						$usertable_sv->desks =$this->request->data['desk'];
						$UsersInLocationTable->save($usertable_sv);
						$locationtable_sv = $locationTable->newEntity();
						$locationtable_sv->id = $this->request->data['location'];
						$locationtable_sv->remain_capacity = $seat_remain;
						$locationTable->save($locationtable_sv);
						$nextloc='location';
						//seat_remain
				}else{$nextloc='home';}
               $json = json_encode(array('status' => 'success','id' =>$user->id,'user'=>$user,'nextloc'=>$nextloc));
				echo ($json);	
            } else {
                $json = json_encode(array('status' => 'error','status' =>'error occur'));
				echo ($json); 
            }
		}
       exit;
    }
	
	public function loginLocation($locations_get=NULL,$desk=NULL)
    {
		$locationTable = TableRegistry::get('Locations');
		$UsersInLocationTable = TableRegistry::get('UsersInLocation');
		
		$location_gets = $locationTable->find('all',array('fields' => array('remain_capacity'), 'conditions' => array('Locations.id' =>$locations_get)));
		$location_get=$location_gets->toarray();
		$seat_remain=$location_get['0']['remain_capacity']-$desk;
		
		if( $this->request->is('post')){
			$countuser=$this->Users->find('all', array('conditions'=>array('OR'=>array('Users.email'=>$this->request->data['email']))));
			$number = $countuser->count();
			if($number>0){
			$results = $countuser->first();
			if(md5($this->request->data['password'])==$results->password){
						$usertable_sv = $UsersInLocationTable->newEntity();
						$usertable_sv->user_id = $user->id;
						$usertable_sv->location_id = $locations_get;
						$usertable_sv->desks =$desk;
						$UsersInLocationTable->save($usertable_sv);
						$locationtable_sv = $locationTable->newEntity();
						$locationtable_sv->id = $locations_get;
						$locationtable_sv->remain_capacity = $seat_remain;
						$locationTable->save($locationtable_sv);
				
				
				$json = json_encode(array('status' => 'success','act'=>'desksave','user' =>$results));
				echo ($json); 
				}else{$json = json_encode(array('status' => 'error','mssg' =>'* Username or password not match...'));}
			}else{$json = json_encode(array('status' => 'error','mssg' =>'* Username not found match...'));}
		exit;
		}
		}
		
	public function directLocation($user=NULL,$locations_get=NULL,$desk=NULL)
    {
		$locationTable = TableRegistry::get('Locations');
		$UsersInLocationTable = TableRegistry::get('UsersInLocation');
		
		$location_gets = $locationTable->find('all',array('fields' => array('remain_capacity'), 'conditions' => array('Locations.id' =>$locations_get)));
		
		$countuser=$this->Users->find('all', array('conditions'=>array('OR'=>array('Users.id'=>$user))));
			$results = $countuser->first();
		$location_get=$location_gets->toarray();
		$seat_remain=$location_get['0']['remain_capacity']-$desk;
		
		
						$usertable_sv = $UsersInLocationTable->newEntity();
						$usertable_sv->user_id = $user;
						$usertable_sv->location_id = $locations_get;
						$usertable_sv->desks =$desk;
						$UsersInLocationTable->save($usertable_sv);
						$locationtable_sv = $locationTable->newEntity();
						$locationtable_sv->id = $locations_get;
						$locationtable_sv->remain_capacity = $seat_remain;
						$locationTable->save($locationtable_sv);
				
				
				$json = json_encode(array('status' => 'success','act'=>'desksave','user' =>$results));
				echo ($json);
		exit;
		
		}
	public function saveContact()
    {
		$this->viewBuilder()->layout(false);
		$userTable = TableRegistry::get('Users');
			$user = $userTable->newEntity();
			$user->id = $this->request->data['id'];
			$user->address1 =  $this->request->data['address1'];
			$user->address2 =  $this->request->data['address2'];
			$user->city = $this->request->data['city'];
			$user->country =  $this->request->data['country'];
			$user->county =  $this->request->data['county'];
			$user->phone_number =  $this->request->data['phone_number'];
			$user->post_code =  $this->request->data['post_code'];
            if ($userTable->save($user)) {
						$user_vals = $userTable->find('all', array('fields' => array('name','industry','image') ,'conditions' => array('Users.id' =>$user->id)));
						$user_val=$user_vals->toarray();
               $json = json_encode(array('status' => 'success','id' =>$user->id,'name'=>$user_val['0']['name'], 'industry'=>$user_val['0']['industry'],'image'=>$user_val['0']['image']));
				echo ($json);	
            } else {
                $json = json_encode(array('status' => 'error','status' =>'error occur'));
				echo ($json); 
            }
		
       exit;
    }

public function linkedin($location=NULL, $desk=NULL){

	if(!empty($location) && !empty($desk)){
	$this->request->session()->write(['location' => $location,'desk' => $desk]);
	}
	//$base_url='http://localhost/angu/';
	$base_url=Configure::read('Site.baseurl');
	$this->viewBuilder()->layout(false);
	
	
	$baseURL = $base_url.'api/linkedin';
	$callbackURL = $base_url.'api/linkedin';
	$linkedinApiKey = '81m7r4v9j6aev7';
	$linkedinApiSecret = 'yzBnN1T4tXrmEgHl';
	$linkedinScope = 'r_basicprofile r_emailaddress';
		require_once ('Component/LinkedIn/http.php');
		require_once ('Component/LinkedIn/oauth_client.php');
		
			if (isset($_GET["oauth_problem"]) && $_GET["oauth_problem"] <> "") {
				$location=$this->request->session()->read('location');
				$desk=$this->request->session()->read('desk');
				// in case if user cancel the login. redirect back to home page.
				$_SESSION["err_msg"] = $_GET["oauth_problem"];
				
				
				if(!empty($location) && !empty($desk)){
						$redirect_url=$base_url.'#/signup?id='.$user_sv->id.'&locationid='.$location.'&desk='.$desk;
						}else{
							$redirect_url=$base_url.'#/signup';
							}
					header("location:".$redirect_url);			
				exit;
			}
				$client = new \OathClientClass();
				$client->debug = false;
				$client->debug_http = true;
				$client->redirect_uri = $callbackURL;
				
				$client->client_id = $linkedinApiKey;
				$application_line = __LINE__;
				$client->client_secret = $linkedinApiSecret;
				
				if (strlen($client->client_id) == 0 || strlen($client->client_secret) == 0)
				  die('Please go to LinkedIn Apps page https://www.linkedin.com/secure/developer?newapp= , '.
							'create an application, and in the line '.$application_line.
							' set the client_id to Consumer key and client_secret with Consumer secret. '.
							'The Callback URL must be '.$client->redirect_uri).' Make sure you enable the '.
							'necessary permissions to execute the API calls your application needs.';
				
				/* API permissions*/
				$client->scope = $linkedinScope;
				//pr($this->request->session()->read()); exit;
				if (($success = $client->Initialize())) {
				  if (($success = $client->Process())) {
					if (strlen($client->authorization_error)) {
						
						$location=$this->request->session()->read('location');
						$desk=$this->request->session()->read('desk');
					  $client->error = $client->authorization_error;
					  $success = false;
					  if(!empty($location) && !empty($desk)){
						$redirect_url=$base_url.'#/signup?id='.$user_sv->id.'&locationid='.$location.'&desk='.$desk;
						}else{
							$redirect_url=$base_url.'#/signup';
							}
					header("location:".$redirect_url);
					  //login fail
					}
					elseif (strlen($client->access_token)) {
					  $success = $client->CallAPI(
									'http://api.linkedin.com/v1/people/~:(id,email-address,first-name,last-name,industry,location,picture-urls::(original),picture-url,public-profile-url,formatted-name)', 
									'GET', array(
										'format'=>'json'
									), array('FailOnAccessError'=>true), $user);
												
						}
						}
						
						$success = $client->Finalize($success);
					
						
						
						}
						
						
						
						if ($success) {
							
							$location=$this->request->session()->read('location');
							$desk=$this->request->session()->read('desk');
							
									 $url=$user->pictureUrls->values['0'];
									 $filename=time().".jpg";
									 $path=ROOT .DS. 'webroot'.DS. 'user_image'.DS ;
									 $handle = fopen($url, 'r');
									 file_put_contents($path.$filename, $handle);
									 
						$userTable = TableRegistry::get('Users');
						$user_vals = $userTable->find('all', array('conditions' => array('Users.email' =>$user->emailAddress)));
						$user_val=$user_vals->toarray();
						
						if(count($user_val)>0){
							$locationTable = TableRegistry::get('Locations');
							$UsersInLocationTable = TableRegistry::get('UsersInLocation');
							$user_sv = $userTable->newEntity();
						
						if(!empty($location) && !empty($desk)){
							
						$location_gets = $locationTable->find('all',array('fields' => array('remain_capacity'), 'conditions' => array('Locations.id' =>$this->request->session()->read('location'))));
						$location_get=$location_gets->toarray();
						$seat_remain=$location_get['0']['remain_capacity']-$this->request->session()->read('desk');
					
						$usertable_sv = $UsersInLocationTable->newEntity();
						$usertable_sv->user_id = $user_val['0']['id'];
						$usertable_sv->location_id = $this->request->session()->read('location');
						$usertable_sv->desks =$this->request->session()->read('desk');
						$UsersInLocationTable->save($usertable_sv);
						$locationtable_sv = $locationTable->newEntity();
						$locationtable_sv->id = $this->request->session()->read('location');
						$locationtable_sv->remain_capacity = $seat_remain;
						$locationTable->save($locationtable_sv);
							
						$this->request->session()->delete('desk');
						$this->request->session()->delete('location');
						$redirect_url='';
						$redirect_url=$base_url.'#/linked?id='.$user_val['0']['id'].'&name='.$user_val['0']['name'].'&industry='.$user_val['0']['industry'].'&image='.$user_val['0']['image'];
						}//location empty condition
						else{//echo 'bye';
						$redirect_url='';
							$redirect_url=$base_url.'#/linked?id='.$user_val['0']['id'].'&name='.$user_val['0']['name'].'&industry='.$user_val['0']['industry'].'&image='.$user_val['0']['image'];
						}
						//echo $redirect_url; exit;
						header("location:".$redirect_url);	
						exit;
						}
						else if(isset($user->emailAddress) && $user->emailAddress!=''){//for new user
							
					$locationTable = TableRegistry::get('Locations');
					$UsersInLocationTable = TableRegistry::get('UsersInLocation');
					$location_gets = $locationTable->find('all',array('fields' => array('remain_capacity'), 'conditions' => array('Locations.id' =>$this->request->session()->read('location'))));
					$location_get=$location_gets->toarray();
					$seat_remain=$location_get['0']['remain_capacity']-$this->request->session()->read('desk');
						$user_sv = $userTable->newEntity();
						$user_sv->name = $user->formattedName;
						$user_sv->email = $user->emailAddress;
						$user_sv->industry =$user->industry;
						$user_sv->linkedin_id =$user->id;
						$user_sv->image = $filename;
						if ($userTable->save($user_sv)) {
						if(!empty($location) && !empty($desk)){
						$usertable_sv = $UsersInLocationTable->newEntity();
						$usertable_sv->user_id = $user_sv->id;
						$usertable_sv->location_id = $this->request->session()->read('location');
						$usertable_sv->desks =$this->request->session()->read('desk');
						$UsersInLocationTable->save($usertable_sv);
						$locationtable_sv = $locationTable->newEntity();
						$locationtable_sv->id = $this->request->session()->read('location');
						$locationtable_sv->remain_capacity = $seat_remain;
						$locationTable->save($locationtable_sv);
							
						$this->request->session()->delete('desk');
						$this->request->session()->delete('location');
						$redirect_url=$base_url.'#/linked?id='.$user_sv->id.'&name='.$user_sv->name.'&industry='.$user_sv->industry.'&image='.$filename;
						}else{
						$redirect_url=$base_url.'#/linked?id='.$user_sv->id.'&name='.$user_sv->name.'&industry='.$user_sv->industry.'&image='.$filename;
						}
						
						header("location:".$redirect_url);	
						}
						}
						else{
							exit;
							}
						
						}else{
							$location=$this->request->session()->read('location');
							$desk=$this->request->session()->read('desk');
							
							if(!empty($location) && !empty($desk)){
						$redirect_url=$base_url.'#/login?id='.$user_sv->id.'&locationid='.$location.'&desk='.$desk;
						}else{
							$redirect_url=$base_url.'#/login';
							}
							}
						
						header("location:".$redirect_url);	
				 
				  
       exit;
    }
	
	
	public function facebooklogin()
	{
		$base_url=Configure::read('Site.baseurl');
        $this->viewBuilder()->layout(false);
		if(!empty($_REQUEST['access_token']))
        {
            $_REQUEST['fbsr_262221187148336'] = $_REQUEST['access_token'];
            $urlx = 'https://graph.facebook.com/me?locale=en_US&fields=name,email,first_name,last_name,gender,birthday&access_token='.$_REQUEST['access_token'];
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
			curl_setopt($ch, CURLOPT_URL, $urlx);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			$fbdata2 = curl_exec($ch);
			curl_close($ch);
			$fbdata = json_decode($fbdata2);
			
			//print_r($fbdata); exit;
									$time=time();
									$url='http://graph.facebook.com/'.$fbdata->id.'/picture';
									 $filename=$time.".jpg";
									 $path=ROOT .DS. 'webroot'.DS. 'user_image'.DS ;
									 $handle = fopen($url, 'r');
									 
									 
									 
									 
									 
							
							$location=$this->request->session()->read('location');
							$desk=$this->request->session()->read('desk');
							file_put_contents($path.$filename, $handle);
									 
						$userTable = TableRegistry::get('Users');
						$user_vals = $userTable->find('all', array('conditions' => array('Users.email' =>$fbdata->email)));
						$user_val=$user_vals->toarray();
						
						if(count($user_val)>0){
							$locationTable = TableRegistry::get('Locations');
							$UsersInLocationTable = TableRegistry::get('UsersInLocation');
							$user_sv = $userTable->newEntity();
						
						if(!empty($location) && !empty($desk)){
							
						$location_gets = $locationTable->find('all',array('fields' => array('remain_capacity'), 'conditions' => array('Locations.id' =>$this->request->session()->read('location'))));
						$location_get=$location_gets->toarray();
						$seat_remain=$location_get['0']['remain_capacity']-$this->request->session()->read('desk');
					
						$usertable_sv = $UsersInLocationTable->newEntity();
						$usertable_sv->user_id = $user_val['0']['id'];
						$usertable_sv->location_id = $this->request->session()->read('location');
						$usertable_sv->desks =$this->request->session()->read('desk');
						$UsersInLocationTable->save($usertable_sv);
						$locationtable_sv = $locationTable->newEntity();
						$locationtable_sv->id = $this->request->session()->read('location');
						$locationtable_sv->remain_capacity = $seat_remain;
						$locationTable->save($locationtable_sv);
							
						$this->request->session()->delete('desk');
						$this->request->session()->delete('location');
						$redirect_url='';
						$redirect_url=$base_url.'#/linked?id='.$user_val['0']['id'].'&name='.$user_val['0']['name'].'&industry='.$user_val['0']['industry'].'&image='.$user_val['0']['image'];
						}//location empty condition
						else{//echo 'bye';
						$redirect_url='';
							$redirect_url=$base_url.'#/linked?id='.$user_val['0']['id'].'&name='.$user_val['0']['name'].'&industry='.$user_val['0']['industry'].'&image='.$user_val['0']['image'];
						}
						//echo $redirect_url; exit;
						header("location:".$redirect_url);	
						exit;
						}
						else if(isset($fbdata->email) && $fbdata->email!=''){//for new user
							
					$locationTable = TableRegistry::get('Locations');
					$UsersInLocationTable = TableRegistry::get('UsersInLocation');
					$location_gets = $locationTable->find('all',array('fields' => array('remain_capacity'), 'conditions' => array('Locations.id' =>$this->request->session()->read('location'))));
					$location_get=$location_gets->toarray();
					$seat_remain=$location_get['0']['remain_capacity']-$this->request->session()->read('desk');
						$user_sv = $userTable->newEntity();
						$user_sv->name = $fbdata->name;
						$user_sv->email = $fbdata->email;
						$user_sv->linkedin_id =$fbdata->id;
						$user_sv->image = $filename;
						if ($userTable->save($user_sv)) {
						if(!empty($location) && !empty($desk)){
						$usertable_sv = $UsersInLocationTable->newEntity();
						$usertable_sv->user_id = $user_sv->id;
						$usertable_sv->location_id = $this->request->session()->read('location');
						$usertable_sv->desks =$this->request->session()->read('desk');
						$UsersInLocationTable->save($usertable_sv);
						$locationtable_sv = $locationTable->newEntity();
						$locationtable_sv->id = $this->request->session()->read('location');
						$locationtable_sv->remain_capacity = $seat_remain;
						$locationTable->save($locationtable_sv);
							
						$this->request->session()->delete('desk');
						$this->request->session()->delete('location');
						$redirect_url=$base_url.'#/linked?id='.$user_sv->id.'&name='.$fbdata->name.'&industry=""&image='.$filename;
						}else{
						$redirect_url=$base_url.'#/linked?id='.$user_sv->id.'&name='.$fbdata->name.'&industry=""&image='.$filename;
						}
						
						header("location:".$redirect_url);	
						}
						}
						else{
							exit;
							}
						
						
			exit;
			$this->request->data['User']['facebook_id'] = $fbdata->id;
            $this->request->data['User']['email'] = $fbdata->email;
            $this->request->data['User']['first_name']  = $fbdata->first_name;
			$this->request->data['User']['last_name']  = $fbdata->last_name;
			$this->request->data['User']['role_id'] = 2;
			$this->request->data['User']['is_active'] = 0;
			$this->request->data['User']['deactivate_flag']=1;
		    $user = $this->User->find('first',array('conditions'=>array('User.email'=>$fbdata->email)));
			$user_find = $this->User->find('count',array('conditions'=>array('User.email'=>$fbdata->email)));
			
			if($user_find>0)
            {
				$this->User->id = $user['User']['id'];
				$this->User->saveField('facebook_id',$fbdata->id);
				$this->User->saveField('is_active','1');
				if($user['User']['deactivate_flag']==1)
				{
					$this->redirect('/'); 
				}
				else
				{
					$userDetail = $this->User->find('first',array('conditions'=>array('User.email'=>$fbdata->email)));
					$this->Session->write('Auth',$userDetail);
					$this->redirect(array('controller'=>'users','action'=>'my_profile')); 
				}
            }
			else
			{
				$this->request->data['User']['is_active'] = 1;
				if($this->User->save($this->request->data))
				{
					$userDetail = $this->User->find('first',array('conditions'=>array('User.facebook_id'=>$fbdata->id)));
					$this->Session->write('User.id',$userDetail['User']['id']);
					$this->Session->write('Auth',$userDetail);
					$this->redirect(array('controller'=>'users','action'=>'my_profile')); 
				}
			}
        }
        else
        {
            $this->redirect('/'); 
            exit(); 
        }
    }
	public function fbLogin(){
		//$base_url=Configure::read('Site.baseurl');
//		$redirect_url=$base_url.'#/login';
//		header("location:".$redirect_url);	
//		exit;	
		
		//echo "vicky";exit;
		$this->viewBuilder()->layout(false);
			echo '<script language="javascript" type="text/javascript">
			
			var url = document.location.href.split("#");
			var siteurl1 = "'.Configure::read('Site.baseurl').'";
		
			if(url[1].length>150)
			{
				window.opener.location.href = siteurl1+"api/users/facebooklogin?"+url[1];
				self.close();
			}
			else
			{
				//window.opener.location.href = url[0];
				self.close();
			}
			</script>'; 
			exit;
	}
	public function getmarker()
    {
		$locationTable = TableRegistry::get('Locations');
		$location_vals = $locationTable->find('all');
		$location_val=$location_vals->toarray();
		if(count($location_val)>0){
			 $json = json_encode(array('status' => 'success','vals' =>$location_val));
				echo ($json); 
				//pr($location_val);
				
		}else{
			$json = json_encode(array('status' => 'fail','type' =>'empty'));
			echo ($json);
			}
		exit;
	}
	public function tabmarker()
    {
		$locationTable = TableRegistry::get('Locations');
		$userTable = TableRegistry::get('Users');
		$UsersInLocationTable = TableRegistry::get('UsersInLocation');
		$location_vals = $locationTable->find('all');
		$location_val=$location_vals->toarray();
		if(count($location_val)>0){
			$html='';
			foreach($location_val as $ky=>$location){
				$location_vals = $locationTable->find('all',array('conditions' => array('Locations.id' =>$location['id'])));
				$location_val=$location_vals->toarray();
		//pr($location_val['0']['wifi']); exit;
				$seat_fill=$location_val['0']['capacity']-$location_val['0']['remain_capacity'];
				$percentace=($seat_fill/$location_val['0']['capacity'])*100;
				$perc=round($percentace);
				if($perc >= 100){$perc=100;}
				
				
				$html.='<div class="location_in hidden_marler_value" id="marker_'.$location['id'].'" rel="s">
<div class="col-md-7">
<div class="place_name">'.$location['name'].'</div>
<div class="clearfix"></div>';

		
		$user_location_vals = $UsersInLocationTable->find('all',array('conditions' => array('UsersInLocation.location_id' =>$location['id'])));
		$user_location_vals2 = $UsersInLocationTable->find('all',array('conditions' => array('UsersInLocation.location_id' =>$location['id']),'group' =>'UsersInLocation.user_id'));
		$user_location_val=$user_location_vals->toarray();
		$user_location_val2=$user_location_vals2->toarray();
		if(count($user_location_val)>0){
			
			
			
			
$html.='<ul>';
	$u=1;
	foreach($user_location_val2 as $usrtbl){
		
		$user_vals = $userTable->find('all', array('fields' => array('email','id','image') ,'conditions' => array('Users.id' =>$usrtbl['user_id'])));
			$user_val=$user_vals->toarray();
			if(count($user_val)>0){
		if($user_val['0']['image']!=''){
			$user_img=$user_val['0']['image'];
			}else{$user_img='small_no-image.png';}
   $html.= '<li><img src="./api/user_image/'.$user_img.'"></li>';
			
	}
	
    if($u=='5'){break;}
	$u++;
	}
	//if($location['remain_capacity']>0){
//$html.='<li class="last_remain">+'.$location['remain_capacity'].'</li>';
	//}
	if(count($user_location_val2)>5){
	$remain_user=count($user_location_val2)-5;	
$html.='<li class="last_remain">+'.$remain_user.'</li>';
	}
	
$html.='</ul>';
			
		}
$html.='</div>';
$html.='<div class="col-md-5">
<a href="javascript:;"><div class="rate">£'.$location['desk_price'].'
<span>/desk</span></div></a>
<div class="clearfix"></div>
<div class="p_bar">
    <div class="p_bar_in" style="width:'.$perc.'%;"></div>
</div>
</div>
</div>';
				}
			 $json = json_encode(array('status' => 'success','html' =>htmlspecialchars($html)));
				echo ($json);  exit;
				
		}else{
			$json = json_encode(array('status' => 'fail','type' =>'empty'));
			echo ($json);exit;
			}
		exit;
	}
	
	

public function getmarkerpicker()
    {

		$locationId=$this->request->data['locationid'];
		$locationTable = TableRegistry::get('Locations');
		$userTable = TableRegistry::get('Users');
		$imageTable = TableRegistry::get('LocationImages');
		$UsersInLocationTable = TableRegistry::get('UsersInLocation');
		$location_vals = $locationTable->find('all',array('conditions' => array('Locations.id' =>$locationId)));
		$location_val=$location_vals->toarray();
		//pr($location_val['0']['wifi']); exit;
		$seat_fill=$location_val['0']['capacity']-$location_val['0']['remain_capacity'];
		$percentace=($seat_fill/$location_val['0']['capacity'])*100;
		$perc=round($percentace);
				if($perc >= 100){$perc=100;}
		
		if(count($location_val)>0){
			$html='';
			
			    $html='<!-- Carousel
    ================================================== -->
    <div id="myCarousel" class="carousel slide picker_top_carousel" data-ride="carousel" data-interval="false">
      <div class="carousel-inner" role="listbox">';
	  	$image_vals = $imageTable->find('all',array('conditions' => array('LocationImages.locationid' =>$locationId)));
		$image_val=$image_vals->toarray();
		if(count($image_val)>0){
			$imgact='1';
			foreach($image_val as $imgval){
				if($imgact=='1'){$imact=' active';}
				else{$imact='';}
		 	$html.='<div class="item '.$imact.'" style="background:url(src/img/location_image/'.$imgval['name'].') no-repeat center / cover;"></div>';	
			$imgact++;
			}
		}else{
	  
        $html.='<div class="item active" style="background:url(src/img/no-image.png) no-repeat center / cover;"></div>';
		}
		
        $html.='
      </div>
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div><!-- /.carousel -->';
	
	$html.='
<div class="amnities">
<div class="amnities_in">
<ul>';
if($location_val['0']['wifi']){$html.='<li><img src="src/img/picker_icon1.png" /></li>';}
if($location_val['0']['shower']){$html.='<li><img src="src/img/picker_icon2.png" /></li>';}
if($location_val['0']['access']){$html.='<li><img src="src/img/picker_icon3.png" /></li>';}
if($location_val['0']['bike']){$html.='<li><img src="src/img/picker_icon4.png" /></li>';}
if($location_val['0']['kitchen']){$html.='<li><img src="src/img/picker_icon5.png" /></li>';}
if($location_val['0']['parking']){$html.='<li><img src="src/img/picker_icon6.png" /></li>';}
if($location_val['0']['remain_capacity']>0){$remain_cap=$location_val['0']['remain_capacity'];}
else{$remain_cap='0';}
$html.='</ul><div class="clearfix"></div>
</div><div class="clearfix"></div>
</div>


<div class="location location11">
<div class="location_in">
<div class="col-md-7">
<div class="place_name">'.$location_val['0']['name'].'</div>
<div class="clearfix"></div>
</div>

<div class="col-md-5">
<div class="rate">£'.$location_val['0']['desk_price'].'
<span>/desk</span></div>
<div class="clearfix"></div>

</div>

<div class="clearfix"></div>


<div class="p_bar_up">
    <span>
    	<strong>'.floor($remain_cap).'</strong>/ '.$location_val['0']['capacity'].'
    </span> 
desks avalible
</div>
<div class="p_bar_up p_bar_up1">
	<span>
	<strong>';
$day = 86400;
$format = 'd/m/Y';
$startTime = time();
$endTime = strtotime($location_val['0']['lastdate']);
$numDays = round(($endTime - $startTime) / $day) + 1;

if($numDays>0){$html.=$numDays ; $book_btn='1';}
else{$html.='0';$book_btn='1';}

	$html.='</strong>
	</span>
days left</div>


<div class="col-md-12">
    <div class="p_bar">
	
    <div class="p_bar_in" style="width:'.$perc.'%;"></div>
    </div>
</div>

</div>
</div>



<div class="thumbox5a">
<div class="thumbox5a_in">';
	$user_location_vals = $UsersInLocationTable->find('all',array('conditions' => array('UsersInLocation.location_id' =>$location_val['0']['id'])));
	$user_location_vals2 = $UsersInLocationTable->find('all',array('conditions' => array('UsersInLocation.location_id' =>$location_val['0']['id']),'group' =>'UsersInLocation.user_id'));
		$user_location_val=$user_location_vals->toarray();
		$user_location_val2=$user_location_vals2->toarray();
		if(count($user_location_val)>0){
			
$html.='<div id="myCarousel1" class="carousel slide picker_image_carousel dis_none" data-ride="carousel" data-interval="false">
      <div class="carousel-inner" role="listbox">';
	  $dss=1;
        foreach($user_location_vals2 as $usrloc){
			$user_vals = $userTable->find('all', array('fields' => array('email','name','industry','id','image') ,'conditions' => array('Users.id' =>$usrloc['user_id'])));
			
			$user_val=$user_vals->toarray();
			$usr=@$user_val[0];
		if($usr['image']!=''){
			$user_img='./api/user_image/'.$usr['image'];
			}else{$user_img='src/img/no-image_small.png';}
			if($dss=='1'){$uimact=' active';}
				else{$uimact='';}
				
				if($usr['industry']!=''){$usr_indus=$usr['industry'];}else{$usr_indus='&nbsp;';}
        $html.='<div class="item '.$uimact.'">
            <div class="image"><img src="'.$user_img.'"></div>
            <div class="name">'.$usr['name'].'</div><div class="position">'.$usr_indus.'</div>
        </div>';
		$dss++;
		}
		
        
      $html.='</div><a class="left carousel-control" href="#myCarousel1" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel1" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>';		
			
$html.='<ul>';

if(count($user_location_val2)>0){
	$u='1';
	foreach($user_location_val2 as $usrloc){
			$user_vals = $userTable->find('all', array('fields' => array('email','name','industry','id','image') ,'conditions' => array('Users.id' =>$usrloc['user_id'])));
			$user_val=$user_vals->toarray();
			$usr=@$user_val['0'];
		if($usr['image']!=''){
			$user_img=$usr['image'];
			}else{$user_img='small_no-image.png';}
			
   $html.= '<li><img src="./api/user_image/'.$user_img.'"></li>';
	if($u=='5'){break;}
	$u++;		
	}
	
    
	}
	if(count($user_location_val2)>5){
	$remain_user=count($user_location_val2)-5;
$html.='<li class="last_remain">+'.$remain_user.'</li>';
	}
$html.='</ul>
</div>
</div>';
		$json = json_encode(array('status' => 'success','html' =>htmlspecialchars($html),'remain'=>$location_val['0']['remain_capacity'],'book_btn' =>$book_btn,'location_name' =>$location_val['0']['name']));
		echo ($json);  exit;
				
		}else{
			if($html!=''){$json = json_encode(array('status' => 'success','html' =>htmlspecialchars($html),'remain'=>$location_val['0']['remain_capacity'],'book_btn' =>$book_btn,'location_name' =>$location_val['0']['name']));
				echo ($json);  exit;
				}
			else{
			$json = json_encode(array('status' => 'fail','type' =>'empty'));
			}
			echo ($json);exit;
			}
		}else{$json = json_encode(array('status' => 'fail','type' =>'empty'));}
			echo ($json);exit;
		exit;
	}
public function getsharepage()
    {
		$locationTable = TableRegistry::get('Locations');
		$userTable = TableRegistry::get('Users');
		$imageTable = TableRegistry::get('LocationImages');
		$UsersInLocationTable = TableRegistry::get('UsersInLocation');
		
		
		$userId=$this->request->data['user'];
		$location_name=urldecode($this->request->data['location_name']);
		
		$user_lo_vls = $UsersInLocationTable->find('all',array('conditions' => array('UsersInLocation.user_id' =>$userId,'Locations.name' => $location_name),'limit'=>1))->hydrate(false)->join(array(
        'table' => 'locations',
        'alias' => 'Locations',
        'type' => 'LEFT',
        'conditions' => array('Locations.id = UsersInLocation.location_id')
    ));
		$value_user=$user_lo_vls->toarray();
		$locationId=$value_user['0']['location_id'];

		//$locationId=$this->request->data['locationid'];
		
		$location_vals = $locationTable->find('all',array('conditions' => array('Locations.id' =>$locationId)));
		$location_val=$location_vals->toarray();
		//pr($location_val['0']['wifi']); exit;
		$seat_fill=$location_val['0']['capacity']-$location_val['0']['remain_capacity'];
		$percentace=($seat_fill/$location_val['0']['capacity'])*100;
		$perc=round($percentace);
				if($perc >= 100){$perc=100;}
		
		if(count($location_val)>0){
			$html='';
			
			    $html='<!-- Carousel
    ================================================== -->
    <div id="myCarousel" class="carousel slide picker_top_carousel" data-ride="carousel" data-interval="false">
      <div class="carousel-inner" role="listbox">';
	  	$image_vals = $imageTable->find('all',array('conditions' => array('LocationImages.locationid' =>$locationId)));
		$image_val=$image_vals->toarray();
		if(count($image_val)>0){
			$imgact='1';
			foreach($image_val as $imgval){
				if($imgact=='1'){$imact=' active';}
				else{$imact='';}
		 	$html.='<div class="item '.$imact.'" style="background:url(src/img/location_image/'.$imgval['name'].') no-repeat center / cover;"></div>';	
			$imgact++;
			}
		}else{
	  
        $html.='<div class="item active" style="background:url(src/img/no-image.png) no-repeat center / cover;"></div>';
		}
		
        $html.='
      </div>
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div><!-- /.carousel -->';
	
	$html.='
<div class="amnities">
<div class="amnities_in">
<ul>';
if($location_val['0']['wifi']){$html.='<li><img src="src/img/picker_icon1.png" /></li>';}
if($location_val['0']['shower']){$html.='<li><img src="src/img/picker_icon2.png" /></li>';}
if($location_val['0']['access']){$html.='<li><img src="src/img/picker_icon3.png" /></li>';}
if($location_val['0']['bike']){$html.='<li><img src="src/img/picker_icon4.png" /></li>';}
if($location_val['0']['kitchen']){$html.='<li><img src="src/img/picker_icon5.png" /></li>';}
if($location_val['0']['parking']){$html.='<li><img src="src/img/picker_icon6.png" /></li>';}
if($location_val['0']['remain_capacity']>0){$remain_cap=$location_val['0']['remain_capacity'];}
else{$remain_cap='0';}
$html.='</ul><div class="clearfix"></div>
</div><div class="clearfix"></div>
</div>


<div class="location location11">
<div class="location_in">
<div class="col-md-7">
<div class="place_name">'.$location_val['0']['name'].'</div>
<div class="clearfix"></div>
</div>

<div class="col-md-5">
<div class="rate">£'.$location_val['0']['desk_price'].'
<span>/desk</span></div>
<div class="clearfix"></div>

</div>

<div class="clearfix"></div>


<div class="p_bar_up">
    <span>
    	<strong>'.floor($remain_cap).'</strong>/ '.$location_val['0']['capacity'].'
    </span> 
desks avalible
</div>
<div class="p_bar_up p_bar_up1">
	<span>
	<strong>';
$day = 86400;
$format = 'd/m/Y';
$startTime = time();
$endTime = strtotime($location_val['0']['lastdate']);
$numDays = round(($endTime - $startTime) / $day) + 1;

if($numDays>0){$html.=$numDays ; $book_btn='1';}
else{$html.='0';$book_btn='0';}

	$html.='</strong>
	</span>
days left</div>


<div class="col-md-12">
    <div class="p_bar">
	
    <div class="p_bar_in" style="width:'.$perc.'%;"></div>
    </div>
</div>

</div>
</div>



<div class="thumbox5a">
<div class="thumbox5a_in">';
	$user_location_vals = $UsersInLocationTable->find('all',array('conditions' => array('UsersInLocation.location_id' =>$location_val['0']['id'])));
	$user_location_vals2 = $UsersInLocationTable->find('all',array('conditions' => array('UsersInLocation.location_id' =>$location_val['0']['id']),'group' =>'UsersInLocation.user_id'));
		$user_location_val=$user_location_vals->toarray();
		$user_location_val2=$user_location_vals2->toarray();
		if(count($user_location_val)>0){
			
			
$html.='<div id="myCarousel1" class="carousel slide picker_image_carousel dis_none" data-ride="carousel" data-interval="false">
      <div class="carousel-inner" role="listbox">';
	  $dss=1;
        foreach($user_location_vals2 as $usrloc){
			$user_vals = $userTable->find('all', array('fields' => array('email','name','industry','id','image') ,'conditions' => array('Users.id' =>$usrloc['user_id'])));
			
			$user_val=$user_vals->toarray();
			$usr=@$user_val[0];
		if($usr['image']!=''){
			$user_img='./api/user_image/'.$usr['image'];
			}else{$user_img='src/img/no-image_small.png';}
			if($dss=='1'){$uimact=' active';}
				else{$uimact='';}
				
				if($usr['industry']!=''){$usr_indus=$usr['industry'];}else{$usr_indus='&nbsp;';}
        $html.='<div class="item '.$uimact.'">
            <div class="image"><img src="'.$user_img.'"></div>
            <div class="name">'.$usr['name'].'</div><div class="position">'.$usr_indus.'</div>
        </div>';
		$dss++;
		}
		
        
      $html.='</div><a class="left carousel-control" href="#myCarousel1" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel1" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>';		
			
$html.='<ul>';

if(count($user_location_val2)>0){
	$u='1';
	foreach($user_location_val2 as $usrloc){
			$user_vals = $userTable->find('all', array('fields' => array('email','name','industry','id','image') ,'conditions' => array('Users.id' =>$usrloc['user_id'])));
			$user_val=$user_vals->toarray();
			$usr=@$user_val['0'];
		if($usr['image']!=''){
			$user_img=$usr['image'];
			}else{$user_img='small_no-image.png';}
			
   $html.= '<li><img src="./api/user_image/'.$user_img.'"></li>';
	if($u=='5'){break;}
	$u++;		
	}
	
    
	}
	if(count($user_location_val2)>5){
	$remain_user=count($user_location_val2)-5;
$html.='<li class="last_remain">+'.$remain_user.'</li>';
	}
$html.='</ul>
</div>
</div>';
		$json = json_encode(array('status' => 'success','html' =>htmlspecialchars($html),'remain'=>$location_val['0']['remain_capacity'],'book_btn' =>$book_btn,'location_name' =>$location_val['0']['name']));
		echo ($json);  exit;
				
		}else{
			if($html!=''){$json = json_encode(array('status' => 'success','html' =>htmlspecialchars($html),'book_btn' =>$book_btn));
				echo ($json);  exit;
				}
			else{
			$json = json_encode(array('status' => 'fail','type' =>'empty'));
			}
			echo ($json);exit;
			}
		}else{$json = json_encode(array('status' => 'fail','type' =>'empty'));}
			echo ($json);exit;
		exit;
	}
	
public function getuser()
    {

		$userId=$this->request->data['user'];
		$location_name=urldecode($this->request->data['location_name']);
		$locationTable = TableRegistry::get('Locations');
		$userTable = TableRegistry::get('Users');
		$imageTable = TableRegistry::get('LocationImages');
		$UsersInLocationTable = TableRegistry::get('UsersInLocation');
		if($location_name==''){
		$user_lo_vls = $UsersInLocationTable->find('all',array('conditions' => array('UsersInLocation.user_id' =>$userId),'order' => array('UsersInLocation.id' => 'desc'),'limit'=>1));
		}else{
		$user_lo_vls = $UsersInLocationTable->find('all',array('conditions' => array('UsersInLocation.user_id' =>$userId,'Locations.name' => $location_name),'limit'=>1))->hydrate(false)->join(array(
        'table' => 'locations',
        'alias' => 'Locations',
        'type' => 'LEFT',
        'conditions' => array('Locations.id = UsersInLocation.location_id')
    ));
		}
		
		$value_user=$user_lo_vls->toarray();
		$locationId=$value_user['0']['location_id'];
		$location_vals = $locationTable->find('all',array('conditions' => array('Locations.id' =>$locationId)));
		$location_val=$location_vals->toarray();
		//pr($location_val['0']['wifi']); exit;
		$seat_fill=$location_val['0']['capacity']-$location_val['0']['remain_capacity'];
		$percentace=($seat_fill/$location_val['0']['capacity'])*100;
		$perc=round($percentace);
				if($perc >= 100){$perc=100;}
		
		if(count($location_val)>0){
			$html='';
			
			    $html='<!-- Carousel
    ================================================== -->
    <div id="myCarousel" class="carousel slide picker_top_carousel" data-ride="carousel" data-interval="false">
      <div class="carousel-inner" role="listbox">';
	  	$image_vals = $imageTable->find('all',array('conditions' => array('LocationImages.locationid' =>$locationId)));
		$image_val=$image_vals->toarray();
		if(count($image_val)>0){
			$imgact='1';
			foreach($image_val as $imgval){
				if($imgact=='1'){$imact=' active';}
				else{$imact='';}
		 	$html.='<div class="item '.$imact.'" style="background:url(src/img/location_image/'.$imgval['name'].') no-repeat center / cover;"></div>';	
			$imgact++;
			}
		}else{
	  
        $html.='<div class="item active" style="background:url(src/img/no-image.png) no-repeat center / cover;"></div>';
		}
		
        $html.='
      </div>
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div><!-- /.carousel -->';
	
	$html.='
<div class="amnities">
<div class="amnities_in">
<ul>';
if($location_val['0']['wifi']){$html.='<li><img src="src/img/picker_icon1.png" /></li>';}
if($location_val['0']['shower']){$html.='<li><img src="src/img/picker_icon2.png" /></li>';}
if($location_val['0']['access']){$html.='<li><img src="src/img/picker_icon3.png" /></li>';}
if($location_val['0']['bike']){$html.='<li><img src="src/img/picker_icon4.png" /></li>';}
if($location_val['0']['kitchen']){$html.='<li><img src="src/img/picker_icon5.png" /></li>';}
if($location_val['0']['parking']){$html.='<li><img src="src/img/picker_icon6.png" /></li>';}
if($location_val['0']['remain_capacity']>0){$remain_cap=$location_val['0']['remain_capacity'];}
else{$remain_cap='0';}
$html.='</ul><div class="clearfix"></div>
</div><div class="clearfix"></div>
</div>


<div class="location location11">
<div class="location_in">
<div class="col-md-7">
<div class="place_name">'.$location_val['0']['name'].'</div>
<div class="clearfix"></div>
</div>

<div class="col-md-5">
<a href="javascript:;" class="back_botom"><div class="rate"><i class="fa fa-share" aria-hidden="true"></i></div></a>
<div class="clearfix"></div>

</div>

<div class="clearfix"></div>


<div class="p_bar_up">
    <span>
    	<strong>'.floor($remain_cap).'</strong>/ '.$location_val['0']['capacity'].'
    </span> 
desks avalible
</div>
<div class="p_bar_up p_bar_up1">
	<span>
	<strong>';
$day = 86400;
$format = 'd/m/Y';
$startTime = time();
$endTime = strtotime($location_val['0']['lastdate']);
$numDays = round(($endTime - $startTime) / $day) + 1;

if($numDays>'0'){
$html.=$numDays ;
}else{
	$html.='0' ;
	}
	$html.='</strong>
	</span>
days left</div>


<div class="col-md-12">
    <div class="p_bar">
	
    <div class="p_bar_in" style="width:'.$perc.'%;"></div>
    </div>
</div>

</div>
</div>



<div class="thumbox5a">
<div class="thumbox5a_in">';
	$user_location_vals = $UsersInLocationTable->find('all',array('conditions' => array('UsersInLocation.location_id' =>$location_val['0']['id'])));
	$user_location_vals2 = $UsersInLocationTable->find('all',array('conditions' => array('UsersInLocation.location_id' =>$location_val['0']['id']),'order' => array('UsersInLocation.id' => 'desc'),'group' =>'UsersInLocation.user_id'));
	$user_location_vals3 = $UsersInLocationTable->find('all',array('conditions' => array('UsersInLocation.location_id' =>$location_val['0']['id']),'group' =>'UsersInLocation.user_id'));
		$user_location_val=$user_location_vals->toarray();
		$user_location_val2=$user_location_vals2->toarray();
		$user_location_val3=$user_location_vals3->toarray();
		if(count($user_location_val)>0){
			
			
$html.='<div id="myCarousel1" class="carousel slide picker_image_carousel" data-ride="carousel" data-interval="false">
      <div class="carousel-inner" role="listbox">';
	  $dss=1;
        foreach($user_location_val2 as $usrloc){
			$user_vals = $userTable->find('all', array('fields' => array('email','name','industry','id','image') ,'conditions' => array('Users.id' =>$usrloc['user_id'])));
			$user_val=$user_vals->toarray();
			$usr=@$user_val['0'];
		if($usr['image']!=''){
			$user_img='./api/user_image/'.$usr['image'];
			}else{$user_img='src/img/no-image_small.png';}
			if($dss=='1'){$uimact=' active';}
				else{$uimact='';}
				
				if($usr['industry']!=''){$usr_indus=$usr['industry'];}else{$usr_indus='&nbsp;';}
        $html.='<div class="item '.$uimact.'">
            <div class="image"><img src="'.$user_img.'"></div>
            <div class="name">'.$usr['name'].'</div><div class="position">'.$usr_indus.'</div>
        </div>';
		$dss++;
		}
		
        
      $html.='</div><a class="left carousel-control" href="#myCarousel1" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel1" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>';		
			
$html.='<ul>';
if(count($user_location_val3)>0){
	$u='1';
	foreach($user_location_val3 as $usrloc){
			$user_vals = $userTable->find('all', array('fields' => array('email','name','industry','id','image') ,'conditions' => array('Users.id' =>$usrloc['user_id'])));
			$user_val=$user_vals->toarray();
			$usr=@$user_val['0'];
		if($usr['image']!=''){
			$user_img=$usr['image'];
			}else{$user_img='small_no-image.png';}
			
   $html.= '<li><img src="./api/user_image/'.$user_img.'"></li>';
		if($u=='5'){break;}
	$u++;	
	}
	
    
	}


		
		if(count($user_location_val3)>5){
	$remain_user=count($user_location_val3)-5;
$html.='<li class="last_remain">+'.$remain_user.'</li>';
	}

$html.='</ul>
</div>
</div>';

			 $json = json_encode(array('status' => 'success','html' =>htmlspecialchars($html),'remain'=>$location_val['0']['remain_capacity']));
				echo ($json);  exit;
				
		}else{
			if($html!=''){$json = json_encode(array('status' => 'success','html' =>htmlspecialchars($html)));
				echo ($json);  exit;}
			else{
			$json = json_encode(array('status' => 'fail','type' =>'empty'));
			}
			echo ($json);exit;
			}
		}else{$json = json_encode(array('status' => 'fail','type' =>'empty'));}
			echo ($json);exit;
		exit;
	}
public function getremainingdetails()
    {

		$location_name=urldecode($this->request->data['location']);
		$locationTable = TableRegistry::get('Locations');
		$userTable = TableRegistry::get('Users');
		$imageTable = TableRegistry::get('LocationImages');
		$UsersInLocationTable = TableRegistry::get('UsersInLocation');
	
		$location_vals = $locationTable->find('all',array('conditions' => array('Locations.name' =>$location_name)));
		$location_val=$location_vals->toarray();
		$remain=$location_val['0']['remain_capacity'];
				if(count($location_val)>0){
				$day = 86400;
				$format = 'd/m/Y';
				$startTime = time();
				$endTime = strtotime($location_val['0']['lastdate']);
				$numDays = round(($endTime - $startTime) / $day) + 1;
				
				if($numDays>0){$days=$numDays;}else{$days='0';}
				if($remain>0){$remainval=$remain;}else{$remainval='0';}
			if($remain>0){
			$html ="we need to fill ".round($remainval)." more spaces in this location before it is vialble and have ".$days." days to do it";
			}else{
				$html ="This was the last space in the ".$location_val['0']['name']."! We'll be in touch soon.";
				}
			 $json = json_encode(array('status' => 'success','html' =>htmlspecialchars($html)));
				echo ($json);  exit;
			}else{
				$html ="we need to fill 0 more spaces in this location before it is vialble and have 0 days to do it";
				$json = json_encode(array('status' => 'fail','html' =>htmlspecialchars($html)));}
			echo ($json);exit;
		exit;
	}	

  public function getuserdetail()
    {
		
		$userId=$this->request->data['user'];
		$userTable = TableRegistry::get('Users');
		$user_vls = $userTable->find('all',array('conditions' => array('Users.id' =>$userId)));
		$value_user=$user_vls->toarray();
		if(count($value_user)>0){
		$json = json_encode(array('status' => 'success','address1' =>$value_user['0']['address1'],'address2' =>$value_user['0']['address2'],'city' =>$value_user['0']['city'],'county' =>$value_user['0']['county'],'post_code' =>$value_user['0']['post_code'],'country' =>$value_user['0']['country'],'phone_number' =>$value_user['0']['phone_number']));
		echo $json; exit;
		}exit;
	}
	
	
	public function contactusmail()
    {
		$mailContent1='<p> Hello Admin </p>';
		
		$mailContent1.='<p> Someone has submitted the contact form from our site. Please check his details below are: </p>';
		
		$mailContent1.='<p> <strong>Email:</strong>  '.$this->request->data['email'].' </p>';
		$mailContent1.='<p> <strong>Message:</strong> '.$this->request->data['cotact_mssg'].' </p>';
		
		$mailContent1.='<p> Thanks, <br />';
		$mailContent1.='The WorkPlace Team </p>';
		
		$to1 = 'dan@theworkplace.cc';
		$subject1 = 'Contact Us Message ';
		$headers1 = "MIME-Version: 1.0\r\n";
		$headers1 .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
		$headers1 .= 'From: Info Workplace<info@theworkplace.cc>' . "\r\n";
		
		if(mail($to1, $subject1, $mailContent1, $headers1)) {
			$json = json_encode(array('status' => 'success'));
			} else {
				$json = json_encode(array('status' => 'fail'));
				};
	
		echo $json; exit;
	}
	
	public function sescheck()
    {
		$locationTable = TableRegistry::get('Locations');
		$UsersInLocationTable = TableRegistry::get('UsersInLocation');
		$userTable = TableRegistry::get('Users');
		//$user_vls = $userTable->find('all',array('conditions' => array('Users.id' =>'11')))
		$user_vls = $UsersInLocationTable->find('all',array('conditions' => array('UsersInLocation.user_id' =>'11','Locations.name' => 'World Trade Park'),'limit'=>1))->hydrate(false)->join(array(
        'table' => 'locations',
        'alias' => 'Locations',
        'type' => 'LEFT',
        'conditions' => array('Locations.id = UsersInLocation.location_id')
    ));
		$value_user=$user_vls->toarray();
		pr($value_user); exit;
		
		//if(count($value_user)>0){
		
		
		echo Configure::read('Site.url'); exit;
		pr($this->request->session()->read('location')); exit;
		$userId=$this->request->data['user'];
		$userTable = TableRegistry::get('Users');
		$user_vls = $userTable->find('all',array('conditions' => array('Users.id' =>$userId)));
		$value_user=$user_vls->toarray();
		if(count($value_user)>0){
		$json = json_encode(array('status' => 'success','address1' =>$value_user['0']['address1'],'address2' =>$value_user['0']['address2'],'city' =>$value_user['0']['city'],'county' =>$value_user['0']['county'],'post_code' =>$value_user['0']['post_code'],'country' =>$value_user['0']['country'],'phone_number' =>$value_user['0']['phone_number']));
		echo $json; exit;
		}exit;
	}
	
	
	public function sdfare(){
	
			
		$email='dan_fs@hotmail.com';	
			$size='75';
			$defaultImg=$base_url.'src/img/small_no-image.jpg';
    		$gravatarImage='http://www.gravatar.com/avatar/'.md5($email).'?=' . $size . '&default=' . $defaultImg . '&r=G';
			echo $gravatarImage;
									$url=$gravatarImage;
									 $filename=time().".jpg";
									 $path=ROOT .DS. 'webroot'.DS. 'user_image'.DS ;
									 $handle = fopen($url, 'r');
									 file_put_contents($path.$filename, $handle);
	
	exit;
	
		}
    
}
