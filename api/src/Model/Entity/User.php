<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;
use Cake\Auth\DefaultPasswordHasher;

/**
 * User Entity.
 *
 * @property int $id
 * @property string $facebook_id
 * @property string $first_name
 * @property string $last_name
 * @property string $email
 * @property string $password
 * @property string $username
 * @property string $birthday
 * @property string $gender
 * @property string $phone
 * @property string $grade
 * @property string $address1
 * @property string $address2
 * @property string $city
 * @property int $show_city
 * @property string $state
 * @property string $country
 * @property string $zip_code
 * @property string $profile_img
 * @property int $subscribe
 * @property string $store_profile_img
 * @property string $store_name
 * @property string $store_quote
 * @property string $store_k_to_twelve_subjects
 * @property string $store_high_school_subjects
 * @property string $store_adult_subjects
 * @property string $store_grades
 * @property string $store_teaching_style
 * @property string $store_awards
 * @property string $store_education_hs
 * @property string $store_bio
 * @property string $paypal_email
 * @property string $activation_key
 * @property int $user_type
 * @property int $referral
 * @property float $money
 * @property int $role_id
 * @property int $is_active
 * @property int $deactivate_flag
 * @property int $tips_mail
 * @property int $recommend_mail
 * @property int $sender_info_mail
 * @property int $osc_trust_partner_mail
 * @property \Cake\I18n\Time $created
 * @property \Cake\I18n\Time $modified
 */
class User extends Entity
{

    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array
     */
    protected $_accessible = [
        '*' => true,
        'id' => false,
    ];

    /**
     * Fields that are excluded from JSON an array versions of the entity.
     *
     * @var array
     */
    protected $_hidden = [
        'password'
    ];
	protected function _setPassword($password)
    {
	return md5($password);
        //return (new DefaultPasswordHasher)->hash($password);
    }
}
