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
    if (props.subrcrive && !user) {
      return authModal.onOpen()
    }

    if (props.subrcrive && !subscription) {
      return subscribeModal.onOpen();
    }

    if (props.subrcrive && user && subscription) {
      router.push(`/posts/${props.slug}`)
    }
  }

  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-white"
    >
      <div className="flex justify-between">
        <div>{props?.subrcrive && <div className="text-sm text-slate-400">プレミアム限定のアイコン</div>}</div>
        <p className="text-sm text-slate-400">{props.date}</p>
      </div>
      {props?.subrcrive ? <div
        className="cursor-pointer"
        onClick={onClick}>
        <h2 className=" text-violet-600 hover:underline mb-4">{props.title}</h2>
      </div>
      :
      <Link
          href={`/posts/${props.slug}`}
          className="cursor-pointer"
        >
          <h2 className=" text-violet-600 hover:underline mb-4">{props.title}</h2>
        </Link>
      }
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
