import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerEventHandler = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EventHandler, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly frequency?: string | null;
  readonly sourceDate?: string | null;
  readonly Events?: (Event | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEventHandler = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EventHandler, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly frequency?: string | null;
  readonly sourceDate?: string | null;
  readonly Events: AsyncCollection<Event>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EventHandler = LazyLoading extends LazyLoadingDisabled ? EagerEventHandler : LazyEventHandler

export declare const EventHandler: (new (init: ModelInit<EventHandler>) => EventHandler) & {
  copyOf(source: EventHandler, mutator: (draft: MutableModel<EventHandler>) => MutableModel<EventHandler> | void): EventHandler;
}

type EagerEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly author?: string | null;
  readonly eventhandlerID: string;
  readonly calendarID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly author?: string | null;
  readonly eventhandlerID: string;
  readonly calendarID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}

type EagerCalendar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Calendar, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Events?: (Event | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCalendar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Calendar, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Events: AsyncCollection<Event>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Calendar = LazyLoading extends LazyLoadingDisabled ? EagerCalendar : LazyCalendar

export declare const Calendar: (new (init: ModelInit<Calendar>) => Calendar) & {
  copyOf(source: Calendar, mutator: (draft: MutableModel<Calendar>) => MutableModel<Calendar> | void): Calendar;
}

type EagerHouseHold = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HouseHold, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Lists?: (List | null)[] | null;
  readonly Calendar?: Calendar | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly houseHoldCalendarId?: string | null;
}

type LazyHouseHold = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HouseHold, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Lists: AsyncCollection<List>;
  readonly Calendar: AsyncItem<Calendar | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly houseHoldCalendarId?: string | null;
}

export declare type HouseHold = LazyLoading extends LazyLoadingDisabled ? EagerHouseHold : LazyHouseHold

export declare const HouseHold: (new (init: ModelInit<HouseHold>) => HouseHold) & {
  copyOf(source: HouseHold, mutator: (draft: MutableModel<HouseHold>) => MutableModel<HouseHold> | void): HouseHold;
}

type EagerList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<List, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly householdID: string;
  readonly Items?: (Item | null)[] | null;
  readonly EventHandler?: EventHandler | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly listEventHandlerId?: string | null;
}

type LazyList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<List, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly householdID: string;
  readonly Items: AsyncCollection<Item>;
  readonly EventHandler: AsyncItem<EventHandler | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly listEventHandlerId?: string | null;
}

export declare type List = LazyLoading extends LazyLoadingDisabled ? EagerList : LazyList

export declare const List: (new (init: ModelInit<List>) => List) & {
  copyOf(source: List, mutator: (draft: MutableModel<List>) => MutableModel<List> | void): List;
}

type EagerItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly EventHandler?: EventHandler | null;
  readonly listID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly itemEventHandlerId?: string | null;
}

type LazyItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly EventHandler: AsyncItem<EventHandler | undefined>;
  readonly listID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly itemEventHandlerId?: string | null;
}

export declare type Item = LazyLoading extends LazyLoadingDisabled ? EagerItem : LazyItem

export declare const Item: (new (init: ModelInit<Item>) => Item) & {
  copyOf(source: Item, mutator: (draft: MutableModel<Item>) => MutableModel<Item> | void): Item;
}