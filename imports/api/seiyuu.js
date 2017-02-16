import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Seiyuu = new Mongo.Collection('seiyuu');

if (Meteor.isServer) {
  Meteor.publish('seiyuu', function seiyuuPublication() {
  	console.log(Seiyuu.find({}));
    return Seiyuu.find({});
  });
}

Meteor.methods(
	{
		'seiyuu.search'(text){
			return Seiyuu.find(text, {
				sort : {
					en_given : -1,
				},
				limit: 5,
			}).fetch();
		}
	},
);