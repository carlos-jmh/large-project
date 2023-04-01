// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Frequency = {
  "DAILY": "DAILY",
  "WEEKLY": "WEEKLY",
  "MONTHLY": "MONTHLY",
  "YEARLY": "YEARLY"
};
<<<<<<< HEAD
const Frequency = {
  "DAILY": "DAILY",
  "WEEKLY": "WEEKLY",
  "MONTHLY": "MONTHLY",
  "YEARLY": "YEARLY"
};
=======
>>>>>>> 937e2ff (Fix overwritten changes.)

const { Message, ChatRoom, Task, UserProfile, HouseHoldMember, EventHandler, Event, Calendar, HouseHold, Item, List, HouseHoldDisplayInfo, AddUserToHouseHoldResponse } = initSchema(schema);

export {
  Message,
  ChatRoom,
<<<<<<< HEAD
  HouseHold,
  List,
  Item,
  Task,
  EventHandler,
=======
  Task,
  UserProfile,
  HouseHoldMember,
  EventHandler,
  Event,
>>>>>>> 937e2ff (Fix overwritten changes.)
  Calendar,
  HouseHold,
  Item,
  List,
  Frequency,
  HouseHoldDisplayInfo,
  AddUserToHouseHoldResponse
<<<<<<< HEAD
};
=======
};
>>>>>>> 937e2ff (Fix overwritten changes.)
