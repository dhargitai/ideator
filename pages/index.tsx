import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MainLayout from '../layouts/main'

const LinkBox = ({
  link,
  image,
  title,
  imageWidth = 350,
  imageHeight = 350,
}: {
  link: string
  image: string
  title: string
  imageWidth?: number
  imageHeight?: number
}) => {
  return (
    <a href={link} aria-label={title}>
      <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img
          className="object-cover w-full h-56 md:h-64 xl:h-80"
          src={image}
          alt=""
        />
        <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
          <p className="text-sm font-medium tracking-wide text-white">
            {title}
          </p>
        </div>
      </div>
    </a>
  )
}

const firstBox = [
  {
    link: '/',
    image: 'https://via.placeholder.com/300x200',
    title: 'Mi az az egyetlen dolog, amit ma meg kell tennem...',
  },
  {
    link:
      'https://www.indiehackers.com/post/11-marketing-channels-that-consistently-work-for-founders-8992a89a03',
    image: 'https://via.placeholder.com/300x200',
    title: '11 Channels that consistently work for founders',
  },
  {
    link: 'https://sell-saas.com/',
    image: 'https://via.placeholder.com/300x200',
    title: 'LeadPal lead management software',
  },
  {
    link:
      'https://www.indiehackers.com/post/questions-to-ask-yourself-before-starting-9813f617b3',
    image: 'https://via.placeholder.com/300x200',
    title: 'Kérdések indulás előtt',
  },
]

const secondBox = [
  {
    link: 'https://betterhumans.pub/cognitive-bias-cheat-sheet-55a472476b18',
    image: 'https://via.placeholder.com/300x200',
    title: 'Congitive cheat sheet',
  },
  {
    link: 'https://www.notion.so',
    image: 'https://via.placeholder.com/300x200',
    title: 'Startup without code',
  },
  {
    link:
      'indiehackers.com/post/how-i-made-20-pre-sales-with-no-audience-2ea98446ba',
    image: 'https://via.placeholder.com/300x200',
    title: '20 Presales with no audience',
  },
]

const boxClasses = {
  box: '',
  title: 'text-2xl font-medium',
  ul: 'grid gap-6 row-gap-5 mb-8 md:grid-cols-3 sm:row-gap-6 grid-cols-2',
  li: 'w-24',
}

export const Home = (): JSX.Element => (
  <MainLayout>
    <Head>
      <title>Ideator App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>
      <h2>What about this?</h2>
      <div>
        <h3>Sell SaaS white label leadgen software</h3>
        <a href="https://sell-saas.com/">https://sell-saas.com/</a>
      </div>
    </div>

    <div className="shadow bg-gray-100 border-1 border-gray-300 rounded-md sm:mx-4 my-2 px-5 pt-5 text-center sm:max-w-lg">
      <h2 className="text-2xl font-medium mb-3">Core values</h2>
      <ul className="flex flex-row flex-wrap gap-x-4 gap-y-3">
        {firstBox.map((idea) => (
          <li className={boxClasses.li} key={idea.link}>
            <LinkBox link={idea.link} image={idea.image} title={idea.title} />
          </li>
        ))}
      </ul>
    </div>

    <div className={boxClasses.box}>
      <h2 className={boxClasses.title}>Recently added</h2>
      <ul className={boxClasses.ul}>
        {secondBox.map((idea) => (
          <li className={boxClasses.li} key={idea.link}>
            <LinkBox link={idea.link} image={idea.image} title={idea.title} />
          </li>
        ))}
      </ul>
    </div>
  </MainLayout>
)

export default Home
