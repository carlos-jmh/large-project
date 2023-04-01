export const schema = {
    "models": {
        "Message": {
            "name": "Message",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "message": {
                    "name": "message",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "authorHouseHoldMemberId": {
                    "name": "authorHouseHoldMemberId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ChatRoom": {
                    "name": "ChatRoom",
                    "isArray": false,
                    "type": {
                        "model": "ChatRoom"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "chatRoomId"
                        ]
                    }
                },
                "chatRoomId": {
                    "name": "chatRoomId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Messages",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "mutations": {
                            "create": null,
                            "delete": null,
                            "update": null
                        }
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byChatRoom",
                        "fields": [
                            "chatRoomId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "custom",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
<<<<<<< HEAD
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
=======
>>>>>>> 937e2ff (Fix overwritten changes.)
                            }
                        ]
                    }
                }
            ]
        },
        "ChatRoom": {
            "name": "ChatRoom",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Messages": {
                    "name": "Messages",
                    "isArray": true,
                    "type": {
                        "model": "Message"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "ChatRoom"
                        ]
                    }
                },
                "houseHoldId": {
                    "name": "houseHoldId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "HouseHold": {
                    "name": "HouseHold",
                    "isArray": false,
                    "type": {
                        "model": "HouseHold"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "houseHoldId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "ChatRooms",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "mutations": {
                            "create": null,
                            "delete": null,
                            "update": null
                        }
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "custom",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
<<<<<<< HEAD
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
=======
>>>>>>> 937e2ff (Fix overwritten changes.)
                            }
                        ]
                    }
                }
            ]
        },
<<<<<<< HEAD
        "HouseHold": {
            "name": "HouseHold",
=======
        "Task": {
            "name": "Task",
>>>>>>> 937e2ff (Fix overwritten changes.)
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
<<<<<<< HEAD
                "name": {
                    "name": "name",
=======
                "title": {
                    "name": "title",
>>>>>>> 937e2ff (Fix overwritten changes.)
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "houseHoldId": {
                    "name": "houseHoldId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "foreverTask": {
                    "name": "foreverTask",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
<<<<<<< HEAD
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "HouseHold"
                        ]
                    }
=======
                    "attributes": []
>>>>>>> 937e2ff (Fix overwritten changes.)
                },
                "listId": {
                    "name": "listId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "List": {
                    "name": "List",
                    "isArray": false,
                    "type": {
                        "model": "List"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "listId"
                        ]
                    }
                },
                "itemId": {
                    "name": "itemId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "Item": {
                    "name": "Item",
                    "isArray": false,
                    "type": {
                        "model": "Item"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "itemId"
                        ]
                    }
                },
                "deleteSourceOnComplete": {
                    "name": "deleteSourceOnComplete",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
<<<<<<< HEAD
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "HouseHold"
                        ]
                    }
=======
                    "attributes": []
