// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, ChatRoom, Task, UserProfile, HouseHoldMember, EventHandler, Event, Calendar, HouseHold, Item, List, ArchivedTask } = initSchema(schema);

export {
  Message,
  ChatRoom,
  Task,
  UserProfile,
  HouseHoldMember,
  EventHandler,
  Event,
  Calendar,
  HouseHold,
  Item,
  List,
  ArchivedTask
};