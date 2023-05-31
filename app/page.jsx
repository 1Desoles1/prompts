
import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover AI Prompts</h1>
      <span className="cyan_gradient text-2xl text-center">AI Powerd Prompts</span>
      <p className="desc text-center">
        AI prompts is a freely available AI tool designed for the contemporary era, enabling individuals to explore and generate imaginative prompts with the assistance of artificial intelligence.
      </p>
      <Feed />
    </section>
  )
}

export default Home