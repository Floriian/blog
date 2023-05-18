"use client";
import ReactMarkdown from "react-markdown";
type Props = {
  markdown: string;
};
export default function Markdown({ markdown }: Props) {
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
}
