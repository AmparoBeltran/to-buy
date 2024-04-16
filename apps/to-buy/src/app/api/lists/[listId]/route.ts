import { NextRequest, NextResponse } from "next/server";
import { data } from "@/lib/data";

type RouteParams = {
  listId: string;
};

export async function GET(
  request: NextRequest,
  { params: { listId } }: { params: RouteParams }
) {
  return NextResponse.json(
    data.lists.find((list) => list.id === parseInt(listId))
  );
}

export async function PATCH(
  request: NextRequest,
  { params: { listId } }: { params: RouteParams }
) {
  const list = await request.json();
  data.lists = data.lists.map((item) => {
    if (item.id === parseInt(listId)) {
      return list;
    } else {
      return item;
    }
  });
  return new NextResponse("List updated successfully");
}

export async function DELETE(
  request: NextRequest,
  { params: { listId } }: { params: RouteParams }
) {
  data.lists = data.lists.filter((item) => item.id !== parseInt(listId));
  return new NextResponse("List deleted successfully");
}