>>>>>>> 937e2ff (Fix overwritten changes.)
                },
                "eventHandlerId": {
                    "name": "eventHandlerId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EventHandler": {
                    "name": "EventHandler",
                    "isArray": false,
                    "type": {
<<<<<<< HEAD
                        "model": "Calendar"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "eventHandlerId"
                        ]
                    }
                },
                "ChatRoom": {
                    "name": "ChatRoom",
                    "isArray": false,
                    "type": {
                        "model": "ChatRoom"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "houseHoldId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "HouseHolds",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "mutations": {
                            "delete": null
                        }
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byHouseHold",
                        "fields": [
                            "houseHoldId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "custom",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "List": {
            "name": "List",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "houseHoldId": {
                    "name": "houseHoldId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "completed": {
                    "name": "completed",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "Items": {
                    "name": "Items",
                    "isArray": true,
                    "type": {
                        "model": "Item"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "UserProfile"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "listTaskId": {
                    "name": "listTaskId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Lists",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "mutations": {
                            "create": null,
                            "delete": null
                        }
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byOwner",
                        "queryField": "userProfileByOwner",
                        "fields": [
                            "owner",
                            "id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "read"
                                ],
                                "identityClaim": "cognito:username"
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Item": {
            "name": "Item",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "nickname": {
                    "name": "nickname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "userProfileId": {
                    "name": "userProfileId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "UserProfile": {
                    "name": "UserProfile",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "owners": {
                    "name": "owners",
                    "isArray": true,
                    "type": "String",
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "userProfileId"
                        ]
                    }
                },
                "houseHoldId": {
                    "name": "houseHoldId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Task": {
                    "name": "Task",
                    "isArray": false,
                    "type": {
                        "model": "Task"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "houseHoldId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Items",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "mutations": {
                            "create": null,
                            "delete": null
                        }
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byList",
                        "fields": [
                            "userProfileId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byHouseHold",
                        "fields": [
                            "houseHoldId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owners",
                                "allow": "owner",
                                "operations": [
                                    "read"
                                ],
                                "identityClaim": "cognito:username"
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "operations": [
                                    "read"
                                ],
                                "identityClaim": "cognito:username"
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Task": {
            "name": "Task",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "calendarId": {
                    "name": "calendarId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Calendar": {
                    "name": "Calendar",
                    "isArray": false,
                    "type": {
                        "model": "Calendar"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "calendarId"
                        ]
                    }
                },
                "itemId": {
                    "name": "itemId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "Item": {
                    "name": "Item",
                    "isArray": false,
                    "type": {
                        "model": "Item"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "itemId"
                        ]
                    }
                },
                "taskId": {
                    "name": "taskId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Task": {
                    "name": "Task",
                    "isArray": false,
                    "type": {
=======
>>>>>>> 937e2ff (Fix overwritten changes.)
                        "model": "EventHandler"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
<<<<<<< HEAD
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
=======
                        "connectionType": "BELONGS_TO",
>>>>>>> 937e2ff (Fix overwritten changes.)
                        "targetNames": [
                            "eventHandlerId"
                        ]
                    }
                },
                "completed": {
                    "name": "completed",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "pointValue": {
                    "name": "pointValue",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "HouseHold": {
                    "name": "HouseHold",
                    "isArray": false,
                    "type": {
                        "model": "HouseHold"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
<<<<<<< HEAD
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
=======
                        "connectionType": "BELONGS_TO",
>>>>>>> 937e2ff (Fix overwritten changes.)
                        "targetNames": [
                            "houseHoldId"
                        ]
                    }
                },
<<<<<<< HEAD
                "sourceDate": {
                    "name": "sourceDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "endDate": {
                    "name": "endDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
=======
>>>>>>> 937e2ff (Fix overwritten changes.)
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Tasks",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "mutations": {
<<<<<<< HEAD
                            "create": null,
                            "update": null,
=======
>>>>>>> 937e2ff (Fix overwritten changes.)
                            "delete": null
                        }
                    }
                },
                {
                    "type": "key",
                    "properties": {
<<<<<<< HEAD
                        "name": "byCalendar",
                        "fields": [
                            "calendarId"
=======
                        "name": "byHouseHold",
                        "fields": [
                            "houseHoldId"
>>>>>>> 937e2ff (Fix overwritten changes.)
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "custom",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
<<<<<<< HEAD
=======
                            }
                        ]
                    }
                }
            ]
        },
        "UserProfile": {
            "name": "UserProfile",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "owner": {
                    "name": "owner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "preferredName": {
                    "name": "preferredName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "HouseHoldMembers": {
                    "name": "HouseHoldMembers",
                    "isArray": true,
                    "type": {
                        "model": "HouseHoldMember"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "UserProfile"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "UserProfiles",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "mutations": {
                            "create": null,
                            "delete": null
                        }
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byOwner",
                        "queryField": "userProfileByOwner",
                        "fields": [
                            "owner",
                            "id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "operations": [
                                    "read"
                                ],
                                "identityClaim": "cognito:username"
>>>>>>> 937e2ff (Fix overwritten changes.)
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
<<<<<<< HEAD
=======
                            }
                        ]
                    }
                }
            ]
        },
        "HouseHoldMember": {
            "name": "HouseHoldMember",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "points": {
                    "name": "points",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "owner": {
                    "name": "owner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "nickname": {
                    "name": "nickname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "userProfileId": {
                    "name": "userProfileId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "UserProfile": {
                    "name": "UserProfile",
                    "isArray": false,
                    "type": {
                        "model": "UserProfile"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "userProfileId"
                        ]
                    }
                },
                "houseHoldId": {
                    "name": "houseHoldId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "HouseHold": {
                    "name": "HouseHold",
                    "isArray": false,
                    "type": {
                        "model": "HouseHold"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "houseHoldId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "HouseHoldMembers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "mutations": {
                            "create": null,
                            "delete": null
                        }
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUserProfile",
                        "fields": [
                            "userProfileId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byHouseHold",
                        "fields": [
                            "houseHoldId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "operations": [
                                    "read"
                                ],
                                "identityClaim": "cognito:username"
>>>>>>> 937e2ff (Fix overwritten changes.)
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EventHandler": {
            "name": "EventHandler",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "frequency": {
                    "name": "frequency",
                    "isArray": false,
<<<<<<< HEAD
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "completed": {
                    "name": "completed",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "eventHandlerId": {
                    "name": "eventHandlerId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "calendarId": {
                    "name": "calendarId",
=======
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
>>>>>>> 937e2ff (Fix overwritten changes.)
                "calendarId": {
                    "name": "calendarId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Calendar": {
                    "name": "Calendar",
                    "isArray": false,
                    "type": {
                        "model": "Calendar"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
<<<<<<< HEAD
                            "eventHandlerId"
=======
                            "calendarId"
>>>>>>> 937e2ff (Fix overwritten changes.)
                        ]
                    }
                },
                "Events": {
                    "name": "Events",
                    "isArray": true,
                    "type": {
                        "model": "Event"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EventHandler"
                        ]
                    }
                },
                "taskId": {
                    "name": "taskId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Task": {
                    "name": "Task",
                    "isArray": false,
                    "type": {
                        "model": "Task"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
<<<<<<< HEAD
                            "calendarId"
=======
                            "eventHandlerTaskId"
>>>>>>> 937e2ff (Fix overwritten changes.)
                        ]
                    }
                },
                "sourceDate": {
                    "name": "sourceDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "endDate": {
                    "name": "endDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "eventHandlerTaskId": {
                    "name": "eventHandlerTaskId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EventHandlers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "mutations": {
                            "create": null,
<<<<<<< HEAD
=======
                            "update": null,
                            "delete": null
                        }
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCalendar",
                        "fields": [
                            "calendarId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "custom",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Event": {
            "name": "Event",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "completed": {
                    "name": "completed",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "eventHandlerId": {
                    "name": "eventHandlerId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "calendarId": {
                    "name": "calendarId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "EventHandler": {
                    "name": "EventHandler",
                    "isArray": false,
                    "type": {
                        "model": "EventHandler"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "eventHandlerId"
                        ]
                    }
                },
                "Calendar": {
                    "name": "Calendar",
                    "isArray": false,
                    "type": {
                        "model": "Calendar"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "calendarId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Events",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "mutations": {
                            "create": null,
>>>>>>> 937e2ff (Fix overwritten changes.)
                            "delete": null
                        }
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEventHandler",
                        "fields": [
                            "eventHandlerId",
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCalendar",
                        "fields": [
                            "calendarId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "custom",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Calendar": {
            "name": "Calendar",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Events": {
                    "name": "Events",
                    "isArray": true,
                    "type": {
                        "model": "Event"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "Calendar"
                        ]
                    }
                },
                "EventHandlers": {
                    "name": "EventHandlers",
                    "isArray": true,
                    "type": {
                        "model": "EventHandler"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "Calendar"
                        ]
                    }
                },
                "houseHoldId": {
                    "name": "houseHoldId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "HouseHold": {
                    "name": "HouseHold",
                    "isArray": false,
                    "type": {
                        "model": "HouseHold"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "houseHoldId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Calendars",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "mutations": {
                            "create": null,
                            "delete": null
                        }
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "custom",
<<<<<<< HEAD
                                "allow": "custom",
=======
>>>>>>> 937e2ff (Fix overwritten changes.)
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
<<<<<<< HEAD
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
=======
>>>>>>> 937e2ff (Fix overwritten changes.)
                                ]
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
<<<<<<< HEAD
        "Event": {
            "name": "Event",
=======
        "HouseHold": {
            "name": "HouseHold",
>>>>>>> 937e2ff (Fix overwritten changes.)
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
<<<<<<< HEAD
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "completed": {
                    "name": "completed",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "prevEventId": {
                    "name": "prevEventId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "nextEventId": {
                    "name": "nextEventId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "eventHandlerId": {
                    "name": "eventHandlerId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "calendarId": {
                    "name": "calendarId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "EventHandler": {
                    "name": "EventHandler",
                    "isArray": false,
                    "type": {
                        "model": "EventHandler"
                    },
                    "isRequired": false,
                    "attributes": [],
=======
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "owners": {
                    "name": "owners",
                    "isArray": true,
                    "type": "String",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "Lists": {
                    "name": "Lists",
                    "isArray": true,
                    "type": {
                        "model": "List"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "HouseHold"
                        ]
                    }
                },
                "Tasks": {
                    "name": "Tasks",
                    "isArray": true,
                    "type": {
                        "model": "Task"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "HouseHold"
                        ]
                    }
                },
                "HouseHoldMembers": {
                    "name": "HouseHoldMembers",
                    "isArray": true,
                    "type": {
                        "model": "HouseHoldMember"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
>>>>>>> 937e2ff (Fix overwritten changes.)
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "HouseHold"
                        ]
                    }
                },
                "Calendar": {
                    "name": "Calendar",
                    "isArray": false,
                    "type": {
                        "model": "Calendar"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
<<<<<<< HEAD
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "calendarId"
=======
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "houseHoldCalendarId"
                        ]
                    }
                },
                "ChatRoom": {
                    "name": "ChatRoom",
                    "isArray": false,
                    "type": {
                        "model": "ChatRoom"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "houseHoldChatRoomId"
>>>>>>> 937e2ff (Fix overwritten changes.)
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
<<<<<<< HEAD
                }
            },
            "syncable": true,
            "pluralName": "Events",
=======
                },
                "houseHoldCalendarId": {
                    "name": "houseHoldCalendarId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "houseHoldChatRoomId": {
                    "name": "houseHoldChatRoomId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "HouseHolds",
>>>>>>> 937e2ff (Fix overwritten changes.)
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "mutations": {
                            "create": null,
                            "delete": null
                        }
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owners",
                                "allow": "owner",
                                "operations": [
                                    "read"
                                ],
                                "identityClaim": "cognito:username"
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
<<<<<<< HEAD
        "HouseHoldMember": {
            "name": "HouseHoldMember",
=======
        "Item": {
            "name": "Item",
>>>>>>> 937e2ff (Fix overwritten changes.)
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
<<<<<<< HEAD
                "points": {
                    "name": "points",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "owner": {
                    "name": "owner",
=======
                "title": {
                    "name": "title",
>>>>>>> 937e2ff (Fix overwritten changes.)
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
<<<<<<< HEAD
=======
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
>>>>>>> 937e2ff (Fix overwritten changes.)
                "completed": {
                    "name": "completed",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "listId": {
                    "name": "listId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "List": {
                    "name": "List",
                    "isArray": false,
                    "type": {
                        "model": "List"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "listId"
                        ]
                    }
                },
                "Task": {
                    "name": "Task",
                    "isArray": false,
                    "type": {
                        "model": "Task"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "itemTaskId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
<<<<<<< HEAD
                }
            },
            "syncable": true,
            "pluralName": "HouseHoldMembers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "mutations": {
                            "create": null,
                            "delete": null
                        }
                    }
=======
                },
                "itemTaskId": {
                    "name": "itemTaskId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Items",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
>>>>>>> 937e2ff (Fix overwritten changes.)
                },
                {
                    "type": "key",
                    "properties": {
<<<<<<< HEAD
                        "name": "byUserProfile",
=======
                        "name": "byList",
>>>>>>> 937e2ff (Fix overwritten changes.)
                        "fields": [
                            "listId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "custom",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
<<<<<<< HEAD
        "UserProfile": {
            "name": "UserProfile",
=======
        "List": {
            "name": "List",
>>>>>>> 937e2ff (Fix overwritten changes.)
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
<<<<<<< HEAD
                "owner": {
                    "name": "owner",
=======
                "title": {
                    "name": "title",
>>>>>>> 937e2ff (Fix overwritten changes.)
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
<<<<<<< HEAD
                "preferredName": {
                    "name": "preferredName",
=======
                "description": {
                    "name": "description",
>>>>>>> 937e2ff (Fix overwritten changes.)
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "houseHoldId": {
                    "name": "houseHoldId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Items": {
                    "name": "Items",
                    "isArray": true,
                    "type": {
<<<<<<< HEAD
                        "model": "HouseHoldMember"
=======
                        "model": "Item"
>>>>>>> 937e2ff (Fix overwritten changes.)
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
<<<<<<< HEAD
                            "UserProfile"
=======
                            "List"
>>>>>>> 937e2ff (Fix overwritten changes.)
                        ]
                    }
                },
                "HouseHold": {
                    "name": "HouseHold",
                    "isArray": false,
                    "type": {
                        "model": "HouseHold"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "houseHoldId"
                        ]
                    }
                },
                "Task": {
                    "name": "Task",
                    "isArray": false,
                    "type": {
                        "model": "Task"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "listTaskId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
<<<<<<< HEAD
                }
            },
            "syncable": true,
            "pluralName": "UserProfiles",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "mutations": {
                            "create": null,
                            "delete": null
                        }
                    }
=======
                },
                "listTaskId": {
                    "name": "listTaskId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Lists",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
>>>>>>> 937e2ff (Fix overwritten changes.)
                },
                {
                    "type": "key",
                    "properties": {
<<<<<<< HEAD
                        "name": "byOwner",
                        "queryField": "userProfileByOwner",
=======
                        "name": "byHouseHold",
>>>>>>> 937e2ff (Fix overwritten changes.)
                        "fields": [
                            "houseHoldId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "custom",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "Frequency": {
            "name": "Frequency",
            "values": [
                "DAILY",
                "WEEKLY",
                "MONTHLY",
                "YEARLY"
            ]
        }
    },
    "nonModels": {
        "HouseHoldDisplayInfo": {
            "name": "HouseHoldDisplayInfo",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AddUserToHouseHoldResponse": {
            "name": "AddUserToHouseHoldResponse",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "points": {
                    "name": "points",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "owner": {
                    "name": "owner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "nickname": {
                    "name": "nickname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "userProfileId": {
                    "name": "userProfileId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "houseHoldId": {
                    "name": "houseHoldId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "HouseHoldDisplayInfo": {
                    "name": "HouseHoldDisplayInfo",
                    "isArray": false,
                    "type": {
                        "nonModel": "HouseHoldDisplayInfo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "cognitoUsername": {
                    "name": "cognitoUsername",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
<<<<<<< HEAD
        },
        "HouseHoldDisplayInfo": {
            "name": "HouseHoldDisplayInfo",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
=======
>>>>>>> 937e2ff (Fix overwritten changes.)
        }
    },
    "codegenVersion": "3.4.0",
    "version": "5a1634c13a365f28614de23e281607cf"
<<<<<<< HEAD
};
=======
};
>>>>>>> 937e2ff (Fix overwritten changes.)
