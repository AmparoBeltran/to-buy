import { NextResponse } from "next/server";
//import data from ''

export async function GET(request: Request, context: any) {
  const { params } = context;
  const user = data.filter((x) => params.userId === x.id.toSring());
  return NextResponse.json({
    user,
  });
}
