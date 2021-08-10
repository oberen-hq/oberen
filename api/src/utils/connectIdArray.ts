import { Attachment } from "@prisma/client";

export default function connectIdArray(arr: string[] | undefined): any {
  return { connect: arr || [].map((id) => ({ id })) };
}
