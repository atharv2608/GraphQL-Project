import React from "react";
import CommentCard from "./CommentCard";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useScrollToTop } from "../scrollToTop";
function Comments() {
  useScrollToTop()
    const {id} = useParams()
  const query = gql`
    query GetPostComments($postId: ID!) {
      getComments(postId: $postId) {
        id
        email
        body
        postId
      }
    }`;



    const {data, loading} = useQuery(query, {
        variables: {postId: id}
    })
    
    
  return (
    <div className="bg-gray-900 min-h-screen p-10">
        <h1 className="text-indigo-500 font-bold text-2xl text-center">
              Comments
            </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
          {loading ? (
            <h1 className="text-white font-bold text-2xl text-center">
              Loading.....
            </h1>
          ) : (
            <>
              {data.getComments.map((comment, index) => (
                <CommentCard key={index} email={comment.email} body={comment.body} />
              ))}
            </>
          )}
        </div>
    </div>
  );
}

export default Comments;
