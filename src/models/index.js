// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Frequency = {
  "DAILY": "DAILY",
  "WEEKLY": "WEEKLY",
  "MONTHLY": "MONTHLY",
  "YEARLY": "YEARLY"
};

const { Message, ChatRoom, HouseHold, List, Item, Task, EventHandler, Calendar, Event, HouseHoldMember, UserProfile, AddUserToHouseHoldResponse, HouseHoldDisplayInfo } = initSchema(schema);

export {
  Message,
  ChatRoom,
  HouseHold,
  List,
  Item,
  Task,
  EventHandler,
  Calendar,
  Event,
  HouseHoldMember,
  UserProfile,
  Frequency,
  AddUserToHouseHoldResponse,
  HouseHoldDisplayInfo
};