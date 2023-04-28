/* Amplify Params - DO NOT EDIT
	API_HOUSEHOLDAPP_GRAPHQLAPIIDOUTPUT
	API_HOUSEHOLDAPP_HOUSEHOLDMEMBERTABLE_ARN
	API_HOUSEHOLDAPP_HOUSEHOLDMEMBERTABLE_NAME
	API_HOUSEHOLDAPP_HOUSEHOLDTABLE_ARN
	API_HOUSEHOLDAPP_HOUSEHOLDTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const { houseHoldId, houseHoldMemberId } = event.arguments;
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    let ownerId;

	// Get the HouseHoldMember and retrieve the ownerId
	const getMemberParams = {
		TableName: process.env.API_HOUSEHOLDAPP_HOUSEHOLDMEMBERTABLE_NAME,
		Key: {
			id: houseHoldMemberId,
		}
	};

	try {
		const data = await dynamoDb.get(getMemberParams).promise();
		if (!data.Item) throw new Error("Invalid houseHoldMemberId.");
		ownerId = data.Item.owner;
	} catch (error) {
		console.log(error);
		throw error;
	}

    // Get HouseHold and ensure user is already within the owners array.
	// If not, throw an error.
	const getHouseHoldParams = {
		TableName: process.env.API_HOUSEHOLDAPP_HOUSEHOLDTABLE_NAME,
		Key: {
			id: houseHoldId,
		},
	};

	try {
		const data = await dynamoDb.get(getHouseHoldParams).promise();
		// Check if user is already a member of the household. If so, throw an error.
		const ownerIndex = data.Item.owners.indexOf(ownerId);
		if (ownerIndex == -1) throw new Error("User is not a member of the household.");

		// Remove user from the household.
		try {
			await removeOwner(dynamoDb, ownerIndex, houseHoldId);
		}
		catch (error) {
			throw error;
		};
	} catch (error) {
		console.log(error)
		throw error;
	}

	// Delete the HouseHold Member
	const deleteMemberParams = {
		TableName: process.env.API_HOUSEHOLDAPP_HOUSEHOLDMEMBERTABLE_NAME,
		Key: {
			id: houseHoldMemberId, 
		},
	};

	try {
		await dynamoDb.delete(deleteMemberParams).promise();
	} catch (error) {
		console.log(error);
		throw error;
	}

    return "Successfully removed HouseHold Member.";
};

// Helper function to remove the user from the household's owners field
const removeOwner = async (dynamoDb, ownerIndex, houseHoldId) => {
	const updateParams = {
		TableName: process.env.API_HOUSEHOLDAPP_HOUSEHOLDTABLE_NAME,
		Key: {
			id: houseHoldId,
		},
		UpdateExpression: "REMOVE owners[" + ownerIndex + "]",
	};

	try {
		await dynamoDb.update(updateParams).promise();
	} catch (error) {
		console.log(error);
		throw error;
	}
}