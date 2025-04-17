import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { TypeFile } from "../type";

export async function GET() {
  const listFile = await fs.readdir(process.cwd() + "\\public\\icons", "utf8");
  const data: TypeFile[] = await Promise.all(
    listFile.map(async (file) => {
      const content = await fs.readFile(
        process.cwd() + `\\public\\icons\\${file}`,
        "utf8"
      );
      return {
        name: file,
        context: content,
      };
    })
  );
  return NextResponse.json({
    data: data,
  });
}
