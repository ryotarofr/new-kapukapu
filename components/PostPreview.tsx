"use client"

import Link from "next/link";
import { useRouter } from "next/navigation"

import { PostMetadata } from "@/types/PostMetadata";
import useAuthModal from "@/hooks/useAuthModal";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";


const PostPreview = (props: PostMetadata) => {
  const authModal = useAuthModal()
  const subscribeModal = useSubscribeModal();
  const { user, subscription } = useUser()
  const router = useRouter();


  const onClick = () => {
    if (!user) {
      return authModal.onOpen()
    }

    if (!subscription) {
      return subscribeModal.onOpen();
    }

    if (user && subscription) {
      router.push(`/posts/${props.slug}`)
    }
  }
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-white"
    >
      <p className="text-sm text-slate-400">{props.date}</p>
      <div
        className="cursor-pointer"
        onClick={onClick}>
        <h2 className=" text-violet-600 hover:underline mb-4">{props.title}</h2>
      </div>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
