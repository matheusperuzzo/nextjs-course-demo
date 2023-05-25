import { useEffect, useState } from "react";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://englishlive.ef.com/pt-br/blog/wp-content/uploads/sites/16/2016/02/City-ou-Town.jpg",
    address: "Some Address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://englishlive.ef.com/pt-br/blog/wp-content/uploads/sites/16/2016/02/City-ou-Town.jpg",
    address: "Some Address 5, 12345 Some City",
    description: "This is a second meetup",
  },
];

export default function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // send http request and get data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}
