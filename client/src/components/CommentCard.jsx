import React from "react";

function CommentCard({email="User email", body="Comment body"}) {
  return (
    <>
      <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
              {email}
            </p>
          </div>
          
         
        </footer>
        <p className="text-gray-500 dark:text-gray-400">
          {body}
        </p>
        
      </article>
    </>
  );
}

export default CommentCard;
