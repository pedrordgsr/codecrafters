import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        CodeCrafters
      </h1>
      <p className="mb-4">
        {`Bem-vindo ao CodeCrafters, um blog feito para quem vive e respira tecnologia e código. Nosso objetivo é inspirar, ensinar e explorar o universo da programação com tutoriais práticos, dicas úteis, discussões sobre tendências e tudo o que pode ajudar desenvolvedores a evoluírem. `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
