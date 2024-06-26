import { data } from "@/lib/data";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(data.lists);
}

export async function POST(request: NextRequest) {
  const list = await request.json();

  const newList = { ...list, id: Date.now() };
  data.lists.push(newList);

  return NextResponse.json(newList, { status: 201 });
}
