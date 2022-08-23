interface IProps {
  locate: string;
}

const LocateInfo = ({ locate }: IProps) => {
  return <div>{locate}</div>;
};

export default LocateInfo;
