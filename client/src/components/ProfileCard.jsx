import React from "react";

function ProfileCard({ name, email, website, company, username }) {
  return (
    <div className=" max-w-sm">
      <div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
        <div className="relative mx-auto w-36 rounded-full">
          <img
            className="mx-auto h-auto w-full rounded-full"
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1724768627~exp=1724772227~hmac=f90971d3dfac7940b147782702c8d8dae82352fb41cd3d6a1b6d81a880509c7c&w=740"
            alt=""
          />
        </div>
        <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
          {name}
        </h1>
        <h3 className="font-lg text-semibold text-center leading-6 text-gray-600">
          {company}
        </h3>
      
        <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
          <li className="flex items-center py-3 text-sm">
            <span>Username</span>
            <span className="ml-auto">{username}</span>
          </li>
          <li className="flex items-center py-3 text-sm">
            <span>Email</span>
            <span className="ml-auto">{email}</span>
          </li>
          <li className="flex items-center py-3 text-sm">
            <span>Website</span>
            <span className="ml-auto">{website}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileCard;
