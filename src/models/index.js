// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { EventHandler, Event, Calendar, HouseHold, List, Item } = initSchema(schema);

export {
  EventHandler,
  Event,
  Calendar,
  HouseHold,
  List,
  Item
};