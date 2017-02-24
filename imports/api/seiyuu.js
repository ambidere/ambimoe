import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check, Match } from 'meteor/check';

export const Seiyuu = new Mongo.Collection('seiyuu');

if (Meteor.isServer) {
  Meteor.publish('seiyuu', function seiyuuPublication() {
    return Seiyuu.find({});
  });
}

Meteor.methods({
	'seiyuu.search': function(search){
		check( search, Match.OneOf( String, null, undefined ) );

		let query      = {},
  		projection = { 
  			limit: 10, 
  		};

		if (search) {
			let regex = new RegExp( search, 'i' );

			query = {
		      $or: [
		        { jp_last: regex },
		        { jp_given: regex },
		        { en_last: regex },
		        { en_given: regex },
		      ]
		    };
		}

		results = [];

		return Seiyuu.find( query, projection ).map(function(value) {
			return {
				childKey : value._id.toString(),
				title : value.jp_last + value.jp_given,
				description : value.en_given + " " + value.en_last
			};
		});
	}
});