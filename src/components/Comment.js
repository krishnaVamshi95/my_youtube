import CommentsList from "./CommentsList";

const Comment = ({ name, text, data }) => {
  return (
    <div>
      <div className={ "flex items-center my-2 bg-slate-200 py-3 px-3 w-full"}>
        <div>
          <span className="mx-1">
            <i className="fa fa-user-circle text-2xl" aria-hidden="true"></i>
          </span>
        </div>
        <p className="font-bold mx-2">{name} : </p>
        <p> {text}</p>
      </div>
      {data && data.length > 0 && (
        <div className="flex items-center border-black border-l-2  mx-5 bg-slate-200  px-3 w-full">
          <CommentsList data={data} />
        </div>
      )}
    </div>
  );
};

export default Comment;
