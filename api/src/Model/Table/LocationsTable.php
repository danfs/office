<?php
namespace App\Model\Table;

use App\Model\Entity\User;
use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;


/**
 * Users Model
 *
 * @property \Cake\ORM\Association\BelongsTo $Facebooks
 * @property \Cake\ORM\Association\BelongsTo $Roles
 */
class LocationsTable extends Table
{

    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config)
    {
        parent::initialize($config);

        $this->table('locations');
        $this->displayField('id');
        $this->primaryKey('id');

        $this->addBehavior('Timestamp');

       /* $this->belongsTo('Facebooks', [
            'foreignKey' => 'facebook_id'
        ]);
        $this->belongsTo('Roles', [
            'foreignKey' => 'role_id',
            'joinType' => 'INNER'
        ]);*/
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator)
    {
        $validator
            ->integer('id')
            ->allowEmpty('id', 'create');

        /*$validator
            ->requirePresence('first_name', 'create')
            ->notEmpty('first_name');

        $validator
            ->requirePresence('last_name', 'create')
            ->notEmpty('last_name');

        $validator
            ->email('email')
            ->requirePresence('email', 'create')
            ->notEmpty('email')
            ->add('email', 'unique', ['rule' => 'validateUnique', 'provider' => 'table']);

        $validator
            ->requirePresence('password', 'create')
            ->notEmpty('password');

        $validator
            ->requirePresence('username', 'create')
            ->notEmpty('username');

        $validator
            ->requirePresence('birthday', 'create')
            ->notEmpty('birthday');

        $validator
            ->requirePresence('gender', 'create')
            ->notEmpty('gender');

        $validator
            ->requirePresence('phone', 'create')
            ->notEmpty('phone');

        $validator
            ->requirePresence('grade', 'create')
            ->notEmpty('grade');

        $validator
            ->requirePresence('address1', 'create')
            ->notEmpty('address1');

        $validator
            ->requirePresence('address2', 'create')
            ->notEmpty('address2');

        $validator
            ->requirePresence('city', 'create')
            ->notEmpty('city');

        $validator
            ->integer('show_city')
            ->requirePresence('show_city', 'create')
            ->notEmpty('show_city');

        $validator
            ->allowEmpty('state');

        $validator
            ->requirePresence('country', 'create')
            ->notEmpty('country');

        $validator
            ->requirePresence('zip_code', 'create')
            ->notEmpty('zip_code');

        $validator
            ->requirePresence('profile_img', 'create')
            ->notEmpty('profile_img');

        $validator
            ->integer('subscribe')
            ->requirePresence('subscribe', 'create')
            ->notEmpty('subscribe');

        $validator
            ->requirePresence('store_profile_img', 'create')
            ->notEmpty('store_profile_img');

        $validator
            ->requirePresence('store_name', 'create')
            ->notEmpty('store_name');

        $validator
            ->requirePresence('store_quote', 'create')
            ->notEmpty('store_quote');

        $validator
            ->requirePresence('store_k_to_twelve_subjects', 'create')
            ->notEmpty('store_k_to_twelve_subjects');

        $validator
            ->requirePresence('store_high_school_subjects', 'create')
            ->notEmpty('store_high_school_subjects');

        $validator
            ->requirePresence('store_adult_subjects', 'create')
            ->notEmpty('store_adult_subjects');

        $validator
            ->requirePresence('store_grades', 'create')
            ->notEmpty('store_grades');

        $validator
            ->requirePresence('store_teaching_style', 'create')
            ->notEmpty('store_teaching_style');

        $validator
            ->requirePresence('store_awards', 'create')
            ->notEmpty('store_awards');

        $validator
            ->requirePresence('store_education_hs', 'create')
            ->notEmpty('store_education_hs');

        $validator
            ->requirePresence('store_bio', 'create')
            ->notEmpty('store_bio');

        $validator
            ->requirePresence('paypal_email', 'create')
            ->notEmpty('paypal_email');



        $validator
            ->integer('is_active')
            ->requirePresence('is_active', 'create')
            ->notEmpty('is_active');*/



        return $validator;
    }
}
