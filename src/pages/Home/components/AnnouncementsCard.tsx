import styled from "styled-components";
import AnnouncementsImage from "../../../assets/announcements.png";
import { Card } from "../../../components/Main/Card";
import { Text } from "../../../components/Text";

interface AnnouncementCardProps {
  announcements?: string;
}

export function AnnouncementCard({ announcements }: AnnouncementCardProps) {
  return (
    <Card title="Announcements" subtitle="From personal and projects">
      {announcements ? (
        <div>{announcements}</div>
      ) : (
        <>
          <Image src={AnnouncementsImage} alt="announcements" />
          <Text variant="headingSm">No announcements found</Text>
          <Text variant="textSmRegular" color="darkGrey">
            Click to add New Announcement
          </Text>
        </>
      )}
    </Card>
  );
}

const Image = styled.img`
  width: 100px;
  height: auto;
  align-self: center;
  padding: 40px 0;
`;
