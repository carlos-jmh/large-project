import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";



type EagerArchivedTask = {
  readonly title: string;
  readonly points: number;
  readonly completedBy: string;
}

type LazyArchivedTask = {
  readonly title: string;
  readonly points: number;
  readonly completedBy: string;
}

export declare type ArchivedTask = LazyLoading extends LazyLoadingDisabled ? EagerArchivedTask : LazyArchivedTask

export declare const ArchivedTask: (new (init: ModelInit<ArchivedTask>) => ArchivedTask)

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message: string;
  readonly author: string;
  readonly owner: string;
  readonly ChatRoom?: ChatRoom | null;
  readonly chatroomID: string;
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
  readonly author: string;
  readonly owner: string;
  readonly ChatRoom: AsyncItem<ChatRoom | undefined>;
  readonly chatroomID: string;
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
  readonly owners: string[];
  readonly Messages?: (Message | null)[] | null;
  readonly HouseHold?: HouseHold | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomHouseHoldId?: string | null;
}

type LazyChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owners: string[];
  readonly Messages: AsyncCollection<Message>;
  readonly HouseHold: AsyncItem<HouseHold | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomHouseHoldId?: string | null;
}

export declare type ChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerChatRoom : LazyChatRoom

export declare const ChatRoom: (new (init: ModelInit<ChatRoom>) => ChatRoom) & {
  copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom>) => MutableModel<ChatRoom> | void): ChatRoom;
}

type EagerTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly owners: string[];
  readonly householdID: string;
  readonly foreverTask?: boolean | null;
  readonly deleteSourceOnComplete?: boolean | null;
  readonly EventHandler?: EventHandler | null;
  readonly completed?: boolean | null;
  readonly pointValue?: number | null;
  readonly HouseHold?: HouseHold | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly taskEventHandlerId?: string | null;
}

type LazyTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly owners: string[];
  readonly householdID: string;
  readonly foreverTask?: boolean | null;
  readonly deleteSourceOnComplete?: boolean | null;
  readonly EventHandler: AsyncItem<EventHandler | undefined>;
  readonly completed?: boolean | null;
  readonly pointValue?: number | null;
  readonly HouseHold: AsyncItem<HouseHold | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly taskEventHandlerId?: string | null;
}

export declare type Task = LazyLoading extends LazyLoadingDisabled ? EagerTask : LazyTask

export declare const Task: (new (init: ModelInit<Task>) => Task) & {
  copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
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

type EagerHouseHoldMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HouseHoldMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly points?: number | null;
  readonly owner: string;
  readonly UserProfile?: UserProfile | null;
  readonly userprofileID: string;
  readonly HouseHold?: HouseHold | null;
  readonly householdID: string;
  readonly completedTasks?: (ArchivedTask | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userProfileHouseHoldMembersId?: string | null;
  readonly houseHoldHouseHoldMembersId?: string | null;
}

type LazyHouseHoldMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HouseHoldMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly points?: number | null;
  readonly owner: string;
  readonly UserProfile: AsyncItem<UserProfile | undefined>;
  readonly userprofileID: string;
  readonly HouseHold: AsyncItem<HouseHold | undefined>;
  readonly householdID: string;
  readonly completedTasks?: (ArchivedTask | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userProfileHouseHoldMembersId?: string | null;
  readonly houseHoldHouseHoldMembersId?: string | null;
}

export declare type HouseHoldMember = LazyLoading extends LazyLoadingDisabled ? EagerHouseHoldMember : LazyHouseHoldMember

export declare const HouseHoldMember: (new (init: ModelInit<HouseHoldMember>) => HouseHoldMember) & {
  copyOf(source: HouseHoldMember, mutator: (draft: MutableModel<HouseHoldMember>) => MutableModel<HouseHoldMember> | void): HouseHoldMember;
}

type EagerEventHandler = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EventHandler, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly frequency: string;
  readonly owners: string[];
  readonly Events?: (Event | null)[] | null;
  readonly sourceDate: string;
  readonly endDate: string;
  readonly Task?: Task | null;
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
  readonly owners: string[];
  readonly Events: AsyncCollection<Event>;
  readonly sourceDate: string;
  readonly endDate: string;
  readonly Task: AsyncItem<Task | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventHandlerTaskId?: string | null;
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
  readonly owners: string[];
  readonly eventhandlerID: string;
  readonly calendarID: string;
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
  readonly date?: string | null;
  readonly owners: string[];
  readonly eventhandlerID: string;
  readonly calendarID: string;
  readonly EventHandler: AsyncItem<EventHandler | undefined>;
  readonly Calendar: AsyncItem<Calendar | undefined>;
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
  readonly owners: string[];
  readonly Events?: (Event | null)[] | null;
  readonly HouseHold?: HouseHold | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly calendarHouseHoldId?: string | null;
}

type LazyCalendar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Calendar, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owners: string[];
  readonly Events: AsyncCollection<Event>;
  readonly HouseHold: AsyncItem<HouseHold | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly calendarHouseHoldId?: string | null;
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

type EagerItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly owners: string[];
  readonly completed?: boolean | null;
  readonly listID: string;
  readonly Task?: Task | null;
  readonly List?: List | null;
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
  readonly owners: string[];
  readonly completed?: boolean | null;
  readonly listID: string;
  readonly Task: AsyncItem<Task | undefined>;
  readonly List: AsyncItem<List | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly itemTaskId?: string | null;
}

export declare type Item = LazyLoading extends LazyLoadingDisabled ? EagerItem : LazyItem

export declare const Item: (new (init: ModelInit<Item>) => Item) & {
  copyOf(source: Item, mutator: (draft: MutableModel<Item>) => MutableModel<Item> | void): Item;
}

type EagerList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<List, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly owners: string[];
  readonly householdID: string;
  readonly Items?: (Item | null)[] | null;
  readonly Task?: Task | null;
  readonly HouseHold?: HouseHold | null;
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
  readonly owners: string[];
  readonly householdID: string;
  readonly Items: AsyncCollection<Item>;
  readonly Task: AsyncItem<Task | undefined>;
  readonly HouseHold: AsyncItem<HouseHold | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly listTaskId?: string | null;
}

export declare type List = LazyLoading extends LazyLoadingDisabled ? EagerList : LazyList

export declare const List: (new (init: ModelInit<List>) => List) & {
  copyOf(source: List, mutator: (draft: MutableModel<List>) => MutableModel<List> | void): List;
}