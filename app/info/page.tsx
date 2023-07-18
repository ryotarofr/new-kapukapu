
import getPostMetadata from '@/utils/getPostMetadata';
import Infomation from '../(site)/components/Infomation';


const Info = () => {

  const postMetadata = getPostMetadata();
  const infoPreviews = postMetadata.map((post) => (
    <Infomation key={post.slug} {...post} />
  ));
  return (
    <div className="">
      <div className="text-sm ml-2 mb-4">全てのお知らせ</div>
      <div
        className="grid grid-cols-1 xl:grid-cols-2 gap-4"
      >
        {infoPreviews}
      </div>
    </div>
  )
}

export default Info