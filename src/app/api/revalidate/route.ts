import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const secret = request.nextUrl.searchParams.get("secret");
    
  if(secret !==process.env.REVALIDATE_TOKEN) {
    return NextResponse.json({ status: 400, message: "Secret is wrong" }, { status: 401 });
    }

  if (!tag) {
    return NextResponse.json({ status: 400, message: "Missing Tag Params" }, { status: 400 });
  }
  revalidateTag(tag);
  return Response.json({ revalidate: true, now: Date.now() });
}
