import { verify } from "jsonwebtoken";
import { difference } from "lodash";
import typeDefs from "./schema";

export default typeDefs;

export const resolvers = {
	GuardingAssignmentSubscriber: {
		// user: (parent, _, { dbClient }) => {
		// 	return UserProfileController.getInstance().findById(
		// 		(parent as any).userId
		// 	);
		// }
	},
	GuardingAssignment: {
		id: parent => {
			return (parent as any)._id;
		},
		subscribers: async (parent, { where }) => {
			return (parent as any).users.filter((user: any) => {
				if (where && where.session) {
					return !difference(
						where.session,
						user.session
					).length;
				}
				return true;
			});
		}
	},
	GuardingAssignmentRegistration: {
		id: parent => {
			return (parent as any)._id;
		}
	},

	Query: {
		guardingAssignments: async (_, __) => {
			// return dbClient
			// 	.collection(Collections.GuardAssignmentRegistrations)
			// 	.find()
			// 	.toArray();
			return null;
		}
		// guardingAssignment: async (_, { where }, { dbClient }) => {
		// 	return dbClient
		// 		.collection(Collections.GuardAssignmentRegistrations)
		// 		.findOne({
		// 			_id: new ObjectId(where.id)
		// 		});
		// }
	},
	Mutation: {
		registerGuardingAssignment: async (
			_,
			{ day, session },
			{ token }
		) => {
			// const { id } = verifyToken(token);
			// const existinRegistrationOfThisUser = await dbClient
			// 	.collection("guardAssignmentRegistrations")
			// 	.findOne({
			// 		dayOfWeeks: day,
			// 		"users.userId": id
			// 	});

			// if (existinRegistrationOfThisUser) {
			// 	if (!session) {
			// 		const updated = await dbClient
			// 			.collection(Collections.GuardAssignmentRegistrations)
			// 			.findOneAndUpdate(
			// 				{
			// 					dayOfWeeks: day,
			// 					"users.userId": id
			// 				},
			// 				{
			// 					$pull: {
			// 						users: {
			// 							userId: id
			// 						}
			// 					}
			// 				}
			// 			);

			// 		return updated.value;
			// 	}
			// 	const user = existinRegistrationOfThisUser.users.filter(
			// 		(user: any) => user.userId == id
			// 	)[0];

			// 	if (JSON.stringify(user.session) == JSON.stringify(session)) {
			// 		throw new Error("Đã đăng kí");
			// 	}
			// 	const updated = await dbClient
			// 		.collection(Collections.GuardAssignmentRegistrations)
			// 		.findOneAndUpdate(
			// 			{
			// 				dayOfWeeks: day,
			// 				"users.userId": id
			// 			},
			// 			{
			// 				$set: {
			// 					"users.$.session": session
			// 				}
			// 			}
			// 		);

			// 	return updated.value;
			// }
			// if (!session) {
			// 	throw new Error("Phải đăng kí buổi trực");
			// }
			// const updated = await dbClient
			// 	.collection(Collections.GuardAssignmentRegistrations)
			// 	.findOneAndUpdate(
			// 		{
			// 			dayOfWeeks: day
			// 		},
			// 		{
			// 			$push: {
			// 				users: {
			// 					userId: id,
			// 					session
			// 				}
			// 			}
			// 		}
			// 	);

			// return updated.value;
			return null;
		},

		trucLab: async (_, { day, session }, { token }) => {
			const { id }: any = verifyToken(token);

			// dbClient.collection<GuardingAssignment>("guardAssignments").insertOne({
			// 	user:
			// })
			return null;
		}
	}
};

const verifyToken = (token: string | undefined) => {
	if (!token) throw new Error("Cần đăng nhập");
	const result = verify(token, process.env.TOKEN_SECRET!);
	return result as { id: string };
};
