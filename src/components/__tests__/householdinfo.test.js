import { render, screen } from "@testing-library/react";
import Householdinfo from '../householdinfo/Householdinfo';
import { houseHoldMembersByUserProfileId } from "../../graphql/queries";

test('verify household info displays correct information', () => {

    let houseHold = {
        calendarId: "002307f8-c68c-49f3-b296-6a61d16b0f5e",
        chatRoomId: "4047c772-ed21-4e94-a581-19de353ca618",
        createdAt: "2023-04-23T16:49:25.903Z",
        houseHoldCalendarId: null,
        houseHoldChatRoomId: null,
        id: "454fc5ce-b9ae-4491-9e09-751fbc3edcd9",
        name: "gabe's house 5",
        owners: ['8202e7fb-b55c-4347-930e-93d34bc791ef'],
        updatedAt: "2023-04-30T14:17:28.089Z",
        _deleted: null,
        _lastChangedAt: 1682864248121,
        _version: 12
    }

    render(<Householdinfo houseHold={houseHold} houseHoldClickHandler={() => {}} theme="light"/>);
    screen.debug();
    expect(screen.getByRole('button').id).toBe(houseHold.id);
    
    // Make sure displays correct info.
    const container = document.getElementsByTagName('span')[0];
    expect(container.textContent).toBe(houseHold.name);
})