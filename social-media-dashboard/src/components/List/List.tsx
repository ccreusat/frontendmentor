import { ListProps } from "../../types/types";
import Card from "../Card/Card";

const List = ({ data, small, source }: ListProps) => {
	return data.map((item: any, index: any) => {
		return <Card key={index} item={item} source={source} small={small} />;
	});
};

export default List;
