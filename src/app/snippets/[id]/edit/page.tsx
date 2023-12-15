import SnippetEditForm from "@/component/snippet-edit-form";
import { db } from "@/db";
import { notFound } from "next/navigation";

type EditSnippetProps = {
  params: {
    id: string;
  };
};
export default async function EditSnippet(props: EditSnippetProps) {
  const id = props.params.id;
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(id),
    },
  });
  if (!snippet) {
    return notFound();
  }
  return <SnippetEditForm snippet={snippet} />;
}
