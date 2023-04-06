// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Frequency = {
  "DAILY": "DAILY",
  "WEEKLY": "WEEKLY",
  "MONTHLY": "MONTHLY",
  "YEARLY": "YEARLY"
};


const { Message, ChatRoom, Task, UserProfile, HouseHoldMember, EventHandler, Event, Calendar, HouseHold, Item, List, AddUserToHouseHoldResponse } = initSchema(schema);

export {
  Message,
  ChatRoom,
  HouseHold,
  List,
  Item,
  Task,
  EventHandler,
  Calendar,
};
