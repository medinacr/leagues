 import Feed from '@components/Feed';

const home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Create & Manage
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Sport is an open-source sports league management tool for the modern world to create, share and track a sports league
      </p>
      <Feed />
    </section>
  )
}

export default home