import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => {
          // Extraímos o dia e o mês (nome abreviado em português)
          const date = new Date(post.metadata.publishedAt)
          const day = date.toLocaleString('pt-BR', { day: '2-digit' })
          const month = date.toLocaleString('pt-BR', { month: 'short' })

          return (
            <Link
              key={post.slug}
              className="flex items-center space-x-4 mb-4  hover:bg-neutral-200 hover:dark:bg-neutral-700 rounded-full	"
              href={`/blog/${post.slug}`}
            >
              {/* Bolinha com o dia e o mês */}
              <div className="flex flex-col items-center justify-center w-12 h-12 bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 rounded-full">
                <span className="text-sm font-bold">{day}</span>
                <span className="text-xs uppercase">{month}</span>
              </div>

              {/* Título do post */}
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </Link>
          )
        })}
    </div>
  )
}