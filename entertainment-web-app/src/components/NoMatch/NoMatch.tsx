import { EmptyScreen } from "../EmptyScreen";

export default function NoMatch() {
  return (
    <div className="flex-column-h100">
      <EmptyScreen text="No page found..." />
    </div>
  );
}
