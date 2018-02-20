var Schema = {
    restaurant: {
        id: {type: 'increments', nullable: false, primary: true},
        name: {type: 'string', maxLength: 100, nullable: false},
        website: {type: 'string', maxLength: 255, nullable: false},
        phone_number: {type: 'string', maxLength: 14, nullable: true},
        address: {type: 'string', maxLength: 140, nullable: false},
        active: {type: 'bit', nullable: false},
        added_by_user_id: {type: 'integer', nullable: true},
        restaurant_price_level_id: {type: 'integer', nullable: true},
        average_rating: {type: 'double', nullable: true},
        hours: {type: 'string', maxLength: 77, nullable: true},
        last_updated_ts: {type: 'dateTime', nullable: false}
    }
};

module.exports = Schema;