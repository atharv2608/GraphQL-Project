import { gql, useQuery } from "@apollo/client";
import Card from "./components/Card";

function App() {
  const query = gql`
    query GetAllPosts {
      getPosts {
        id
        title
        body
        userId
        user {
          username
        }
      }
    }
  `;

  const { data, loading } = useQuery(query);

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="p-5">
        <h1 className="text-3xl lg:text-5xl font-bold text-white text-center">
          All Posts
        </h1>
      </div>
      <div className="flex items-center justify-center"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
          {loading ? (
            <h1 className="text-white font-bold text-2xl text-center">
              Loading.....
            </h1>
          ) : (
            <>
              {data.getPosts.map((post, index) => (
                <Card key={index} title={post.title} body={post.body} userId={post.userId} userName={post.user.username} id={post.id}/>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
