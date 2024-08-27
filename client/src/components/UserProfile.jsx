import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import { useScrollToTop } from "../scrollToTop";
function UserProfile() {
 useScrollToTop()
  const { userId } = useParams();

  const query = gql`
    query GetUserDetails($userId: ID!) {
      getUserDetails(userId: $userId) {
        name
        website
        username
        company {
          name
        }
        email
      }
    }
  `;

  const { data, loading } = useQuery(query, {
    variables: { userId: userId },
  });


  return (
    <div className="bg-gray-900 min-h-screen w-full flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {loading ? (
          <h1 className="text-white font-bold text-2xl text-center">
            Loading.....
          </h1>
        ) : (
          <ProfileCard
            email={data.getUserDetails.email}
            company={data.getUserDetails.company.name}
            website={data.getUserDetails.website}
            username={data.getUserDetails.username}
            name={data.getUserDetails.name}
          />
        )}
      </div>
    </div>
  );
}

export default UserProfile;
