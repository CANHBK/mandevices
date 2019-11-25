import { gql } from "apollo-server-express";

export default gql`
	enum DayOfWeeks {
		monday
		tuesday
		wednesday
		thursday
		friday
		saturday
		sunday
	}

	enum Session {
		SANG
		CHIEU
	}

	type GuardingAssignmentRegistration {
		id: ID
	}

	type GuardingAssignmentSubscriber {
		user: User
		session: [Session]
	}

	type GuardingAssignmentBySession {
		morning: [User]!
		afternoon: [User]!
	}

	input SubscribersWhereInput {
		session: [Session]
	}

	type GuardingAssignment {
		id: ID
		name: String
		subscribers(where: SubscribersWhereInput): [GuardingAssignmentSubscriber]
	}

	input GuardingAssignmentWhereUniqueInput {
		id: ID!
	}

	extend type Mutation {
		registerGuardingAssignment(
			day: DayOfWeeks!
			session: [Session]
		): GuardingAssignmentRegistration
		trucLab(day: DayOfWeeks, session: Session): Boolean
	}
	extend type Query {
		guardingAssignments: [GuardingAssignment!]!
		guardingAssignment(
			where: GuardingAssignmentWhereUniqueInput!
		): GuardingAssignment
	}
`;
