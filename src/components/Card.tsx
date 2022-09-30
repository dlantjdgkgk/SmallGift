type TodoProps = {
  userId: number;
  id: string | number;
  title: string;
  completed: boolean;
};

const Card = ({ todo }: { todo: TodoProps }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        backgroundColor: "yellow",
      }}
    >
      {todo.title}
    </div>
  );
};

export default Card;
