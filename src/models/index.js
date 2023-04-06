// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, ChatRoom, HouseHold, List, Item, Task, EventHandler, Calendar, Event, HouseHoldMember, UserProfile, ArchivedTask } = initSchema(schema);

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
  ArchivedTask
};