import Feed from "@components/Feed";

const Home = () => (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
            Discover & Share
            <br className='max-md:hidden' />
            <span className='blue_gradient text-center'> Anything you are interested in</span>
        </h1>
        <p className='desc text-center'>
            D-share is an open platform where you can freely share your favorite articles and share game tips and strategies.
        </p>

        <Feed />
    </section>
);

export default Home;