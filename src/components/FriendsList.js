import { Friend } from "./Friend";

export function FriendsList({ friends, selectedFriend, onFriendSelect }) {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            onFriendSelect={onFriendSelect}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </>
  );
}
