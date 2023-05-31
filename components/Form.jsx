import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-center flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">{type} Descover promts</p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex-col gap-7 glassmorphism"
      >
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-900">
            Yor AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Wrate your prompt here"
            required
            className="form_textarea"
          />
        </label>
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-900">
            Tag{` `}
            <span>#product, #webdevelopment, #idea</span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 py-5 gap-4">
          <Link href='/' className="text-gray-700 text-sm">Cancel</Link>
          <button className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white" type="submit" disabled={submitting}>
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
