import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum Frequency {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
  YEARLY = "YEARLY"
}

type EagerAddUserToHouseHoldResponse = {
  readonly id?: string | null;
  readonly points?: number | null;
  readonly owner?: string | null;
  readonly nickname?: string | null;
  readonly userProfileId?: string | null;
  readonly houseHoldId?: string | null;
  readonly cognitoUsername?: string | null;
}

type LazyAddUserToHouseHoldResponse = {
  readonly id?: string | null;
  readonly points?: number | null;
  readonly owner?: string | null;
  readonly nickname?: string | null;
  readonly userProfileId?: string | null;
  readonly houseHoldId?: string | null;
  readonly cognitoUsername?: string | null;
}

export declare type AddUserToHouseHoldResponse = LazyLoading extends LazyLoadingDisabled ? EagerAddUserToHouseHoldResponse : LazyAddUserToHouseHoldResponse

export declare const AddUserToHouseHoldResponse: (new (init: ModelInit<AddUserToHouseHoldResponse>) => AddUserToHouseHoldResponse)

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message: string;
  readonly authorHouseHoldMemberId: string;
  readonly ChatRoom?: ChatRoom | null;
  readonly chatRoomId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message: string;
  readonly authorHouseHoldMemberId: string;
  readonly ChatRoom: AsyncItem<ChatRoom | undefined>;
  readonly chatRoomId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Messages?: (Message | null)[] | null;
  readonly houseHoldId: string;
  readonly HouseHold?: HouseHold | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Messages: AsyncCollection<Message>;
  readonly houseHoldId: string;
  readonly HouseHold: AsyncItem<HouseHold | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerChatRoom : LazyChatRoom

export declare const ChatRoom: (new (init: ModelInit<ChatRoom>) => ChatRoom) & {
  copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom>) => MutableModel<ChatRoom> | void): ChatRoom;
}

type EagerHouseHold = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HouseHold, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly owners: string[];
  readonly Lists?: (List | null)[] | null;
  readonly Tasks?: (Task | null)[] | null;
  readonly HouseHoldMembers?: (HouseHoldMember | null)[] | null;
  readonly Calendar?: Calendar | null;
  readonly ChatRoom?: ChatRoom | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly houseHoldCalendarId?: string | null;
  readonly houseHoldChatRoomId?: string | null;
}

type LazyHouseHold = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HouseHold, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly owners: string[];
  readonly Lists: AsyncCollection<List>;
  readonly Tasks: AsyncCollection<Task>;
  readonly HouseHoldMembers: AsyncCollection<HouseHoldMember>;
  readonly Calendar: AsyncItem<Calendar | undefined>;
  readonly ChatRoom: AsyncItem<ChatRoom | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly houseHoldCalendarId?: string | null;
  readonly houseHoldChatRoomId?: string | null;
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
  readonly title: string;
  readonly description?: string | null;
  readonly houseHoldId: string;
  readonly Items?: (Item | null)[] | null;
  readonly HouseHold?: HouseHold | null;
  readonly Task?: Task | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly listTaskId?: string | null;
}

type LazyList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<List, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly houseHoldId: string;
  readonly Items: AsyncCollection<Item>;
  readonly HouseHold: AsyncItem<HouseHold | undefined>;
  readonly Task: AsyncItem<Task | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly listTaskId?: string | null;
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
  readonly title: string;
  readonly description?: string | null;
  readonly completed?: boolean | null;
  readonly listId: string;
  readonly List?: List | null;
  readonly Task?: Task | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly itemTaskId?: string | null;
}

type LazyItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly completed?: boolean | null;
  readonly listId: string;
  readonly List: AsyncItem<List | undefined>;
  readonly Task: AsyncItem<Task | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly itemTaskId?: string | null;
}

export declare type Item = LazyLoading extends LazyLoadingDisabled ? EagerItem : LazyItem

export declare const Item: (new (init: ModelInit<Item>) => Item) & {
  copyOf(source: Item, mutator: (draft: MutableModel<Item>) => MutableModel<Item> | void): Item;
}

type EagerTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly houseHoldId: string;
  readonly foreverTask?: boolean | null;
  readonly listId?: string | null;
  readonly List?: List | null;
  readonly itemId?: string | null;
  readonly Item?: Item | null;
  readonly deleteSourceOnComplete?: boolean | null;
  readonly eventHandlerId?: string | null;
  readonly EventHandler?: EventHandler | null;
  readonly completed?: boolean | null;
  readonly pointValue?: number | null;
  readonly HouseHold?: HouseHold | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly houseHoldId: string;
  readonly foreverTask?: boolean | null;
  readonly listId?: string | null;
  readonly List: AsyncItem<List | undefined>;
  readonly itemId?: string | null;
  readonly Item: AsyncItem<Item | undefined>;
  readonly deleteSourceOnComplete?: boolean | null;
  readonly eventHandlerId?: string | null;
  readonly EventHandler: AsyncItem<EventHandler | undefined>;
  readonly completed?: boolean | null;
  readonly pointValue?: number | null;
  readonly HouseHold: AsyncItem<HouseHold | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Task = LazyLoading extends LazyLoadingDisabled ? EagerTask : LazyTask

export declare const Task: (new (init: ModelInit<Task>) => Task) & {
  copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

type EagerEventHandler = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EventHandler, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly frequency: string;
  readonly calendarId: string;
  readonly Calendar?: Calendar | null;
  readonly Events?: (Event | null)[] | null;
  readonly Task?: Task | null;
  readonly sourceDate: string;
  readonly endDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventHandlerTaskId?: string | null;
}

type LazyEventHandler = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EventHandler, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly frequency: string;
  readonly calendarId: string;
  readonly Calendar: AsyncItem<Calendar | undefined>;
  readonly Events: AsyncCollection<Event>;
  readonly Task: AsyncItem<Task | undefined>;
  readonly sourceDate: string;
  readonly endDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventHandlerTaskId?: string | null;
}

export declare type EventHandler = LazyLoading extends LazyLoadingDisabled ? EagerEventHandler : LazyEventHandler

export declare const EventHandler: (new (init: ModelInit<EventHandler>) => EventHandler) & {
  copyOf(source: EventHandler, mutator: (draft: MutableModel<EventHandler>) => MutableModel<EventHandler> | void): EventHandler;
}

type EagerCalendar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Calendar, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Events?: (Event | null)[] | null;
  readonly EventHandler?: (EventHandler | null)[] | null;
  readonly houseHoldId: string;
  readonly HouseHold?: HouseHold | null;
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
  readonly EventHandler: AsyncCollection<EventHandler>;
  readonly houseHoldId: string;
  readonly HouseHold: AsyncItem<HouseHold | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Calendar = LazyLoading extends LazyLoadingDisabled ? EagerCalendar : LazyCalendar

export declare const Calendar: (new (init: ModelInit<Calendar>) => Calendar) & {
  copyOf(source: Calendar, mutator: (draft: MutableModel<Calendar>) => MutableModel<Calendar> | void): Calendar;
}

type EagerEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly completed: boolean;
  readonly eventHandlerId: string;
  readonly calendarId: string;
  readonly EventHandler?: EventHandler | null;
  readonly Calendar?: Calendar | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly completed: boolean;
  readonly eventHandlerId: string;
  readonly calendarId: string;
  readonly EventHandler: AsyncItem<EventHandler | undefined>;
  readonly Calendar: AsyncItem<Calendar | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}

type EagerHouseHoldMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HouseHoldMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly points?: number | null;
  readonly owner: string;
  readonly userProfileId: string;
  readonly UserProfile?: UserProfile | null;
  readonly houseHoldId: string;
  readonly HouseHold?: HouseHold | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHouseHoldMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HouseHoldMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly points?: number | null;
  readonly owner: string;
  readonly userProfileId: string;
  readonly UserProfile: AsyncItem<UserProfile | undefined>;
  readonly houseHoldId: string;
  readonly HouseHold: AsyncItem<HouseHold | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type HouseHoldMember = LazyLoading extends LazyLoadingDisabled ? EagerHouseHoldMember : LazyHouseHoldMember

export declare const HouseHoldMember: (new (init: ModelInit<HouseHoldMember>) => HouseHoldMember) & {
  copyOf(source: HouseHoldMember, mutator: (draft: MutableModel<HouseHoldMember>) => MutableModel<HouseHoldMember> | void): HouseHoldMember;
}

type EagerUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner: string;
  readonly preferredName?: string | null;
  readonly HouseHoldMembers?: (HouseHoldMember | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner: string;
  readonly preferredName?: string | null;
  readonly HouseHoldMembers: AsyncCollection<HouseHoldMember>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
}
