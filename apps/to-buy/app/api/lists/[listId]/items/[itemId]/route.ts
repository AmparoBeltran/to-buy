import { NextRequest, NextResponse } from "next/server";
import { data } from "../../../../../../lib/data";
import { Item, ListItem } from "../../../../../../lib/types";

type RouteParams = {
  listId: string;
  itemId: string;
};

// export async function GET(
//   request: NextRequest,
//   { params: { listId } }: { params: RouteParams }
// ) {
//   return NextResponse.json(
//     data.lists.find((list) => list.id === parseInt(listId))
//   );
// }

export async function PATCH(
  request: NextRequest,
  { params: { listId, itemId } }: { params: RouteParams }
) {
  const item: ListItem = await request.json();
  data.lists = data.lists.map((list) => {
    if (list.id === parseInt(listId)) {
      list.items = list.items.map((dbItem) => {
        if (dbItem.id === parseInt(itemId)) {
          return item;
        } else {
          return dbItem;
        }
      });
    }
    return list;
  });
  return new NextResponse("List updated successfully");
}

export async function DELETE(
  request: NextRequest,
  { params: { listId, itemId } }: { params: RouteParams }
) {
  data.lists = data.lists.map((list) => {
    if (list.id === parseInt(listId)) {
      list.items = list.items.filter((item) => item.id !== parseInt(itemId));
    }
    return list;
  });
  return new NextResponse("List deleted successfully");
}
