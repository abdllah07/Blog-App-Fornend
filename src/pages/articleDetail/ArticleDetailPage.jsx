import React, { useEffect, useState } from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import { Link, useParams } from 'react-router-dom'
import SuggestedPosts from './container/SuggestedPosts'
import CommentsContainer from '../../components/comments/CommentsContainer'
import SocialShareButtons from '../../components/SocialShareButtons'
import { useQuery } from '@tanstack/react-query';
import { getAllPosts, getSinglePost } from '../../services/index/posts'
import toast from 'react-hot-toast'
import { images, stables } from '../../constants'
import { generateHTML } from '@tiptap/html'
import parse from 'html-react-parser';


// tipTap
import Paragraph from '@tiptap/extension-paragraph'
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import Italic from '@tiptap/extension-italic'
import Bold from '@tiptap/extension-bold'
import ArticleDetailSkeleton from './component/ArticleDetailSkeleton'
import ErrorMessage from '../../components/ErrorMessage'
import { useSelector } from 'react-redux'


function ArticleDetailPage() {

    const { slug } = useParams();
    const [breadCrumbsData, setBreadCrumbsData] = useState([]);
    const [ body, setBody ] = useState(null)
    const userState = useSelector((state => state.user))


    // get single post and showing 
    const { data   , status , isLoading , isError} = useQuery({
        queryKey: ['blog', slug],  // Updated to an array
        queryFn: () => getSinglePost({ slug }),
        onError: (error) => {
            toast.error('Failed to fetch the post');
            console.error('Error fetching post:', error);
        },
    });

    // get the all post and showing in the Latest Article
    const { data : postData  } = useQuery({
        queryKey: ['posts'],  // Updated to an array
        queryFn: () => getAllPosts(),
        onError: (error) => {
            toast.error('Failed to fetch the posts');
            console.error('Error fetching posts:', error);
        },
    });
    
    useEffect(() => {
        if (status === 'success') {
            setBreadCrumbsData([
                { name: 'Home', link: '/' },
                { name: 'Blog', link: '/blog' },
                { name: 'Article title', link: `/blog/${data?.slug}` },
            ]);
            setBody(parse(generateHTML(data?.body , [Bold , Italic , Paragraph , Text , Document,])))
        }
    }, [status, data]);
    


    return (
        <MainLayout>
            {
                isLoading ? (
                    <ArticleDetailSkeleton/>
                ) : isError ? <ErrorMessage message="Couldn't fetch the post detail"/> 
                :  <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
                        <article className='flex-1'>
                                <BreadCrumbs data = {breadCrumbsData}/>
                                <img 
                                className='rounded-xl w-full'
                                src={data?.photo  ? stables.UPLOAD_FOLDER_BASE_URL + data?.photo  : images.NoImage} 
                                alt={data?.title}/>
                                <div className='mt-4 flex gap-2 '>
                                    {data?.categories.map((cat) => (
                                        <Link to={`/blog?category=${cat?.name}`} className='text-primary text-sm font-roboto inline-block'>
                                                    {cat?.name}     
                                        </Link>
                                    )) }
                                </div>
                            
                                <h1 className='text-xl font-roboto font-medium mt-4 text-dark-hard'>
                                    {data?.title}
                                </h1>
            
                                <div className='mt-4 prose prose-sm sm:prose-base'>
                                        <p className='leading-7 '>
                                            {body}
                                        </p>
                                </div>
            
                                <CommentsContainer 
                                    className="mt-10" 
                                    logginedUserId= {userState?.userInfo?._id}
                                    comments = {data?.comments}
                                    postSlug={slug}
                                />
            
                        </article>
                        <div>
                            <SuggestedPosts
                                header="Latest Article" 
                                posts={postData} 
                                tags={data?.tags}  
                                className="mt-8 lg:mt-0 lg:max-w-xs" 
                            />
        
                        <div className='mt-7'>
                            <h2 className='font-roboto font-medium text-dark-hard mb-4 md:text-xl'>Share On : </h2>
                            <SocialShareButtons 
                            url= {encodeURI(
                                window.location.href
                            )} 
                            title = {encodeURIComponent(data?.title)}
                            />
                        </div>
        
                        </div>
        
                </section>
            }
        </MainLayout>
    )
}

export default ArticleDetailPage