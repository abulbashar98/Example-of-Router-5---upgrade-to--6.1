import { useParams, useNavigate } from "react-router-dom";
export default function Post() {
  const params = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    // console.log('test')

    // navigate("/posts");
    // navigate(-1);
    // navigate(-2);
    navigate("/posts", {
      replace: true,
    });
  };

  return (
    <div>
      <h1>Post</h1>
      <p>Post id is {params.postId}</p>
      <button onClick={() => goBack()}>Back to Posts</button>
    </div>
  );
}
