import React from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import { images } from '../../constants'
import { Link } from 'react-router-dom'
import SuggestedPosts from './container/SuggestedPosts'
import CommentsContainer from '../../components/comments/CommentsContainer'
import SocialShareButtons from '../../components/SocialShareButtons'


const  breadCrumbsData = [
        {name: 'Home' , link : "/"},
        {name: 'Blog' , link : "/blog"},
        {name: 'Article title' , link : "/blog/1"},
]

const postsData = [
    {
        id: "1",
        image :images.Post1,
        title : "Help children get better education",
        createAt : "2023-01-18"
    },
    {
        id: "2",
        image :images.Post1,
        title : "Help children get better education",
        createAt : "2023-01-18"
    },
    {
        id: "3",
        image :images.Post1,
        title : "Help children get better education",
        createAt : "2023-01-18"
    },
    {
        id: "4",
        image :images.Post1,
        title : "Help children get better education",
        createAt : "2023-01-18"
    }
]

const tagsData = [
    "medical" , 
    "LifeStyle",
    "Learn",
    "Health",
    "Sports",
    "Technology",
    "Science",
    "Education",
]

function ArticleDetailPage() {
    return (
        <MainLayout>
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
            <article className='flex-1'>
                    <BreadCrumbs data = {breadCrumbsData}/>
                    <img className='rounded-xl w-full' src={images.Post1} alt="laptop" />
                    <Link to='/blog?category=selectedCategory' className='text-primary text-sm font-roboto inline-block mt-4 '>EDUCATION</Link>
                    <h1 className='text-xl font-roboto font-medium mt-4 text-dark-hard'>Help children get better education</h1>

                    <div className='mt-4 text-dark-soft'>
                        <p className='leading-7 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam eum alias, exercitationem magnam omnis id vel hic 
                            neque nihil deleniti? Dolorum cum id autem laudantium accusantium aliquam repudiandae adipisci corporis.</p>
                    </div>

                    <CommentsContainer className="mt-10" logginedUserId= "a"/>

                </article>
                <div>

                <SuggestedPosts
                header="Latest Article" 
                posts={postsData} 
                tags={tagsData}  
                className="mt-8 lg:mt-0 lg:max-w-xs" 
                />

                <div className='mt-7'>
                    <h2 className='font-roboto font-medium text-dark-hard mb-4 md:text-xl'>Share On : </h2>
                    <SocialShareButtons 
                    url= {encodeURI("https://abdllah07.github.io/Portfolio/")} 
                    title = {encodeURIComponent("Abdullah Alhasan")}
                    />
                </div>

                </div>

            </section>
        </MainLayout>
    )
}

export default ArticleDetailPage