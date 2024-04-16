import { NextRequest, NextResponse } from "next/server";
import { data } from "../../../../../lib/data";

type RouteParams = {
  listId: string;
};

// export async function GET(
//   request: NextRequest,
//   { params: { listId } }: { params: RouteParams }
// ) {
//   return NextResponse.json(
//     data.lists.find((list) => list.id === parseInt(listId))
//   );
// }

export async function POST(
  request: NextRequest,
  { params: { listId } }: { params: RouteParams }
) {
  const item = await request.json();
  data.lists = data.lists.map((list) => {
    if (list.id === parseInt(listId)) {
      list.items.push(item);
      return list;
    } else {
      return list;
    }
  });
  return new NextResponse("List updated successfully");
}
